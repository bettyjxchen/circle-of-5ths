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




		this.testWhiteKey = new Key("F", false, 50, 50, 10, 60, 50, 110, 15, 30);
		this.testBlackKey = new Key("F#", true, 60, 50, 10, 60, 60, 0, 0, 0);

		var c = document.getElementById("Keyboard");
		var gc = c.getContext("2d");
		//gc.fillStyle = "#FF0";
		//gc.fillRect(50, 50, 200, 200);

		this.testWhiteKey.draw(gc, 1);
		this.testBlackKey.draw(gc, 1);
	}
}