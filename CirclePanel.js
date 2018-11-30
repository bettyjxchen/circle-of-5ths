/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */


/* CirclePanel
 * CirclePanel
 */

class CirclePanel {
<<<<<<< Updated upstream
	constructor(rMinRatio, rMaxRatio, thetaLeft, thetaRight, 
	neighbors, letter) {

		// Sizing
		this.rMinRatio = rMinRatio;
		this.rMaxRatio = rMaxRatio;
		this.thetaLeft = thetaLeft;
		this.thetaRight = thetaRight;

		// This letter
		this.letter = letter;

		// Related keys (including itself)
		this.neighbors = neighbors;

		// Draw statuses
		this.isClicked = false;
		this.isHovered = false;
	}

	// Draw this CirclePanel
	drawSelf(graphics, canvasWidth) {

	}

	// Draw the related Panels
	drawNeighborPanels(graphics, canvasWidth) {
		
	}
=======
    constructor () {
        super()
    
>>>>>>> Stashed changes

	// Draw the related Keys
	drawNeighborKeys(graphics, canvasWidth) {

	}
}