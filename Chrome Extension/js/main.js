(function(){

document.addEventListener("DOMContentLoaded", function(event) {
	var idsToHide = ['pagelet_trending_tags_and_topics', 'topnews_main_stream_408239535924329'];
	for (int i = 0; i < idsToHide.length; i++) {
		var item = document.getElementById('topnews_main_stream_408239535924329');
		if (item) {
			hideElement(item);
		}
	}
});

function hideElement(el) {
	el.parentNode.removeChild(el);
}
}());
