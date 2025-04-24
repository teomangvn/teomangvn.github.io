$(document).ready(function() {
	// preload images
	$("#image_list a").each(function() {
		var swappedImage = new Image();
		swappedImage.src = $(this).attr("href");
	});

	// set up event handlers for links    
	$("#image_list a").click(function(evt) {
		evt.preventDefault();
		$("#image, #caption").fadeOut(1000, () => {
			// Get new image URL and caption
			var imageURL = $(this).attr("href");
			var caption = $(this).attr("title");

			// Set new image and caption
			$("#image").attr("src", imageURL);
			$("#caption").text(caption);

			// Fade in new image and caption
			$("#image, #caption").fadeIn(1000);
		});
	}); // end click

	$("li:first-child a").focus();
}); // end ready