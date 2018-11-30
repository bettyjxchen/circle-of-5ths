/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class CirclePanel {
	constructor(letter, rMinRatio, rMaxRatio, thetaLeft, thetaRight) {

		// This letter
		this.letter = letter;

		// Related keys (including itself)
		this.neighbors = neighbors;

		// Draw statuses
		this.isClicked = false;
		this.isHovered = false;

		// Sizing
		this.rMinRatio = rMinRatio;
		this.rMaxRatio = rMaxRatio;
		this.thetaLeft = thetaLeft;
		this.thetaRight = thetaRight;
	}

	// Draw this CirclePanel
	draw(graphics, canvasWidth) {

	}

	// Draw the related Panels
	drawNeighborPanels(graphics, canvasWidth) {
		
	}

	// Draw the related Keys
	drawNeighborKeys(graphics, canvasWidth) {

	}
}