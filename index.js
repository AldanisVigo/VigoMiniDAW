
let rows = 12;
let cols = 16;
let sequencerState = Array(rows).fill([])

//Creates and returns an empty two dimmensional array of r x c
const fillSequencerState = (r, c) => {
  const arr = new Array(r)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(c)
  }
  return arr
}


//Initially fill the sequencer with an empty state
sequencerState = fillSequencerState(rows,cols)

let sequencer = document.getElementById('sequencer');

sequencer.style.display = 'grid'
sequencer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr';
sequencer.style.margin = '10px'
sequencer.style.borderRadius = '30px'


let bpmSlider = document.getElementById('bpm_slider')
bpmSlider.style.background = 'red'

let bpm = 90;
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
		drawVigoDaw()
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
				if((c + 1) % 4 === 0 && c != 15){
					step.style.borderRight = '2px dashed red'
				}else if (c === 4 || c === 8 || c === 12){
					step.style.borderLeft = '2px dashed red'
				}

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
let paused = false
let playhead = 0;
let pausePlayBtn = document.getElementById('pauseplay')

//Handle clicks on the Play / Pause button
pausePlayBtn.onclick = (e) => {
	console.log("Paused:" + paused)
	paused = !paused
	if(paused){
		e.target.innerText = 'PLAY'
	}else{
		e.target.innerText = 'PAUSE'
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
			}else{	
				//return to step 1
				playhead = 0
			}
			drawVigoDaw()
		}
	},timePerStep)
}

// END SEQUENCER CODE


const drawVigoDaw = () => {
	//Initial Sequencer Draw
	drawSequencerState()
}






//Begin animating the playhead
animatePlayhead()



