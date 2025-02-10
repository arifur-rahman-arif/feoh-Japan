/**
 * Closes the modal with the id "custom-modal" by adding a "hide" class to trigger a slide-down animation.
 * After the animation is finished, the modal is removed from the DOM.
 *
 * @returns {void}
 */
window.closeModal = function () {
    const modal = document.getElementById('custom-modal');
    if (modal) {
        modal.classList.add('hide');

        setTimeout(function () {
            if (modal.parentNode) {
                modal.parentNode.removeChild(modal);
            }
        }, 500);
    }
};

// ------------------- Website modal element --------------------------------
document.querySelectorAll('[modal-content]').forEach(element => {
    element.addEventListener('click', function () {
        const html = this.getAttribute('modal-content');
        const eventType = this.getAttribute('event-type');
        const containerRootClass = this.getAttribute('modal-container-root-class');

        const modal = document.createElement('div');
        modal.id = 'custom-modal';
        modal.className = 'fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center';
        modal.innerHTML = `
            <div class="relative max-h-[calc(100vh_-_5rem)] w-full max-w-[82rem] bg-color4 px-6 py-12 pt-16 grid content-start modal-container overflow-y-auto ${containerRootClass}">
                <button id="close-modal" title="Close modal"
                    class="absolute top-0 right-0 -translate-x-3 translate-y-3 transition-all duration-500 hover:scale-110 z-[2]">
                    <img src="/icons/icon-close.svg" alt="" width="48" height="48" class="pointer-events-none" />
                </button>
                <div class="relative w-full overflow-hidden [&_.plyr]:!max-h-full custom-modal__modal-content overflow-y-auto">
                    ${html}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        // Dispatch custom event when modal is opened
        const modalEvent = new CustomEvent('modalOpened', {
            detail: { eventType: eventType || false }
        });

        document.dispatchEvent(modalEvent);

        setTimeout(function () {
            modal.classList.add('show');
        }, 50);
    });
});

// Close the modal when the close button is clicked, when clicking outside the video, or when pressing the ESC key
document.addEventListener('click', function (e) {
    if (
        e.target.id === 'custom-modal' ||
        e.target.id === 'close-modal' ||
        e.target.matches('.close-modal') ||
        e.target.closest('.close-modal')
    ) {
        closeModal();
    }
});

/**
 * Handles the closing of the modal when the Escape key is pressed or when clicking outside the modal.
 *
 * @param e - The event object that triggered the function.
 * @returns {void}
 */
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        const modal = document.getElementById('custom-modal');
        if (modal) {
            modal.classList.add('hide');

            setTimeout(function () {
                if (modal.parentNode) {
                    modal.parentNode.removeChild(modal);
                }
            }, 500);
        }
    }
});
