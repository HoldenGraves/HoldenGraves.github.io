/* global $, sessionStorage */

$(document).ready(runProgram); // wait for the HTML / CSS elements of the page to fully load, then execute runProgram()
  
function runProgram(){
  ////////////////////////////////////////////////////////////////////////////////
  //////////////////////////// SETUP /////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  // Constant Variables
  var FRAME_RATE = 60;
  var FRAMES_PER_SECOND_INTERVAL = 1000 / FRAME_RATE;
  
  var KEY = {
    ENTER: 13,
  LEFT: 65,
  UP: 87,
  RIGHT: 68,
  DOWN: 83,
  }
  var KEY2 = {
    LEFTROW : 37,
    RIGHTROW : 39,
    DOWNROW : 40,
    UPROW : 38,
  }
  var walker = {
    x : 0,
    y : 0, 
    speedX : 0,
    speedY : 0,
  }
  var walker2 = {
    x : 390,
    y : 390,
    speedX : 0,
    speedY : 0,
  }
  // Game Item Objects


  // one-time setup
  var interval = setInterval(newFrame, FRAMES_PER_SECOND_INTERVAL);   // execute newFrame every 0.0166 seconds (60 Frames per second)

  /* 
  This section is where you set up event listeners for user input.
  For example, if you wanted to handle a click event on the document, you would replace 'eventType' with 'click', and if you wanted to execute a function named 'handleClick', you would replace 'handleEvent' with 'handleClick'.

  Note: You can have multiple event listeners for different types of events.
  */
  $(document).on('keydown', handleKeyDown);                          
  $(document).on('keyup', handleKeyUp)
  $('#walker').on('click', newColor)
  ////////////////////////////////////////////////////////////////////////////////
  ///////////////////////// CORE LOGIC ///////////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////

  /* 
  On each "tick" of the timer, a new frame is dynamically drawn using JavaScript
  by calling this function and executing the code inside.
  */
  function newFrame() {
    repositionGameItem()
    wallCollision()
    redrawGameItem()
  }
  /* 
  This section is where you set up the event handlers for user input.
  For example, if you wanted to make an event handler for a click event, you should rename this function to 'handleClick', then write the code that should execute when the click event occurs.
  
  Note: You can have multiple event handlers for different types of events.
  */
  function handleKeyDown(event) {
console.log(event.which);
if (event.which === KEY.LEFT) {
  console.log("left pressed");
  walker.speedX = -5
}
if (event.which === KEY.RIGHT) {
  console.log("right pressed");
   walker.speedX = 5
}
if (event.which === KEY.UP) {
  console.log("up pressed");
   walker.speedY = -5
}
if (event.which === KEY.DOWN) {
  console.log("down pressed");
   walker.speedY = 5
}
if (event.which === KEY2.LEFTROW) {
  console.log("left pressed");
  walker2.speedX = -5
}
if (event.which === KEY2.RIGHTROW) {
  console.log("right pressed");
   walker2.speedX = 5
}
if (event.which === KEY2.UPROW) {
  console.log("up pressed");
   walker2.speedY = -5
}
if (event.which === KEY2.DOWNROW) {
  console.log("down pressed");
   walker2.speedY = 5
}
  }
function handleKeyUp(event) {
  if (event.which === KEY.LEFT) {
  console.log("left pressed");
  walker.speedX = 0
}
if (event.which === KEY.RIGHT) {
  console.log("right pressed");
   walker.speedX = 0
}
if (event.which === KEY.UP) {
  console.log("up pressed");
   walker.speedY = 0
}
if (event.which === KEY.DOWN) {
  console.log("down pressed");
   walker.speedY = 0
}
if (event.which === KEY2.LEFTROW) {
  console.log("left pressed");
  walker2.speedX = 0
}
if (event.which === KEY2.RIGHTROW) {
  console.log("right pressed");
   walker2.speedX = 0
}
if (event.which === KEY2.UPROW) {
  console.log("up pressed");
   walker2.speedY = 0
}
if (event.which === KEY2.DOWNROW) {
  console.log("down pressed");
   walker2.speedY = 0
}
}
  ////////////////////////////////////////////////////////////////////////////////
  ////////////////////////// HELPER FUNCTIONS ////////////////////////////////////
  ////////////////////////////////////////////////////////////////////////////////
  function newColor() {
    var randomColor = "#000000".replace(/0/g, function() {
      return (~~(Math.random() * 16)).toString(16);
    });
    $('#walker').css('background-color', randomColor);
  }
function repositionGameItem() {
  walker.x = walker.x + walker.speedX;
  walker.y = walker.y + walker.speedY;
  walker2.x = walker2.x + walker2.speedX;
  walker2.y = walker2.y + walker2.speedY;
}
function redrawGameItem() {
  $("#walker").css("left", walker.x);
  $("#walker").css("top", walker.y);
  $("#walker2").css("left", walker2.x);
  $("#walker2").css("top", walker2.y);
}
function wallCollision() {
  if (walker.x < 0) {
    walker.x -= walker.speedX
  }
   if (walker.x > $("#board").width() - 50) {
    walker.x -= walker.speedX;
  }
  if (walker.y < 0) {
    walker.y -= walker.speedY;
  }
  if (walker.y > $("#board").height() - 50) {
    walker.y -= walker.speedY
  }
  if (walker2.x < 0) {
    walker2.x -= walker2.speedX
  }
   if (walker2.x > $("#board").width() - 50) {
    walker2.x -= walker2.speedX;
  }
  if (walker2.y < 0) {
    walker2.y -= walker2.speedY;
  }
  if (walker2.y > $("#board").height() - 50) {
    walker2.y -= walker2.speedY
  }
}
  function endGame() {
    // stop the interval timer
    clearInterval(interval);

    // turn off event handlers
    $(document).off();
  }
  
}
