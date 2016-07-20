console.log("JS is working!");
$(document).ready(function() {
	$("#button0").click(function(){
		$("#black-box").toggle();
	});
	$("#button1").click(function(){
		$("#red-box").hide();
	});
		$("#button1-show").click(function(){
		$("#red-box").show();
	});
	$("#button2").click(function(){
	$("#orange-box").fadeOut(2000);
	});

	$("#button3").click(function(){
		$("#yellow-box").text("thanks for clicking!");
	});

	$("#one").hover(function(){
		$(this).css("background-color", "red");
		$(this).css("color", "white");
	}, function(){
		$(this).css("background-color", "white");
		$(this).css("color", "black");
	});

	$("#two").hover(function(){
		$(this).css("background-color", "orange");
		$(this).css("color", "white");
	}, function(){
		$(this).css("background-color", "white");
		$(this).css("color", "black");
	});

	$("#three").hover(function(){
		$(this).css("background-color", "yellow");
		// $(this).css("color", "white");
	}, function(){
		$(this).css("background-color", "white");
		$(this).css("color", "black");
	});

	$("#four").hover(function(){
		$(this).css("background-color", "green");
		$(this).css("color", "white");
	}, function(){
		$(this).css("background-color", "white");
		$(this).css("color", "black");
	});

	$("#green-box").hover(function(){
		$(this).css("background-color", "pink");
	});

	$("#blue-box").hover(function(){
		$(this).slideToggle("slow");
	});

	$("#indigo-box").hover(function(){
		$(this).append("<p>only hover once!</p>");
	});

});