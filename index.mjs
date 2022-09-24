import { beethovenDemoChains } from './beethovendemo.mjs'

import { 
    generateOscillatorPitchForDuration,
    initializeSequencerState,
    generateStepElement,
    toggleStep,
    generateChannelControlButton
} from './utils.mjs'

/*     Global Variables       */

//represents the number of rows and columns in our sequencer
let rows = 4;
let cols = 120;

//represents the state of the steps in our sequencer
let sequencerState

//represents the current beats per minute of the sequencer
let bpm = 600;

//represents the timer that will help us keep track of the playhead
let intervalClock 


//represents the current position of the playhead
let playhead = -1;

//represents wether or not our sequencer is paused
let paused = true

//represents the currently selected channel
let selected_channel = 0

//represents the controls available for the currently selected channel
let channel_selection_controls = []

//represents the effects chains for all the channels
let channels_chains = beethovenDemoChains

//represents the window's audio context
let audioContext

//represents the main output volume of the sequencer
let mainVolume = 50

/*      End Global Variables    */



/*      Elements                */

//play/pause button element
let pausePlayBtn = document.getElementById('pauseplay')

//channels parent container element
let channels = document.getElementsByClassName('channels')[0]

//container for placing channel controls
let channelControlsContainer = document.getElementsByClassName('channel_controls')[0]

//main volume slider element
let mainVolumeSliderElement = document.getElementById('main_volume_slider')


/*      End Elements            */


//Initialize the sequencer state
sequencerState = initializeSequencerState(rows,cols)


// SEQUENCER STEPS CONTROLLER


// Draw the sequencer based on the sequencerState
let drawSequencerState = () => {
	try{
        //clear the sequencer element so we can draw it again
		sequencer.innerHTML = ''

        //iterate through the sequencer state
		for(let r = 0; r < rows; ++r){ //step through each row of the sequencer state	
            for(let c = 0; c < cols; ++c){ //step through each column of the sequencer state  
                //get the state of the current step on/off
                let curStepState = sequencerState[r][c] || false

                /*
                    generate a step element based on the state of the step, 
                    it's position and the position of the playhead
                */
                let step = generateStepElement(r,c,curStepState,playhead)
                
				if(playhead == c){ //if the playhead is on the current column
					if(channels_chains[r]){ //If we have an effect chain for this channel
						if(curStepState == true){ //and the state of the current step in the channel is on
							//Get the desired frequency value of the oscillator (0th item in the chain)
                            let f = channels_chains[r][0].freq 

                            //Get the desired gain value for the oscillator
							let g = channels_chains[r][0].gain

                            //Get the desired wave type for the oscillator
							let w = channels_chains[r][0].wave

                            //Set the duration to 0.5 TODO: Fix this by calculating based on BPM value
							let d = 0.5

                            //Get wether the oscillator is enabled or not
							let en = channels_chains[r][0].enabled

							if(en){ //Only if the oscillator is enabled
								generateOscillatorPitchForDuration(f,g,w,d,audioContext,mainVolume) //Utils.mjs
							}
						}
					}
				}

				//Listen for toggle event
				step.onclick = (e) => toggleStep(r,c,sequencerState,drawSequencerState)

                //add the completed step to the sequencer
				sequencer.appendChild(step)
			}
		}
	}catch(err){ //Catch any errors
		console.error(err) //And log them to the console
	}
}

//Handle clicks on the Play / Pause button
pausePlayBtn.onclick = (e) => {
    //if there's no audio context present 
	if(!audioContext){
        //create a new audio context on the window
		audioContext = new window.AudioContext()

        //generate the effect chains for the channels
		generateChannelChains()

        //draw the selected channel controls
		drawSelectedChannelControls()
	}

    //toggle the paused global state variable
	paused = !paused

	if(paused){ //if the current state is paused
		e.target.classList.add('play') //change the button to look like a play button
		e.target.classList.toggle('pause') //and remove the pause button look
	}else{ //otherwise
		e.target.classList.add('pause') //change the button to look like a pause button
		e.target.classList.toggle('play') //and remove the play button look
	}
}

const initializeBPMControls = () => {
    //get the element for the BPM slider
    let bpmSlider = document.getElementById('bpm_slider')

    //set the style of the bpm slider
    //set the slider's background to red
    bpmSlider.style.background = 'red'

    //assign the value of the slider to the variable above
    bpmSlider.value = bpm

    // Listen for BPM changes
    bpmSlider.onchange = (e) => {
        bpm = e.target.value
        document.getElementById('bpm_value').innerText = bpm
        clearInterval(intervalClock)
        animatePlayhead()
    }
}

//Animate the playhead movement across the sequencer steps
const animatePlayhead = () => {
	let min = 1000 * 60 //1s * 60 = 1min
	let timePerStep = min / bpm //Calculate the time per "beat" / min
	intervalClock = setInterval(async _=>{ //Set the clock to fire in in interval
		if(!paused){ //If the sequencer is not paused
			if(playhead < cols - 1){
				//next step
				playhead++
				playheadTracker.value = playhead
			}else{	
				//return to step 1
				playhead = 0
			}
			// drawVigoDaw()
			drawSequencerState()
		}
	},timePerStep)
}

//END SEQUENCER CONTROLLER


// CHANNELS CODE


const initializeChannelSelectionControls = () => {
    //set the channels container position to relative
    channels.style.position = 'relative'

    //iterate through each available channel
    for(let chan = 0; chan < rows; chan++){
        //create a new element for the channel
        let chanSelectorButton = generateChannelControlButton(chan)

        //if the selected channel is the current channel
        if(selected_channel === chan){
            //set it's background to orange to indicate it's selected
            chanSelectorButton.style.background = 'orange' 
        }

        //when the channel selector button is clicked
        chanSelectorButton.onclick = () => {
            channel_selection_controls.forEach(curSlectionControl=>{ //iterate through the selection controls
                if(curSlectionControl != chanSelectorButton){ //if the control is not the current control
                    curSlectionControl.style.background = 'black'; //set it's background to black
                }
            })

            //set the current selector button's background to orange
            chanSelectorButton.style.background = 'orange'
            selected_channel = chan
            drawSelectedChannelControls()
    
        }
        channel_selection_controls.push(chanSelectorButton)
        channels.appendChild(chanSelectorButton)
    }
}

//Initialize the channel selection buttons
initializeChannelSelectionControls()


//Generate channel audio processing chain

//Model for chain stage
class OscillatorStage{
	constructor(wave,freq,gain){
		this.type = 'osc'
		this.wave = wave
		this.gain = gain
		this.freq = freq
		this.enabled = false
	}
}

class GainStage{
	constructor(gain){
		this.type = 'gain'
		this.gain = gain
	}
}


let generateChannelChains = () => {
	if(!audioContext) audioContext = new AudioContext()

	for(let channel_chain = 0; channel_chain < rows;channel_chain++){
		// console.log("generating oscillator and effects chain for channel " + channel_chain)

		let currentChain = []

		//Create the first oscillator stage
		const osc1 = new OscillatorStage('sine',100,0.5)

		//Add the first oscillator stage to the chain
		currentChain.push(osc1)

		//Create the second oscillator stage
		const osc2 = new OscillatorStage('square',100,0.5)

		//Add the second oscillator stage to the chain
		currentChain.push(osc2)

		//Add the chain to the channel chains
		channels_chains.push(currentChain)

		// console.log("chain Generated:")
		// console.log(currentChain)
	}
	
	//Draw the controls for the selected channel
	// drawSelectedChannelControls()
}

let playheadTracker;
const drawPlayheadTracker = () => {
	//Create a range input that will go between 0 and cols
	playheadTracker = document.createElement('input')
	playheadTracker.type = 'range'
	playheadTracker.min = -1
	playheadTracker.max = cols
	playheadTracker.value = -1
	playheadTracker.classList.add('playhead_tracker')
	playheadTracker.onchange = (e) => {
		//Move the playhead to the new position
		playhead = e.target.value
		// drawSequencerState()
	}

	sequencer.parentElement.appendChild(playheadTracker)
}


const drawSelectedChannelControls = () => {
	if(channels_chains.length === 0){
		generateChannelChains()
	}
	// console.log("drawing channel controls for channel " + Number(selected_channel + 1))
	// console.log(channels_chains)
	if(channels_chains.length == 0) return
	let currentChain = channels_chains[selected_channel]
	// console.log("Current Chain:")
	// console.log(currentChain)
	
	const addOscillatorWaveSelectionOptions = (oscillatorWaveSelectElement,index) => {
		//Add a sine option to the select
		let sineOption = document.createElement('option')
		sineOption.selected = channels_chains[selected_channel][index].wave == 'sine' ? true : false
		sineOption.value = 'sine'
		sineOption.text = 'sine'
		oscillatorWaveSelectElement.appendChild(sineOption)

		//Add a square option to the select
		let squareOption = document.createElement('option')
		squareOption.selected = channels_chains[selected_channel][index].wave == 'square'
		squareOption.value = 'square'
		squareOption.text = 'square'
		oscillatorWaveSelectElement.appendChild(squareOption)

		//Add a triangle option to the select
		let triangleOption = document.createElement('option')
		triangleOption.selected = channels_chains[selected_channel][index].wave == 'triangle'
		triangleOption.value = 'triangle'
		triangleOption.text = 'triangle'
		oscillatorWaveSelectElement.appendChild(triangleOption)

		//Listen for changes in the wave type selection
		oscillatorWaveSelectElement.onchange = (e) => {
			channels_chains[selected_channel][index].wave = e.target.value
		}
	}

	const drawLinkedOscillator = (index) => {
		//Create the oscillator container element
		let oscillatorContainerElement = document.createElement('div')
		
		//Create the oscillator wave type type selector
		let oscillatorWaveSelectElement = document.createElement('select')

		//Draw the wave selector
		addOscillatorWaveSelectionOptions(oscillatorWaveSelectElement,index)
		
		//Create the oscillator frequency slider control
		let oscillatorFrequencySliderElement = document.createElement('input')
		oscillatorFrequencySliderElement.type = 'range'
		oscillatorFrequencySliderElement.min = 80 //Min 80 Hz
		oscillatorFrequencySliderElement.max = 5000 //5 KHz

		//Initial value
		oscillatorFrequencySliderElement.value = channels_chains[selected_channel][index].freq

		//Add the frequency label
		let oscillatorFrequencyDisplay = document.createElement("input")
		oscillatorFrequencyDisplay.placeholder = 'Freq'
		oscillatorFrequencyDisplay.value = `${channels_chains[selected_channel][index].freq || 80} Hz`
		oscillatorFrequencyDisplay.style.color = 'black'
		
		//Listen for oscillator frequency changes
		oscillatorFrequencySliderElement.onchange = (e) => {
			channels_chains[selected_channel][index].freq = Number(e.target.value) || 80
			oscillatorFrequencyDisplay.value = e.target.value > 1000 ? channels_chains[selected_channel][index].freq / 1000 + 'kHz' : channels_chains[selected_channel][index].freq + 'Hz'
		}

		oscillatorFrequencyDisplay.onchange = (e) => {
			if(e.target.value > 1000){
				alert("Max frequency is 1 kHz")
				return
			}
			if(e.target.value < 80){
				alert("Minimum frequency is 80 Hz")
				return
			}

			oscillatorFrequencySliderElement.value = Number(e.target.value)
			channels_chains[selected_channel][index].freq = Number(e.target.value)
		}

		//Create oscillator gain control
		let oscillatorGainSliderElement = document.createElement('input')
		oscillatorGainSliderElement.type = 'range'
		oscillatorGainSliderElement.min = 0;
		oscillatorGainSliderElement.max = 100;
		oscillatorGainSliderElement.value = channels_chains[selected_channel][index].gain * 100
		oscillatorGainSliderElement.onchange = (e) => {
			channels_chains[selected_channel][index].gain = Number(e.target.value) / 100 || 0.5
		}

		//Create the oscillator enable/disable control
		let oscillatorEnableDisableElement = document.createElement('input')
		oscillatorEnableDisableElement.type = 'checkbox'
		oscillatorEnableDisableElement.checked = channels_chains[selected_channel][index].enabled
		oscillatorEnableDisableElement.onchange = (e) => {
			let endis = e.target.checked
			channels_chains[selected_channel][index].enabled = endis
		}


		//Add the oscillator wave select element to the container
		oscillatorContainerElement.appendChild(oscillatorEnableDisableElement)
		oscillatorContainerElement.appendChild(oscillatorWaveSelectElement)
		oscillatorContainerElement.appendChild(oscillatorFrequencySliderElement)
		oscillatorContainerElement.appendChild(oscillatorFrequencyDisplay)
		oscillatorContainerElement.appendChild(oscillatorGainSliderElement)

		//Position oscillator container element
		oscillatorContainerElement.style.position = 'absolute'
		oscillatorContainerElement.style.left = '60px'
		oscillatorContainerElement.style.top = (40 * index) + 20 + 'px'


		channelControlsContainer.innerHTML = ''
		channelControlsContainer.appendChild(oscillatorContainerElement)

	}


	//Draw oscillator one
	drawLinkedOscillator(0)
}

/*
    Initializes the slider for changing the main output volume
*/
const initializeMainVolumeControl = () => {
    //set the initial value of the main volume slider
    mainVolumeSliderElement.value = mainVolume 

    //listen for changes on the main volume slider
    mainVolumeSliderElement.onchange = (e) => {

        //and update the global main volume variable accordingly
        mainVolume = e.target.value 
    }
}

//initialize the main volumne control slider
initializeMainVolumeControl()

//draw the sequencer
drawSequencerState()

//initialize beats per minute slider control
initializeBPMControls()

//draw selected channel controls
drawSelectedChannelControls()

//draw playhead tracker slider
drawPlayheadTracker()

//begin animating the playhead
animatePlayhead()


