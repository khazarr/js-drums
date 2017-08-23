
var keys = {
  65:"a",
  83:"s",
  75:"k",
  76:"l"
}

var kick = new Audio("drums/kick.wav");
var snare = new Audio("drums/snare.wav");
var oHat = new Audio("drums/ohat.wav");
var cHat = new Audio("drums/chat.wav");

var sounds = {
  65:kick,
  83:snare,
  75:cHat,
  76:oHat
}


$(document).keydown(function(e) {
  //console.log(e.keyCode);
  var pressed = e.keyCode;

  var letter = keys[e.keyCode];


  if(keys.hasOwnProperty(pressed)){
    //console.log(letter + " pressed");

    //play drum
    sounds[pressed].play();


    //animate
    $("#" + letter).addClass("playing");
    setTimeout(function () {
      $("#" + letter).removeClass("playing");
    },100);



  }
});
