// ImgTextAlt Swiper Script Started
document.querySelectorAll('.imgTextAlt-swiper').forEach((swiperElement, _) => {
    const slides = swiperElement.querySelectorAll('.swiper-slide');

    // Calculate max height from slides
    let maxHeight = 0;
    slides.forEach(slide => {
        const slideHeight = slide.offsetHeight;
        maxHeight = Math.max(maxHeight, slideHeight);
    });

    // Set container height
    if (maxHeight > 0) {
        swiperElement.style.maxHeight = `${maxHeight}px`;
    }

    new Swiper(swiperElement, {
        speed: 1500,
        slidesPerView: 1,
        spaceBetween: 20,
        loop: slides.length > 1,
        // autoplay: true,
        grabCursor: slides.length > 1,
        keyboard: {
            enabled: true
        },
        pagination: {
            el: swiperElement.querySelector('.swiper-pagination'),
            clickable: true
        },
        breakpoints: {
            0: {
                direction: 'horizontal',
                slidesPerView: 1,
                pagination: false
            },
            768: {
                direction: 'vertical',
                slidesPerView: 1
            }
        },
        on: {
            resize: function () {
                // Recalculate max height on resize
                let newMaxHeight = 0;
                slides.forEach(slide => {
                    const slideHeight = slide.offsetHeight;
                    newMaxHeight = Math.max(newMaxHeight, slideHeight);
                });
                if (newMaxHeight > 0) {
                    swiperElement.style.maxHeight = `${newMaxHeight}px`;
                }
            }
        }
    });
});
// ImgTextAlt Swiper Script Ended

// Smooth Scroll Secondary Navigation Script Started//
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.secnav-item');

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();

            const targetId = link.getAttribute('href').replace('#', '');
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
// Smooth Scroll Secondary Navigation Script Ended//

// Image Grid Cards Height Dynamic Script Started//
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.img-grid-card');
    let maxHeight = 0;

    // Reset heights to auto before recalculating
    cards.forEach(card => {
        card.style.height = 'auto';
    });

    // Find the tallest card
    cards.forEach(card => {
        const cardHeight = card.offsetHeight;
        if (cardHeight > maxHeight) {
            maxHeight = cardHeight;
        }
    });

    // Apply the tallest height to all cards
    cards.forEach(card => {
        card.style.height = `${maxHeight}px`;
    });
});
// Image Grid Cards Height Dynamic Script Ended//
