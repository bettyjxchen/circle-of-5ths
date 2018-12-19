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

		// A0, Lowest 3 group
		this.keys.push(new Key("A", 0, false, 27.5000, 0, 0, 20, topH, 0, topH, 23, botH)); // EXTRA WIDE
		this.keys.push(new Key("A#", 0, true, 29.1352, 20, 0, 14, topH, 20, topH, 0, 0));
		this.keys.push(new Key("B", 0, false, 30.8677, 34, 0, 13, topH, 23, topH, 24, botH));

		// C1 5-group
		this.keys.push(new Key("C", 1, false, 32.7032, 47, 0, 14, topH, 47, topH, 23, botH));
		this.keys.push(new Key("C#", 1, true, 34.6478, 61, 0, 14, topH, 61, topH, 0, 0));
		this.keys.push(new Key("D", 1, false, 36.7081, 75, 0, 14, topH, 70, topH, 24, botH));
		this.keys.push(new Key("D#", 1, true, 38.8909, 89, 0, 14, topH, 89, topH, 0, 0));
		this.keys.push(new Key("E", 1, false, 41.2034, 103, 0, 14, topH, 94, topH, 23, botH));

		// F1
		this.keys.push(new Key("F", 1, false, 43.6535, 117, 0, 13, topH, 117, topH, 24, botH));
		this.keys.push(new Key("F#", 1, true, 46.2493, 130, 0, 14, topH, 130, topH, 0, 0));
		this.keys.push(new Key("G", 1, false, 48.9994, 144, 0, 13, topH, 141, topH, 23, botH));
		this.keys.push(new Key("G#", 1, true, 51.9131, 157, 0, 14, topH, 157, topH, 0, 0));
		this.keys.push(new Key("A", 1, false, 55.0000, 171, 0, 13, topH, 164, topH, 23, botH));
		this.keys.push(new Key("A#", 1, true, 58.2705, 184, 0, 14, topH, 184, topH, 0, 0));
		this.keys.push(new Key("B", 1, false, 61.7354, 198, 0, 13, topH, 187, topH, 24, botH));

		// C2
		this.keys.push(new Key("C", 2, false, 65.4064, 211, 0, 14, topH, 211, topH, 23, botH));
		this.keys.push(new Key("C#", 2, true, 69.2957, 225, 0, 14, topH, 225, topH, 0, 0));
		this.keys.push(new Key("D", 2, false, 73.4162, 239, 0, 14, topH, 234, topH, 24, botH));
		this.keys.push(new Key("D#", 2, true, 77.7817, 253, 0, 14, topH, 253, topH, 0, 0));
		this.keys.push(new Key("E", 2, false, 82.4069, 267, 0, 14, topH, 258, topH, 23, botH));

		// F2
		this.keys.push(new Key("F", 2, false, 87.3071, 281, 0, 13, topH, 281, topH, 24, botH));
		this.keys.push(new Key("F#", 2, true, 92.4986, 294, 0, 14, topH, 294, topH, 0, 0));
		this.keys.push(new Key("G", 2, false, 97.9989, 308, 0, 13, topH, 305, topH, 23, botH));
		this.keys.push(new Key("G#", 2, true, 103.826, 321, 0, 14, topH, 321, topH, 0, 0));
		this.keys.push(new Key("A", 2, false, 110.000, 335, 0, 13, topH, 328, topH, 23, botH));
		this.keys.push(new Key("A#", 2, true, 116.541, 348, 0, 14, topH, 348, topH, 0, 0));
		this.keys.push(new Key("B", 2, false, 123.471, 362, 0, 13, topH, 351, topH, 24, botH));

		// C3
		this.keys.push(new Key("C", 3, false, 130.813, 375, 0, 14, topH, 375, topH, 23, botH));
		this.keys.push(new Key("C#", 3, true, 138.591, 389, 0, 14, topH, 389, topH, 0, 0));
		this.keys.push(new Key("D", 3, false, 146.832, 403, 0, 14, topH, 398, topH, 24, botH));
		this.keys.push(new Key("D#", 3, true, 155.563, 417, 0, 14, topH, 417, topH, 0, 0));
		this.keys.push(new Key("E", 3, false, 164.814, 431, 0, 14, topH, 422, topH, 23, botH));

		// F3
		this.keys.push(new Key("F", 3, false, 174.614, 445, 0, 13, topH, 445, topH, 24, botH));
		this.keys.push(new Key("F#", 3, true, 184.997, 458, 0, 14, topH, 458, topH, 0, 0));
		this.keys.push(new Key("G", 3, false, 195.998, 472, 0, 13, topH, 469, topH, 23, botH));
		this.keys.push(new Key("G#", 3, true, 207.652, 485, 0, 14, topH, 485, topH, 0, 0));
		this.keys.push(new Key("A", 3, false, 220.000, 499, 0, 13, topH, 492, topH, 23, botH));
		this.keys.push(new Key("A#", 3, true, 233.082, 512, 0, 14, topH, 512, topH, 0, 0));
		this.keys.push(new Key("B", 3, false, 246.942, 526, 0, 13, topH, 515, topH, 24, botH));

		// C4
		this.keys.push(new Key("C", 4, false, 261.626, 539, 0, 14, topH, 539, topH, 23, botH));
		this.keys.push(new Key("C#", 4, true, 277.183, 553, 0, 14, topH, 553, topH, 0, 0));
		this.keys.push(new Key("D", 4, false, 293.665, 567, 0, 14, topH, 562, topH, 24, botH));
		this.keys.push(new Key("D#", 4, true, 311.127, 581, 0, 14, topH, 581, topH, 0, 0));
		this.keys.push(new Key("E", 4, false, 329.628, 595, 0, 14, topH, 586, topH, 23, botH));

		// F4
		this.keys.push(new Key("F", 4, false, 349.228, 609, 0, 13, topH, 609, topH, 24, botH));
		this.keys.push(new Key("F#", 4, true, 369.994, 622, 0, 14, topH, 622, topH, 0, 0));
		this.keys.push(new Key("G", 4, false, 391.995, 636, 0, 13, topH, 633, topH, 23, botH));
		this.keys.push(new Key("G#", 4, true, 415.305, 649, 0, 14, topH, 649, topH, 0, 0));
		this.keys.push(new Key("A", 4, false, 440.000, 663, 0, 13, topH, 656, topH, 23, botH));
		this.keys.push(new Key("A#", 4, true, 466.164, 676, 0, 14, topH, 676, topH, 0, 0));
		this.keys.push(new Key("B", 4, false, 493.883, 690, 0, 13, topH, 679, topH, 24, botH));

		// C5
		this.keys.push(new Key("C", 5, false, 523.251, 703, 0, 14, topH, 703, topH, 23, botH));
		this.keys.push(new Key("C#", 5, true, 554.365, 717, 0, 14, topH, 717, topH, 0, 0));
		this.keys.push(new Key("D", 5, false, 587.330, 731, 0, 14, topH, 726, topH, 24, botH));
		this.keys.push(new Key("D#", 5, true, 622.254, 745, 0, 14, topH, 747, topH, 0, 0));
		this.keys.push(new Key("E", 5, false, 659.255, 759, 0, 14, topH, 750, topH, 23, botH));

		// F5
		this.keys.push(new Key("F", 5, false, 698.456, 773, 0, 13, topH, 773, topH, 24, botH));
		this.keys.push(new Key("F#", 5, true, 739.989, 786, 0, 14, topH, 786, topH, 0, 0));
		this.keys.push(new Key("G", 5, false, 783.991, 800, 0, 13, topH, 797, topH, 23, botH));
		this.keys.push(new Key("G#", 5, true, 830.609, 813, 0, 14, topH, 813, topH, 0, 0));
		this.keys.push(new Key("A", 5, false, 880.000, 827, 0, 13, topH, 820, topH, 23, botH));
		this.keys.push(new Key("A#", 5, true, 932.328, 840, 0, 14, topH, 840, topH, 0, 0));
		this.keys.push(new Key("B", 5, false, 987.767, 854, 0, 13, topH, 843, topH, 24, botH));

		// C6
		this.keys.push(new Key("C", 6, false, 1046.50, 867, 0, 14, topH, 867, topH, 23, botH));
		this.keys.push(new Key("C#", 6, true, 1108.73, 881, 0, 14, topH, 881, topH, 0, 0));
		this.keys.push(new Key("D", 6, false, 1174.66, 895, 0, 14, topH, 890, topH, 24, botH));
		this.keys.push(new Key("D#", 6, true, 1244.51, 909, 0, 14, topH, 909, topH, 0, 0));
		this.keys.push(new Key("E", 6, false, 1318.51, 923, 0, 14, topH, 914, topH, 23, botH));

		// F6
		this.keys.push(new Key("F", 6, false, 1396.91, 937, 0, 13, topH, 937, topH, 24, botH));
		this.keys.push(new Key("F#", 6, true, 1479.98, 950, 0, 14, topH, 950, topH, 0, 0));
		this.keys.push(new Key("G", 6, false, 1567.98, 964, 0, 13, topH, 961, topH, 23, botH));
		this.keys.push(new Key("G#", 6, true, 1661.22, 977, 0, 14, topH, 977, topH, 0, 0));
		this.keys.push(new Key("A", 6, false, 1760.00, 991, 0, 13, topH, 984, topH, 23, botH));
		this.keys.push(new Key("A#", 6, true, 1864.66, 1004, 0, 14, topH, 1004, topH, 0, 0));
		this.keys.push(new Key("B", 6, false, 1975.53, 1018, 0, 13, topH, 1007, topH, 24, botH));

		// C7
		this.keys.push(new Key("C", 7, false, 2093.00, 1031, 0, 14, topH, 1031, topH, 23, botH));
		this.keys.push(new Key("C#", 7, true, 2217.46, 1045, 0, 14, topH, 1045, topH, 0, 0));
		this.keys.push(new Key("D", 7, false, 2349.32, 1059, 0, 14, topH, 1054, topH, 24, botH));
		this.keys.push(new Key("D#", 7, true, 2489.02, 1073, 0, 14, topH, 1073, topH, 0, 0));
		this.keys.push(new Key("E", 7, false, 2637.02, 1087, 0, 14, topH, 1078, topH, 23, botH));

		// F7
		this.keys.push(new Key("F", 7, false, 2793.83, 1101, 0, 13, topH, 1101, topH, 24, botH));
		this.keys.push(new Key("F#", 7, true, 2959.96, 1114, 0, 14, topH, 1114, topH, 0, 0));
		this.keys.push(new Key("G", 7, false, 3135.96, 1128, 0, 13, topH, 1125, topH, 23, botH));
		this.keys.push(new Key("G#", 7, true, 3322.44, 1141, 0, 14, topH, 1141, topH, 0, 0));
		this.keys.push(new Key("A", 7, false, 3520.00, 1155, 0, 13, topH, 1148, topH, 23, botH));
		this.keys.push(new Key("A#", 7, true, 3729.31, 1168, 0, 14, topH, 1168, topH, 0, 0));
		this.keys.push(new Key("B", 7, false, 3951.07, 1182, 0, 13, topH, 1171, topH, 24, botH));

		// C8, top 1 group
		this.keys.push(new Key("C", 8, false, 4186.01, 1195, 0, 23, topH, 1195, topH, 23, botH));

		// TOTAL WIDTH = 1218px
		// TOTAL HEIGHT = 105px
	}

	// Draw all keys
	draw(gc) {
		this.keys.forEach(function(key) {
			key.draw(gc);
		});
	}

	// Clicks keys in selected scale of notes
	showScaleKeys(notes) {
		this.keys.forEach(function(key) {
			if (notes[0] == key.letter) {
				key.setIsScaleMain(true);
				key.setIsScalePart(true);
			}
			else if (notes.includes(key.letter)) {
				key.setIsScaleMain(false);
				key.setIsScalePart(true);
			} else {
				key.setIsScaleMain(false);
				key.setIsScalePart(false);
			}
		});
	}

	// Clicks a specific key
	findKey(letterRegister) {
		for (key in keys) {
			if (letterRegister == key.letter + key.register) {
				return key;
			}
		}

		return null;
	}

	pickNote(event) {
		var foundKey = null;

		this.keys.forEach(function(key) {
			if (key.pickCorrelation(event)) {
				foundKey = key;
			}
		});

		return foundKey;
	}
}