window.onload = function() {
    // Constant "title" defines what the constant is targeting
    const alpha_tv_appear = document.querySelector("#alpha_tv_cover");
    const lingering_screen_static = document.querySelector("#lingering_screen_static");
    const animated_tv_static = document.querySelector("#animated_tv_static");

    const abhc_vrchitecture_experience_thumbnail_appear = document.querySelector("#abhc_vrchitecture_experience_thumbnail");
    const sensorial_overdrive_ar_experience_thumbnail_appear = document.querySelector("#sensorial_overdrive_ar_experience_thumbnail");
    const a_boyle_heights_canvas_thumbnail_appear = document.querySelector("#a_boyle_heights_canvas_thumbnail");
    const forsaken_realm_thumbnail_appear = document.querySelector("#forsaken_realm_thumbnail");
    const moson_thumbnail_appear = document.querySelector("#moson_thumbnail");
    const hesperovida_thumbnail_appear = document.querySelector("#hesperovida_thumbnail");
    const the_lurking_mine_thumbnail_appear = document.querySelector("#the_lurking_mine_thumbnail");
    const unusual_activity_thumbnail_appear = document.querySelector("#unusual_activity_thumbnail");
    const rolled_flat_thumbnail_appear = document.querySelector("#rolled_flat_thumbnail");
    const ascension_thumbnail_appear = document.querySelector("#ascension_thumbnail");
    const conference_center_plasencia_thumbnail_appear = document.querySelector("#conference_center_plasencia_thumbnail");
    const sensorial_overdrive_thumbnail_appear = document.querySelector("#sensorial_overdrive_thumbnail");
    const ventura_x_white_oak_thumbnail_appear = document.querySelector("#ventura_x_white_oak_thumbnail");
    const the_virtual_parking_lot_thumbnail_appear = document.querySelector("#the_virtual_parking_lot_thumbnail");
    const virtual_nostalgia_thumbnail_appear = document.querySelector("#virtual_nostalgia_thumbnail");
    const abstract_pittman_dowell_residence_thumbnail_appear = document.querySelector("#abstract_pittman_dowell_residence_thumbnail");
    const charles_shaw_white_wine_thumbnail_appear = document.querySelector("#charles_shaw_white_wine_thumbnail");
    const blur_art_thumbnail_appear = document.querySelector("#blur_art_thumbnail");
    const formal_drafting_thumbnail_appear = document.querySelector("#formal_drafting_thumbnail");
    const hand_drawings_thumbnail = document.querySelector("#hand_drawings_thumbnail");
    const metaphysical_writings_thumbnail = document.querySelector("#metaphysical_writings_thumbnail");

    // TV SCROLL SCRIPT
    // Styling format: [constant_name].style.[style_parameter]
    window.addEventListener('scroll', tv_scroll);
    function tv_scroll () {
        if(window.scrollY>=2665) {
            alpha_tv_appear.style.opacity = '1';
            alpha_tv_appear.style.transition = '0.2s ease-in-out';

            animated_tv_static.style.opacity = '1';
            animated_tv_static.style.transition = '0.2s ease-in-out';
            animated_tv_static.style.visibility = 'visible';

            lingering_screen_static.style.visibility = 'visible';
        }
        else {
            alpha_tv_appear.style.opacity = '0';

            animated_tv_static.style.opacity = '0';
            animated_tv_static.style.visibility = 'hidden';

            lingering_screen_static.style.visibility = 'hidden';
        }
        
        // ABHC - VRchitecture Experience
        if(window.scrollY>=2800 & window.scrollY<=3000) {
            document.querySelector("#abhc_vrchitecture_experience_title").style.visibility = 'visible';

            abhc_vrchitecture_experience_thumbnail_appear.style.opacity = '0.85';
            abhc_vrchitecture_experience_thumbnail_appear.style.visibility = 'visible';
            abhc_vrchitecture_experience_thumbnail_appear.style.transform = 'translateY(0px)';
            abhc_vrchitecture_experience_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#abhc_vrchitecture_experience_title").style.visibility = 'hidden';

            abhc_vrchitecture_experience_thumbnail_appear.style.opacity = '0';
            abhc_vrchitecture_experience_thumbnail_appear.style.transform = 'translateY(3px)';
            abhc_vrchitecture_experience_thumbnail_appear.style.visibility = 'hidden';

            lingering_screen_static.style.opacity = '1';
        }

        // Sensorial Overdrive AR Experience
        if(window.scrollY>=3100 & window.scrollY<=3300) {
            document.querySelector("#sensorial_overdrive_ar_experience_title").style.visibility = 'visible';

            sensorial_overdrive_ar_experience_thumbnail_appear.style.opacity = '0.85';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.visibility = 'visible';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.transform = 'translateY(0px)';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#sensorial_overdrive_ar_experience_title").style.visibility = 'hidden';

            sensorial_overdrive_ar_experience_thumbnail_appear.style.opacity = '0';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.transform = 'translateY(3px)';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.visibility = 'hidden';
        }

        // A Boyle Heights Canvas
        if(window.scrollY>=3400 & window.scrollY<=3600) {
            document.querySelector("#a_boyle_heights_canvas_title").style.visibility = 'visible';

            a_boyle_heights_canvas_thumbnail_appear.style.opacity = '0.85';
            a_boyle_heights_canvas_thumbnail_appear.style.visibility = 'visible';
            a_boyle_heights_canvas_thumbnail_appear.style.transform = 'translateY(0px)';
            a_boyle_heights_canvas_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#a_boyle_heights_canvas_title").style.visibility = 'hidden';

            a_boyle_heights_canvas_thumbnail_appear.style.opacity = '0';
            a_boyle_heights_canvas_thumbnail_appear.style.transform = 'translateY(3px)';
            a_boyle_heights_canvas_thumbnail_appear.style.visibility = 'hidden';
        }

        // Forsaken Realm
        if(window.scrollY>=3700 & window.scrollY<=3900) {
            document.querySelector("#forsaken_realm_title").style.visibility = 'visible';

            forsaken_realm_thumbnail_appear.style.opacity = '0.85';
            forsaken_realm_thumbnail_appear.style.visibility = 'visible';
            forsaken_realm_thumbnail_appear.style.transform = 'translateY(0px)';
            forsaken_realm_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#forsaken_realm_title").style.visibility = 'hidden';

            forsaken_realm_thumbnail_appear.style.opacity = '0';
            forsaken_realm_thumbnail_appear.style.transform = 'translateY(3px)';
            forsaken_realm_thumbnail_appear.style.visibility = 'hidden';
        }

        // MO-SON
        if(window.scrollY>=4000 & window.scrollY<=4200) {
            document.querySelector("#museum_of_sound_of_nails_title").style.visibility = 'visible';

            moson_thumbnail_appear.style.opacity = '0.85';
            moson_thumbnail_appear.style.visibility = 'visible';
            moson_thumbnail_appear.style.transform = 'translateY(0px)';
            moson_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#museum_of_sound_of_nails_title").style.visibility = 'hidden';

            moson_thumbnail_appear.style.opacity = '0';
            moson_thumbnail_appear.style.transform = 'translateY(3px)';
            moson_thumbnail_appear.style.visibility = 'hidden';
        }

        // Hesperovida
        if(window.scrollY>=4300 & window.scrollY<=4500) {
            document.querySelector("#hesperovida_title").style.visibility = 'visible';

            hesperovida_thumbnail_appear.style.opacity = '0.85';
            hesperovida_thumbnail_appear.style.visibility = 'visible';
            hesperovida_thumbnail_appear.style.transform = 'translateY(0px)';
            hesperovida_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#hesperovida_title").style.visibility = 'hidden';

            hesperovida_thumbnail_appear.style.opacity = '0';
            hesperovida_thumbnail_appear.style.transform = 'translateY(3px)';
            hesperovida_thumbnail_appear.style.visibility = 'hidden';
        }

        // The Lurking Mine
        if(window.scrollY>=4600 & window.scrollY<=4800) {
            document.querySelector("#the_lurking_mine_title").style.visibility = 'visible';

            the_lurking_mine_thumbnail_appear.style.opacity = '0.85';
            the_lurking_mine_thumbnail_appear.style.visibility = 'visible';
            the_lurking_mine_thumbnail_appear.style.transform = 'translateY(0px)';
            the_lurking_mine_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#the_lurking_mine_title").style.visibility = 'hidden';

            the_lurking_mine_thumbnail_appear.style.opacity = '0';
            the_lurking_mine_thumbnail_appear.style.transform = 'translateY(3px)';
            the_lurking_mine_thumbnail_appear.style.visibility = 'hidden';
        }

        // Unusual Activity
        if(window.scrollY>=4900 & window.scrollY<=5100) {
            document.querySelector("#unusual_activity_title").style.visibility = 'visible';

            unusual_activity_thumbnail_appear.style.opacity = '0.85';
            unusual_activity_thumbnail_appear.style.visibility = 'visible';
            unusual_activity_thumbnail_appear.style.transform = 'translateY(0px)';
            unusual_activity_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#unusual_activity_title").style.visibility = 'hidden';

            unusual_activity_thumbnail_appear.style.opacity = '0';
            unusual_activity_thumbnail_appear.style.transform = 'translateY(3px)';
            unusual_activity_thumbnail_appear.style.visibility = 'hidden';
        }

        // Rolled Flat
        if(window.scrollY>=5200 & window.scrollY<=5400) {
            document.querySelector("#spatial_bodies_in_motion_rolled_flat_title").style.visibility = 'visible';

            rolled_flat_thumbnail_appear.style.opacity = '0.85';
            rolled_flat_thumbnail_appear.style.visibility = 'visible';
            rolled_flat_thumbnail_appear.style.transform = 'translateY(0px)';
            rolled_flat_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#spatial_bodies_in_motion_rolled_flat_title").style.visibility = 'hidden';

            rolled_flat_thumbnail_appear.style.opacity = '0';
            rolled_flat_thumbnail_appear.style.transform = 'translateY(3px)';
            rolled_flat_thumbnail_appear.style.visibility = 'hidden';
        }

        // Ascension
        if(window.scrollY>=5500 & window.scrollY<=5700) {
            document.querySelector("#ascension_title").style.visibility = 'visible';

            ascension_thumbnail_appear.style.opacity = '0.85';
            ascension_thumbnail_appear.style.visibility = 'visible';
            ascension_thumbnail_appear.style.transform = 'translateY(0px)';
            ascension_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#ascension_title").style.visibility = 'hidden';

            ascension_thumbnail_appear.style.opacity = '0';
            ascension_thumbnail_appear.style.transform = 'translateY(3px)';
            ascension_thumbnail_appear.style.visibility = 'hidden';
        }

        // Conference Center, Plasencia
        if(window.scrollY>=5800 & window.scrollY<=6000) {
            document.querySelector("#conference_center_plasencia_title").style.visibility = 'visible';

            conference_center_plasencia_thumbnail_appear.style.opacity = '0.85';
            conference_center_plasencia_thumbnail_appear.style.visibility = 'visible';
            conference_center_plasencia_thumbnail_appear.style.transform = 'translateY(0px)';
            conference_center_plasencia_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#conference_center_plasencia_title").style.visibility = 'hidden';

            conference_center_plasencia_thumbnail_appear.style.opacity = '0';
            conference_center_plasencia_thumbnail_appear.style.transform = 'translateY(3px)';
            conference_center_plasencia_thumbnail_appear.style.visibility = 'hidden';
        }

        // Sensorial Overdrive
        if(window.scrollY>=6100 & window.scrollY<=6300) {
            document.querySelector("#sensorial_overdrive_title").style.visibility = 'visible';

            sensorial_overdrive_thumbnail_appear.style.opacity = '0.85';
            sensorial_overdrive_thumbnail_appear.style.visibility = 'visible';
            sensorial_overdrive_thumbnail_appear.style.transform = 'translateY(0px)';
            sensorial_overdrive_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#sensorial_overdrive_title").style.visibility = 'hidden';

            sensorial_overdrive_thumbnail_appear.style.opacity = '0';
            sensorial_overdrive_thumbnail_appear.style.transform = 'translateY(3px)';
            sensorial_overdrive_thumbnail_appear.style.visibility = 'hidden';
        }

        // Ventura Boulevard x White Oak Avenue
        if(window.scrollY>=6400 & window.scrollY<=6600) {
            document.querySelector("#ventura_x_white_oak_title").style.visibility = 'visible';

            ventura_x_white_oak_thumbnail_appear.style.opacity = '0.85';
            ventura_x_white_oak_thumbnail_appear.style.visibility = 'visible';
            ventura_x_white_oak_thumbnail_appear.style.transform = 'translateY(0px)';
            ventura_x_white_oak_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#ventura_x_white_oak_title").style.visibility = 'hidden';

            ventura_x_white_oak_thumbnail_appear.style.opacity = '0';
            ventura_x_white_oak_thumbnail_appear.style.transform = 'translateY(3px)';
            ventura_x_white_oak_thumbnail_appear.style.visibility = 'hidden';
        }

        // The Virtual Parking Lot
        if(window.scrollY>=6700 & window.scrollY<=6900) {
            document.querySelector("#the_virtual_parking_lot_title").style.visibility = 'visible';

            the_virtual_parking_lot_thumbnail_appear.style.opacity = '0.85';
            the_virtual_parking_lot_thumbnail_appear.style.visibility = 'visible';
            the_virtual_parking_lot_thumbnail_appear.style.transform = 'translateY(0px)';
            the_virtual_parking_lot_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#the_virtual_parking_lot_title").style.visibility = 'hidden';

            the_virtual_parking_lot_thumbnail_appear.style.opacity = '0';
            the_virtual_parking_lot_thumbnail_appear.style.transform = 'translateY(3px)';
            the_virtual_parking_lot_thumbnail_appear.style.visibility = 'hidden';
        }

        // Virtual Nostalgia, As I Recall It
        if(window.scrollY>=7000 & window.scrollY<=7200) {
            document.querySelector("#virtual_nostalgia_as_i_recall_it_title").style.visibility = 'visible';

            virtual_nostalgia_thumbnail_appear.style.opacity = '0.85';
            virtual_nostalgia_thumbnail_appear.style.visibility = 'visible';
            virtual_nostalgia_thumbnail_appear.style.transform = 'translateY(0px)';
            virtual_nostalgia_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#virtual_nostalgia_as_i_recall_it_title").style.visibility = 'hidden';

            virtual_nostalgia_thumbnail_appear.style.opacity = '0';
            virtual_nostalgia_thumbnail_appear.style.transform = 'translateY(3px)';
            virtual_nostalgia_thumbnail_appear.style.visibility = 'hidden';
        }

        // Abstract: Pittman-Dowell Residence
        if(window.scrollY>=7300 & window.scrollY<=7500) {
            document.querySelector("#abstract_pittman_dowell_residence_title").style.visibility = 'visible';

            abstract_pittman_dowell_residence_thumbnail_appear.style.opacity = '0.85';
            abstract_pittman_dowell_residence_thumbnail_appear.style.visibility = 'visible';
            abstract_pittman_dowell_residence_thumbnail_appear.style.transform = 'translateY(0px)';
            abstract_pittman_dowell_residence_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#abstract_pittman_dowell_residence_title").style.visibility = 'hidden';

            abstract_pittman_dowell_residence_thumbnail_appear.style.opacity = '0';
            abstract_pittman_dowell_residence_thumbnail_appear.style.transform = 'translateY(3px)';
            abstract_pittman_dowell_residence_thumbnail_appear.style.visibility = 'hidden';
        }

        // Charles Shaw White Wine
        if(window.scrollY>=7600 & window.scrollY<=7800) {
            document.querySelector("#charles_shaw_pinot_grigio_white_wine_title").style.visibility = 'visible';

            charles_shaw_white_wine_thumbnail_appear.style.opacity = '0.85';
            charles_shaw_white_wine_thumbnail_appear.style.visibility = 'visible';
            charles_shaw_white_wine_thumbnail_appear.style.transform = 'translateY(0px)';
            charles_shaw_white_wine_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#charles_shaw_pinot_grigio_white_wine_title").style.visibility = 'hidden';

            charles_shaw_white_wine_thumbnail_appear.style.opacity = '0';
            charles_shaw_white_wine_thumbnail_appear.style.transform = 'translateY(3px)';
            charles_shaw_white_wine_thumbnail_appear.style.visibility = 'hidden';
        }

        // Blur Art
        if(window.scrollY>=7900 & window.scrollY<=8100) {
            document.querySelector("#blur_art_trio_title").style.visibility = 'visible';

            blur_art_thumbnail_appear.style.opacity = '0.85';
            blur_art_thumbnail_appear.style.visibility = 'visible';
            blur_art_thumbnail_appear.style.transform = 'translateY(0px)';
            blur_art_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#blur_art_trio_title").style.visibility = 'hidden';

            blur_art_thumbnail_appear.style.opacity = '0';
            blur_art_thumbnail_appear.style.transform = 'translateY(3px)';
            blur_art_thumbnail_appear.style.visibility = 'hidden';
        }

        // Formal Drafting
        if(window.scrollY>=8200 & window.scrollY<=8400) {
            document.querySelector("#formal_drafting_title").style.visibility = 'visible';

            formal_drafting_thumbnail_appear.style.opacity = '0.85';
            formal_drafting_thumbnail_appear.style.visibility = 'visible';
            formal_drafting_thumbnail_appear.style.transform = 'translateY(0px)';
            formal_drafting_thumbnail_appear.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#formal_drafting_title").style.visibility = 'hidden';

            formal_drafting_thumbnail_appear.style.opacity = '0';
            formal_drafting_thumbnail_appear.style.transform = 'translateY(3px)';
            formal_drafting_thumbnail_appear.style.visibility = 'hidden';
        }

        // Hand-Drawings
        if(window.scrollY>=8500 & window.scrollY<=8700) {
            document.querySelector("#hand-drawings_title").style.visibility = 'visible';

            hand_drawings_thumbnail.style.opacity = '0.85';
            hand_drawings_thumbnail.style.visibility = 'visible';
            hand_drawings_thumbnail.style.transform = 'translateY(0px)';
            hand_drawings_thumbnail.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#hand-drawings_title").style.visibility = 'hidden';

            hand_drawings_thumbnail.style.opacity = '0';
            hand_drawings_thumbnail.style.transform = 'translateY(3px)';
            hand_drawings_thumbnail.style.visibility = 'hidden';
        }

        // Metaphysical Writings
        if(window.scrollY>=8800 & window.scrollY<=9000) {
            document.querySelector("#metaphysical_writings_title").style.visibility = 'visible';

            metaphysical_writings_thumbnail.style.opacity = '0.85';
            metaphysical_writings_thumbnail.style.visibility = 'visible';
            metaphysical_writings_thumbnail.style.transform = 'translateY(0px)';
            metaphysical_writings_thumbnail.style.transition = '0.2s ease-in-out';

            lingering_screen_static.style.opacity = '0.2';
            lingering_screen_static.style.transition = '0.2s ease-in-out';
        }
        else {
            document.querySelector("#metaphysical_writings_title").style.visibility = 'hidden';

            metaphysical_writings_thumbnail.style.opacity = '0';
            metaphysical_writings_thumbnail.style.transform = 'translateY(3px)';
            metaphysical_writings_thumbnail.style.visibility = 'hidden';
        }
    }
    tv_scroll();

    // PROJECT TEXT CLICK SCRIPT (UNUSED)
    // document.querySelector("#abhc_vrchitecture_experience_title").addEventListener("click", function(){
    //    window.scroll(0, 2800)
    // });

    // LOADING SCREEN SCRIPT
    // Time is in ms
    window.setTimeout("document.getElementById('loading_screen').style.opacity='0';", 500)
    window.setTimeout("document.getElementById('loading_screen').style.display='none';", 1000)
    loading_screen.style.transition = '0.5s ease-in-out';


    
    // Page Transition Animation (Static Fade In)
    var project_thumbnails = document.getElementsByClassName('project_thumbnail');
    const fullscreen_static = document.querySelector("#fullscreen_static");

    for(var i = 0, j=project_thumbnails.length; i<j; i++){
    project_thumbnails[i].addEventListener("click", function(){
        fullscreen_static.style.visibility = 'visible';
        fullscreen_static.style.opacity = '1';
        fullscreen_static.style.transition = '0.3s ease-in-out';
        fullscreen_static.style.pointerEvents = 'all';
    });
    }
}

// Page Transition URL Click Delay
function delay (URL) {
    setTimeout( function() { window.location = URL }, 400 );
};

// Page Transition Animation (Static Disappears on Page Leave)
window.onbeforeunload = function() {
    fullscreen_static.style.visibility = 'visible';
    fullscreen_static.style.opacity = '0';
    fullscreen_static.style.pointerEvents = 'none';
}