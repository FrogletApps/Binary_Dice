var diceResults = new Array();
var diceSum;

//Generates a random number between 0 and 1 then rounds it to the nearest one
function dice(){
    return Math.round(Math.random());
}

//Get 4 dice rolls (0 to 3) and add them to the array (and print them)
function roll(){
    //Clear and reset
    document.getElementById("roll").innerHTML = "";
    document.getElementById("total").innerHTML = "";
    diceSum = 0;

    //Iterate through and generate dice rolls
    for(let i=0; i<=3; i++){
        diceResults[i] = dice();
        document.getElementById("roll").innerHTML += diceResults[i];
        //console.log(diceResults[i]);

        //Add the rolls together
        diceSum += diceResults[i];
    }

    document.getElementById("total").innerHTML = "The total is:  " + diceSum;
}