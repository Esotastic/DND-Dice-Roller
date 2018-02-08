
//Random number gen
function rollDice(sides) {
  document.getElementById("multidice").innerHTML = "";
  var moreDice = Number(document.getElementById("dicemultiply").value);
  var rolled = document.getElementById("results");
  var multiDice = document.getElementById("multidice");
  var rolledNumber = Math.floor(Math.random() * sides) + 1;
  var arr = [];

  // Function built for adding multi die numbers later on when a reduce call is made.
  function getSum(total, num) {
      return total + num;
  }

// Dice rolling fuction. Controls both single and multi dice rolls.
  for (var i = 0; i < moreDice; i++){
   if (moreDice > 1) {
    //Injects multiple results rolls into a div under the main results
    var rolledNumberMulti = Math.floor(Math.random() * sides) + 1;
    arr.push(rolledNumberMulti);
    var reducedArr = arr.reduce(getSum);
    multiDice.innerHTML += "<p>" + rolledNumberMulti + "</p>";
    rolled.innerHTML =  "<p>" + reducedArr + "</p>";
   } else {
    multiDice.innerHTML = "";
    rolled.innerHTML =  "<p>" + rolledNumber + "</p>";
   }
  }

    //Tells which die the user has currently selected.
    document.getElementById("selected-die").innerHTML = "";
    document.getElementById("selected-die").innerHTML = "<p> d" + sides + "</p>";
}
