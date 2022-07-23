window.onload = function() {
    window.setTimeout("document.getElementById('fullscreen_static').style.opacity='0';", 200)
    window.setTimeout("document.getElementById('fullscreen_static').style.display='none';", 600)
    fullscreen_static.style.transition = '0.4s ease-in-out';
}