function(){
	$.getScript("http://static.codevinsky.com/catface/js/objectdetect.min.js", function(data, textStatus, jqxhr) {
		$("#face").objectdetect("all", {classifier: objectdetect.frontalface}, function(faces) {
			for (var i = 0; i < faces.length; ++i) {
				$(this).highlight(faces[i], "red");

			}
		});
	});
};