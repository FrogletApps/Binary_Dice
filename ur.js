var diceResults = new Array();
var diceSum;
var test;

//Generates a random number between 0 and 1 then rounds it to the nearest one
function dice(){
    return Math.round(Math.random());
}

//get 4 dice rolls (0 to 3) and add them to the array (and print them)
function roll(){
    //clear and reset
    document.getElementById("roll").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    diceSum = 0;

    for(i=0; i<=3; i++){
        diceResults[i] = dice();
        document.getElementById("roll").innerHTML += diceResults[i];
        test += diceResults[i];
        //console.log(diceResults[i]);
    }

    for(i=0; i<=3; i++){
        diceSum = diceSum + diceResults[i]
    }
    document.getElementById("total").innerHTML = "The total is:  " + diceSum;
}