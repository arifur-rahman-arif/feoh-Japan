// // Initialize Swiper
// const slides = document.querySelectorAll('.deals-swiper .swiper-slide');

// const dealSwiper = new Swiper('.deals-swiper', {
//     slidesPerView: 'auto',
//     speed: 1500,
//     centerInsufficientSlides: slides.length > 1,
//     spaceBetween: 20,
//     autoHeight: false,
//     loop: slides.length > 2,
//     centeredSlides: slides.length > 2,
//     pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//     },
//     breakpoints: {
//         768: {
//             centeredSlides: false
//         }
//     }
// });

// if(slides.length > 2) {
//     if(window.innerWidth < 768) {
//         dealSwiper.slideNext();

//         setTimeout(() => {
//             dealSwiper.slidePrev();
//         }, 300);
//     }
// }


const slides = document.querySelectorAll('.deals-swiper .swiper-slide');

const dealSwiper = new Swiper('.deals-swiper', {
    slidesPerView: 'auto',
    speed: 1000,
    centerInsufficientSlides: slides.length > 1,
    spaceBetween: 20,
    autoHeight: false,
    loop: slides.length > 2,
    centeredSlides: slides.length > 2,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        768: {
            centeredSlides: false
        }
    },
    on: {
        init: function () {
            if (slides.length > 2 && window.innerWidth < 768) {
                requestAnimationFrame(() => {
                    this.slideNext();
                    setTimeout(() => {
                        this.slidePrev();
                    }, 1200);
                });
            }
        }
    }
});
