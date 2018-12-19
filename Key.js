/*
* Assignment 11
* Betty, Daniela, Michael
* Comp86
*
* Key.js
* This is the Key class which primarily
* allows a key to be drawn and clicked.
* The properties of the key determines
* the fill color and shape of the key, 
* as well as differentiates black/white
* keys and stores frequencies.
*
*/

class Key {
	constructor(letter, register, isBlackKey, frequency, 
	topX, topY, topW, topH, botX, botY, botW, botH) {

		//letter name
		this.letter = letter;
		this.register = register;
		this.isBlackKey = isBlackKey;
		this.frequency = frequency;

		//draw statuses
		this.isClicked = false;
		this.isHovered = false;
		this.isScaleMain = false;
		this.isScalePart = false;

		//upper box portion of the key
		this.topX = topX+1; //topleft
		this.topY = topY+1; //topleft
		this.topW = topW; //width
		this.topH = topH; //height

		//lower box portion of the key (all 0 if black key)
		this.botX = botX+1; //topleft
		this.botY = botY+1; //topleft
		this.botW = botW; //width
		this.botH = botH; //height
	}

	// Pick correlation
	pickCorrelation(event) {
		var x = event.offsetX;
		var y = event.offsetY;

		// If in top box
		return ((x >= this.topX && x <= this.topX+this.topW
		&& y >= this.topY && y <= this.topY+this.topH)

		// If in bot box
		|| (x >= this.botX && x <= this.botX+this.botW
		&& y >= this.botY && y <= this.botY+this.botH));
	}

	//set key to clicked
	setClicked(bool) {
		this.isClicked = bool;
	}

	setHovered(bool) {
		this.isHovered = bool;
	}

	setIsScaleMain(bool) {
		this.isScaleMain = bool;
	}

	setIsScalePart(bool) {
		this.isScalePart = bool;
	}

	getFrequency() {
		return this.frequency;
	}

	getLetter() {
		return this.letter;
	}
	getRegister() {
		return this.register;
	}

	//draw key
	draw(gc) {
		this.drawFill(gc);
		this.drawBorder(gc);
	}

	//draw fill in key
	drawFill(gc) {

		//color if clicked/blackkey/whitekey
		if (this.isBlackKey) gc.fillStyle = "#000"; //Black
		else gc.fillStyle = "#FFF"; //White

		//rectangle fills
		gc.fillRect(this.topX, this.topY, this.topW, this.topH);
		gc.fillRect(this.botX, this.botY, this.botW, this.botH);

		// Black key light reflection
		if (this.isBlackKey) {
			gc.fillStyle = "#CCCCCC";
			gc.fillRect(this.topX+this.topW-2, 0, 2, this.topY+this.topH-2);
		}

		// Scale drawing
		if (this.isScaleMain) {
			gc.fillStyle = "rgba(255, 150, 0, .4"; // Red
			gc.fillRect(this.topX, this.topY, this.topW, this.topH);
			gc.fillRect(this.botX, this.botY, this.botW, this.botH);
		}
		else if (this.isScalePart) {
			gc.fillStyle = "rgba(255, 255, 0, .4"; //Yellow
			gc.fillRect(this.topX, this.topY, this.topW, this.topH);
			gc.fillRect(this.botX, this.botY, this.botW, this.botH);
		}

		// Key is clicked
		if (this.isClicked) {
			gc.fillStyle = "rgba(255, 0, 0, .6"; // Red
			gc.fillRect(this.topX, this.topY, this.topW, this.topH);
			gc.fillRect(this.botX, this.botY, this.botW, this.botH);
		}
	}

	//draw border in key
	drawBorder(gc) {
		gc.beginPath();

		//color if clicked/unclicked
		//if (this.isClicked) gc.strokeStyle = "#F00"; // Red
		gc.strokeStyle = "#000"; // Black

		//draw upper portion of Key
		gc.moveTo(this.topX, this.topY+this.topH);
		gc.lineTo(this.topX, this.topY);
		gc.moveTo(this.topX, this.topY);
		gc.lineTo(this.topX+this.topW, this.topY);
		gc.moveTo(this.topX+this.topW, this.topY);
		gc.lineTo(this.topX+this.topW, this.topY+this.topH);

		//line dividing upper and lower
		gc.moveTo(this.topX+this.topW, this.topY+this.topH);
		gc.lineTo(this.botX+this.botW, this.topY+this.topH);
		gc.moveTo(this.topX, this.topY+this.topH);
		gc.lineTo(this.botX, this.topY+this.topH);

		//draw lower portion of Key
		gc.moveTo(this.botX, this.botY);
		gc.lineTo(this.botX, this.botY+this.botH);
		gc.moveTo(this.botX, this.botY+this.botH);
		gc.lineTo(this.botX+this.botW, this.botY+this.botH);
		gc.moveTo(this.botX+this.botW, this.botY+this.botH);
		gc.lineTo(this.botX+this.botW, this.botY);

		gc.stroke();
	}
}