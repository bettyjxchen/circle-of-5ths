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
		var gc_k = k.getContext("2d");

		//objects
		this.keyboard = new Keyboard();
		this.scales = new Scales();
		this.circle = new Circle();

		this.circle.draw(gc, 300);
		this.isIn()

		this.keyboard.draw(gc_k);
	}

	clickedCircle(scaleName) {
		//highlight certain scale
		keyboard.play(scaleName)
	}

	isIn(x, y, c) {
		this.keyboard.clickAll();
		
	}
}
