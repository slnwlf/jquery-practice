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
	
});