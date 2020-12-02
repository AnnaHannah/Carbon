// This will check if jQuery has loaded. If not, it will add to <head>
window.onload = function () {
  if (!window.jQuery) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://code.jquery.com/jquery-latest.min.js';
    head.appendChild(script);
  }
}

// This will wait until Jquery is loaded then fire your logic
defer(function () {
  $("div").html(" ");
  console.log(document);
});

//debugger time out
function defer(method) {
  if (window.jQuery) {
    method();
  } else {
    setTimeout(function () { defer(method) }, 50);
  }
}


//creates a listener for when you press a key
window.onkeyup = keyup;

// global input variable
var inputNumber = "";
var inputNumber = new Number(inputNumber);

//var inputTextValueEuro = "";
//var inputNumEuro = new Number(inputTextValueEuro);


function calculateAndDisplay(inputNumber) {
  //CO2 formula
  var calculatedCO2 = Math.round(inputNumber * 257.5556);
  // the " at the end of searchValue, please let it there, that is the only way this works, even if this violenced js norms
  if (Number.isNaN(calculatedCO2) == false) {
    if (inputNumber > 0) {
      $('#searchValue').text(calculatedCO2 + " kg of COâ‚‚  emisions can be safed by using our concrete, thats about 36% less");
    }
  }
}

function calculateAndDisplayPrice(inputNumber) {
  //Euro formula
  var calculatedCost = Math.round(inputNumber * 7466.85);
  if (Number.isNaN(calculatedCost) == false) {
    if (inputNumber > 0) {
      $('#searchValueEuro').text(calculatedCost + "â‚¬ is the estimated cost for our concrete")
    }
  }
}
function calculateAndDisplayPriceDiff(inputNumber) {
  //Euro Differenz formula
  var calculatedCostDiff = Math.round(inputNumber * 0.99666392119);
  if (Number.isNaN(calculatedCostDiff) == false) {
    if (inputNumber > 0) {
      $('#searchValueEuroDiff').text(calculatedCostDiff + "â‚¬  is the cost-difference to conventional products")
    }
  }
}

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
  inputNumber = e.target.value;
  calculateAndDisplay(inputNumber);
  calculateAndDisplayPrice(inputNumber);
  calculateAndDisplayPriceDiff(inputNumber);

}
