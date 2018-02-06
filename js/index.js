//Injects multiple results rolls into a div under the main results.
var addDie = {
  multiDie: function(result) {
    var extraDice = document.getElementById(result).value;
    // document.getElementById("multidice").innerHTML = "";
    // document.getElementById("multidice").innerHTML = extraDice;
  },
}

//Random number gen
function rollDice(sides) {
  var moreDice = document.getElementById("dicemultiply").value;
  var rolled = document.getElementById("results");
  var multiInner = document.getElementById("multidice").innerHTML;
  var rolledNumber = Math.floor(Math.random() * sides) + 1;

  if (moreDice > 0){
    document.getElementById("multidice").innerHTML = "<p>" + (rolledNumber * moreDice) + "</p>";
  } else {
    document.getElementById("multidice").innerHTML = "";
    rolled.innerHTML =  "<p>" + rolledNumber + "</p>";
 }

    //Tells which die the user has currently selected.
    document.getElementById("selected-die").innerHTML = "";
    document.getElementById("selected-die").innerHTML = "<p> d" + sides + "</p>";
}
