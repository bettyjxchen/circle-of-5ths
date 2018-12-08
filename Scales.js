/* Betty Chen, Daniela Chita, Michael Gold
 * COMP86
 * Fall 2018
 * Final Project
 */

class Scales {
	constructor () {
		this.scales = [
		this.scales.push("c major", "C", "D", "E", "F", "G", "A", "B")
		this.scales.push("c sharp major", "C sharp", "D sharp", "E sharp", "F sharp", "G sharp", "A sharp", "B sharp")
		this.scales.push("d major", "D", "E", "F sharp", "G", "A", "B", "C sharp")
		this.scales.push("e flat major", "E flat", "F", "G", "A flat", "B flat", "C", "D")
		this.scales.push("e major", "E", "F sharp", "G sharp", "A", "B", "Csharp", "Dsharp")
		this.scales.push("f major", "F", "G", "A", "B flat", "C", "D", "E")
		this.scales.push("f sharp major", "F sharp", "G sharp", "A sharp", "B", "C sharp", "D sharp", "E sharp")
		this.scales.push("g major", "G", "A", "B", "C", "D", "E", "F sharp")
		this.scales.push("a flat major", "A flat", "B flat", "C", "D flat", "E flat", "F", "G")
		this.scales.push("a major", "A", "B", "C sharp", "D", "E", "F sharp", "G sharp")
		this.scales.push("b flat major", "B flat", "C", "D", "E flat", "F", "G", "A")
		this.scales.push("b major", "B", "C sharp", "D sharp", "E", "F sharp", "G sharp", "A sharp")

		this.scales.push("c minor", "C", "D", "E flat", "F", "G", "A flat", "B flat")
		this.scales.push("d minor", "D", "E", "F", "G", "A", "B flat", "C",)
		this.scales.push("e minor", "E", "F sharp", "G", "A", "B", "C", "D")
		this.scales.push("f minor", "F", "G", "A flat", "B flat", "C", "D flat", "E flat")
		this.scales.push("g minor", "G", "A", "B flat", "C", "D", "E flat", "F")
		this.scales.push("a minor", "A", "B", "C", "D", "E", "F", "G")
		this.scales.push("b minor", "B", "C sharp", "D", "E", "F sharp", "G", "A")
		this.scales.push("c sharp minor", "C sharp", "D sharp", "E", "F sharp", "G sharp", "A", "B")
		this.scales.push("e flat minor", "E flat", "F", "G flat", "A flat", "B flat", "C flat", "D flat")
		this.scales.push("f sharp minor", "F sharp", "G sharp", "A", "B", "C sharp", "D", "E")
		this.scales.push("a flat minor", "A flat", "B flat", "C flat", "D flat", "E flat", "F flat", "G flat")
		this.scales.push("b flat minor", "B flat", "C", "D flat", "E flat", "F", "G flat", "A flat"	
		]
	}
}

class Scale {
	constructor(name, n1, n2, n3, n4, n5, n6, n7)
	{
		this.name = name;
		this.notes = [n1, n2, n3, n4, n5, n6, n7];
	}

	getScale() {
		return this.notes;
	}
}