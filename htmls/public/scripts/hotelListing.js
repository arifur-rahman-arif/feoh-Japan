// Initialize Swiper
new Swiper('.swiper-container', {
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});

/* View More Function Starts*/
document.addEventListener('DOMContentLoaded', () => {
    const hotels = document.querySelectorAll('.hotel-row');
    const showAllButton = document.querySelector('.show-all-button');
    const initialCount = parseInt(showAllButton.getAttribute('data-initial-count'), 10);
    const showText = showAllButton.querySelector('.show-text');
    const hideText = showAllButton.querySelector('.hide-text');
    const arrowIcon = showAllButton.querySelector('.arrow-icon');

    let visibleCount = initialCount;

    // Initially display only the first `initialCount` hotels
    const updateHotelVisibility = () => {
        hotels.forEach((hotel, index) => {
            hotel.style.display = index < visibleCount ? 'flex' : 'none';
        });
    };

    // Update button state (text and arrow)
    const updateButtonState = () => {
        const totalHotels = hotels.length;

        if (visibleCount >= totalHotels) {
            showText.style.display = 'none';
            hideText.style.display = 'inline';
            arrowIcon.style.transform = 'rotate(180deg)'; // Upward arrow for "Hide All"
        } else {
            showText.style.display = 'inline';
            hideText.style.display = 'none';
            arrowIcon.style.transform = 'rotate(0deg)'; // Downward arrow for "Show All"
        }
    };

    // Click event for the button
    showAllButton.addEventListener('click', () => {
        const totalHotels = hotels.length;

        if (visibleCount >= totalHotels) {
            visibleCount = initialCount; // Collapse to initial count
        } else {
            visibleCount = Math.min(visibleCount + initialCount, totalHotels); // Expand by initial count
        }

        updateHotelVisibility();
        updateButtonState();
    });

    // Initialize visibility on page load
    updateHotelVisibility();
    updateButtonState();
});

/* View More Function Ends*/
