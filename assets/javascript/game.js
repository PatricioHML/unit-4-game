$(document).ready(function() {

var matchPower = Math.floor(Math.random() * 101 + 19);
var ygem = Math.floor(Math.random() * 11 + 1);
var ogem = Math.floor(Math.random() * 11 + 1);
var bgem = Math.floor(Math.random() * 11 + 1);
var pgem = Math.floor(Math.random() * 11 + 1);

$( "#toGuess" ).html("Match this power level: <br>" + matchPower);


});