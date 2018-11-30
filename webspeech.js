/*
* Assignment 11
* Betty Chen (betty.chen@tufts.edu)
* Comp86
*
* webspeech.js
* This is the webspeech API.
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
    showInfo('');
    if (window.getSelection) {
      window.getSelection().removeAllRanges();
      var range = document.createRange();
      range.selectNode(document.getElementById('final_span'));
      window.getSelection().addRange(range);
    }

    // Display or otherwise utilize result
    doit (final_transcript); 
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
    for (var i = event.resultIndex; i < event.results.length; ++i) { 
      if (event.results[i].isFinal) { 
        final_transcript += event.results[i][0].transcript; 
      } else { 
        interim_transcript += event.results[i][0].transcript; 
      }
    }

    final_span.innerHTML = linebreak(final_transcript); 
    interim_span.innerHTML = linebreak(interim_transcript);
  };
}

//------------------------Callbacks------------------------//
//start or stop mic button
function startButton(event) {
  // Stop
  if (recognizing) {
    recognition.stop();
  }

  // Start
  else {
    final_transcript = '';
    recognition.start();
    ignore_onend = false;
    final_span.innerHTML = '';
    interim_span.innerHTML = '';
    showInfo('info_allow');
    start_timestamp = event.timeStamp;
  }
}

//show or hide messages
function showInfo(s) {
  if (s) {
    for (var child = info.firstChild; child; child = child.nextSibling) {
      if (child.style) {
        child.style.display = child.id == s ? 'inline' : 'none';
      }
    }
    info.style.visibility = 'visible';
  } else {
    info.style.visibility = 'hidden';
  }
}

function doit (string) { 
    console.log(final_transcript)

}

// Convert line breaks to HTML
var two_line = /\n\n/g;
var one_line = /\n/g;
function linebreak(s) {
  return s.replace(two_line, '<p></p>').replace(one_line, '<br>');
}

//user message about browser incompatible
//with WebSpeech
function upgrade() {
  start_button.style.visibility = 'hidden';
  showInfo('info_upgrade');
}