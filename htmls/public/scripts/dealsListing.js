// Initialize Swiper
const dealSwiper = new Swiper('.deals-swiper', {
    slidesPerView: 'auto',
    speed: 1500,
    centerInsufficientSlides: true,
    spaceBetween: 20,
    autoHeight: false,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        320: {
            centeredSlides: true
        },
        768: {
            centeredSlides: false
        }
    }
});

dealSwiper.slideNext();

setTimeout(() => {
    dealSwiper.slidePrev();
}, 300);