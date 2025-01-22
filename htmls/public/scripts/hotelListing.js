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

/* Show All Function Starts*/

document.addEventListener('DOMContentLoaded', () => {
    const hotels = document.querySelectorAll('.hotel-row');
    const showAllButton = document.querySelector('.show-all-button-container');

    hotels.forEach((hotel, index) => {
        if (index >= 3) {
            hotel.style.display = 'none';
        }
    });

    // Add click event listener to the "Show All" button
    showAllButton?.addEventListener('click', () => {
        hotels.forEach(hotel => {
            hotel.style.display = 'flex'; // Show all hotels
        });

        showAllButton.style.display = 'none'; // Hide the button
    });
});

/* Show All Function Ends*/
