// Initialize Swiper
new Swiper('.deals-swiper', {
    slidesPerView: 'auto',
    speed: 1500,
    centerInsufficientSlides: true,
    spaceBetween: 20,
    autoHeight: false,
    initialSlide: 2,
    loop: true,
    centeredSlides: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    breakpoints: {
        900: {
            centeredSlides: false,
        }
    }
});

