// While working enable this import to have type checking
// import Swiper from 'swiper';

new Swiper('.property-gallery-swiper', {
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },
    speed: 2000,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centerInsufficientSlides: true,
    loop: true,
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination'
    }
});

new Swiper('.room-list-swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 2000,
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
