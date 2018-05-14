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


//functions

//i know i am repeating my code alot, I had all the ifs on a function called endConditions() but for 
//some reason it didnt work
//i ll be more elegant in the future
//as i write this i think i was calling endCondition() not endConditions()...but oh well...
 




//on clicks
    $( "#yellow" ).click(function() {
        userPower = userPower + gemY;
        console.log(gemY);
        console.log(userPower);
        $( "#power" ).html("Your power level: <br>" + userPower);
        if(userPower == matchPower) {
            alert("u win");
            wins++;
            $("#wins").html("Wins: " + wins);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



        }
        if(userPower > matchPower) {
            alert("u lose");
            losses++;
            $("#losses").html("Losses: " + losses);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);


        }

  });                               


    $( "#orange" ).click(function() {
        userPower = userPower + gemO;
        console.log(gemO);
        console.log(userPower);
        $( "#power" ).html("Your power level: <br>" + userPower);
        if(userPower == matchPower) {
            alert("u win");
            wins++;
            $("#wins").html("Wins: " + wins);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



        }
        if(userPower > matchPower) {
            alert("u lose");
            losses++;
            $("#losses").html("Losses: " + losses);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



        }

  });         
  
    $( "#blue" ).click(function() {
        userPower = userPower + gemB;
        console.log(gemB);
        console.log(userPower);
        $( "#power" ).html("Your power level: <br>" + userPower);
        if(userPower == matchPower) {
            alert("u win");
            wins++;
            $("#wins").html("Wins: " + wins);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



        }
        if(userPower > matchPower) {
            alert("u lose");
            losses++;
            $("#losses").html("Losses: " + losses);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



        }
        

  }); 

     $( "#purple" ).click(function() {
        userPower = userPower + gemP;
        console.log(gemP);
        console.log(userPower);
        $( "#power" ).html("Your power level: <br>" + userPower);
        if(userPower == matchPower) {
            alert("u win");
             wins++;
            $("#wins").html("Wins: " + wins);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



    }
        if(userPower > matchPower) {
            alert("u lose");
            losses++;
            $("#losses").html("Losses: " + losses);
            userPower = 0;
            matchPower = 0;
            matchPower = Math.floor(Math.random() * 101 + 19);
            $( "#toGuess" ).html("Match this power level: <br>" + matchPower);
            $( "#power" ).html("Your power level: <br>" + userPower);

            gemY = 0;
            gemO = 0;
            gemB = 0;
            gemP = 0;
            gemY = Math.floor(Math.random() * 11 + 1);
            gemO = Math.floor(Math.random() * 11 + 1);
            gemB = Math.floor(Math.random() * 11 + 1);
            gemP = Math.floor(Math.random() * 11 + 1);



    }

}); 



$( "#toGuess" ).html("Match this power level: <br>" + matchPower);
















});