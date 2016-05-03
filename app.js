$(document).ready(function(){

for (var i = 1; i < 100; i++) {

	if (i % 5 === 0 && i % 3 === 0) {
	  console.log("fizzbuzz");
	  $( ".number" ).append( "fizzbuzz<br>");
	} else if (i % 3 === 0) {
	  $( ".number" ).append( "fizz<br>");
	} else if (i % 5 === 0) {
	  $( ".number" ).append( "buzz<br>");
	}



	else {
	$( ".number" ).append(i+"<br>");
	}

}

});

