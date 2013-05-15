$.fn.highlight = function(rect, color) {
	$("<div />", {
		"css": {
			"border":   "2px solid " + color,
			"position":	"absolute",
			"left":		($(this).offset().left + rect[0]) + "px",
			"top":		($(this).offset().top  + rect[1]) + "px",
			"width": 	rect[2] + "px",
			"height": 	rect[3] + "px"
		}
	}).appendTo("body");
}

$.getScript("http://static.codevinsky.com/catface/js/objectdetect.min.js", function(data, textStatus, jqxhr) {
	images = $('img');
	console.log(images);
	console.log(images.length + ' images found');
	$.each(images,function(index,image,array) {
		$(images).objectdetect("all", {classifier: objectdetect.frontalface}, function(faces) {
			console.log('images scanned....');
			console.log('faces found: ' + faces.length);
			for (var i = 0; i < faces.length; ++i) {
				$(this).highlight(faces[i], "red");
			}
		});
	})
	
});
