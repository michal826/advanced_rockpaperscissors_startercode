//Class 1:
// Fork and clone the repo and set up your project workspace and link files
// Write HTML for your project
//Class 2:  
// Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
// Practice using console.log() and debugger to debug your code
// Create your document ready function. 
// Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
// Display the user choice to the output screen
//Class 3:  
// Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
// Display the computer choice to the output screen
// Compare the user choice and the computer choice to determine who won. 
// Display the user winner to the output screen 
// Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

console.log("running")
$("#button").click(function() {
  var user = $("#input").val();
  var result = compare(user, computerChoice())
  $("#Result").html(result);
  if (user !== 'rock' || 'paper' || 'scissors') {
    console.log("Incorect");
  }
});

var compare = function(me, opponent) {
  console.log(me, opponent)
  if (me === 'rock') {

    if (opponent === 'rock') {
      return 'Tie';
    }
    else if (opponent === 'paper') {
      return 'Computer Wins';
    }
    else if (opponent === 'scissors') {
      return 'You Win !';
    }

  }
  else if (me === 'paper') {

    if (opponent === 'paper') {
      return 'Tie';
    }
    else if (opponent === 'rock') {
      return 'You Win';
    }
    else if (opponent === 'scissors') {
      return 'Computer Wins';
    }
  }
  else if (me === 'scissors') {

    if (opponent === 'scissors') {
      return 'Tie';
    }
    else if (opponent === 'paper') {
      return 'You win';
    }
    else if (opponent === 'rock') {
      return 'Computer Wins';
    }
  }
  else {
    return "That doesn't make any sense!"
  }
};
var computerChoice = function() {
  var random = Math.random();
  if (random < 0.333) {
    $("#Com").attr("src", "https://cdn2.iconfinder.com/data/icons/outlined-valuable-items/200/minerals_pure_silver-512.png");
    return 'rock';


  }
  else if (random < 0.67777) {
    $("#Com").attr("src", "https://cdn4.iconfinder.com/data/icons/48-bubbles/48/12.File-512.png");
    return 'paper';

  }
  else {
    $("#Com").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Scissors_icon_black.svg/1280px-Scissors_icon_black.svg.png");
    return 'scissors';

  }
  //FUNCTIONS



  // DOCUMENT READY FUNCTION
};
