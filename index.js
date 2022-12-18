window.onload = function() {
    // Constant "title" defines what the constant is targeting
    const alpha_tv_cover = document.querySelector("#alpha_tv_cover")
    const lingering_screen_static = document.querySelector("#lingering_screen_static")
    const animated_tv_static = document.querySelector("#animated_tv_static")
    const scroll_instructions2 = document.querySelector("#scroll_instructions2")
    var project_thumbnail = document.getElementsByClassName('project_thumbnail')
    const fullscreen_static = document.querySelector("#fullscreen_static")
    const project_thumbnail_class = document.querySelectorAll('.project_thumbnail')
    const scroll_video = document.querySelector("#scroll_video")

    const project_title_1 = document.querySelector("#project_title_1")
    const project_title_2 = document.querySelector("#project_title_2")
    const project_title_3 = document.querySelector("#project_title_3")
    const project_title_4 = document.querySelector("#project_title_4")
    const project_title_5 = document.querySelector("#project_title_5")
    const project_title_6 = document.querySelector("#project_title_6")
    const project_title_7 = document.querySelector("#project_title_7")
    const project_title_8 = document.querySelector("#project_title_8")
    const project_title_9 = document.querySelector("#project_title_9")
    const project_title_10 = document.querySelector("#project_title_10")
    const project_title_11 = document.querySelector("#project_title_11")
    const project_title_12 = document.querySelector("#project_title_12")

    const project_thumbnail_1 = document.querySelector("#project_thumbnail_1")
    const project_thumbnail_2 = document.querySelector("#project_thumbnail_2")
    const project_thumbnail_3 = document.querySelector("#project_thumbnail_3")
    const project_thumbnail_4 = document.querySelector("#project_thumbnail_4")
    const project_thumbnail_5 = document.querySelector("#project_thumbnail_5")
    const project_thumbnail_6 = document.querySelector("#project_thumbnail_6")
    const project_thumbnail_7 = document.querySelector("#project_thumbnail_7")
    const project_thumbnail_8 = document.querySelector("#project_thumbnail_8")
    const project_thumbnail_9 = document.querySelector("#project_thumbnail_9")
    const project_thumbnail_10 = document.querySelector("#project_thumbnail_10")
    const project_thumbnail_11 = document.querySelector("#project_thumbnail_11")
    const project_thumbnail_12 = document.querySelector("#project_thumbnail_12")

    // SCROLL PLAYBACK FUNCTION
   var frameNumber = 0, // start video at frame 0
    // lower numbers = faster playback
    playbackConst = 300, 
    // get page height from video duration
    setHeight = document.getElementById("set-height");        

    // dynamically set the page height according to video length
    scroll_video.addEventListener('loadedmetadata', function() {
    setHeight.style.height = Math.floor(scroll_video.duration) * playbackConst + "px";
    });

    // Use requestAnimationFrame for smooth playback
    function scrollPlay(){  
    var frameNumber  = window.pageYOffset/playbackConst;
    scroll_video.currentTime  = frameNumber;
    window.requestAnimationFrame(scrollPlay);
    }

    window.requestAnimationFrame(scrollPlay);

    // TV SCROLL SCRIPT
    window.addEventListener('scroll', tv_scroll);
    function tv_scroll () {
        if(window.scrollY>=2665) {
            scroll_instructions2.style.visibility = 'visible';

            alpha_tv_cover.style.opacity = '1';
            alpha_tv_cover.style.transition = '0.2s ease-in-out';

            animated_tv_static.style.opacity = '1';
            animated_tv_static.style.transition = '0.2s ease-in-out';
            animated_tv_static.style.visibility = 'visible';

            lingering_screen_static.style.visibility = 'visible';

            window.setTimeout("scroll_video.style.visibility = 'hidden';", 200);
        }
        else {
            scroll_instructions2.style.visibility = 'hidden';
            
            alpha_tv_cover.style.opacity = '0';

            animated_tv_static.style.opacity = '0';
            animated_tv_static.style.visibility = 'hidden';

            lingering_screen_static.style.visibility = 'hidden';

            scroll_video.style.visibility = 'visible';
        }

        if(window.scrollY>=2900) {
            scroll_instructions2.style.visibility = 'hidden';
        }

        // TV Channel 1
        if(window.scrollY>=2900 & window.scrollY<=3100) {
            project_title_1.style.visibility = 'visible';

            project_thumbnail_1.style.opacity = '0.8';
            project_thumbnail_1.style.visibility = 'visible';
            project_thumbnail_1.style.transform = 'translateY(0px)';
            project_thumbnail_1.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_1.style.visibility = 'hidden';

            project_thumbnail_1.style.opacity = '0';
            project_thumbnail_1.style.transform = 'translateY(3px)';
            project_thumbnail_1.style.visibility = 'hidden';

            lingering_screen_static.style.opacity = '1';
        }

        // TV Channel 2
        if(window.scrollY>=3200 & window.scrollY<=3400) {
            project_title_2.style.visibility = 'visible';

            project_thumbnail_2.style.opacity = '0.8';
            project_thumbnail_2.style.visibility = 'visible';
            project_thumbnail_2.style.transform = 'translateY(0px)';
            project_thumbnail_2.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_2.style.visibility = 'hidden';

            project_thumbnail_2.style.opacity = '0';
            project_thumbnail_2.style.transform = 'translateY(3px)';
            project_thumbnail_2.style.visibility = 'hidden';
        }

        // TV Channel 3
        if(window.scrollY>=3500 & window.scrollY<=3700) {
            project_title_3.style.visibility = 'visible';

            project_thumbnail_3.style.opacity = '0.8';
            project_thumbnail_3.style.visibility = 'visible';
            project_thumbnail_3.style.transform = 'translateY(0px)';
            project_thumbnail_3.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_3.style.visibility = 'hidden';

            project_thumbnail_3.style.opacity = '0';
            project_thumbnail_3.style.transform = 'translateY(3px)';
            project_thumbnail_3.style.visibility = 'hidden';
        }

        // TV Channel 4
        if(window.scrollY>=3800 & window.scrollY<=4000) {
            project_title_4.style.visibility = 'visible';

            project_thumbnail_4.style.opacity = '0.8';
            project_thumbnail_4.style.visibility = 'visible';
            project_thumbnail_4.style.transform = 'translateY(0px)';
            project_thumbnail_4.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_4.style.visibility = 'hidden';

            project_thumbnail_4.style.opacity = '0';
            project_thumbnail_4.style.transform = 'translateY(3px)';
            project_thumbnail_4.style.visibility = 'hidden';
        }

        // TV Channel 5
        if(window.scrollY>=4100 & window.scrollY<=4300) {
            project_title_5.style.visibility = 'visible';

            project_thumbnail_5.style.opacity = '0.8';
            project_thumbnail_5.style.visibility = 'visible';
            project_thumbnail_5.style.transform = 'translateY(0px)';
            project_thumbnail_5.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_5.style.visibility = 'hidden';

            project_thumbnail_5.style.opacity = '0';
            project_thumbnail_5.style.transform = 'translateY(3px)';
            project_thumbnail_5.style.visibility = 'hidden';
        }

        // TV Channel 6
        if(window.scrollY>=4400 & window.scrollY<=4600) {
            project_title_6.style.visibility = 'visible';

            project_thumbnail_6.style.opacity = '0.8';
            project_thumbnail_6.style.visibility = 'visible';
            project_thumbnail_6.style.transform = 'translateY(0px)';
            project_thumbnail_6.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_6.style.visibility = 'hidden';

            project_thumbnail_6.style.opacity = '0';
            project_thumbnail_6.style.transform = 'translateY(3px)';
            project_thumbnail_6.style.visibility = 'hidden';
        }

        // TV Channel 7
        if(window.scrollY>=4700 & window.scrollY<=4900) {
            project_title_7.style.visibility = 'visible';

            project_thumbnail_7.style.opacity = '0.8';
            project_thumbnail_7.style.visibility = 'visible';
            project_thumbnail_7.style.transform = 'translateY(0px)';
            project_thumbnail_7.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_7.style.visibility = 'hidden';

            project_thumbnail_7.style.opacity = '0';
            project_thumbnail_7.style.transform = 'translateY(3px)';
            project_thumbnail_7.style.visibility = 'hidden';
        }

        // TV Channel 8
        if(window.scrollY>=5000 & window.scrollY<=5200) {
            project_title_8.style.visibility = 'visible';

            project_thumbnail_8.style.opacity = '0.8';
            project_thumbnail_8.style.visibility = 'visible';
            project_thumbnail_8.style.transform = 'translateY(0px)';
            project_thumbnail_8.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_8.style.visibility = 'hidden';

            project_thumbnail_8.style.opacity = '0';
            project_thumbnail_8.style.transform = 'translateY(3px)';
            project_thumbnail_8.style.visibility = 'hidden';
        }

        // TV Channel 9
        if(window.scrollY>=5300 & window.scrollY<=5500) {
            project_title_9.style.visibility = 'visible';

            project_thumbnail_9.style.opacity = '0.8';
            project_thumbnail_9.style.visibility = 'visible';
            project_thumbnail_9.style.transform = 'translateY(0px)';
            project_thumbnail_9.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_9.style.visibility = 'hidden';

            project_thumbnail_9.style.opacity = '0';
            project_thumbnail_9.style.transform = 'translateY(3px)';
            project_thumbnail_9.style.visibility = 'hidden';
        }

        // TV Channel 10
        if(window.scrollY>=5600 & window.scrollY<=5800) {
            project_title_10.style.visibility = 'visible';

            project_thumbnail_10.style.opacity = '0.8';
            project_thumbnail_10.style.visibility = 'visible';
            project_thumbnail_10.style.transform = 'translateY(0px)';
            project_thumbnail_10.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_10.style.visibility = 'hidden';

            project_thumbnail_10.style.opacity = '0';
            project_thumbnail_10.style.transform = 'translateY(3px)';
            project_thumbnail_10.style.visibility = 'hidden';
        }

        // TV Channel 11
        if(window.scrollY>=5900 & window.scrollY<=6100) {
            project_title_11.style.visibility = 'visible';

            project_thumbnail_11.style.opacity = '0.8';
            project_thumbnail_11.style.visibility = 'visible';
            project_thumbnail_11.style.transform = 'translateY(0px)';
            project_thumbnail_11.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_11.style.visibility = 'hidden';

            project_thumbnail_11.style.opacity = '0';
            project_thumbnail_11.style.transform = 'translateY(3px)';
            project_thumbnail_11.style.visibility = 'hidden';
        }

        // TV Channel 12
        if(window.scrollY>=6200 & window.scrollY<=6400) {
            project_title_12.style.visibility = 'visible';

            project_thumbnail_12.style.opacity = '0.8';
            project_thumbnail_12.style.visibility = 'visible';
            project_thumbnail_12.style.transform = 'translateY(0px)';
            project_thumbnail_12.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_12.style.visibility = 'hidden';

            project_thumbnail_12.style.opacity = '0';
            project_thumbnail_12.style.transform = 'translateY(3px)';
            project_thumbnail_12.style.visibility = 'hidden';
        }

        // FOOTER
        if(window.scrollY>=6400) {
            document.querySelector("#footer").style.bottom = '0';
            document.querySelector("#footer").style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#footer").style.bottom = '-100px';
        }

        // Secret 1
        if(window.scrollY>=7000 & window.scrollY<=7200) {
            document.querySelector("#secret_1").style.visibility = 'visible';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#secret_1").style.visibility = 'hidden';
        }

        // Secret 2
        if(window.scrollY>=8000 & window.scrollY<=8200) {
            document.querySelector("#secret_2").style.visibility = 'visible';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#secret_2").style.visibility = 'hidden';
        }

        // Secret 3
        if(window.scrollY>=9000 & window.scrollY<=9200) {
            document.querySelector("#secret_3").style.visibility = 'visible';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#secret_3").style.visibility = 'hidden';
        }

          // The End
        if(window.scrollY>=9200) {
            document.querySelector("#bsod").style.visibility = 'visible';
            window.setTimeout("document.querySelector('#bsod').style.opacity = '1';", 1000);
            document.querySelector("#bsod").style.transition = '10s ease-in-out';
        }
        else {
            document.querySelector("#bsod").style.visibility = 'hidden';
            document.querySelector("#bsod").style.opacity = '0';
            document.querySelector("#bsod").style.transition = '0.2s ease-in-out';
        }
    }
    tv_scroll();

    // TV ZOOM SCRIPT
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("mouseover", function(){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '110%';
                project_thumbnail.style.transition = '3.0s';
            })
        })
    };
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("mouseout", function(){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '100%';
                project_thumbnail.style.transition = '0.5s';

                document.getElementById('alpha_tv_cover').style.scale = '100%';
                document.getElementById('alpha_tv_cover').style.transform = 'translateY(0px)';
                document.getElementById('alpha_tv_cover').style.transition = '0.5s';
            })
        })
    };
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("click", function(){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '200%';
                project_thumbnail.style.transition = '0.2s';
                project_thumbnail.style.rotate = '360deg';

                document.getElementById('alpha_tv_cover').style.scale = '200%';
                document.getElementById('alpha_tv_cover').style.transition = '0.3s';
            })
            document.getElementById('alpha_tv_cover').style.scale = '125%';
            document.getElementById('alpha_tv_cover').style.transform = 'translateY(-10px)';
            document.getElementById('alpha_tv_cover').style.transition = '0.3s';
        })
    };

    // LOADING SCREEN SCRIPT
    window.setTimeout("document.getElementById('loading_screen').style.opacity='0';", 500)
    loading_screen.style.transition = '1.0s ease-in-out';
    window.setTimeout("document.getElementById('loading_screen').style.display='none';", 1500)
    window.setTimeout("document.getElementById('loading_screen').innerHTML = null;", 1500)
    
    // Page Transition Animation (Static Fade In)
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("click", function(){
            fullscreen_static.style.visibility = 'visible';
            fullscreen_static.style.opacity = '1';
            fullscreen_static.style.transition = '0.3s ease-in-out';
            fullscreen_static.style.pointerEvents = 'all';
        });
    }

    window.onpageshow = function(){
        // Rescales project thumbnails to 100% after immersive zoom
        for(var i = 0, j=project_thumbnail.length; i<j; i++){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '100%';
                project_thumbnail.style.rotate = '359deg';
                project_thumbnail.style.transition = '0s';

                document.getElementById('alpha_tv_cover').style.scale = '100%';
                document.getElementById('alpha_tv_cover').style.transform = 'translateY(0px)';
                document.getElementById('alpha_tv_cover').style.transition = '0s';
            })
        }

        // Hides full screen static on page return
        fullscreen_static.style.visibility = 'hidden';
        fullscreen_static.style.opacity = '0';
        fullscreen_static.style.transition = '0s';
    };

    // Controls scale and equidistant spacing for project thumbnails
    if (alpha_tv_cover.width/alpha_tv_cover.height > 16/9) {
            document.querySelector('#animated_tv_static').style.height = 'auto';
            document.querySelector('#animated_tv_static').style.width = '16.5vw';
            document.querySelector('#animated_tv_static').style.left = 'calc(50vw - 8.25vw)';

            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.height = 'auto';
                project_thumbnail.style.width = '16.5vw';
                project_thumbnail.style.left = 'calc(50vw - 8.25vw)';
            });
        }
        else {
            document.querySelector('#animated_tv_static').style.height = '22vh';
            document.querySelector('#animated_tv_static').style.width = 'auto';
            document.querySelector('#animated_tv_static').style.left = 'calc(50vw - (11vh * (4/3)))';

            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.height = '22vh';
                project_thumbnail.style.width = 'auto';
                project_thumbnail.style.left = 'calc(50vw - (11vh * (4/3)))';
            })
        }

    window.addEventListener('resize', function(){
        if (alpha_tv_cover.width/alpha_tv_cover.height > 16/9) {
            document.querySelector('#animated_tv_static').style.height = 'auto';
            document.querySelector('#animated_tv_static').style.width = '16.5vw';
            document.querySelector('#animated_tv_static').style.left = 'calc(50vw - 8.25vw)';

            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.height = 'auto';
                project_thumbnail.style.width = '16.5vw';
                project_thumbnail.style.left = 'calc(50vw - 8.25vw)';
            });
        }
        else {
            document.querySelector('#animated_tv_static').style.height = '22vh';
            document.querySelector('#animated_tv_static').style.width = 'auto';
            document.querySelector('#animated_tv_static').style.left = 'calc(50vw - (11vh * (4/3)))';

            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.height = '22vh';
                project_thumbnail.style.width = 'auto';
                project_thumbnail.style.left = 'calc(50vw - (11vh * (4/3)))';
            });
        }
    })
}

// Page Transition URL Click Delay
function delay (URL) {
    setTimeout( function() { window.location = URL }, 400 );
};