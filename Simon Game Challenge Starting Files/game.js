
var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;
var level = 0;

//When a keyboard key has been pressed
$(document).keydown(function(){
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

//each time a button has been clicked
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

// Let's find out if the answer is correct
function checkAnswer(currentLevel){
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

  console.log("success");

  if (userClickedPattern.length === gamePattern.length){

    //5. Call nextSequence() after a 1000 millisecond delay.
    setTimeout(function () {
      nextSequence();
    }, 1000);

  }
 } else {

  console.log("wrong");
  playSound("wrong");


 }

}


function nextSequence(){

  userClickedPattern = [];

  level++;
  $("#level-title").text("Level" + level);

  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
// Colour will flash when clicked on
  $("#" + randomChosenColour).fadeIn(100)fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
};


  //music will play depending on the colour clicked on
function playSound(name){
      var audio = new Audio( "sounds/" + name + ".mp3");
      audio.play();
}

//animation when button is clicked
function animatePress(currentColour){
  $("#"+ currentColour).addClass("pressed");
  setTimeout(function() {
       $("#"+ currentColour).removeClass("pressed");
   }, 100);
}
