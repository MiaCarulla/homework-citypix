//wait for DOM elements to load
$(function() {
	//Prevent a form submission using event.preventDefault()	
	$('#submit-btn').on('click', function(event){
		event.preventDefault();
		
		//get userInput and UPPERCASE 
		var userInput = $('#city-type').val().toUpperCase().trim();

		console.log(userInput);
		//if userInput === "New York City" || "New York" || "NYC" make backgroung image nyc.jpg
		if(userInput === "NYC" || userInput === "NEW YORK" || userInput === "NEW YORK CITY"){
			$('body').css('background', 'url(./images/nyc.jpg) no-repeat center 100% fixed');
		}
		//else if userInput === "SF" || "San Francisco" || "Bay Area" make background image sf.jpg
		else if(userInput === "SF" || userInput === "SAN FRANCISCO" || userInput === "BAY AREA"){
			$('body').css('background', 'url(./images/sf.jpg) no-repeat center 100% fixed');
		}
		//else if userInput === "Los Angeles" || "LA" || "LAX" make background image la.jpg
		else if(userInput === "LOS ANGELES" || userInput === "LA" || userInput === "LAX"){
			$('body').css('background', 'url(./images/la.jpg) no-repeat center 100% fixed');
		}
		//else if userInput === "Austin" || "ATX" make background image austin.jpg
		else if(userInput === "AUSTIN" || userInput === "ATX"){
			$('body').css('background', 'url(./images/austin.jpg) no-repeat center 100% fixed');
		}

		//else userInput === "Sydney" || "SYD" make background image sydney.jpg
		else if(userInput === "SYDNEY" || userInput === "SYD"){
			$('body').css('background', 'url(./images/sydney.jpg) no-repeat center 100% fixed');
		}

	});
});










		
	
	