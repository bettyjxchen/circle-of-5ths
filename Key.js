/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Key {
	constructor(letter, 
	upperX, upperY, upperW, upperH, 
	lowerX, lowerY, lowerW, lowerH) {

		// Letter name
		this.letter = letter;

		// Draw statuses
		this.isClicked = false;
		this.isHovered = false;

		// Upper box portion of the key
		this.upperX = upperX; //topleft
		this.upperY = upperY; //topleft
		this.upperW = upperW; //width
		this.upperH = upperH; //height

		// Lower box portion of the key
		this.lowerX = lowerX; //topleft
		this.lowerY = lowerY; //topleft
		this.lowerW = lowerW; //width
		this.lowerH = lowerH; //height
	}

	// Public draw call
	draw(gc, canvasWidth) {
		this.drawClicked(gc, canvasWidth);
		this.drawBorder(gc, canvasWidth);
		this.drawHovered(gc, canvasWidth);
	}

	// Private draw functions
	drawClicked(gc, canvasWidth) {
		if (!this.isHovered()) {
			return;
		}

		// Grey
		gc.fillStyle = "#EEE";

		// Rectangle fills
		gc.fillRect(upperX, upperY, upperW, upperH);
		gc.fillRect(lowerX, lowerY, lowerW, lowerH);
	}

	drawBorder(gc, canvasWidth) {
		gc.beginPath();

		// Black
		gc.strokeStyle = "#000";

		// Draw upper portion of Key
		gc.moveTo(upperX, upperY+upperH);
		gc.lineTo(upperX, upperY);
		gc.moveTo(upperX, upperY);
		gc.lineTo(upperX+upperW, upperY);
		gc.moveTo(upperX+upperW, upperY);
		gc.lineTo(upperX+upperW, upperY+upperH);
		gc.moveTo(upperX+upperW, upperY+upperH);
		gc.lineTo(lowerX+lowerW, upperY+upperH);
		gc.moveTo(upperX, upperY+upperH);
		gc.lineTo(lowerX, upperY+upperH);

		// Draw lower portion of Key
		gc.moveTo(lowerX, lowerY);
		gc.lineTo(lowerX, lowerY+lowerH);
		gc.moveTo(lowerX, lowerY+lowerH);
		gc.lineTo(lowerX+lowerW, lowerY+lowerH);
		gc.moveTo(lowerX+lowerW, lowerY+lowerH);
		gc.lineTo(lowerX+lowerW, lowerY);

		gc.stroke();
	}

	drawHovered(gc, canvasWidth) {
		if (!this.isHovered()) {
			return;
		}

		gc.beginPath();

		// Red
		gc.strokeStyle = "#F00";

		// Draw upper portion of Key
		gc.moveTo(upperX, upperY+upperH);
		gc.lineTo(upperX, upperY);
		gc.moveTo(upperX, upperY);
		gc.lineTo(upperX+upperW, upperY);
		gc.moveTo(upperX+upperW, upperY);
		gc.lineTo(upperX+upperW, upperY+upperH);
		gc.moveTo(upperX+upperW, upperY+upperH);
		gc.lineTo(lowerX+lowerW, upperY+upperH);
		gc.moveTo(upperX, upperY+upperH);
		gc.lineTo(lowerX, upperY+upperH);

		// Draw lower portion of Key
		gc.moveTo(lowerX, lowerY);
		gc.lineTo(lowerX, lowerY+lowerH);
		gc.moveTo(lowerX, lowerY+lowerH);
		gc.lineTo(lowerX+lowerW, lowerY+lowerH);
		gc.moveTo(lowerX+lowerW, lowerY+lowerH);
		gc.lineTo(lowerX+lowerW, lowerY);

		gc.stroke();
	}
}