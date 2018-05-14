$(document).ready(function() {

//global variables

var matchPower = Math.floor(Math.random() * 101 + 19);
var gemY = Math.floor(Math.random() * 11 + 1);
var gemO = Math.floor(Math.random() * 11 + 1);
var gemB = Math.floor(Math.random() * 11 + 1);
var gemP = Math.floor(Math.random() * 11 + 1);
var userPower = 0;
var wins = 0;
var losses = 0;

//on clicks
$( "#yellow" ).click(function() {
    userPower = userPower + gemY;
    console.log(gemY);
    console.log(userPower);
    $( "#power" ).html("Your power level: <br>" + userPower);

  });                               


 $( "#orange" ).click(function() {
        userPower = userPower + gemO;
        console.log(gemO);
        console.log(userPower);
        $( "#power" ).html("Your power level: <br>" + userPower);

  });         
  
 $( "#blue" ).click(function() {
        userPower = userPower + gemB;
        console.log(gemB);
        console.log(userPower);
        $( "#power" ).html("Your power level: <br>" + userPower);

  }); 

  $( "#purple" ).click(function() {
    userPower = userPower + gemP;
    console.log(gemP);
    console.log(userPower);
    $( "#power" ).html("Your power level: <br>" + userPower);

}); 

if (userPower == matchPower) {
    alert("u win");
    wins++;
} 

if (userPower > matchPower) {
    alert("u lose");
    losses++;
}
  







//soul gem takeover
$( "#toGuess" ).html("Match this power level: <br>" + matchPower);
$( "#wins" ).html("Wins: " + wins);
$( "#losses" ).html("Losses: " + wins);





});