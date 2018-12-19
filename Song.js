/* Michael Gold
 * A song in JS
 */




 // var 8thTrip = new NoteType(1/12.0);
 // var 8th = new NoteType(1/8.0);


class Song {
	constructor() {
		this.measures = [];
		this.initNotes();

		//var path = "Arabesque1.txt";
		//this.readNotesFromFile(path);
		//this.readNotesFromFileLocal(path);
	}

	play() {
		for (measure in this.measures) {
			setTimeout(measure.play(), measure.getDuration);
		}
	}

	readNotesFromFileLocal(path) {
		this.openFile(path);
		/*
		var file;
		var reader = new FileReader();
		reader.onload = function(event) {
			console.log(this.result);

			var lines = this.result.split('\n');
			for (i = 0; i < lines.length; i++) {
				console.log(lines[i]);
			}
		};
		reader.readAsText(file);*/
	}

	openFile(path) {
		var rawFile = new XMLHttpRequest();
		rawFile.open("GET", path, true);
		rawFile.onreadystatechange = function() {
			if (rawFile.readyState === 4) {
				if (rawFile.status === 200 || rawFile.status == 0) {
					var allText = rawFile.responseText;
					alert(allText);
				}
			}
		}
		rawFile.send(null);
	}

	readNotesFromFile(path) {
		fetch(path)
		.then(response => response.text())
		.then(text => console.log(text))
	}

	initNotes() {
		var m1 = new Measure(1, 3000);
		m1.add(new Note("C#4", 0/12.0, 1/12.0));
		m1.add(new Note("E4", 1/12.0, 1/12.0));
		m1.add(new Note("A4", 2/12.0, 1/12.0));
		m1.add(new Note("C#5", 3/12.0, 1/12.0));
		m1.add(new Note("E5", 4/12.0, 1/12.0));
		m1.add(new Note("F#5", 5/12.0, 1/12.0));
		m1.add(new Note("G#5", 6/12.0, 1/12.0));
		m1.add(new Note("D#5", 7/12.0, 1/12.0));
		m1.add(new Note("B4", 8/12.0, 1/12.0));
		m1.add(new Note("G#4", 9/12.0, 1/12.0));
		m1.add(new Note("D#4", 10/12.0, 1/12.0));
		m1.add(new Note("B3", 11/12.0, 1/12.0));
		this.song.push(m1);

		var m2 = new Measure(2, 3000);
		m2.add(new Note("A3", 0/12.0, 1/12.0));
		m2.add(new Note("C#4", 1/12.0, 1/12.0));
		m2.add(new Note("F#4", 2/12.0, 1/12.0));
		m2.add(new Note("A4", 3/12.0, 1/12.0));
		m2.add(new Note("C#5", 4/12.0, 1/12.0));
		m2.add(new Note("D#5", 5/12.0, 1/12.0));
		m2.add(new Note("E5", 6/12.0, 1/12.0));
		m2.add(new Note("B4", 7/12.0, 1/12.0));
		m2.add(new Note("G#4", 8/12.0, 1/12.0));
		m2.add(new Note("E4", 9/12.0, 1/12.0));
		m2.add(new Note("B3", 10/12.0, 1/12.0));
		m2.add(new Note("G#3", 11/12.0, 1/12.0));
		this.song.push(m2);
	}
}

class Measure {
	constructor(number, duration) {
		this.number = number;
		this.duration = duration; // milliseconds
		this.notes = [];
	}

	add(note) {
		this.notes.push(note);
	}

	play() {
		for (note in this.notes) {

		}
	}

	getDuration() {
		return this.duration;
	}
}

class Note {
	constructor(letterRegister, startRatio, durationRatio) {
		this.letterRegister = letterRegister;
		this.startRatio = startRatio;
		this.durationRatio = durationRatio;
	}

	getName() {
		return this.letterRegister;
	}
	getStartRatio() {
		return this.startRatio;
	}
	getDurationRatio() {
		return this.durationRatio;
	}
}