// This is not needed as we've included the cdn fine in the page itself
// this import is mainly for type support purposes
// While development keep it uncommented so that you get type-specific hints
// After development is done, comment it out, otherwise errors will be reported to console
// import SlimSelect from 'slim-select';

const HotelOfferFilter = {
    init: function () {
        // Filtering options JavaScript
        this.dropdowns = ['#city', '#hotel-options', '#hotel-types'];
        this.categoryFilters = document.querySelectorAll('input[name="category-options"]');
        this.categoryFilterLabels = document.querySelectorAll('.category__item');

        // Collapsible options JavaScript
        this.collapsibleOptions = document.querySelectorAll('.collapsible__button');

        // Popup
        this.popupAnchor = document.querySelectorAll('.popup-anchor');

        // Load more offer JavaScript
        this.loadMoreButton = document.getElementById('#load-more-offer');

        this.initializeDropdowns();
        this.toggleCategoryActiveClass();
        this.toggleCollapsibleOption();
        this.togglePopup();

        // =======================================================================================================
        // Write form submission or form change logic here
        // If user changes input fields then get the data from server and inject the html to the listing container
        // =======================================================================================================
    },

    /**
     * Initialize SlimSelect dropdowns for the given array of IDs.
     * @function
     * @param {string[]} dropdowns - Array of IDs of elements that should be converted to SlimSelect dropdowns.
     * @returns {void}
     */
    initializeDropdowns: function () {
        if (!this.dropdowns || !this.dropdowns.length) return;

        for (const dropdown of this.dropdowns) {
            const select = new SlimSelect({
                select: dropdown,
                settings: {
                    showSearch: false
                }
            });
        }
    },

    /**
     * Adds an event listener to each category filter input.
     * When a category filter is changed, the active class is removed from all labels
     * and added to the label that corresponds to the changed filter.
     * @function
     * @returns {void}
     */
    toggleCategoryActiveClass: function () {
        if (!this.categoryFilters || !this.categoryFilters.length) return;

        this.categoryFilters.forEach(input => {
            input.addEventListener('change', event => {
                const currentElement = event.target;

                // Remove active class from all labels
                if (!this.categoryFilterLabels || !this.categoryFilterLabels.length) return;

                this.categoryFilterLabels.forEach(label => {
                    label.classList.remove('category__item--active');
                });

                // Add active class to the corresponding label
                const label = currentElement.parentNode.querySelector('.category__item');
                label.classList.add('category__item--active');
            });
        });
    },

    /**
     * Toggles the active state of the collapsible container when a button is clicked.
     * @function
     * @returns {void}
     */
    toggleCollapsibleOption: function () {
        if (!this.collapsibleOptions || !this.collapsibleOptions.length) return;

        this.collapsibleOptions.forEach(button => {
            button.addEventListener('click', event => {
                const currentElement = event.target;

                if (currentElement !== button) return;

                currentElement.parentNode.classList.toggle('collapsible--active');
            });
        });
    },

    togglePopup: function () {
        if (!this.popupAnchor || !this.popupAnchor.length) return;

        this.popupAnchor.forEach(anchor => {
            anchor.addEventListener('click', event => {
                event.preventDefault();
                const currentElement = event.target;

                if (currentElement !== anchor) return;

                const popup = currentElement.closest('.offer-list__offer').querySelector('.jp-popup');
                const closeIcon = popup.querySelector('.jp-close-button');
                popup.classList.toggle('jp-popup--active');

                closeIcon.addEventListener('click', () => {
                    popup.classList.remove('jp-popup--active');
                });
            });
        });

        document.addEventListener('click', event => {
            event.preventDefault();
            event.stopPropagation();

            if (event.target.classList.contains('jp-popup')) {
                const activePopup = document.querySelector('.jp-popup--active');
                if (activePopup) {
                    activePopup.classList.remove('jp-popup--active');
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    HotelOfferFilter.init();
});
