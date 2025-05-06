const dealSlideCount = document.querySelectorAll('.deals-swiper .swiper-slide').length;

// Initialize Swiper
new Swiper('.deals-swiper', {
    slidesPerView: 'auto',
    speed: 1500,
    centerInsufficientSlides: true,
    spaceBetween: 20,
    autoHeight: false,
    initialSlide: 2,
    loop: true,
    loop: dealSlideCount <= 3 ? false : true,
    initialSlide: Math.round(dealSlideCount / 2) - 1,
    centeredSlides: dealSlideCount > 1 ? true : false,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});
