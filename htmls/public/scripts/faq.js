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
        // Toggle the clicked FAQ item
        faqItem.classList.toggle('faq-item--active');

        // Get the content element of the clicked FAQ item
        const contentElement = faqItem.querySelector('.faq-item__content');

        // Set the max height of the content element based on its scroll height
        if (faqItem.classList.contains('faq-item--active')) {
            contentElement.style.maxHeight = contentElement.scrollHeight + 'px';
            faqItem.querySelector('.icon-minus').style.opacity = '1';
            faqItem.querySelector('.icon-plus').style.opacity = '0';
        } else {
            contentElement.style.maxHeight = null;
            faqItem.querySelector('.icon-minus').style.opacity = '0';
            faqItem.querySelector('.icon-plus').style.opacity = '1';
        }
    }
};

// Initialize the FAQ module once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    Faq.init();
});
