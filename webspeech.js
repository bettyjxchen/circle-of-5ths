/*
* Assignment 11
* Betty, Daniela, Michael
* Comp86
*
* webspeech.js
* This is the webspeech API used to 
* process speech for scales. API used
* to recognize voice command to highlight
* keys on keyboard.
*
*/

var final_transcript = '';
var recognizing = false;
var ignore_onend;
var start_timestamp;

//--------------------Set up Recognizer--------------------//
if (!('webkitSpeechRecognition' in window)) { 
  upgrade(); 
} else {
  start_button.style.display = 'inline-block';
  var recognition = new webkitSpeechRecognition(); 
  recognition.continuous = true; 
  recognition.interimResults = true; 

  //-----------On Start-----------//
  recognition.onstart = function() { 
    recognizing = true; 
    showInfo('info_speak_now'); 
  };

  //-----------On Error-----------//
  recognition.onerror = function(event) { 
    if (event.error == 'no-speech') { 
      showInfo('info_no_speech'); 
      ignore_onend = true;
    }
    if (event.error == 'audio-capture') {
      showInfo('info_no_microphone');
      ignore_onend = true;
    }
    if (event.error == 'not-allowed') {
      if (event.timeStamp - start_timestamp < 100) {
        showInfo('info_blocked');
      } else {
        showInfo('info_denied');
      }
      ignore_onend = true;
    }
  };

  //-----------On End-----------//
  recognition.onend = function() { 
    recognizing = false;
    if (ignore_onend) {
      return;
    }
    if (!final_transcript) {
      showInfo('info_start');
      return;
    }
    showInfo('info_start');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }
  };

  //-----------On Result----------//
  recognition.onresult = function(event) { 
    var interim_transcript = '';
    if (typeof(event.results) == 'undefined') {
      recognition.onend = null;
      recognition.stop();
      upgrade();
      return;
    }

    // event.results is an array of the recognized strings
    for (var i = event.resultIndex; i < event.results.length; i++) { 
      if (event.results[i].isFinal) { 
        // final_transcript += event.results[i][0].transcript; 
        final_transcript = event.results[i][0].transcript; 
      } else { 
        interim_transcript += event.results[i][0].transcript; 
      }
    }

    //show final transcript
    final_span.innerHTML = linebreak(final_transcript); 

    //processes transcript
    process(final_transcript); 

  };
}

//------------------------Callbacks------------------------//

//start mic button
function startButton(event) {
 
    //disable start button
    document.getElementById("start_button").disabled = true;
    //enable stop button
    document.getElementById("stop_button").disabled = false;

    final_transcript = '';
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = '';
    // interim_span.innerHTML = '';
    start_timestamp = event.timeStamp;
}

//stop mic button
function stopButton(event) {
    //disable stop button
    document.getElementById("stop_button").disabled = true;
    //enable start button
    document.getElementById("start_button").disabled = false;
    //clear transcript
    final_span.innerHTML = '';

  if (recognizing) {
    recognition.stop();
  }
}

//show or hide messages
function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'block' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}

//processes speech and calls show scale
function process(string) { 
    if (final_transcript != "") {

        //convert to lower
        string = string.toLowerCase();
        //strip any trailing spice
        if (string.charAt(0) == " ") {
            string = string.substring(1);
        }

        //call model to show scale
        model.showScale(string)  
    }
}

//convert line breaks to HTML
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

//user message about browser incompatible
function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}