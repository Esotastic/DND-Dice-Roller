//Injects multiple results rolls into a div under the main results.
var addDie = {
  multiDie: function(result) {
    document.getElementById("multidice").innerHTML = "";
    document.getElementById("multidice").innerHTML = document.getElementById(result).value;
  },

//Tells which die the user has current selected. 
  indication: function(pickedDice) {
    document.getElementById("selected-die").innerHTML = "";
    document.getElementById("selected-die").innerHTML = pickedDice.value;
  }
}

//Random number gens for each die
var diceRoll = {
  rollAll: function(dice){
    
  },
  
  rolld20: function() {
    var rolled20 = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * 20) + 1;

    if (rolledNumber === 20) {
      rolled20.innerHTML = "<p>" + rolledNumber + "<br>Nice!</p>";
    } else if (rolledNumber === 1) {
      rolled20.innerHTML = "<p>" + rolledNumber + "<br>Oops.</p>";
    } else {
      rolled20.innerHTML = "<p>" + rolledNumber + "</p>";
    }
  },
  rolld12: function() {
    var rolled12 = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * 12) + 1;
    rolled12.innerHTML = "<p>" + rolledNumber + "</p>";
  },
  rolld10: function() {
    var rolled10 = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * 10) + 1;
    rolled10.innerHTML = "<p>" + rolledNumber + "</p>";
  },
  rolld8: function() {
    var rolled8 = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * 8) + 1;
    rolled8.innerHTML = "<p>" + rolledNumber + "</p>";
  },
  rolld6: function() {
    var rolled6 = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * 6) + 1;
    rolled6.innerHTML = "<p>" + rolledNumber + "</p>";
  },
  rolld4: function() {
    var rolled4 = document.getElementById("results");
    var rolledNumber = Math.floor(Math.random() * 4) + 1;
    rolled4.innerHTML = "<p>" + rolledNumber + "</p>";
  }
};