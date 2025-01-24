/**
 * Faq module for handling FAQ accordion behavior
 */
const Faq = {
    /**
     * Initializes the FAQ module by selecting all FAQ items
     * and binding click events.
     */
    init: function () {
        // Select all FAQ items
        this.faqItems = document.querySelectorAll('.faq-item');
        // Bind events to each FAQ item
        this.bindEvents();
    },

    /**
     * Binds click events to the FAQ titles to toggle their respective content.
     */
    bindEvents: function () {
        this.faqItems.forEach(faqItem => {
            // Get the title element of the FAQ item
            const titleElement = faqItem.querySelector('.faq-item__title');

            // Add a click event listener to toggle the FAQ content
            titleElement.addEventListener('click', event => {
                const closestFaqItem = event.target.closest('.faq-item');

                if (closestFaqItem === faqItem) {
                    this.toggleFaq(faqItem);
                }
            });
        });
    },

    /**
     * Toggles the visibility of the clicked FAQ item's content
     * and ensures only one item is open at a time.
     *
     * @param {HTMLElement} faqItem - The clicked FAQ item to toggle
     */
    toggleFaq: function (faqItem) {
        // Get the content element of the clicked FAQ item
        const contentElement = faqItem.querySelector('.faq-item__content');
        // Check if the current item is already open
        const isOpen = faqItem.classList.contains('faq-item--active');

        // Close all FAQ items
        this.faqItems.forEach(item => {
            const content = item.querySelector('.faq-item__content');
            const iconMinus = item.querySelector('.icon-minus');
            const iconPlus = item.querySelector('.icon-plus');

            // Remove the active class and reset styles for all items
            item.classList.remove('faq-item--active');
            content.style.maxHeight = null; // Collapse the content
            iconMinus.style.opacity = '0'; // Hide the minus icon
            iconPlus.style.opacity = '1'; // Show the plus icon
        });

        // Open the clicked FAQ item if it was not already open
        if (!isOpen) {
            faqItem.classList.add('faq-item--active'); // Add active class
            contentElement.style.maxHeight = contentElement.scrollHeight + 'px'; // Expand the content
            faqItem.querySelector('.icon-minus').style.opacity = '1'; // Show the minus icon
            faqItem.querySelector('.icon-plus').style.opacity = '0'; // Hide the plus icon
        }
    }
};

// Initialize the FAQ module once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    Faq.init();
});
