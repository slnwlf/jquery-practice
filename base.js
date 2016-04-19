console.log("JS is working!");
$(document).ready(function() {
	$("#button1").click(function(){
		$("#red-box").hide();
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
		$(this).css("color", "white");
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

});