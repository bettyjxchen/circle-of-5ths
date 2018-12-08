/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class CirclePanel {
	constructor(letter, rMinRatio, rMaxRatio, thetaL, thetaR) {
		// This letter
		this.letter = letter;

		// Related keys (including itself)
		this.neighbors = neighbors;

		// Draw statuses
		this.isClicked = false;
		this.isClickedNeighbor = false;
		this.isHovered = false;

		// Sizing
		this.rMinRatio = rMinRatio;
		this.rMaxRatio = rMaxRatio;
		this.thetaL = thetaL;
		this.thetaR = thetaR;
	}

	// Draw this CirclePanel (c is centerX, centerY, and radius)
	draw(gc, c) {
		// Select a color
		if (this.isHovered) gc.strokeStyle = "#080"; // Green
		else if (this.isClicked) gc.strokeStyle = "#F00"; // Red
		else if (this.isClickedNeighbor) gc.strokeStyle = "#800"; // Pink
		else gc.strokeStyle = "#000"; // Black

		// Draw this panel
		gc.beginPath();
		gc.arc(cX, cY, this.rMinRatio*radius, this.thetaL, this.thetaR);
		gc.arc(cX, cY, this.rMaxRatio*radius, this.thetaL, this.thetaR);
		gc.moveTo(this.rMinRatio*radius*Math.cos(this.thetaL), 
			this.rMinRatio*radius*Math.sin(this.thetaL));
		gc.lineTo(this.rMaxRatio*radius*Math.cos(this.thetaL), 
			this.rMaxRatio*radius*Math.sin(this.thetaL));
		gc.moveTo(this.rMinRatio*radius*Math.cos(this.thetaR),
			this.rMinRatio*radius*Math.sin(this.thetaR));
		gc.lineTo(this.rMaxRatio*radius*Math.cos(this.thetaR),
			this.rMaxRatio*radius*Math.sin(this.thetaR));
		gc.stroke();
	}

	// returns which panel the coords are in
	isIn(x, y, c) {
		var r = Math.sqrt(( (cX-x)*(cX*x) + ((cY-y)*(cY*y)) ));
		var theta = Math.atan((cY-y)/(cX-x));

		return (r > this.rMinRatio && r < this.rMaxRatio
			&& theta > this.thetaL && theta < this.thetaR);
	}

	// highlights the input panel string
	setClicked(c) {
		this.isClicked = c;
	}

	setClickedNeighbor(c) {
		this.isClickedNeighbor = c;
	}

	// does action for input panel string
	setHovered(c) {
		this.isHovered = c;
	}

	getClicked() {
		return isClicked;
	}

	getClickedNeighbor() {
		return isClickedNeighbor;
	}

	getHovered() {
		return isHovered;
	}
}
