
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

//********* event listener callbacks *********//
function clickCircle(e) {
    //get scale from click pos
    var scaleName = model.isIn(e.offsetX, e.offsetY, document.getElementById("circle").clientWidth());
    model.clickedCircle(scaleName);
}

function processSpeech(scaleName) {
    //calls model
    model.clickedCircle(scaleName)
}

