/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Model {
	constructor() {
		var c = document.getElementById("circle");
		var gc = c.getContext("2d");

		var k = document.getElementById("keyboard");
		this.gc_k = k.getContext("2d");

		//objects
		this.keyboard = new Keyboard();
		this.scales = new Scales();
		this.circle = new Circle();

		this.circle.draw(gc, 300);
		this.isIn()

		this.keyboard.draw(this.gc_k);
	}

	showScale(scaleName) {

		//get Scale notes object
		var notes = scales.getNotes(scaleName)

		//tells keyboard to click keys in notes
		this.keyboard.clickKeys(notes)
		this.keyboard.draw(this.gc_k)
	}

	isIn(x, y, c) {
		this.keyboard.clickAll();
		
	}
}
