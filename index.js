// changing dice 
var randomNumber1 = Math.floor(Math.random()*6) + 1;

var randomImage1 = "dice" + randomNumber1 + ".png" ;

var randomDice1 = "images/" + randomImage1 ;

var dice1 = document.querySelectorAll("img")[0];

dice1.setAttribute("src", randomDice1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;


var randomImage2 = "dice" + randomNumber2 +".png" ;

var randomDice2 = "images/" + randomImage2 ;

var dice2 = document.querySelectorAll("img")[1];

dice2.setAttribute("src", randomDice2);

//declaring result
if(randomNumber1==randomNumber2){
    document.querySelector("h1").innerHTML="🥸It's a tie!🥸";
}
else if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="😍 Player 1 wins";
}
else{
    document.querySelector("h1").innerHTML= "Player 2 wins 😍";
}

