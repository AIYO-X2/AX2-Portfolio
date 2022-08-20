window.onload = function() {
    // Constant "title" defines what the constant is targeting
    const alpha_tv_appear = document.querySelector("#alpha_tv_cover");
    const lingering_screen_static = document.querySelector("#lingering_screen_static");
    const animated_tv_static = document.querySelector("#animated_tv_static");
    const scroll_instructions2 = document.querySelector("#scroll_instructions2")

    const project_title_1 = document.querySelector("#project_title_1");
    const project_title_2 = document.querySelector("#project_title_2");
    const project_title_3 = document.querySelector("#project_title_3");
    const project_title_4 = document.querySelector("#project_title_4");
    const project_title_5 = document.querySelector("#project_title_5");
    const project_title_6 = document.querySelector("#project_title_6");
    const project_title_7 = document.querySelector("#project_title_7");
    const project_title_8 = document.querySelector("#project_title_8");
    const project_title_9 = document.querySelector("#project_title_9");
    const project_title_10 = document.querySelector("#project_title_10");
    const project_title_11 = document.querySelector("#project_title_11");
    const project_title_12 = document.querySelector("#project_title_12");
    const project_title_13 = document.querySelector("#project_title_13");
    const project_title_14 = document.querySelector("#project_title_14");
    const project_title_15 = document.querySelector("#project_title_15");
    const project_title_16 = document.querySelector("#project_title_16");
    const project_title_17 = document.querySelector("#project_title_17");
    const project_title_18 = document.querySelector("#project_title_18");
    const project_title_19 = document.querySelector("#project_title_19");

    const project_thumbnail_1 = document.querySelector("#project_thumbnail_1");
    const project_thumbnail_2 = document.querySelector("#project_thumbnail_2");
    const project_thumbnail_3 = document.querySelector("#project_thumbnail_3");
    const project_thumbnail_4 = document.querySelector("#project_thumbnail_4");
    const project_thumbnail_5 = document.querySelector("#project_thumbnail_5");
    const project_thumbnail_6 = document.querySelector("#project_thumbnail_6");
    const project_thumbnail_7 = document.querySelector("#project_thumbnail_7");
    const project_thumbnail_8 = document.querySelector("#project_thumbnail_8");
    const project_thumbnail_9 = document.querySelector("#project_thumbnail_9");
    const project_thumbnail_10 = document.querySelector("#project_thumbnail_10");
    const project_thumbnail_11 = document.querySelector("#project_thumbnail_11");
    const project_thumbnail_12 = document.querySelector("#project_thumbnail_12");
    const project_thumbnail_13 = document.querySelector("#project_thumbnail_13");
    const project_thumbnail_14 = document.querySelector("#project_thumbnail_14");
    const project_thumbnail_15 = document.querySelector("#project_thumbnail_15");
    const project_thumbnail_16 = document.querySelector("#project_thumbnail_16");
    const project_thumbnail_17 = document.querySelector("#project_thumbnail_17");
    const project_thumbnail_18 = document.querySelector("#project_thumbnail_18");
    const project_thumbnail_19 = document.querySelector("#project_thumbnail_19");

    // TV SCROLL SCRIPT
    // Styling format: [constant_name].style.[style_parameter]
    window.addEventListener('scroll', tv_scroll);
    function tv_scroll () {
        if(window.scrollY>=0) {
            scroll_instructions2.style.visibility = 'visible';

            animated_tv_static.style.opacity = '1';
            animated_tv_static.style.transition = '0.2s ease-in-out';
            animated_tv_static.style.visibility = 'visible';

            lingering_screen_static.style.visibility = 'visible';

            window.setTimeout("scroll_video.style.visibility = 'hidden';", 200);
        }
        else {
            scroll_instructions2.style.visibility = 'hidden';

            animated_tv_static.style.opacity = '0';
            animated_tv_static.style.visibility = 'hidden';

            lingering_screen_static.style.visibility = 'hidden';
        }

        if(window.scrollY>=200) {
            scroll_instructions2.style.visibility = 'hidden';
        }

        // TV Channel 1
        if(window.scrollY>=200 & window.scrollY<=400) {
            project_title_1.style.visibility = 'visible';

            project_thumbnail_1.style.opacity = '0.85';
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
        if(window.scrollY>=500 & window.scrollY<=700) {
            project_title_2.style.visibility = 'visible';

            project_thumbnail_2.style.opacity = '0.85';
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
        if(window.scrollY>=800 & window.scrollY<=1000) {
            project_title_3.style.visibility = 'visible';

            project_thumbnail_3.style.opacity = '0.85';
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
        if(window.scrollY>=1100 & window.scrollY<=1300) {
            project_title_4.style.visibility = 'visible';

            project_thumbnail_4.style.opacity = '0.85';
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
        if(window.scrollY>=1400 & window.scrollY<=1600) {
            project_title_5.style.visibility = 'visible';

            project_thumbnail_5.style.opacity = '0.85';
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
        if(window.scrollY>=1700 & window.scrollY<=1900) {
            project_title_6.style.visibility = 'visible';

            project_thumbnail_6.style.opacity = '0.85';
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
        if(window.scrollY>=2000 & window.scrollY<=2200) {
            project_title_7.style.visibility = 'visible';

            project_thumbnail_7.style.opacity = '0.85';
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
        if(window.scrollY>=2300 & window.scrollY<=2500) {
            project_title_8.style.visibility = 'visible';

            project_thumbnail_8.style.opacity = '0.85';
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
        if(window.scrollY>=2600 & window.scrollY<=2800) {
            project_title_9.style.visibility = 'visible';

            project_thumbnail_9.style.opacity = '0.85';
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
        if(window.scrollY>=2900 & window.scrollY<=3100) {
            project_title_10.style.visibility = 'visible';

            project_thumbnail_10.style.opacity = '0.85';
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
        if(window.scrollY>=3200 & window.scrollY<=3400) {
            project_title_11.style.visibility = 'visible';

            project_thumbnail_11.style.opacity = '0.85';
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
        if(window.scrollY>=3500 & window.scrollY<=3700) {
            project_title_12.style.visibility = 'visible';

            project_thumbnail_12.style.opacity = '0.85';
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

        // TV Channel 13
        if(window.scrollY>=3800 & window.scrollY<=4000) {
            project_title_13.style.visibility = 'visible';

            project_thumbnail_13.style.opacity = '0.85';
            project_thumbnail_13.style.visibility = 'visible';
            project_thumbnail_13.style.transform = 'translateY(0px)';
            project_thumbnail_13.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_13.style.visibility = 'hidden';

            project_thumbnail_13.style.opacity = '0';
            project_thumbnail_13.style.transform = 'translateY(3px)';
            project_thumbnail_13.style.visibility = 'hidden';
        }

        // TV Channel 14
        if(window.scrollY>=4100 & window.scrollY<=4300) {
            project_title_14.style.visibility = 'visible';

            project_thumbnail_14.style.opacity = '0.85';
            project_thumbnail_14.style.visibility = 'visible';
            project_thumbnail_14.style.transform = 'translateY(0px)';
            project_thumbnail_14.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_14.style.visibility = 'hidden';

            project_thumbnail_14.style.opacity = '0';
            project_thumbnail_14.style.transform = 'translateY(3px)';
            project_thumbnail_14.style.visibility = 'hidden';
        }

        // TV Channel 15
        if(window.scrollY>=4400 & window.scrollY<=4600) {
            project_title_15.style.visibility = 'visible';

            project_thumbnail_15.style.opacity = '0.85';
            project_thumbnail_15.style.visibility = 'visible';
            project_thumbnail_15.style.transform = 'translateY(0px)';
            project_thumbnail_15.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_15.style.visibility = 'hidden';

            project_thumbnail_15.style.opacity = '0';
            project_thumbnail_15.style.transform = 'translateY(3px)';
            project_thumbnail_15.style.visibility = 'hidden';
        }

        // TV Channel 16
        if(window.scrollY>=4700 & window.scrollY<=4900) {
            project_title_16.style.visibility = 'visible';

            project_thumbnail_16.style.opacity = '0.85';
            project_thumbnail_16.style.visibility = 'visible';
            project_thumbnail_16.style.transform = 'translateY(0px)';
            project_thumbnail_16.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_16.style.visibility = 'hidden';

            project_thumbnail_16.style.opacity = '0';
            project_thumbnail_16.style.transform = 'translateY(3px)';
            project_thumbnail_16.style.visibility = 'hidden';
        }

        // TV Channel 17
        if(window.scrollY>=5000 & window.scrollY<=5200) {
            project_title_17.style.visibility = 'visible';

            project_thumbnail_17.style.opacity = '0.85';
            project_thumbnail_17.style.visibility = 'visible';
            project_thumbnail_17.style.transform = 'translateY(0px)';
            project_thumbnail_17.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_17.style.visibility = 'hidden';

            project_thumbnail_17.style.opacity = '0';
            project_thumbnail_17.style.transform = 'translateY(3px)';
            project_thumbnail_17.style.visibility = 'hidden';
        }

        // TV Channel 18
        if(window.scrollY>=5300 & window.scrollY<=5500) {
            project_title_18.style.visibility = 'visible';

            project_thumbnail_18.style.opacity = '0.85';
            project_thumbnail_18.style.visibility = 'visible';
            project_thumbnail_18.style.transform = 'translateY(0px)';
            project_thumbnail_18.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_18.style.visibility = 'hidden';

            project_thumbnail_18.style.opacity = '0';
            project_thumbnail_18.style.transform = 'translateY(3px)';
            project_thumbnail_18.style.visibility = 'hidden';
        }

        // TV Channel 19
        if(window.scrollY>=5600 & window.scrollY<=5800) {
            project_title_19.style.visibility = 'visible';

            project_thumbnail_19.style.opacity = '0.85';
            project_thumbnail_19.style.visibility = 'visible';
            project_thumbnail_19.style.transform = 'translateY(0px)';
            project_thumbnail_19.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            project_title_19.style.visibility = 'hidden';

            project_thumbnail_19.style.opacity = '0';
            project_thumbnail_19.style.transform = 'translateY(3px)';
            project_thumbnail_19.style.visibility = 'hidden';
        }
    }
    tv_scroll();

    // PROJECT TEXT CLICK SCRIPT (UNUSED)
    // document.querySelector("#abhc_vrchitecture_experience_title").addEventListener("click", function(){
    //    window.scroll(0, 2800)
    // });

    // LOADING SCREEN SCRIPT (Temporarily //'d while mobile is not yet supported)
    // Time is in ms
    window.setTimeout("document.getElementById('loading_screen').style.opacity='0';", 500)
    window.setTimeout("document.getElementById('loading_screen').style.display='none';", 1000)
    loading_screen.style.transition = '0.5s ease-in-out';

    // Page Transition Animation (Static Fade In)
    var project_thumbnail = document.getElementsByClassName('project_thumbnail');
    const fullscreen_static = document.querySelector("#fullscreen_static");

    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("click", function(){
            fullscreen_static.style.visibility = 'visible';
            fullscreen_static.style.opacity = '1';
            fullscreen_static.style.transition = '0.3s ease-in-out';
            fullscreen_static.style.pointerEvents = 'all';

            window.setTimeout("fullscreen_static.style.visibility = 'hidden';", 300)
            window.setTimeout("fullscreen_static.style.opacity = '0';", 300)
            window.setTimeout("fullscreen_static.style.pointerEvents = 'none';", 300)
        });
    }

    // Controls scale and equidistant spacing for project thumbnails
    window.addEventListener('resize', function(){
        const project_thumbnail_class = document.querySelectorAll('.project_thumbnail')
        if (alpha_tv_cover.width/alpha_tv_cover.height > 16/9) {
            document.querySelector('#animated_tv_static').style.height = 'auto';
            document.querySelector('#animated_tv_static').style.width = '15.5vw';
            document.querySelector('#animated_tv_static').style.left = 'calc(50% - 7.25vw)';

            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.height = 'auto';
                project_thumbnail.style.width = '15.5vw';
                project_thumbnail.style.left = 'calc(50% - 7.25vw)';
            });
        }
        else {
            document.querySelector('#animated_tv_static').style.height = '21vh';
            document.querySelector('#animated_tv_static').style.width = 'auto';
            document.querySelector('#animated_tv_static').style.left = 'calc(50% - (18vh * (3/4)))';

            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.height = '21vh';
                project_thumbnail.style.width = 'auto';
                project_thumbnail.style.left = 'calc(50% - (18vh * (3/4)))';
            });
        }
    })
}

// Page Transition URL Click Delay
function delay (URL) {
    setTimeout( function() { window.location = URL }, 400 );
};

// Page Transition Animation (Static Disappears on Page Leave)
// window.onunload = function() {
//    fullscreen_static.style.visibility = 'visible';
//    fullscreen_static.style.opacity = '0';
//    fullscreen_static.style.pointerEvents = 'none';
//};