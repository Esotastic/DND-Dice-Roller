//Random number gen
function rollDice(sides) {
  document.getElementById("multidice").innerHTML = "";
  var moreDice = Number(document.getElementById("dicemultiply").value);
  var rolled = document.getElementById("results");
  var multiDice = document.getElementById("multidice");
  var rolledNumber = Math.floor(Math.random() * sides) + 1;

  for (i = 0; i < moreDice; i++){
    if (moreDice > 0) {
      //Injects multiple results rolls into a div under the main results
      var rolledNumberMulti = Math.floor(Math.random() * sides) + 1;
      multiDice.innerHTML += "<p>" + rolledNumberMulti + "</p>";
      rolled.innerHTML =  "<p>" + rolledNumber + "</p>"
    } else {
      multiDice.innerHTML = "";
      rolled.innerHTML =  "<p>" + (Math.floor(Math.random() * sides) + 1) + "</p>";
   }
 }

    //Tells which die the user has currently selected.
    document.getElementById("selected-die").innerHTML = "";
    document.getElementById("selected-die").innerHTML = "<p> d" + sides + "</p>";
}
