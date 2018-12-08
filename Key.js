/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Key {
	constructor(letter, isBlackKey, frequency, 
	topX, topY, topW, topH, botX, botY, botW, botH) {

		// Letter name
		this.letter = letter;
		this.isBlackKey = isBlackKey;
		this.frequency = frequency;

		// Draw statuses
		this.isClicked = false;
		this.isHovered = false;


		// upper box portion of the key
		this.topX = topX; //topleft
		this.topY = topY; //topleft
		this.topW = topW; //width
		this.topH = topH; //height

		// lower box portion of the key (all 0 if black key)
		this.botX = botX; //topleft
		this.botY = botY; //topleft
		this.botW = botW; //width
		this.botH = botH; //height
	}

	// Pick correlation
	isInside(x, y) {
		return
		// If in top box
		((x >= this.topX && x <= this.topX+this.topW
		&& y >= this.topY && y <= this.topY+this.topH)

		// If in bot box
		|| (x >= this.botX && x <= this.botX+botW
		&& y >= this.botY && Y <= this.botY+botH));
	}

	// Public draw call
	draw(gc) {
		this.drawFill(gc);
		this.drawBorder(gc);
	}

	// Draw the filling
	drawFill(gc) {

		// Color if clicked/blackkey/whitekey
		if (this.isClicked) gc.fillStyle = "#999"; //Grey
		else if (this.isBlackKey) gc.fillStyle = "#000"; //Black
		else gc.fillStyle = "#FFF"; //White

		// Rectangle fills
		gc.fillRect(this.topX, this.topY, this.topW, this.topH);
		gc.fillRect(this.botX, this.botY, this.botW, this.botH);
	}

	drawBorder(gc) {
		gc.beginPath();

		// Color if hovered/nothovered
		if (this.isHovered) gc.strokeStyle = "#F00"; //Red
		else gc.strokeStyle = "#000"; //Black

		// Draw upper portion of Key
		gc.moveTo(this.topX, this.topY+this.topH);
		gc.lineTo(this.topX, this.topY);
		gc.moveTo(this.topX, this.topY);
		gc.lineTo(this.topX+this.topW, this.topY);
		gc.moveTo(this.topX+this.topW, this.topY);
		gc.lineTo(this.topX+this.topW, this.topY+this.topH);

		// Line dividing upper and lower
		gc.moveTo(this.topX+this.topW, this.topY+this.topH);
		gc.lineTo(this.botX+this.botW, this.topY+this.topH);
		gc.moveTo(this.topX, this.topY+this.topH);
		gc.lineTo(this.botX, this.topY+this.topH);

		// Draw lower portion of Key
		gc.moveTo(this.botX, this.botY);
		gc.lineTo(this.botX, this.botY+this.botH);
		gc.moveTo(this.botX, this.botY+this.botH);
		gc.lineTo(this.botX+this.botW, this.botY+this.botH);
		gc.moveTo(this.botX+this.botW, this.botY+this.botH);
		gc.lineTo(this.botX+this.botW, this.botY);

		gc.stroke();
	}
}