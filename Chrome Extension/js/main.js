(function(){

document.addEventListener("DOMContentLoaded", function(event) {
	var newsfeed = document.getElementById('topnews_main_stream_408239535924329');
  if (newsfeed) {
    hideElement(newsfeed);
  }
});

function hideElement(el) {
	el.parentNode.removeChild(el);
}

}());

