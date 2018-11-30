/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Model {
	constructor () {
	
		//variables
		this.notes = []
		this.keys = [];
		this.circlePanels = [];




		this.testKey = new Key("F", 50, 50, 10, 60, 50, 110, 15, 30);

		var c = document.getElementById("Keyboard");
		var gc = c.getContext("2d");

		testKey.draw(gc, 1);
	}
}