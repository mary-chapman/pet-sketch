
	//$.getJSON(API, data, callbackfunction)



//for animal button

	$(".animal").click(function() {
		
		var flickerAPI = "https://www.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";
		
		var cat = $(this).text();
		var data = {
			tags: cat,
			format: "json"
		};
		
		function displayPhotos(data) {
			var photoHTML = '<ul>';

			$.each(data.items, function(i, photo) {
				if (i >= 1) return false;
				photoHTML += '<li class="image">';
				photoHTML += '<a href="' + photo.link + '" class="photo">';
				photoHTML += '<img class="imgA" src="' + photo.media.m + '" width=300 height=300"></a></li>';
			});
			photoHTML += '</ul>';

		$("#pets").html(photoHTML);
		} //display photos close
	
		$.getJSON(flickerAPI, data, displayPhotos);	

	}); //button click end	


//MOVE PICTURE button
$("#movePic").click(function() {
	$("#pets").css("pointer-events", "auto");
	$(this).css("background", "green");
	$("#trace").css("background", "#00b300");

	});
$("#trace").click(function() {
	$("#pets").css("pointer-events", "none");
	$(this).css("background", "green");
	$("#movePic").css("background", "#00b300");
	$("#pets").css("opacity", .5);
	});

//opacity of pics
	function changeOpac() {
		var op = $("#opac").val();
		console.log(op);
		$("#pets").css("opacity", op/200);
	}
	$("input[type=range]").change(changeOpac);

//clear pic
$("#c").click(function() {
	$("#pets").css("display", "none");
});

$(".animal").click(function() {
	$("#pets").css("display", "inline");
});


////*******TO DRAW***********//
var context = $("canvas")[0].getContext("2d");
var lastEvent;
var mouseDown = false;

//add picture to canvas
/*$("#c").onclick = function() {
	var img = document.getElementByClassName("imgA");
	context.drawImage(img, 0, 0);
}*/

//color of circle changes depending on slider value
function changeColor() {
	var r = $("#red").val();
	var g = $("#green").val();
	var b =$("#blue").val();

	$(".color").css("background-color", "rgb(" + r + "," + g + "," + b + ")");
}
$("input[type=range]").change(changeColor);

var color = $(".color").css("background-color");

console.log(color);




//mouse events on canvas
$("canvas").mousedown(function(e) {
	lastEvent = e;
	mouseDown = true;
}).mousemove(function(e) {

//to draw
if (mouseDown) {
	context.beginPath();
	context.moveTo(lastEvent.offsetX, lastEvent.offsetY);
	context.lineTo(e.offsetX, e.offsetY);
	context.strokeStyle = $(".color").css("background-color");

	context.stroke();
	lastEvent = e;
}

}).mouseup(function() {
	mouseDown = false;
});
/* * * * *
//adds the new color to a palet
function newC() { 
	var $c = $("<div></div>").appendTo(".addPalet"); 
	$($c).addClass("colorSmall");
}

$("#newColorBtn").click(function() {
	newC();
	$(".addPalet").append("<p>TEST</p>");
});
* * * * */

