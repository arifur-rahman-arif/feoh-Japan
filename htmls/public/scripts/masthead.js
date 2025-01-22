// While working enable this import to have type checking
// import Swiper from 'swiper';

new Swiper('.masthead-swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 2000,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination'
    }
});
