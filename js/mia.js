function find() {
	var destinations = 
		[ 
			{ 
				"Country" : "New Zealand",
			 	"Comment" : "Sheep... Sheep Everywhere...", 
			 	"Image"   : "newzealand.jpg"
			}, 
			{ 
				"Country" : "Korea",
				"Comment" : "An Nyung..!! Let's go for shopping!",
				"Image"   : "korea.jpg" 
			}, 
			{ 
				"Country" : "Indonesia",
				"Comment" : "Selamat Datang! Very warm country on December!",
				"Image"	  : "indonesia.jpg" 
			}, 
			{ 
				"Country" : "US",
				"Comment" : "It is expensive.. But you can see snow!",
				"Image"	  : "us.jpg" 
			}, 
			{ 
				"Country" : "Beijing",
				"Comment" : "Well it's great to see your mother once in a while",
				"Image"	  : "beijing.jpg"
			}, 
			{ 
				"Country" : "Forever Alone",
				"Comment" : "Too bad.. you will enjoy xmas by yourself..",
				"Image"		: "foreveralone.png"
			}
		];

		displayDestination(destinations[generateRandomNumber(destinations.length)])
}

function displayDestination(destination) {
	$(".btn").attr('disabled', 'disabled');
	$(".btn").text('Deciding....');
	$(".btn").removeAttr('onclick');

	$("#destination").empty();

	$( "#destination" ).animate({
    height: 560
  }, 3000, function() {
		$('#destination').append("<h3>"+ destination["Country"] + "</h3>");
		$('#destination').append("<br />");
		$('#destination').append("<img src='images/" + destination["Image"] + "' />");    
		$('#destination').append("<br />");    
		$('#destination').append("<br />");    
		$('#destination').append("<p>" + destination["Comment"] + "</p>"); 
		$(".btn").text('Done');
  });
}

function generateRandomNumber(max) {
	return Math.floor(Math.random() * max);
}