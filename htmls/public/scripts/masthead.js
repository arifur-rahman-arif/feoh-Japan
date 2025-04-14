// While working enable this import to have type checking
// import Swiper from 'swiper';

const isAutoPlay = document.querySelector('.masthead-swiper').classList.contains('autoplay');

const swiperObject = {
    speed: 2000,
    slidesPerView: 1,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
}

if(isAutoPlay) {
    swiperObject.autoplay = {
        delay: 2500,
        disableOnInteraction: false
    }
}

new Swiper('.masthead-swiper', swiperObject);
