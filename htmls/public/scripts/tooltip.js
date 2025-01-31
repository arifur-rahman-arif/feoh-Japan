const Tooltip = {
    init: function () {
        this.initializeTooltip();
    },

    initializeTooltip: function () {
        tippy('[data-tippy-content]', {
            placement: 'top',
            maxWidth: '240px',
            arrow: true,
            inertia: true,
            duration: 700
            // showOnCreate: true,
            // interactive: true,
            // trigger: 'click'
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Tooltip.init();
});
