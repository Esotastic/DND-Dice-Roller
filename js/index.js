//Injects multiple results rolls into a div under the main results.
var addDie = {
  multiDie: function(result) {
    document.getElementById("multidice").innerHTML = "";
    document.getElementById("multidice").innerHTML = document.getElementById(result).value;
  },
}

//Random number gen
function rollDice(sides) {
    var rolled = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * sides) + 1;
    rolled.innerHTML =  "<p>" + rolledNumber + "</p>";

    //Tells which die the user has currently selected.
    document.getElementById("selected-die").innerHTML = "";
    document.getElementById("selected-die").innerHTML = "<p> d" + sides + "</p>";

}
