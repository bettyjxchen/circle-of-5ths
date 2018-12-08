/*
* Assignment 11
* Betty, Daniela, Michael
* Comp86
*
* Keybobard.js
* This is the Keyboard class which has an
* array of keys. Each Key is an obj
* which has a note name, it's coords
* for the drawing of the key, as well
* as a frequency value. This value will be
* implemented in the future for sound.
* The class clicks the keys that are 
* selected in a scale and draws
*
*/

class Keyboard {
	constructor() {

		//key spacing
		var topH = 70;
		var botH = 35;

		this.keys = [];

		//A0, Lowest 3 group 
		this.keys.push(new Key("A", false, 27.5000, 0, 0, 20, topH, 0, topH, 23, botH)); // EXTRA WIDE
		this.keys.push(new Key("A#", true, 29.1352, 20, 0, 14, topH, 20, topH, 0, 0));
		this.keys.push(new Key("B", false, 30.8677, 34, 0, 13, topH, 23, topH, 24, botH));

		//C1 5-group
		this.keys.push(new Key("C", false, 32.7032, 47, 0, 14, topH, 47, topH, 23, botH));
		this.keys.push(new Key("C#", true, 34.6478, 61, 0, 14, topH, 61, topH, 0, 0));
		this.keys.push(new Key("D", false, 36.7081, 75, 0, 14, topH, 70, topH, 24, botH));
		this.keys.push(new Key("D#", true, 38.8909, 89, 0, 14, topH, 89, topH, 0, 0));
		this.keys.push(new Key("E", false, 41.2034, 103, 0, 14, topH, 94, topH, 23, botH));

		//F1
		this.keys.push(new Key("F", false, 43.6535, 117, 0, 13, topH, 117, topH, 24, botH));
		this.keys.push(new Key("F#", true, 46.2493, 130, 0, 14, topH, 130, topH, 0, 0));
		this.keys.push(new Key("G", false, 48.9994, 144, 0, 13, topH, 141, topH, 23, botH));
		this.keys.push(new Key("G#", true, 51.9131, 157, 0, 14, topH, 157, topH, 0, 0));
		this.keys.push(new Key("A", false, 55.0000, 171, 0, 13, topH, 164, topH, 23, botH));
		this.keys.push(new Key("A#", true, 58.2705, 184, 0, 14, topH, 184, topH, 0, 0));
		this.keys.push(new Key("B", false, 61.7354, 198, 0, 13, topH, 187, topH, 24, botH));
	}

	//draw all keys
	draw(gc) {
		this.keys.forEach(function(key) {
			key.draw(gc);
		});
	}

	//clicks keys in selected scale of notes
	clickKeys(notes) {

		this.keys.forEach(function(key) {
			if (notes.includes(key.letter)) {
				key.setClicked(true);
			} else {
				key.setClicked(false);
			}
		});
	}
}