import { beethovenDemo } from "./beethovendemo.mjs"

/*
    Algorithmically generates convolver impulse response buffer
    credits: cwilso @ stackoverflow.com
    link: https://stackoverflow.com/a/22538980
*/
export const impulseResponse = ( duration, decay, reverse, audioContext ) => {
    var sampleRate = audioContext.sampleRate;
    var length = sampleRate * duration;
    var impulse = audioContext.createBuffer(2, length, sampleRate);
    var impulseL = impulse.getChannelData(0);
    var impulseR = impulse.getChannelData(1);

    if (!decay)
        decay = 2.0;
    for (var i = 0; i < length; i++){
    var n = reverse ? length - i : i;
    impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, decay);
    }
    return impulse;
}

/*
    Generates an oscillator at the given frequency and gain with the specified
    wave type for the specified duration 
*/
export const generateOscillatorPitchForDuration = (freq,gain,wave,duration,audioContext,mainVolume) => {
    /*  
        Create an oscillator node on the audio context with the
        specified wave type and frequency
    */
    const osc = new OscillatorNode(audioContext,{
        type : wave,
        frequency : freq
    })

    //Create a gain node on the audio context
    const gainStage = new GainNode(audioContext)

    //Set the value of the gain node 
    gainStage.gain.value = gain * (mainVolume / 100) //the osc gain * the main volue

    //Create an impulse response buffer for the reverb
    const impulseBuffer = impulseResponse(0.04,0.05,false,audioContext)
    
    //Create a convolver node for reverb
    const convolverStage = new ConvolverNode(audioContext)
    
    //Feed the impulse response buffer into the reverb
    convolverStage.buffer = impulseBuffer
    
    //Connect the oscillator to the reverb
    osc.connect(convolverStage)

    //Connect the reverb to the output gain stage
    convolverStage.connect(gainStage)

    //Connect the output gain stage to the master output
    gainStage.connect(audioContext.destination)

    //Start the oscillator
    osc.start(audioContext.currentTime)

    //After the specified duration stop the oscillator
    osc.stop(audioContext.currentTime + duration)
}

//Creates and returns an empty two dimmensional array of r x c
export const fillSequencerState = (r, c) => {
  const arr = new Array(r)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = beethovenDemo[i]
  }
  return arr
}

/*
    Initialize the state of the sequencer steps.
*/
export const initializeSequencerState = (rows,cols) => {

    //Initially fill the sequencer with the default beethoven sequence
    let sequencerState = fillSequencerState(rows,cols)

    //Retrieve the parent element that will contain the sequencer
    let sequencer = document.getElementById('sequencer')

    /*
        Generate a css grid value for the grid-template-columns of our sequencer parent element
        this ensures that our sequencer steps are drawn in the correct order
    */
    let sequencerFractions = new Array(cols).fill('1fr').join(' ')

    //Genrate the style for the sequencer parent element

    //set it to display as a grid
    sequencer.style.display = 'grid' 

    //assign the value we generated prior to the grid-template-colums
    sequencer.style.gridTemplateColumns = sequencerFractions 

    //give it a margin of 10px
    sequencer.style.margin = '10px'

    //give it a border radius of 30px
    sequencer.style.borderRadius = '30px'

    return sequencerState
}


/*
    Generates a step element for the sequencer
*/
export const generateStepElement = (r,c,curStepState,playhead) => {
    const step = document.createElement('button')
    step.style.borderRadius = '10px'
    step.classList.add(`step_${r}_${c}`)
    step.style.height = '40px'
    step.style.background = curStepState ? playhead == c ? 'purple' : 'red' : 'none'
    
    //Draw the bar markers
    if((c + 1) % 4 === 0){
        step.style.borderRight = '2px dashed red'
        // step.nextSibling != null ? step.nextSibling.style.borderLeft = '2px dashed red' : ()=>{}
    }else if (c  % 4 === 0){
        step.style.borderLeft = '2px dashed red'
    }

    //If the playhead is on the current step
    if(playhead === c){
        //if the current step is on give it a purple border, if not give it an orange border
        step.style.border = curStepState ? '3px groove purple' : '3px groove orange'
        
        //Give it an orange outer blur
        step.style.boxShadow = '0px 0px 10px orange'

        //If the current step is on 
    }

    //Apply box shadow to the step depending on it's state and the position of the playhead
    step.style.boxShadow = curStepState ? playhead == c ? '0px 0px 20px purple' : '0px 0px 10px hotpink' : 'none'

    return step
}

export const toggleStep = (r,c,sequencerState,drawSequencerState) => {
    //toggle the step
    sequencerState[r][c] = !sequencerState[r][c]

    //redraw the sequencer 
    drawSequencerState()
}

export const generateChannelControlButton = (chan) => {
    let newChan = document.createElement('div')
    newChan.style.border = '1px groove white'
    newChan.style.width = '100px'
    newChan.style.margin = '0px'
    newChan.style.height = '40px'
    newChan.style.position = 'absolute'
    newChan.style.left = '82%'
    newChan.style.top = chan * 40 + 60 + 'px'
    newChan.classList.add(['channel_strip'])
    newChan.innerText = `${chan + 1}`
    return newChan
}