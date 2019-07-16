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
var wins= 0;
var losses = 0;
var score= 0; 
$('#wins').text(wins);
$('#losses').text(losses);
//The game restarts whenever the player wins or loses
//function reset
function reset(){
    randomNumber=Math.floor(Math.random()*101+19);
    console.log(randomNumber)
    $('#randomNumber').text(randomNumber);
    ruby= Math.floor(Math.random()*11+1);
    diamond= Math.floor(Math.random()*11+1);
    saphire= Math.floor(Math.random()*11+1);
    esmerald= Math.floor(Math.random()*11+1);
    score= 0;
    $('#score').text(score);
    } 
//adds the wins to the score
function winner(){
    alert("You win!!");
      wins++; 
      $('#wins').text(wins);
      reset();
    }
//addes the losses to the score
function loser(){
    alert ("You lose!");
      losses++;
      $('#losses').text(losses);
      reset();
    }
//sets up click for crystals
  $('#ruby').on ('click', function(){
    score = score + ruby;
    console.log("updated score= " + score);
    $('#score').text(scoreLabel); 
          //sets win/lose conditions
        if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        }   
  })  
  $('#diamond').on ('click', function(){
    score = score + diamond;
    console.log("New scoreLabel= " + score);
    $('#scoreLabel').text(score); 
        if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        } 
  })  
  $('#sapphire').on ('click', function(){
    score = score + sapphire;
    console.log("Updated Score = " + score);
    $('#scoreLabel').text(score);
//sets win/lose conditions
          if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        } 
  })  
  $('#four').on ('click', function(){
    score = score + esmerald;
    console.log("Updated Score = " + score);
    $('#finalTotal').text(score); 
      
          if (score == randomNumber){
          winner();
        }
        else if (score > randomNumber){
          loser();
        }
  });		
