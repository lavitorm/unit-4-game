// A $( document ).ready() block.
//https://learn.jquery.com/using-jquery-core/document-ready/
$( document ).ready(function() {
    console.log( "ready!" );
});
//https://www.w3schools.com/js/js_random.asp
//JavaScript Random Integers
//The random number shown at the start of the game should be between 19 - 120
var randomNumber=Math.floor(Math.random()*101+19)
//The player will be shown a random number at the start of the game
$('#randomNumber').text(randomNumber);
// Each crystal should have a random hidden value between 1 - 12
var ruby= Math.floor(Math.random()*11)+1;
var diamond= Math.floor(Math.random()*11)+1;
var sapphire= Math.floor(Math.random()*11)+1;
var esmerald= Math.floor(Math.random()*11)+1;
//The app should show the number of games the player wins and loses
var randomNumber = "Random Number: " + randomNumber;
var wins = "wins: " + 0;
var losses = "losses: " + 0;
var score= 0; 
$('#wins').text(wins);
$('#losses').text(losses);
//The game restarts whenever the player wins or loses
//function reset
function reset(){
    randomNumber=Math.floor(Math.random()*101+19);
    console.log(randomNumber)
    $('#randomNumber').text("Number: " + randomNumber);
    ruby= Math.floor(Math.random()*11+1);
    diamond= Math.floor(Math.random()*11+1);
    sapphire= Math.floor(Math.random()*11+1);
    esmerald= Math.floor(Math.random()*11+1);
    score= 0;
    $('#score').text(score);
    } 
//testing the code with "alert" function (if it adds the wins/losses to the score)
function winner(){
    alert("You win!!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }
function loser(){
    alert ("You lose!");
      losses++;
      $('#losses').text(losses);
      reset();
    }
//setup click for crystals
//win/lose conditions
//Players win if their total score matches the random number from the beginning of the game
//Players lose if their score goes above the random number
  $('#ruby').on ('click', function(){
    score = score + ruby;
    console.log("score= " + score);
    $('#score').text(score); 
        if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        }   
  })  
  $('#diamond').on ('click', function(){
    score = score + diamond;
    console.log("score= " + score);
    $('#score').text(score); 
        if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        } 
  })  
  $('#sapphire').on ('click', function(){
    score = score + sapphire;
    console.log("score = " + score);
    $('#score').text(score);
          if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        } 
  })  
  $('#esmerald').on ('click', function(){
    score = score + esmerald;
    console.log("Updated Score = " + score);
    $('#scoreLabel').text(score); 
      
          if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        }
  });		
