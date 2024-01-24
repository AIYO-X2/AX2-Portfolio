window.onload = function() {
    var alpha_tv_cover = document.querySelector("#alpha_tv_cover")
    var lingering_screen_static = document.querySelector("#lingering_screen_static")
    var animated_tv_static = document.querySelector("#animated_tv_static")
    var scroll_instructions2 = document.querySelector("#scroll_instructions2")
    var project_thumbnail = document.getElementsByClassName('project_thumbnail')
    var channel_buttons = document.querySelector('#channel_buttons')
    var fullscreen_static = document.querySelector("#fullscreen_static")
    var project_thumbnail_class = document.querySelectorAll('.project_thumbnail')
    var scroll_video = document.querySelector("#scroll_video")

    var projectTitles = {};
    for (let i = 1; i <= 12; i++) {
    projectTitles[`project_title_${i}`] = document.querySelector(`#project_title_${i}`);
    }

    var projectThumbnails = {};
    for (let i = 1; i <= 12; i++) {
    projectThumbnails[`project_thumbnail_${i}`] = document.querySelector(`#project_thumbnail_${i}`);
    }

    if (navigator.userAgent.toLowerCase().match(/mobile/i)) {
        var ScrollSpace = 0;
        document.querySelector("#scroll_video").innerHTML = null;
        // document.querySelector("#loading_text").innerHTML = "LOADING • PLEASE WAIT<br> VISIT ON DEKSTOP FOR FULL EXPERIENCE";
        console.log("Lite (Mobile) Interface");
    }
    // else if (navigator.userAgent.indexOf("Firefox") != -1 ) {
    //    var ScrollSpace = 0;
    //    document.querySelector("#scroll_video").innerHTML = null;
    //    // document.querySelector("#loading_text").innerHTML = "LOADING • PLEASE WAIT<br> USE ANOTHER BROWSER FOR FULL EXPERIENCE";
    //    console.log("Lite (Firefox Limited) Interface");
    //}
    else {
        var ScrollSpace = 2665;
        console.log("Full Interface");

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
    }
    var ChannelPosOffset = ScrollSpace + 235;

    // TV SCROLL SCRIPT
    var channelPositions = [];

    for (let i = 1; i <= 12; i++) {
        var startPos = ChannelPosOffset + (i - 1) * 300;
        var endPos = startPos + 200;
    
        var channelObj = {
            start: startPos,
            end: endPos
        };
    
        channelPositions.push(channelObj);
    
        // Optionally, you can also create individual variables if needed
        window['Channel' + i + 'YPosStart'] = channelObj.start;
        window['Channel' + i + 'YPosEnd'] = channelObj.end;
    }

    // Channel Buttons
    const buttons = document.querySelectorAll(".channel_button");

    const ChannelYPosStart = {
        1: Channel12YPosStart + 100,
        2: Channel11YPosStart + 100,
        3: Channel10YPosStart + 100,
        4: Channel9YPosStart + 100,
        5: Channel8YPosStart + 100,
        6: Channel7YPosStart + 100,
        7: Channel6YPosStart + 100,
        8: Channel5YPosStart + 100,
        9: Channel4YPosStart + 100,
        10: Channel3YPosStart + 100,
        11: Channel2YPosStart + 100,
        12: Channel1YPosStart + 100,
      };

      buttons.forEach(function (button) {
        button.addEventListener("click", function () {
          const buttonId = parseInt(button.id.replace("channel_button_", ""));
          const yPosStart = ChannelYPosStart[buttonId];
          // Use smooth scrolling
          window.scroll({
            top: yPosStart + 100,
            behavior: "smooth"
          });
        });
      });

    window.addEventListener('scroll', tv_scroll);
    function tv_scroll () {
        if(window.scrollY>=ScrollSpace) {
            scroll_instructions2.style.visibility = 'visible';
            channel_buttons.style.visibility = 'visible';

            alpha_tv_cover.style.opacity = '1';
            alpha_tv_cover.style.transition = 'opacity 0.2s ease-in-out';

            animated_tv_static.style.transition = 'opacity 0.2s ease-in-out';
            animated_tv_static.style.visibility = 'visible';
            animated_tv_static.style.opacity = '1';

            lingering_screen_static.style.visibility = 'visible';

            window.setTimeout("scroll_video.style.visibility = 'hidden';", 200);
        }
        else {
            scroll_instructions2.style.visibility = 'hidden';
            channel_buttons.style.visibility = 'hidden';
            
            alpha_tv_cover.style.opacity = '0';

            animated_tv_static.style.visibility = 'hidden';
            animated_tv_static.style.opacity = '0';

            lingering_screen_static.style.visibility = 'hidden';

            scroll_video.style.visibility = 'visible';
        }

        if(window.scrollY>=ChannelPosOffset) {
            scroll_instructions2.style.visibility = 'hidden';
        }

        // TV Channel 1
        if(window.scrollY>=Channel1YPosStart & window.scrollY<=Channel1YPosEnd) {
            project_title_1.style.visibility = 'visible';
            
            project_thumbnail_1.style.visibility = 'visible';
            project_thumbnail_1.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';
            project_thumbnail_1.style.opacity = '0.8';
            project_thumbnail_1.style.transform = 'translateY(0px)';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {

            project_title_1.style.visibility = 'hidden';

            project_thumbnail_1.style.visibility = 'hidden';
            project_thumbnail_1.style.opacity = '0';
            project_thumbnail_1.style.transform = 'translateY(3px)';
            project_thumbnail_1.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '1';
        }

        // TV Channel 2
        if(window.scrollY>=Channel2YPosStart & window.scrollY<=Channel2YPosEnd) {
            project_title_2.style.visibility = 'visible';

            project_thumbnail_2.style.visibility = 'visible';
            project_thumbnail_2.style.opacity = '0.8';
            project_thumbnail_2.style.transform = 'translateY(0px)';
            project_thumbnail_2.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_2.style.visibility = 'hidden';

            project_thumbnail_2.style.visibility = 'hidden';
            project_thumbnail_2.style.opacity = '0';
            project_thumbnail_2.style.transform = 'translateY(3px)';
            project_thumbnail_2.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 3
        if(window.scrollY>=Channel3YPosStart & window.scrollY<=Channel3YPosEnd) {
            project_title_3.style.visibility = 'visible';

            project_thumbnail_3.style.visibility = 'visible';
            project_thumbnail_3.style.opacity = '0.8';
            project_thumbnail_3.style.transform = 'translateY(0px)';
            project_thumbnail_3.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_3.style.visibility = 'hidden';

            project_thumbnail_3.style.visibility = 'hidden';
            project_thumbnail_3.style.opacity = '0';
            project_thumbnail_3.style.transform = 'translateY(3px)';
            project_thumbnail_3.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 4
        if(window.scrollY>=Channel4YPosStart & window.scrollY<=Channel4YPosEnd) {
            project_title_4.style.visibility = 'visible';

            project_thumbnail_4.style.visibility = 'visible';
            project_thumbnail_4.style.opacity = '0.8';
            project_thumbnail_4.style.transform = 'translateY(0px)';
            project_thumbnail_4.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_4.style.visibility = 'hidden';

            project_thumbnail_4.style.visibility = 'hidden';
            project_thumbnail_4.style.opacity = '0';
            project_thumbnail_4.style.transform = 'translateY(3px)';
            project_thumbnail_4.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 5
        if(window.scrollY>=Channel5YPosStart & window.scrollY<=Channel5YPosEnd) {
            project_title_5.style.visibility = 'visible';

            project_thumbnail_5.style.visibility = 'visible';
            project_thumbnail_5.style.opacity = '0.8';
            project_thumbnail_5.style.transform = 'translateY(0px)';
            project_thumbnail_5.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_5.style.visibility = 'hidden';

            project_thumbnail_5.style.visibility = 'hidden';
            project_thumbnail_5.style.opacity = '0';
            project_thumbnail_5.style.transform = 'translateY(3px)';
            project_thumbnail_5.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 6
        if(window.scrollY>=Channel6YPosStart & window.scrollY<=Channel6YPosEnd) {
            project_title_6.style.visibility = 'visible';

            project_thumbnail_6.style.visibility = 'visible';
            project_thumbnail_6.style.opacity = '0.8';
            project_thumbnail_6.style.transform = 'translateY(0px)';
            project_thumbnail_6.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_6.style.visibility = 'hidden';

            project_thumbnail_6.style.visibility = 'hidden';
            project_thumbnail_6.style.opacity = '0';
            project_thumbnail_6.style.transform = 'translateY(3px)';
            project_thumbnail_6.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 7
        if(window.scrollY>=Channel7YPosStart & window.scrollY<=Channel7YPosEnd) {
            project_title_7.style.visibility = 'visible';

            project_thumbnail_7.style.visibility = 'visible';
            project_thumbnail_7.style.opacity = '0.8';
            project_thumbnail_7.style.transform = 'translateY(0px)';
            project_thumbnail_7.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_7.style.visibility = 'hidden';

            project_thumbnail_7.style.visibility = 'hidden';
            project_thumbnail_7.style.opacity = '0';
            project_thumbnail_7.style.transform = 'translateY(3px)';
            project_thumbnail_7.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 8
        if(window.scrollY>=Channel8YPosStart & window.scrollY<=Channel8YPosEnd) {
            project_title_8.style.visibility = 'visible';

            project_thumbnail_8.style.visibility = 'visible';
            project_thumbnail_8.style.opacity = '0.8';
            project_thumbnail_8.style.transform = 'translateY(0px)';
            project_thumbnail_8.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_8.style.visibility = 'hidden';

            project_thumbnail_8.style.visibility = 'hidden';
            project_thumbnail_8.style.opacity = '0';
            project_thumbnail_8.style.transform = 'translateY(3px)';
            project_thumbnail_8.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 9
        if(window.scrollY>=Channel9YPosStart & window.scrollY<=Channel9YPosEnd) {
            project_title_9.style.visibility = 'visible';

            project_thumbnail_9.style.visibility = 'visible';
            project_thumbnail_9.style.opacity = '0.8';
            project_thumbnail_9.style.transform = 'translateY(0px)';
            project_thumbnail_9.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_9.style.visibility = 'hidden';

            project_thumbnail_9.style.visibility = 'hidden';
            project_thumbnail_9.style.opacity = '0';
            project_thumbnail_9.style.transform = 'translateY(3px)';
            project_thumbnail_9.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 10
        if(window.scrollY>=Channel10YPosStart & window.scrollY<=Channel10YPosEnd) {
            project_title_10.style.visibility = 'visible';

            project_thumbnail_10.style.visibility = 'visible';
            project_thumbnail_10.style.opacity = '0.8';
            project_thumbnail_10.style.transform = 'translateY(0px)';
            project_thumbnail_10.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_10.style.visibility = 'hidden';

            project_thumbnail_10.style.visibility = 'hidden';
            project_thumbnail_10.style.opacity = '0';
            project_thumbnail_10.style.transform = 'translateY(3px)';
            project_thumbnail_10.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 11
        if(window.scrollY>=Channel11YPosStart & window.scrollY<=Channel11YPosEnd) {
            project_title_11.style.visibility = 'visible';

            project_thumbnail_11.style.visibility = 'visible';
            project_thumbnail_11.style.opacity = '0.8';
            project_thumbnail_11.style.transform = 'translateY(0px)';
            project_thumbnail_11.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_11.style.visibility = 'hidden';

            project_thumbnail_11.style.visibility = 'hidden';
            project_thumbnail_11.style.opacity = '0';
            project_thumbnail_11.style.transform = 'translateY(3px)';
            project_thumbnail_11.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // TV Channel 12
        if(window.scrollY>=Channel12YPosStart & window.scrollY<=Channel12YPosEnd) {
            project_title_12.style.visibility = 'visible';

            project_thumbnail_12.style.visibility = 'visible';
            project_thumbnail_12.style.opacity = '0.8';
            project_thumbnail_12.style.transform = 'translateY(0px)';
            project_thumbnail_12.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            project_title_12.style.visibility = 'hidden';

            project_thumbnail_12.style.visibility = 'hidden';
            project_thumbnail_12.style.opacity = '0';
            project_thumbnail_12.style.transform = 'translateY(3px)';
            project_thumbnail_12.style.transition = 'opacity 0.2s ease-in-out, transform 0.2s ease-in-out';

        }

        // FOOTER
        if(window.scrollY>=(Channel12YPosEnd)) {
            document.querySelector("#footer").style.bottom = '0';
            document.querySelector("#footer").style.transition = 'bottom 0.2s ease-in-out';
        }
        else {
            document.querySelector("#footer").style.bottom = '-100px';
        }

        // S1
        if(window.scrollY>=(Channel12YPosEnd+600) & window.scrollY<=(Channel12YPosEnd+800)) {
            document.querySelector("#secret_1").style.visibility = 'visible';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            document.querySelector("#secret_1").style.visibility = 'hidden';
        }

        // S2
        if(window.scrollY>=(Channel12YPosEnd+1600) & window.scrollY<=(Channel12YPosEnd+1800)) {
            document.querySelector("#secret_2").style.visibility = 'visible';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            document.querySelector("#secret_2").style.visibility = 'hidden';
        }

        // S3
        if(window.scrollY>=(Channel12YPosEnd+2600) & window.scrollY<=(Channel12YPosEnd+2800)) {
            document.querySelector("#secret_3").style.visibility = 'visible';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = 'opacity 0.2s ease-in-out';
        }
        else {
            document.querySelector("#secret_3").style.visibility = 'hidden';
        }

          // The End
        if(window.scrollY>=(Channel12YPosEnd+2800)) {
            document.querySelector("#bsod").style.visibility = 'visible';
            window.setTimeout("document.querySelector('#bsod').style.opacity = '1';", 1000);
            document.querySelector("#bsod").style.transition = 'opacity 10s ease-in-out';
        }
        else {
            document.querySelector("#bsod").style.visibility = 'hidden';
            document.querySelector("#bsod").style.opacity = '0';
            document.querySelector("#bsod").style.transition = 'opacity 0.2s ease-in-out';
        }
    }
    tv_scroll();

    // TV ZOOM SCRIPT
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("mouseover", function(){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '110%';
                project_thumbnail.style.transition = 'scale 3.0s, transform 3.0s';
            })
        })
    };
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("mouseout", function(){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '100%';
                project_thumbnail.style.transition = 'scale 0.5s, transform 0.5s';

                document.getElementById('alpha_tv_cover').style.scale = '100%';
                document.getElementById('alpha_tv_cover').style.transform = 'translateY(0px)';
                document.getElementById('alpha_tv_cover').style.transition = 'scale 0.5s, transform 0.5s';
            })
        })
    };
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("click", function(){
            project_thumbnail_class.forEach(project_thumbnail => {
                project_thumbnail.style.scale = '200%';
                project_thumbnail.style.transition = 'scale 0.2s, transform 0.2s';

                document.getElementById('alpha_tv_cover').style.scale = '200%';
                document.getElementById('alpha_tv_cover').style.transition = 'scale 0.3s, transform 0.3s';
            })
            document.getElementById('alpha_tv_cover').style.scale = '125%';
            document.getElementById('alpha_tv_cover').style.transform = 'translateY(-10px)';
            document.getElementById('alpha_tv_cover').style.transition = 'scale 0.3s, transform 0.3s';
        })
    };

    // LOADING SCREEN SCRIPT
    const loadingBar = document.getElementById('loading_text');
    window.addEventListener('load', () => {
    const pageLoadTime = window.performance.timing.loadEventEnd - window.performance.timing.navigationStart;
    loadingBar.style.animationDuration = `${pageLoadTime / 1000}s`;
    });
    
    window.setTimeout("document.getElementById('loading_screen').style.opacity='0';", 500)
    loading_screen.style.transition = 'opacity 1.0s ease-in-out';
    window.setTimeout("document.getElementById('loading_screen').style.display='none';", 1500)
    window.setTimeout("document.getElementById('loading_screen').innerHTML = null;", 1500)
    
    // Page Transition Animation (Static Fade In)
    for(var i = 0, j=project_thumbnail.length; i<j; i++){
        project_thumbnail[i].addEventListener("click", function(){
            fullscreen_static.style.visibility = 'visible';
            fullscreen_static.style.opacity = '1';
            fullscreen_static.style.transition = 'opacity 0.3s ease-in-out';
            fullscreen_static.style.pointerEvents = 'all';
        });
    }

    // Rescales project thumbnails to 100% after immersive zoom
    window.onpageshow = function(){
        document.addEventListener("DOMContentLoaded", (event) => {
            for(var i = 0, j=project_thumbnail.length; i<j; i++){
                project_thumbnail_class.forEach(project_thumbnail => {
                    project_thumbnail.style.scale = '100%';
                    project_thumbnail.style.transition = 'scale transform 0s';
    
                    document.getElementById('alpha_tv_cover').style.scale = '100%';
                    document.getElementById('alpha_tv_cover').style.transform = 'translateY(0px)';
                    document.getElementById('alpha_tv_cover').style.transition = 'scale 0s, transform 0s';
                })
            }
    
            // Hides full screen static on page return
            fullscreen_static.style.visibility = 'hidden';
            fullscreen_static.style.opacity = '0';
            fullscreen_static.style.transition = 'opacity 0s';
          });
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

            channel_buttons.style.gridTemplateColumns = 'repeat(6, 1fr)';
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

            channel_buttons.style.gridTemplateColumns = 'repeat(4, 1fr)';
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

            channel_buttons.style.gridTemplateColumns = 'repeat(6, 1fr)';
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

            channel_buttons.style.gridTemplateColumns = 'repeat(4, 1fr)';
        }
    })
}

// Page Transition URL Click Delay
function delay (URL) {
    setTimeout( function() { window.location = URL }, 400 );
};