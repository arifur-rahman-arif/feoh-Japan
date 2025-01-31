const Tooltip = {
    init: function () {
        this.initializeTooltip();
    },

    initializeTooltip: function () {
        tippy('[data-tippy-content]', {
            placement: 'top',
            animation: 'shift-away',
            maxWidth: '400px',
            arrow: true,
            inertia: true,
            duration: 700,
            theme: 'material'
            // showOnCreate: true,
            // interactive: true,
            // trigger: 'click'
        });
    }
};

document.addEventListener('DOMContentLoaded', () => {
    Tooltip.init();
});
