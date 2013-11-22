(function(){

$(document).ready(function(){
    if ($('#topnews_main_stream_408239535924329').length > 0) {
        hideNewsFeed();
    }
//Facebook pulls data in via scripts so we need to re-check if the user has navigated to a new page every second.
window.setInterval(function(){
    if ($('#topnews_main_stream_408239535924329').length > 0) {
        hideNewsFeed();
    }
},20000);
});

function hideNewsFeed() {
    $('#topnews_main_stream_408239535924329').remove();
}

}());

