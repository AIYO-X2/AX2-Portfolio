var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
var index_platform_chooser = document.querySelector

if (isMobile) {
    const index_mobile = document.createElement('script');
    index_mobile.type = 'text/javascript';
    index_mobile.src = 'index_mobile.js';
    document.head.appendChild(index_mobile);
    console.log("Mobile Interface");
}
else {
    const index = document.createElement('script');
    index.type = 'text/javascript';
    index.src = 'index.js';
    document.head.appendChild(index);
    console.log("Desktop Interface");
}