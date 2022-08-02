window.addEventListener("load", () => {
    var isMobile = navigator.userAgent.toLowerCase().match(/mobile/i);
    var index_platform_chooser = document.querySelector

    if (isMobile) {
        document.head.innerHTML += '<script type="text/javascript" src="index_mobile.js"></script>';
        console.log("Mobile Interface");
    }
    else {
        document.head.innerHTML = '<meta charset="utf-8" /> <meta name="viewport" content="width=device-width, initial-scale=1.0" /> <title>Aiyo x Ariel: Welcome</title> <link rel="icon" type="image/jpg" href="favicon.jpg"> <script type="text/javascript" src="index.js"></script> <link href="index.css" rel="stylesheet" type="text/css" media="screen" /> <link href="footer.css" rel="stylesheet" type="text/css" />';
        console.log();
    }
});