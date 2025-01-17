const LanguageDropdown = {
    init: function () {
        this.dropdownButton = document.getElementById('languageDropdownBtn');
        this.dropdownMenu = document.getElementById('languageDropdown');
        this.languageOptions = document.querySelectorAll('.lang-option');
        this.selectedLanguage = document.getElementById('selectedLanguage');

        // Bind events using arrow functions (no need for bind())
        this.dropdownButton.addEventListener('click', () => this.toggleDropdown());

        this.languageOptions.forEach(option => {
            option.addEventListener('click', event => this.handleLanguageSelection(event));
        });
    },

    toggleDropdown: function () {
        this.dropdownMenu.classList.toggle('show');
        document.querySelector('.language-indicator').classList.toggle('show');
    },

    handleLanguageSelection: function (event) {
        const lang = event.target.dataset.lang;
        this.changeLanguage(lang);
        this.toggleDropdown();
    },

    changeLanguage: function (language) {
        this.selectedLanguage.textContent = language;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    LanguageDropdown.init();
});
