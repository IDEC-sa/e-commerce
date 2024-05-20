

$(function () {

    "use strict";


    $(".sticky_item").stick_in_parent();



    var rellax = new Rellax('.d-subj .img-fav', {
        center: false,
        wrapper: null,
    });

    var rellax = new Rellax('.rellax', {
        center: false,
    });


    var swiper = new Swiper(".pages-swiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

    var swiper = new Swiper(".testim-swiper", {
        slidesPerView: 4,
        spaceBetween: 60,
        speed: 1500,
        autoplay: {
            delay: 5000,
        },
        loop: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });


});



/* =============================================================================
-------------------------------  Wow Animation   -------------------------------
============================================================================= */

wow = new WOW({
    animateClass: 'animated',
    offset: 100
});
wow.init();







