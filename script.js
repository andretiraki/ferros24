document.addEventListener('DOMContentLoaded', function() {
    var video = document.getElementById('background-video');
    video.play().catch(function(error) {
        console.log('Video playback failed:', error);
    });
});