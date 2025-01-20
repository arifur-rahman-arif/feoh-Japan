const Navbar = {
    init: function () {
        // Mobile menu related selectors
        this.mobileMenu = document.getElementById('mobile-menu');
        this.hamburger = document.getElementById('menu-hamburger');
        this.closeMenuBtn = document.getElementById('close-menu-btn');

        // Language related selectors
        this.dropdownButtons = document.querySelectorAll('.language-dropdown-btn');
        this.languageOptions = document.querySelectorAll('.lang-option');

        // Submenu dropdown functionality
        this.submenuDropdownButton = document.querySelectorAll('.submenu-anchor');
        this.submenuActionButton = document.querySelectorAll('.submenu-action-btn');

        // Language action button for mobile menu
        this.mobileLanguageActionButton = document.getElementById('languageDropdownMobile');
        this.mobileLanguageDropdown = document.getElementById('mobile-language-dropdown');
        this.mobileLanguageOptions = document.querySelectorAll('.lang-option-mobile');
        this.mobileSelectedLanguage = document.getElementById('mobile-selected-language');

        this.dropdownButtons.forEach(button => {
            button.addEventListener('click', event => {
                this.toggleDropdown(event);
            });
        });

        this.languageOptions.forEach(option => {
            option.addEventListener('click', event => this.handleLanguageSelection(event));
        });

        this.submenuDropdownButton.forEach(button => {
            button.addEventListener('click', event => {
                this.openSubmenu(event);
            });
        });

        this.submenuActionButton.forEach(button => {
            button.addEventListener('click', event => {
                this.closeSubmenu(event);
            });
        });

        this.mobileLanguageActionButton.addEventListener('click', () => {
            this.mobileLanguageDropdown.classList.toggle('max-h-0');
        });

        this.mobileLanguageOptions.forEach(option => {
            option.addEventListener('click', event => this.handleMobileLanguageSelection(event));
        });

        // Functions to toggle mobile menu on and off
        this.hamburger.addEventListener('click', () => {
            this.mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
        });
        this.closeMenuBtn.addEventListener('click', () => {
            this.mobileMenu.classList.add('opacity-0', 'pointer-events-none');
        });
    },

    openSubmenu: function (event) {
        event.preventDefault();
        event.stopPropagation();
        const submenu = event.target.nextElementSibling;

        if (!submenu) return;

        submenu.classList.remove('translate-x-full');
    },

    closeSubmenu: function (event) {
        event.preventDefault();
        event.stopPropagation();
        const submenu = event.target.parentElement;

        if (!submenu) return;

        submenu.classList.add('translate-x-full');
    },

    toggleDropdown: function (event) {
        const clickedElement = event.target;
        const parentElement = clickedElement.closest('.dropdown-menu');
        const dropdownMenu = parentElement.querySelector('.dropdown-content');
        const languageIndicator = parentElement.querySelector('.language-indicator');

        dropdownMenu.classList.toggle('show');
        languageIndicator.classList.toggle('show');
    },

    handleLanguageSelection: function (event) {
        const lang = event.target.dataset.lang;
        this.changeLanguage(lang, event);
        this.toggleDropdown(event);
    },

    handleMobileLanguageSelection: function (event) {
        const lang = event.target.dataset.lang;
        this.mobileSelectedLanguage.textContent = lang;
        this.mobileLanguageDropdown.classList.toggle('max-h-0');
    },

    changeLanguage: function (language, event) {
        const clickedElement = event.target;
        const parentElement = clickedElement.closest('.dropdown-menu');
        const selectedLanguage = parentElement.querySelector('.selected-language');

        selectedLanguage.textContent = language;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    Navbar.init();
});
