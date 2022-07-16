// TV Channel Switching Controls
window.onload = function() {
    // Constant "title" defines what the constant is targeting
    const alpha_tv_appear = document.querySelector("#alpha_tv_cover");
    const animated_tv_static = document.querySelector("#animated_tv_static");
    const project_titles = document.querySelector(".project_titles");
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
    const white_oak_ventura_boulevard_thumbnail_appear = document.querySelector("#white_oak_ventura_boulevard_thumbnail");
    const the_virtual_parking_lot_thumbnail_appear = document.querySelector("#the_virtual_parking_lot_thumbnail");
    const virtual_nostalgia_thumbnail_appear = document.querySelector("#virtual_nostalgia_thumbnail");
    const abstract_pittman_dowell_residence_thumbnail_appear = document.querySelector("#abstract_pittman_dowell_residence_thumbnail");
    const charles_shaw_white_wine_thumbnail_appear = document.querySelector("#charles_shaw_white_wine_thumbnail");
    const blur_art_thumbnail_appear = document.querySelector("#blur_art_thumbnail");
    const formal_drafting_thumbnail_appear = document.querySelector("#formal_drafting_thumbnail");
    const hand_drawings_thumbnail = document.querySelector("#hand_drawings_thumbnail");
    const metaphysical_writings_thumbnail = document.querySelector("#metaphysical_writings_thumbnail");

    // Time is in ms
    window.setTimeout("document.getElementById('loading_screen').style.opacity='0';", 5000)
    window.setTimeout("document.getElementById('loading_screen').style.display='none';", 5500)
    loading_screen.style.transition = '0.5s ease-in-out';

    window.addEventListener('scroll', scrollEffect);
    // Styling format: [constant_name].style.[style_parameter]
    function scrollEffect () {
        if(window.scrollY>=2665) {
            alpha_tv_appear.style.opacity = '1';
            alpha_tv_appear.style.transition = '0.1s ease-in-out';
            project_titles.style.opacity = '1';
            animated_tv_static.style.opacity = '1';
            animated_tv_static.style.transition = '0.1s ease-in-out';
        }
        else {
            alpha_tv_appear.style.opacity = '0';
            project_titles.style.opacity = '0';
            animated_tv_static.style.opacity = '0';
        }
        
        // ABHC - VRchitecture Experience
        if(window.scrollY>=2800 & window.scrollY<=3000) {
            abhc_vrchitecture_experience_thumbnail_appear.style.opacity = '0.85';
            abhc_vrchitecture_experience_thumbnail_appear.style.transform = 'translateY(0px)';
            abhc_vrchitecture_experience_thumbnail_appear.style.transition = '0.2s ease-in-out';
        }
        else {
            abhc_vrchitecture_experience_thumbnail_appear.style.opacity = '0';
            abhc_vrchitecture_experience_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Sensorial Overdrive AR Experience
        if(window.scrollY>=3100 & window.scrollY<=3300) {
            sensorial_overdrive_ar_experience_thumbnail_appear.style.opacity = '0.85';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.transform = 'translateY(0px)';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            sensorial_overdrive_ar_experience_thumbnail_appear.style.opacity = '0';
            sensorial_overdrive_ar_experience_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // A Boyle Heights Canvas
        if(window.scrollY>=3400 & window.scrollY<=3600) {
            a_boyle_heights_canvas_thumbnail_appear.style.opacity = '0.85';
            a_boyle_heights_canvas_thumbnail_appear.style.transform = 'translateY(0px)';
            a_boyle_heights_canvas_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            a_boyle_heights_canvas_thumbnail_appear.style.opacity = '0';
            a_boyle_heights_canvas_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Forsaken Realm
        if(window.scrollY>=3700 & window.scrollY<=3900) {
            forsaken_realm_thumbnail_appear.style.opacity = '0.85';
            forsaken_realm_thumbnail_appear.style.transform = 'translateY(0px)';
            forsaken_realm_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            forsaken_realm_thumbnail_appear.style.opacity = '0';
            forsaken_realm_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // MO-SON
        if(window.scrollY>=4000 & window.scrollY<=4200) {
            moson_thumbnail_appear.style.opacity = '0.85';
            moson_thumbnail_appear.style.transform = 'translateY(0px)';
            moson_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            moson_thumbnail_appear.style.opacity = '0';
            moson_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Hesperovida
        if(window.scrollY>=4300 & window.scrollY<=4500) {
            hesperovida_thumbnail_appear.style.opacity = '0.85';
            hesperovida_thumbnail_appear.style.transform = 'translateY(0px)';
            hesperovida_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            hesperovida_thumbnail_appear.style.opacity = '0';
            hesperovida_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // The Lurking Mine
        if(window.scrollY>=4600 & window.scrollY<=4800) {
            the_lurking_mine_thumbnail_appear.style.opacity = '0.85';
            the_lurking_mine_thumbnail_appear.style.transform = 'translateY(0px)';
            the_lurking_mine_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            the_lurking_mine_thumbnail_appear.style.opacity = '0';
            the_lurking_mine_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Unusual Activity
        if(window.scrollY>=4900 & window.scrollY<=5100) {
            unusual_activity_thumbnail_appear.style.opacity = '0.85';
            unusual_activity_thumbnail_appear.style.transform = 'translateY(0px)';
            unusual_activity_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            unusual_activity_thumbnail_appear.style.opacity = '0';
            unusual_activity_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Rolled Flat
        if(window.scrollY>=5200 & window.scrollY<=5400) {
            rolled_flat_thumbnail_appear.style.opacity = '0.85';
            rolled_flat_thumbnail_appear.style.transform = 'translateY(0px)';
            rolled_flat_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            rolled_flat_thumbnail_appear.style.opacity = '0';
            rolled_flat_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Ascension
        if(window.scrollY>=5500 & window.scrollY<=5700) {
            ascension_thumbnail_appear.style.opacity = '0.85';
            ascension_thumbnail_appear.style.transform = 'translateY(0px)';
            ascension_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            ascension_thumbnail_appear.style.opacity = '0';
            ascension_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Conference Center, Plasencia
        if(window.scrollY>=5800 & window.scrollY<=6000) {
            conference_center_plasencia_thumbnail_appear.style.opacity = '0.85';
            conference_center_plasencia_thumbnail_appear.style.transform = 'translateY(0px)';
            conference_center_plasencia_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            conference_center_plasencia_thumbnail_appear.style.opacity = '0';
            conference_center_plasencia_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Sensorial Overdrive
        if(window.scrollY>=6100 & window.scrollY<=6300) {
            sensorial_overdrive_thumbnail_appear.style.opacity = '0.85';
            sensorial_overdrive_thumbnail_appear.style.transform = 'translateY(0px)';
            sensorial_overdrive_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            sensorial_overdrive_thumbnail_appear.style.opacity = '0';
            sensorial_overdrive_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // White Oak Avenue x Ventura Boulevard
        if(window.scrollY>=6400 & window.scrollY<=6600) {
            white_oak_ventura_boulevard_thumbnail_appear.style.opacity = '0.85';
            white_oak_ventura_boulevard_thumbnail_appear.style.transform = 'translateY(0px)';
            white_oak_ventura_boulevard_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            white_oak_ventura_boulevard_thumbnail_appear.style.opacity = '0';
            white_oak_ventura_boulevard_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // The Virtual Parking Lot
        if(window.scrollY>=6700 & window.scrollY<=6900) {
            the_virtual_parking_lot_thumbnail_appear.style.opacity = '0.85';
            the_virtual_parking_lot_thumbnail_appear.style.transform = 'translateY(0px)';
            the_virtual_parking_lot_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            the_virtual_parking_lot_thumbnail_appear.style.opacity = '0';
            the_virtual_parking_lot_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Virtual Nostalgia, As I Recall It
        if(window.scrollY>=7000 & window.scrollY<=7200) {
            virtual_nostalgia_thumbnail_appear.style.opacity = '0.85';
            virtual_nostalgia_thumbnail_appear.style.transform = 'translateY(0px)';
            virtual_nostalgia_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            virtual_nostalgia_thumbnail_appear.style.opacity = '0';
            virtual_nostalgia_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Abstract: Pittman-Dowell Residence
        if(window.scrollY>=7300 & window.scrollY<=7500) {
            abstract_pittman_dowell_residence_thumbnail_appear.style.opacity = '0.85';
            abstract_pittman_dowell_residence_thumbnail_appear.style.transform = 'translateY(0px)';
            abstract_pittman_dowell_residence_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            abstract_pittman_dowell_residence_thumbnail_appear.style.opacity = '0';
            abstract_pittman_dowell_residence_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Charles Shaw White Wine
        if(window.scrollY>=7600 & window.scrollY<=7800) {
            charles_shaw_white_wine_thumbnail_appear.style.opacity = '0.85';
            charles_shaw_white_wine_thumbnail_appear.style.transform = 'translateY(0px)';
            charles_shaw_white_wine_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            charles_shaw_white_wine_thumbnail_appear.style.opacity = '0';
            charles_shaw_white_wine_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Blur Art
        if(window.scrollY>=7900 & window.scrollY<=8100) {
            blur_art_thumbnail_appear.style.opacity = '0.85';
            blur_art_thumbnail_appear.style.transform = 'translateY(0px)';
            blur_art_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            blur_art_thumbnail_appear.style.opacity = '0';
            blur_art_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Formal Drafting
        if(window.scrollY>=8200 & window.scrollY<=8400) {
            formal_drafting_thumbnail_appear.style.opacity = '0.85';
            formal_drafting_thumbnail_appear.style.transform = 'translateY(0px)';
            formal_drafting_thumbnail_appear.style.transition = '0.2s ease-in-out';

        }
        else {
            formal_drafting_thumbnail_appear.style.opacity = '0';
            formal_drafting_thumbnail_appear.style.transform = 'translateY(3px)';
        }

        // Hand-Drawings
        if(window.scrollY>=8500 & window.scrollY<=8700) {
            hand_drawings_thumbnail.style.opacity = '0.85';
            hand_drawings_thumbnail.style.transform = 'translateY(0px)';
            hand_drawings_thumbnail.style.transition = '0.2s ease-in-out';

        }
        else {
            hand_drawings_thumbnail.style.opacity = '0';
            hand_drawings_thumbnail.style.transform = 'translateY(3px)';
        }

        // Metaphysical Writings
        if(window.scrollY>=8800 & window.scrollY<=9000) {
            metaphysical_writings_thumbnail.style.opacity = '0.85';
            metaphysical_writings_thumbnail.style.transform = 'translateY(0px)';
            metaphysical_writings_thumbnail.style.transition = '0.2s ease-in-out';

        }
        else {
            metaphysical_writings_thumbnail.style.opacity = '0';
            metaphysical_writings_thumbnail.style.transform = 'translateY(3px)';
        }
    }
    scrollEffect();
}