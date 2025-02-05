$( function() {
    

    // ------------ room-details item place -----------
    $('.tc-room-details-style2 [data-left]').each(function() {
        var leftValue = $(this).data('left');
        $(this).css('left', leftValue);
    });
    
    $('.tc-room-details-style2 [data-top]').each(function() {
        var topValue = $(this).data('top');
        $(this).css('top', topValue);
    });
    
    $('.tc-room-details-style2 .dot').on("click" , function(){
        $(this).siblings(".cont").toggleClass("hide");
    })

    
});

//--------------chat--------------------//

// const toggleButton = document.querySelector('.toggle-chat');
// const chatPopUp = document.querySelector('.chat-pop-up');
$( function() {
    $(".chat-btn").click(function(){
        // console.log(toggleButton)
        $(this).toggleClass("chat-is-open");
        $('.chat-box').toggleClass('chat-display-on')
        $('.chat-box').toggleClass('chat-visible')
        // $('.chat-box').toggleClass('chat-pos')
        // $('.chat-pop-up').toggleClass('chat-display-on')
        // $('.chat-pop-up').toggleClass('chat-visible')

    })
})
//     toggleButton.addEventListener('click', _=> {
//     console.log("asdsa")
//   toggleButton.classList.toggle('chat-is-open');
//   chatPopUp.classList.toggle('chat-display-on');
//   chatPopUp.classList.toggle('chat-visible');
// })
// })   

// ------------ swiper sliders -----------
$(document).ready(function() {

    // ------------ tc-header-style2 -----------
    var swiper = new Swiper('.tc-header-style2 .main-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        centeredSlides: true,
        speed: 1000,
        effect: "fade",
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: true,
    });


    // ------------ tc-header-style2 -----------
    var swiper = new Swiper('.product-card-style2 .imgs-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.product-card-style2 .imgs-slider .swiper-button-next',
            prevEl: '.product-card-style2 .imgs-slider .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: false,
        loop: false,
    });
    var swiper = new Swiper('.tc-popular-cat-style1 .best-seller-slider', {
        slidesPerView: 7,
        spaceBetween: 10,
        // centeredSlides: true,
        speed: 1000,
        noSwiping: true,
        pagination: {
            el: '.tc-popular-cat-style1.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-popular-cat-style1 .container  .swiper-button-next',
            prevEl: '.tc-popular-cat-style1 .container  .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        // autoplay: {
        //     delay: 5000,
        // },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 5,
            },
            991: {
                slidesPerView: 7,
            },
            1200: {
                slidesPerView: 7,
            }
        }
    });


    // ------------ tc-best-seller-style2 -----------
    var swiper = new Swiper('.tc-best-seller-style2 .best-seller-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        noSwiping: true,
        pagination: {
            el: '.tc-best-seller-style2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-best-seller-style2 .swiper-next',
            prevEl: '.tc-best-seller-style2 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ text-slider -----------
    var swiper = new Swiper('.tc-best-seller-style2 .text-slider', {
        spaceBetween: 60,
        centeredSlides: true,
        slidesPerView: "auto",
        speed: 10000,
        autoplay: {
            delay: 1,
        },
        loop: true,
    //   allowTouchMove: false,
        disableOnInteraction: true,
    });

    // ------------ shop-room-slider -----------
    var swiper = new Swiper('.tc-shop-room-style2 .shop-room-slider', {
        slidesPerView: 3,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        noSwiping: true,
        pagination: false,
        navigation: {
            nextEl: '.tc-shop-room-style2 .swiper-next',
            prevEl: '.tc-shop-room-style2 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 3,
            },
            1200: {
                slidesPerView: 3,
            }
        }
    });

    // ------------ tc-header-style2 -----------
    var swiper = new Swiper('.tc-room-details-style2 .room-details-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        effect:"fade",
        // centeredSlides: true,
        speed: 1000,
        pagination: {
            el: '.tc-room-details-style2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-room-details-style2 .swiper-button-next',
            prevEl: '.tc-room-details-style2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 8000,
        },
        loop: false,
    });

    // ------------ tc-new-arrival-style2 -----------
    var swiper = new Swiper('.tc-new-arrival-style2 .products-slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        noSwiping: true,
        pagination: {
            el: '.tc-new-arrival-style2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-new-arrival-style2 .swiper-next',
            prevEl: '.tc-new-arrival-style2 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

    // ------------ tc-testimonials-style2 -----------
    var swiper = new Swiper('.tc-testimonials-style2 .testimonial-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        // centeredSlides: true,
        speed: 1000,
        pagination: false,
        navigation: {
            nextEl: '.tc-testimonials-style2 .swiper-button-next',
            prevEl: '.tc-testimonials-style2 .swiper-button-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 6000,
        },
        loop: false,
    });

    // ------------ tc-new-arrival-style2 -----------
    var swiper = new Swiper('.tc-blog-style2 .blog-slider', {
        slidesPerView: 1,
        spaceBetween: 30,
        // centeredSlides: true,
        speed: 1000,
        noSwiping: true,
        pagination: {
            el: '.tc-blog-style2 .swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.tc-blog-style2 .swiper-next',
            prevEl: '.tc-blog-style2 .swiper-prev',
        },
        mousewheel: false,
        keyboard: true,
        autoplay: {
            delay: 5000,
        },
        loop: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
            },
            480: {
                slidesPerView: 2,
            },
            787: {
                slidesPerView: 3,
            },
            991: {
                slidesPerView: 4,
            },
            1200: {
                slidesPerView: 4,
            }
        }
    });

});


// ------------ scripts -----------
$(document).ready(function(){

});











document.getElementById("more-link").addEventListener("click", function(event){
    event.preventDefault();
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more-text");
    var linkText = document.getElementById("more-link");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      linkText.innerHTML = "more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      linkText.innerHTML = "less"; 
      moreText.style.display = "inline";
    }
  });
 