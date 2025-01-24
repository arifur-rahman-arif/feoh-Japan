// Initialize Swiper
new Swiper('.deals-swiper', {
    loop: true,
    breakpoints: {
        0: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            slidesOffsetBefore: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        },
        420: {
            slidesPerView: 1.2,
            spaceBetween: 20,
            slidesOffsetBefore: 10,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        },
        992: {
            slidesPerView: 2.7,
            spaceBetween: 20,
            slidesOffsetBefore: 0,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 15,
            slidesOffsetBefore: 0
        },
        1281: {
            slidesPerView: 3,
            slidesOffsetBefore: 0,
            spaceBetween: 15
        },

        1367: {
            slidesPerView: 3,
            slidesOffsetBefore: 0,
            spaceBetween: 30
        }
    }
});

function equalizeCardHeights() {
    const cards = document.querySelectorAll('.deals-card');
    let maxHeight = 0;

    cards.forEach(card => {
        card.style.height = 'auto'; // Reset height
        maxHeight = Math.max(maxHeight, card.offsetHeight);
    });

    cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
}

// Call the function on load and resize
window.addEventListener('load', equalizeCardHeights);
window.addEventListener('resize', equalizeCardHeights);
