// While working enable this import to have type checking
// import Swiper from 'swiper';

const serviceGallerySwiperAutoplay = document.querySelector('.service-gallery-swiper')?.classList.contains('autoplay');
const serviceGallerySwiperObject = {
    speed: 1500,
    slidesPerView: 'auto',
    spaceBetween: 20,
    centerInsufficientSlides: true,
    grabCursor: true,
    loop: true,
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
            // slidesOffsetBefore: 150,
            // slidesOffsetAfter: -150,
        }
    }
};

if (serviceGallerySwiperAutoplay) {
    serviceGallerySwiperObject.autoplay = {
        delay: 2500,
        disableOnInteraction: false
    };
}
const serviceGallerySwiper = new Swiper('.service-gallery-swiper', serviceGallerySwiperObject);

// serviceGallerySwiper.on('reachEnd', () => {
//     setTimeout(() => {
//     serviceGallerySwiper.slideTo(0, 1000); // Go back to first slide with animation
//     }, 500); // Optional delay
// });

const propertyGallerySwiperAutoplay = document
    .querySelector('.property-gallery-swiper')
    ?.classList.contains('autoplay');
const propertyGallerySwiperObject = {
    speed: 1500,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 20,
    centerInsufficientSlides: true,
    grabCursor: true,
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
};
if (propertyGallerySwiperAutoplay) {
    propertyGallerySwiperObject.autoplay = {
        delay: 2500,
        disableOnInteraction: false
    };
}
new Swiper('.property-gallery-swiper', propertyGallerySwiperObject);

const roomListSwiperAutoplay = document.querySelector('.property-gallery-swiper')?.classList.contains('autoplay');
const roomListSwiperObject = {
    speed: 1500,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
};
if (roomListSwiperAutoplay) {
    roomListSwiperObject.autoplay = {
        delay: 2500,
        disableOnInteraction: false
    };
}
new Swiper('.room-list-swiper', roomListSwiperObject);
