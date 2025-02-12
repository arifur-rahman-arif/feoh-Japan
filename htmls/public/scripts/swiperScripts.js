// While working enable this import to have type checking
// import Swiper from 'swiper';

new Swiper('.service-gallery-swiper', {
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },
    speed: 1500,
    slidesPerView: 'auto',
    freeMode: true,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    }
});

new Swiper('.property-gallery-swiper', {
    speed: 1500,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination'
    }
});

new Swiper('.room-list-swiper', {
    speed: 1500,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false
    // },
    pagination: {
        el: '.swiper-pagination'
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
});
