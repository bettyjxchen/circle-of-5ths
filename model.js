/*
* Assignment 11
* Betty, Daniela, Michael
* Comp86
*
* model.js
* This is the model which manages the
* keyboard object, and has scales which
* holds data about all the scales and its
* notes relating to a scale.
* model calls keyboard to show a certain
* scale represented by highlighting the keys
*
*/

class Model {
	constructor() {
		//create graphics context
		var k = document.getElementById("keyboard");
		this.gc_k = k.getContext("2d");
		
		// create web audio api context
		this.audioCtx = new (window.AudioContext || window.webkitAudioContext)();


		//objects
		this.scales = new Scales();
		this.keyboard = new Keyboard();
		this.keyboard.draw(this.gc_k);
	}

	//shows scale on keyboard
	showScale(scaleName) {

		//get Scale notes object
		var notes = this.scales.getNotes(scaleName)

		//if not a valid scale
		if (notes.length == 0) {
			final_span.innerHTML = "Not a valid scale."
		} else {
			//clicks keys in notes
			this.keyboard.clickKeys(notes)
			this.keyboard.draw(this.gc_k)
		}
	}

	playNote(event) {
		// create Oscillator node
		var oscillator = this.audioCtx.createOscillator();

		var x = event.offsetX;
		var y = event.offsetY;
		oscillator.type = 'square';
		oscillator.frequency.setValueAtTime(this.keyboard.playNote(noteName), this.audioCtx.currentTime); // value in hertz
		oscillator.connect(this.audioCtx.destination);
		oscillator.start();
	}
}
