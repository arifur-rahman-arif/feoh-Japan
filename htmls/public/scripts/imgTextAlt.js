document.addEventListener('DOMContentLoaded', () => {
    const swiperContainers = document.querySelectorAll('.imgTextAlt-swiper');

    swiperContainers.forEach((swiperContainer, index) => {
        const sliderPagination = swiperContainer.closest('.flex').querySelector('.slider-pagination');

        if (sliderPagination) {
            // Clear any existing content in the pagination div
            sliderPagination.innerHTML = '';

            // Count slides only in this specific Swiper instance
            const totalSlides = swiperContainer.querySelectorAll('.swiper-slide').length;

            // Create bullets based on the number of slides in this instance
            for (let i = 0; i < totalSlides; i++) {
                const bullet = document.createElement('span');
                bullet.classList.add('swiper-pagination-bullet');
                sliderPagination.appendChild(bullet);
            }

            // Initialize Swiper for this specific container
            new Swiper(swiperContainer, {
                direction: 'vertical',
                autoplay: true,
                loop: true,
                spaceBetween: 0,
                pagination: {
                    el: sliderPagination,
                    clickable: true
                },
                breakpoints: {
                    0: {
                        direction: 'horizontal'
                    },
                    992: {
                        direction: 'vertical'
                    }
                }
            });
        } else {
            console.error(`Slider-pagination div not found for swiper instance ${index}`);
        }
    });
});
