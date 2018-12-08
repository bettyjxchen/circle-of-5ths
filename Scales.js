/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Scales {
	constructor () {
		this.scales = [
		// Major scales
	new Scale("c major", "b sharp major", "C", "D", "E", "F", "G", "A", "B"),
	new Scale("c sharp major", "d flat major", "C#", "D#", "F", "F#", "G#", "A#", "C"),
	new Scale("d major", "", "D", "E", "F#", "G", "A", "B", "C#"),
	new Scale("d sharp major", "e flat major", "D#", "F", "G", "G#", "A#", "C", "D"),
	new Scale("e major", "f flat major", "E", "F#", "G#", "A", "B", "C#", "D#"),
	new Scale("f major", "e sharp major", "F", "G", "A", "A#", "C", "D", "E"),
	new Scale("f sharp major", "g flat major", "F#", "G#", "A#", "B", "C#", "D#", "F"),
	new Scale("g major", "", "G", "A", "B", "C", "D", "E", "F#"),
	new Scale("g sharp major", "a flat major", "G#", "A#", "C", "C#", "D#", "F", "G"),
	new Scale("a major", "", "A", "B", "C#", "D", "E", "F#", "G#"),
	new Scale("a sharp major", "b flat major", "A#", "C", "D", "D#", "F", "G", "A"),
	new Scale("b major", "c flat major", "B", "C#", "D#", "E", "F#", "G#", "A#"),

		// Minor scales
	new Scale("c minor", "b sharp minor", "C", "D", "D#", "F", "G", "G#", "A#"),
	new Scale("d minor", "", "D", "E", "F", "G", "A", "A#", "C",),
	new Scale("e minor", "f flat minor", "E", "F#", "G", "A", "B", "C", "D"),
	new Scale("f minor", "e sharp minor", "F", "G", "G#", "A#", "C", "C#", "D#"),
	new Scale("g minor", "", "G", "A", "A#", "C", "D", "D#", "F"),
	new Scale("a minor", "", "A", "B", "C", "D", "E", "F", "G"),
	new Scale("b minor", "c flat minor", "B", "C#", "D", "E", "F#", "G", "A"),
	new Scale("c sharp minor", "d flat minor", "C#", "D#", "E", "F#", "G#", "A", "B"),
	new Scale("d sharp minor", "e flat minor", "D#", "F", "F#", "G#", "A#", "B", "C#"),
	new Scale("f sharp minor", "g flat minor", "F#", "G#", "A", "B", "C#", "D", "E"),
	new Scale("g sharp minor", "a flat minor", "G#", "A#", "B", "C#", "D#", "E", "F#"),
	new Scale("a sharp minor", "b flat minor", "A#", "C", "C#", "D#", "F", "F#", "G#")
	}

	getScale(scaleName) {
		this.scales.forEach(function(scale) {
			if (scale.isKeyName(scaleName)) {
				return scale;
			}
		});
	}
}

class Scale {
	constructor(name1, name2, n1, n2, n3, n4, n5, n6, n7)
	{
		this.names = []
		if (name1 != "") names.push(name1);
		if (name2 != "") names.push(name2);

		this.notes = [n1, n2, n3, n4, n5, n6, n7];
	}

	getScale() {
		return this.notes;
	}

	isKeyName(name) {
		return (this.names.contains(name));
	}
}