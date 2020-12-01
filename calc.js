// This will check if jQuery has loaded. If not, it will add to <head>
window.onload = function() {
  if (!window.jQuery) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'http://code.jquery.com/jquery-latest.min.js';
    head.appendChild(script);
  }
}


//debugger time out
function defer(method) {
  if (window.jQuery) {
    method();
  } else {
    setTimeout(function() { defer(method) }, 50);
  }
}

// utf8 support
function encode_utf8(s) {
  return unescape(encodeURIComponent(s));
}

function decode_utf8(s) {
  return decodeURIComponent(escape(s));
}

//creates a listener for when you press a key
window.onkeyup = keyup;

// global input variable
var inputTextValue = "";
var inputNumber = new Number(inputTextValue);

// This will wait until Jquery is loaded then fire your logic
defer(function () {
  $("div").html(" ");
  console.log(document);
});

function keyup(e) {
  //setting your input text to the global Javascript Variable for every key press
	inputNumber = e.target.value;
	$('#searchValue').text(" ");

  //listens for you to press the ENTER key, at which point your web address will change to the one you have input in the search box
  if (e.keyCode == 13) {
	  calculateAndDisplay();
  }
}

function calculateAndDisplay() { 
  //CO2 formula
	var calculatedCO2 = Math.round(inputNumber * 257.5556);

	if (Number.isNaN(inputNumber) == true){
		$('#searchValue').decode_utf8.text("Sorry, this number is not valid");
		}
  else
    $('#searchValue').text(calculatedCO2 + " kg of CO₂ emissions can be saved by using our biochar!");
	  //$('#searchValue').innerHTML = calculatedCO2 + " kg of CO<small>2</small> &#w2082; emissions can be saved by using our biochar!";
}
