var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);

if (isMobile) {
    const index_mobile = document.createElement('script');
    index_mobile.type = 'text/javascript';
    index_mobile.src = 'index-lite.js';
    document.head.appendChild(index_mobile);
    console.log("Lite (Mobile) Interface");
    document.querySelector("#scroll_video").innerHTML = null;
}
else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    const index_mobile = document.createElement('script');
    index_mobile.type = 'text/javascript';
    index_mobile.src = 'index-lite.js';
    document.head.appendChild(index_mobile);
    console.log("Lite (Mobile) Interface");
    document.querySelector("#scroll_video").innerHTML = null;
}
else {
    const index = document.createElement('script');
    index.type = 'text/javascript';
    index.src = 'index.js';
    document.head.appendChild(index);
    console.log("Desktop Interface");
}