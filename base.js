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
	}, function(){
		$(this).css("background-color", "white");
	});

	$("#two").hover(function(){
		$(this).css("background-color", "orange");
	}, function(){
		$(this).css("background-color", "white");
	});

	$("#three").hover(function(){
		$(this).css("background-color", "yellow");
	}, function(){
		$(this).css("background-color", "white");
	});

	$("#four").hover(function(){
		$(this).css("background-color", "green");
	}, function(){
		$(this).css("background-color", "white");
	});

});