// import Swiper from "swiper"; While working enable this import to have type checking

new Swiper('.masthead-swiper', {
    autoplay: {
        delay: 2500,
        disableOnInteraction: false
    },
    speed: 2000,
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination'
    }
});
