const LoginPopupHandler = {
    init: function () {
        this.popupAnchors = document.querySelectorAll('.login-popup-anchor');
        this.togglePopup();
    },

    togglePopup: function () {
        if (!this.popupAnchors || !this.popupAnchors.length) return;

        this.popupAnchors.forEach(anchor => {
            anchor.addEventListener('click', event => {
                event.preventDefault();
                const popup = document.querySelector('.login-popup');
                const closeIcon = popup.querySelector('.login-close-button');
                if (popup) {
                    popup.classList.toggle('login-popup--active');
                }
                closeIcon.addEventListener('click', () => {
                    popup.classList.remove('login-popup--active');
                });
            });
        });

        document.addEventListener('click', event => {
            if (event.target.classList.contains('login-popup')) {
                const activePopup = document.querySelector('.login-popup--active');
                if (activePopup) {
                    activePopup.classList.remove('login-popup--active');
                }
            }
        });
    }
};

const Login = {
    init: function () {
        // Form elements
        this.form = document.getElementById('login-form');
        this.submitButton = document.getElementById('login-form-submit');
        this.emailElement = document.getElementById('email');
        this.passwordElement = document.getElementById('password');

        // Password visibility toggle buttons
        this.showIcons = document.querySelectorAll('.password-show');
        this.hideIcons = document.querySelectorAll('.password-close');

        this.removeShowErrorOnChange();
        this.handleSubmit();
        this.togglePasswordVisibility();
    },

    /**
     * Toggles the visibility of password input fields.
     * Adds event listeners to show and hide icons to toggle between
     * displaying passwords as plain text or obscured text.
     * Initially hides the close icon and shows the show icon.
     */

    togglePasswordVisibility: function () {
        this.showIcons.forEach(showIcon => {
            showIcon.addEventListener('click', event => {
                const currentTarget = event.target;

                console.log(currentTarget);

                if (currentTarget !== showIcon) return;

                const inputField = currentTarget.closest('.input-group').querySelector('input');
                const hideIcon = currentTarget.closest('.input-group').querySelector('.password-close');

                inputField.type = 'text'; // Show password

                currentTarget.classList.toggle('hidden');
                hideIcon.classList.toggle('hidden');
            });
        });

        this.hideIcons.forEach(hideIcon => {
            hideIcon.addEventListener('click', event => {
                const currentTarget = event.target;

                console.log(currentTarget);

                if (currentTarget !== hideIcon) return;

                const inputField = currentTarget.closest('.input-group').querySelector('input');
                const showIcon = currentTarget.closest('.input-group').querySelector('.password-show');

                inputField.type = 'password'; // Hide password

                currentTarget.classList.toggle('hidden');
                showIcon.classList.toggle('hidden');
            });
        });
    },

    removeShowErrorOnChange: function () {
        const inputs = [this.emailElement, this.passwordElement];

        inputs.forEach(input => {
            input.addEventListener('input', event => {
                event.target.closest('.input-group').classList.remove('input-group--invalid');
            });
        });
    },

    handleSubmit: function () {
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            let showError = false;
            const email = this.emailElement.value.trim();
            const password = this.passwordElement.value;

            // Validation
            if (!email || !this.validateEmail(email)) {
                this.showError(this.emailElement);
                showError = true;
            }

            const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
            if (!password || !passwordRegex.test(password)) {
                this.showError(this.passwordElement);
                showError = true;
            }

            if (showError) {
                window.scrollTo({
                    top: this.form.getBoundingClientRect().top + window.scrollY - 200,
                    behavior: 'smooth'
                });
                return;
            }

            if (!this.getCaptchaResponse()) {
                document.getElementById('form-captcha').classList.add('input-group--invalid');
                return;
            }

            this.submitForm({ email, password });
        });
    },

    showError: function (element) {
        element.closest('.input-group').classList.add('input-group--invalid');
    },

    validateEmail: function (email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    },

    submitForm: function (data) {
        console.log(data);
        window.location.href = '/';
    },

    getCaptchaResponse: function () {
        return grecaptcha.getResponse() !== '';
    }
};

document.addEventListener('DOMContentLoaded', function () {
    LoginPopupHandler.init();
    Login.init();
});
