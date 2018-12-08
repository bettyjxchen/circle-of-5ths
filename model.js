/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Model {
	constructor() {
		var c = document.getElementById("circle");
		var gc = c.getContext("2d");

		//objects
		this.keyboard = new Keyboard();
		this.scale = new Scale();
		this.circle = new Circle();

		this.circle.draw(gc, 300);
	}

	clickedCircle(scaleName) {

	}

	isIn(x, y, radius) {
		console.log("x is: " + x + "y is: " + y)
		return ""
	}
}
