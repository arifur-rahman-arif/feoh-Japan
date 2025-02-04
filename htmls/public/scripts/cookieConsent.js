/**
 * CookieConsent module for handling cookie consent banner behavior
 */
const CookieConsent = {
    /**
     * Initializes the CookieConsent module by checking for consent
     * and binding click events.
     */
    init: function () {
        this.banner = document.getElementById('cookie-banner');
        this.acceptButton = this.banner.querySelector('button');

        if (!this.hasConsent()) {
            this.showBanner();
        }

        this.bindEvents();
    },

    /**
     * Binds click events to the accept button to set consent.
     */
    bindEvents: function () {
        this.acceptButton.addEventListener('click', () => {
            this.setConsent();
            this.hideBanner();
        });
    },

    /**
     * Shows the cookie banner.
     */
    showBanner: function () {
        this.banner.style.display = 'block';
    },

    /**
     * Hides the cookie banner.
     */
    hideBanner: function () {
        this.banner.style.display = 'none';
    },

    /**
     * Sets cookie consent in localStorage with a 7-day expiration.
     */
    setConsent: function () {
        const expiryDate = new Date();
        expiryDate.setDate(expiryDate.getDate() + 7);
        localStorage.setItem('cookieConsent', expiryDate.getTime());
    },

    /**
     * Checks if the user has already given consent.
     * @returns {boolean}
     */
    hasConsent: function () {
        const consentTime = localStorage.getItem('cookieConsent');
        return consentTime && new Date().getTime() < parseInt(consentTime, 10);
    }
};

// Initialize the CookieConsent module once the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {
    CookieConsent.init();
});
