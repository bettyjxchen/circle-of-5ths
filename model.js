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

		//this.song = new Song();
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
			this.keyboard.showScaleKeys(notes)
			this.keyboard.draw(this.gc_k)
		}
	}

	clickedKeyboard(event) {
		// Pick a key
		var key = this.keyboard.pickNote(event);
		if (key == null) {
			return;
		}

		// Found a key
		this.playNote(key, 0, 1);
	}

	// Play a pressed note
	playNote(key, startDelay, stopDelay) {
		key.setClicked(true);
		this.keyboard.draw(this.gc_k);

		// Play sound
		var noteFreq = key.getFrequency();

		var oscillator = this.audioCtx.createOscillator();
		oscillator.type = "triangle";
		oscillator.frequency.setValueAtTime(noteFreq, this.audioCtx.currentTime + startDelay); // value in hertz
		oscillator.connect(this.audioCtx.destination);
		oscillator.start();
		oscillator.stop(this.audioCtx.currentTime + stopDelay); // Stop 1 second

		// Sound ended
		var gc = this.gc_k;
		var keyboard = this.keyboard;
		oscillator.onended = function() {
			key.setClicked(false);
			keyboard.draw(gc);
		}
	}

	/*
	// Play a song
	playSong() {
		var elapsed = 0;
		for (measure in this.song.measures) {
			for (note in this.song.measures.notes) {
				var name = note.getName;
				var start = note.getStartRatio;
				var duration = note.getDurationRatio;
				findKey(note.getName)
			}

			// Next measure begins after this one ends
			elapsed += measure.duration;
		}
	}
	*/
}
