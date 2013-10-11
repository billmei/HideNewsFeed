(function(){

$(document).ready(function(){
    if ($('#pagelet_home_stream').length > 0) {
        hideNewsFeed();
    }
//Facebook pulls data in via scripts so we need to re-check if the user has navigated to a new page every second.
window.setInterval(function(){
    if ($('#pagelet_home_stream').length > 0) {
        hideNewsFeed();
    }
},1000);
});

function hideNewsFeed() {
    $('#pagelet_home_stream').remove();
}

}());

