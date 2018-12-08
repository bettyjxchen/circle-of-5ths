/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class CirclePanel {
	constructor() {
		this.isClicked = false;
		this.isHovered = false;

		var midR = .5;
		var maxR = 1;

		this.panels = [
			// Major
			new CirclePanel("C", midR, maxR, 105, 75),
			new CirclePanel("G", midR, maxR, 75, 45),
			new CirclePanel("D", midR, maxR, 45, 15),
			new CirclePanel("A", midR, maxR, 15, 345),
			new CirclePanel("E", midR, maxR, 345, 315),
			new CirclePanel("B", midR, maxR, 315, 285),
			new CirclePanel("F#", midR, maxR, 285, 255),
			new CirclePanel("C#", midR, maxR, 255, 225),
			new CirclePanel("G#", midR, maxR, 225, 195),
			new CirclePanel("D#", midR, maxR, 195, 165),
			new CirclePanel("A#", midR, maxR, 165, 135),
			new CirclePanel("F", midR, maxR, 135, 95),

			// Minor
			new CirclePanel("a", 0, midR, 105, 75),
			new CirclePanel("e", 0, midR, 75, 45),
			new CirclePanel("b", 0, midR, 45, 15),
			new CirclePanel("f#", 0, midR, 15, 345),
			new CirclePanel("c#", 0, midR, 345, 315),
			new CirclePanel("g#", 0, midR, 315, 285),
			new CirclePanel("d#", 0, midR, 285, 255),
			new CirclePanel("a#", 0, midR, 255, 225),
			new CirclePanel("f", 0, midR, 225, 195),
			new CirclePanel("c", 0, midR, 195, 165),
			new CirclePanel("g", 0, midR, 165, 135),
			new CirclePanel("d", 0, midR, 135, 95)
		]
	}

	// Draw this CirclePanel
	draw(graphics, cX, CY, radius) {
		this.panels.forEach(function(panel) {
			panel.draw(cX, cY, radius);
		});
	}

	// Draw a scale
	setScale(scale) {
		this.panels.forEach(function(panel) {
			if (scale.notes[0] == panel.letter) {
				panel.setClicked(true);
			}
			else if (scale.notes.contains(panel.letter)) {
				panel.setClickedNeighbor(true);
			}
			else {
				panel.setClicked(false);
				panel.setClickedNeighbor(false);
			}
		});
	}

	// returns which panel the coords are in
	isIn(x, y, c) {
	}

	// highlights the input panel string
	mouseOver(panel) {
	}

	// does action for input panel string
	clicked(panel) {
	}
}
