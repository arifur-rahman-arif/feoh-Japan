// This is not needed as we've included the cdn fine in the page itself
// this import is mainly for type support purposes
// While development keep it uncommented so that you get type-specific hints
// After development is done, comment it out, otherwise errors will be reported to console
// import SlimSelect from 'slim-select';

const HotelOfferFilter = {
    init: function () {
        this.dropdowns = ['#country', '#hotel-options', '#hotel-types'];

        // Add an event listener to track scroll events
        this.initializeDropdowns();
    },

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
    }
};

document.addEventListener('DOMContentLoaded', function () {
    HotelOfferFilter.init();
});
