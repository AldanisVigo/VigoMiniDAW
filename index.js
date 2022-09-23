let beethovenDemo = [
    [
        false,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        false,
        false,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null
    ],
    [
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        false,
        false,
        null,
        false,
        false,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        false,
        false,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        false,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ],
    [
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        false,
        null,
        null,
        null,
        true,
        null,
        false,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        true,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
    ]
]

let rows = 4;
let cols = 120;
let sequencerState = Array(rows).fill([])

//Creates and returns an empty two dimmensional array of r x c
const fillSequencerState = (r, c) => {
  const arr = new Array(r)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = beethovenDemo[i]
  }
  return arr
}


//Initially fill the sequencer with an empty state
// sequencerState = fillSequencerState(rows,cols)
sequencerState = fillSequencerState(rows,cols)

let sequencer = document.getElementById('sequencer');
let sequencerFractions = new Array(cols).fill('1fr').join(' ')
console.log(sequencerFractions)
sequencer.style.display = 'grid'
sequencer.style.gridTemplateColumns = sequencerFractions
sequencer.style.margin = '10px'
sequencer.style.borderRadius = '30px'


let bpmSlider = document.getElementById('bpm_slider')
bpmSlider.style.background = 'red'

let bpm = 260;
bpmSlider.value = bpm



// Listen for BPM changes
bpmSlider.onchange = (e) => {
	bpm = e.target.value
	document.getElementById('bpm_value').innerText = bpm
	clearInterval(intervalClock)
	animatePlayhead()
}


// SEQUENCER CODE

const toggleStep = (r,c) => {
	try{
		console.log(`Settting step at ${r},${c} to ${!sequencerState[r][c]}`)
		sequencerState[r][c] = !sequencerState[r][c]
		drawSequencerState()
		// drawVigoDaw()
		// drawSequencerState()
	}catch(err){
		console.error(err)
	}
}

// Draw the sequencer based on the sequencerState
let drawSequencerState = () => {
	try{
		sequencer.innerHTML = ''
		for(let r = 0; r < rows; ++r){
			for(let c = 0; c < cols; ++c){
				let curStepState = sequencerState[r][c] || false
				const step = document.createElement('button')
				step.style.borderRadius = '10px'
				step.classList.add(`step_${r}_${c}`)
				step.style.height = '40px'
				step.style.background = curStepState ? playhead == c ? 'purple' : 'red' : 'none'
				

				if(playhead == c){
					//Play this steps associated audio chain
					// let min = 1000 * 60 //1s * 60 = 1min
					// let timePerStep = min / bpm //Calculate the time per "beat" / min

					/*
						Algorithmically generates convolver impulse response buffer
						credits: cwilso @ stackoverflow.com
						link: https://stackoverflow.com/a/22538980
					*/
					function impulseResponse( duration, decay, reverse ) {
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

					if(channels_chains[r]){
						const generateOscillatorPitchForDuration = (freq,gain,wave,duration) => {
							const osc = new OscillatorNode(audioContext,{
								type : wave,
								frequency : freq
							})
							const gainStage = new GainNode(audioContext)
							gainStage.gain.value = gain //10%

							// osc.connect(gainStage)
							//Create an impulse response buffer for the reverb
							const impulseBuffer = impulseResponse(0.04,0.05,false)
							
							//Create the reverb
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

							//After duration sto the oscillator
							osc.stop(audioContext.currentTime + duration)
						}

						if(curStepState == true){
							let f = channels_chains[r][0].freq
							let g = channels_chains[r][0].gain
							let w = channels_chains[r][0].wave
							let d = 0.5
							generateOscillatorPitchForDuration(f,g,w,d)
						}
					}
				}

				//Draw the bar markers
				if((c + 1) % 4 === 0){
					step.style.borderRight = '2px dashed red'
					// step.nextSibling != null ? step.nextSibling.style.borderLeft = '2px dashed red' : ()=>{}
				}else if (c  % 4 === 0){
					step.style.borderLeft = '2px dashed red'
				}

				//Listen for toggle event
				step.onclick = (e) => toggleStep(r,c)

				sequencer.appendChild(step)
				if(playhead === c){
					step.style.border = curStepState ? '3px groove purple' : '3px groove orange'
					step.style.boxShadow = '0px 0px 10px orange'
				}

				step.style.boxShadow = curStepState ? playhead == c ? '0px 0px 20px purple' : '0px 0px 10px hotpink' : 'none'

			}
		}
	}catch(err){
		console.error(err)
	}
}

//Variables to keep track of sequencer state
let intervalClock
let paused = true
let playhead = 0;
let pausePlayBtn = document.getElementById('pauseplay')

//Handle clicks on the Play / Pause button
pausePlayBtn.onclick = (e) => {
	if(!audioContext){
		audioContext = new window.AudioContext()
		generateChannelChains()
		drawSelectedChannelControls()
	}

	paused = !paused
	if(paused){
		e.target.classList.add('play')
		e.target.classList.toggle('pause')
	}else{
		e.target.classList.add('pause')
		e.target.classList.toggle('play')
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

// END SEQUENCER CODE




// CHANNELS CODE
let channels = document.getElementsByClassName('channels')[0]
channels.style.position = 'relative'
let selected_channel = 0;
let channel_selection_controls = []
for(let chan = 0; chan < rows; chan++){
	let newChan = document.createElement('div')
	newChan.style.border = '1px groove white'
	newChan.style.width = '100px'
	newChan.style.margin = '0px'
	newChan.style.height = '40px'
	// newChan.style.background = 'white'
	newChan.style.position = 'absolute'
	newChan.style.left = '82%'
	newChan.style.top = chan * 40 + 50 + 'px'
	if(selected_channel === chan){
		newChan.style.background = 'orange'
		// drawSelectedChannelControls()
	}
	newChan.classList.add(['channel_strip'])
	// newChan.style.content = `${chan++}`
	newChan.innerText = `${chan + 1}`
	newChan.onclick = () => {
		console.log("Switching to channel " + chan)
		channel_selection_controls.forEach(chan=>{
			if(chan != newChan){
				chan.style.background = 'black';
				// currentChain = channels_chains[chan]
			}
		})
		newChan.style.background = 'orange'
		// console.log("Selecting channel " + Number(chan + 1))
		selected_channel = chan
		drawSelectedChannelControls()
 
	}

	channel_selection_controls.push(newChan)
	channels.appendChild(newChan)
}

let channelControlsContainer = document.getElementsByClassName('channel_controls')[0]

//Generate channel audio processing chain

//Audio Context needed to make the chain
let audioContext;
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

let beethovenDemoChains = [
    [
        {
            "type": "osc",
            "wave": "sine",
            "gain": 0.5,
            "freq": 2376,
            "enabled": false
        },
        {
            "type": "osc",
            "wave": "square",
            "gain": 0.5,
            "freq": 100,
            "enabled": false
        }
    ],
    [
        {
            "type": "osc",
            "wave": "sine",
            "gain": 0.5,
            "freq": 1615,
            "enabled": false
        },
        {
            "type": "osc",
            "wave": "square",
            "gain": 0.5,
            "freq": 100,
            "enabled": false
        }
    ],
    [
        {
            "type": "osc",
            "wave": "sine",
            "gain": 0.5,
            "freq": 1936,
            "enabled": false
        },
        {
            "type": "osc",
            "wave": "square",
            "gain": 0.5,
            "freq": 100,
            "enabled": false
        }
    ],
    [
        {
            "type": "osc",
            "wave": "sine",
            "gain": 0.5,
            "freq": 636,
            "enabled": false
        },
        {
            "type": "osc",
            "wave": "square",
            "gain": 0.5,
            "freq": 100,
            "enabled": false
        }
    ]
]

let channels_chains = beethovenDemoChains

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
	playheadTracker.min = 0
	playheadTracker.max = cols
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
			// console.log(channels_chains)
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

			// console.log(channels_chains)
		}

		//Create oscillator gain control
		let oscillatorGainSliderElement = document.createElement('input')
		oscillatorGainSliderElement.type = 'range'
		oscillatorGainSliderElement.min = 0;
		oscillatorGainSliderElement.max = 100;
		oscillatorGainSliderElement.value = channels_chains[selected_channel][index].gain * 100
		oscillatorGainSliderElement.onchange = (e) => {
			channels_chains[selected_channel][index].gain = Number(e.target.value) / 100 || 0.5
			// console.log(channels_chains)
		}


		//Add the oscillator wave select element to the container
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
	
	//Draw oscillator two
	// drawLinkedOscillator(1)
}




//END CHANNELS CODE
//Generate channel chains
generateChannelChains()


//Draw the sequencer
drawSequencerState()


//Draw selected channel controls
drawSelectedChannelControls()

//Draw playhead tracker
drawPlayheadTracker()

//Begin animating the playhead
animatePlayhead()


