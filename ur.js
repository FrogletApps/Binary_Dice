var diceResults = new Array();
var diceSum = 0;

//Generates a random number between 0 and 1 then rounds it to the nearest one
function dice(){
    return Math.round(Math.random());
}

//get 4 dice rolls (0 to 3) and add them to the array (and print them)
for(i=0; i<=3; i++){
    diceResults[i] = dice();
    roll.innerHTML += diceResults[i];
}

for(i=0; i<=3; i++){
    diceSum = diceSum + diceResults[i]
}
total.innerHTML += diceSum;