/*
* Assignment 10
* Betty Chen (betty.chen@tufts.edu)
* Comp86
*
* Circle.js
* The Circle class acts as a vehicle
* shaped as a circle. Tick allows the
* vehicle to drive closer or farther
* by adjusting the Z position.
*
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
		// Grey
		gc.fillStyle = "#EEE";

		// Rectangle fills
		gc.fillRect(upperX, upperY, upperW, upperH);
		gc.fillRect(lowerX, lowerY, lowerW, lowerH);
	}

	drawBorder(gc, canvasWidth) {
		// Black
		gc.fillStyle = "#000";

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
	}

	drawHovered(gc, canvasWidth) {
		// Red
		gc.fillStyle = "#F00";

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
	}
}