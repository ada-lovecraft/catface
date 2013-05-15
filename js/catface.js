$.getScript("http://static.codevinsky.com/catface/js/objectdetect.min.js", function(data, textStatus, jqxhr) {
	images = $('img');
	console.log(images);
	console.log(images.length + ' images found');
	$.each(images,function(index,image,array) {
		$(images).objectdetect("all", {classifier: objectdetect.frontalface}, function(faces) {
			console.log('images scanned....');
			for (var i = 0; i < faces.length; ++i) {
				$(this).highlight(faces[i], "red");
			}
		});
	})
	
});
