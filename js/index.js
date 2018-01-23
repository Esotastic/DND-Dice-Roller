//Injects multiple results rolls into a div under the main results.
var addDie = {
  multiDie: function(result) {
    document.getElementById("multidice").innerHTML = "";
    document.getElementById("multidice").innerHTML = document.getElementById(result).value;
  },

//Tells which die the user has currently selected.
  indication: function(pickedDice) {
    document.getElementById("selected-die").innerHTML = "";
    document.getElementById("selected-die").innerHTML = pickedDice.value;
  }
}

//Random number gens for each die
function rollDice(sides) {
    var rolled = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * sides) + 1;

    rolled.innerHTML =  "<p>" + rolledNumber + "</p>";
}
