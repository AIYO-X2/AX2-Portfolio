window.onload = function() {
    window.setTimeout("document.getElementById('fullscreen_static').style.opacity='0';", 100)
    window.setTimeout("document.getElementById('fullscreen_static').style.display='none';", 400)
    fullscreen_static.style.transition = '0.3s ease-in-out';
    window.setTimeout("document.getElementById('loading_text').style.opacity='0';", 100)
    window.setTimeout("document.getElementById('loading_text').style.display='none';", 400)
    loading_text.style.transition = '0.3s ease-in-out';
}