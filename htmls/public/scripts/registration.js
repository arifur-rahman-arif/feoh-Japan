// This is not needed as we've included the cdn fine in the page itself
// this import is mainly for type support purposes
// While development keep it uncommented so that you get type-specific hints
// After development is done, comment it out, otherwise errors will be reported to console
// import SlimSelect from 'slim-select';

const Registration = {
    init: function () {
        this.form = document.getElementById('registration-form');

        // Registration form dropdowns
        this.dropdowns = ['#nationality'];

        this.selectObjects = {};
        this.initializeDropdowns();

        // Form elements
        this.submitButton = this.form.querySelector('#registration-form-submit');
        this.surnameElement = this.form.querySelector('#surname');
        this.nameElement = this.form.querySelector('#name');
        this.emailElement = this.form.querySelector('#email');
        this.dateOfBirthElement = this.form.querySelector('#dob');
        this.nationalityElement = this.form.querySelector('#nationality');
        this.passwordElement = this.form.querySelector('#password');
        this.confirmPasswordElement = this.form.querySelector('#confirm-password');

        // Password visibility toggle buttons
        this.showIcons = this.form.querySelectorAll('.password-show');
        this.hideIcons = this.form.querySelectorAll('.password-close');

        this.removeShowErrorOnChange();
        this.handleSubmit();
        this.togglePasswordVisibility();

        // Initialize date picker
        flatpickr(this.dateOfBirthElement, {
            locale: {
                firstDayOfWeek: 0, // Sunday as the first day
                weekdays: {
                    shorthand: ['日', '月', '火', '水', '木', '金', '土'], // Short version
                    longhand: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日'] // Long version
                },
                months: {
                    shorthand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    longhand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            },
            dateFormat: 'd / m / Y',
            maxDate: new Date(new Date().setDate(new Date().getDate() - 1)),
            disableMobile: true // Ensures proper behavior on mobile=
        });

        this.validateRequiredFieldsOnBlur();
        this.validatePasswordOnInput();

        // to fix calender today date border.
        const todayElement = document.querySelector('.dayContainer .flatpickr-day.today');
        if (todayElement) {
            todayElement.classList.remove('today');
        }
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
                event.preventDefault();
                event.stopImmediatePropagation();

                const currentTarget = event.target;

                if (currentTarget !== showIcon) return;

                const inputField = currentTarget.closest('.input-group').querySelector('input');
                const hideIcon = currentTarget.closest('.input-group').querySelector('.password-close');

                inputField.type = 'text'; // Show password

                currentTarget.classList.add('hidden', 'pointer-events-none');
                hideIcon.classList.remove('hidden', 'pointer-events-none');
            });
        });

        this.hideIcons.forEach(hideIcon => {
            hideIcon.addEventListener('click', event => {
                event.preventDefault();
                event.stopImmediatePropagation();

                const currentTarget = event.target;

                if (currentTarget !== hideIcon) return;

                const inputField = currentTarget.closest('.input-group').querySelector('input');
                const showIcon = currentTarget.closest('.input-group').querySelector('.password-show');

                inputField.type = 'password'; // Hide password

                currentTarget.classList.add('hidden', 'pointer-events-none');
                showIcon.classList.remove('hidden', 'pointer-events-none');
            });
        });
    },

    /**
     * Initialize SlimSelect dropdowns for the given array of IDs.
     */
    initializeDropdowns: function () {
        if (!this.dropdowns || !this.dropdowns.length) return;

        this.dropdowns.forEach(dropdown => {
            new SlimSelect({
                select: dropdown,
                settings: { showSearch: false }
            });
        });
    },

    removeShowErrorOnChange: function () {
        const inputs = [
            this.emailElement,
            this.passwordElement,
            this.confirmPasswordElement,
            this.surnameElement,
            this.nameElement,
            this.dateOfBirthElement
        ];

        const changeEventTypeElements = [this.nationalityElement];

        inputs.forEach(input => {
            input.addEventListener('input', event => {
                event.target.closest('.input-group').classList.remove('input-group--invalid');
            });
        });

        changeEventTypeElements.forEach(input => {
            input.addEventListener('change', event => {
                const currentTarget = event.target;
                currentTarget.closest('.input-group').classList.remove('input-group--invalid');
            });
        });
    },

    handleSubmit: function () {
        this.form.addEventListener('submit', e => {
            e.preventDefault();

            let showError = false;
            const surname = this.surnameElement.value.trim();
            const name = this.nameElement.value.trim();
            const email = this.emailElement.value.trim();
            const dob = this.dateOfBirthElement.value.trim();
            const nationality = this.nationalityElement.value;
            const password = this.passwordElement.value;
            const confirmPassword = this.confirmPasswordElement.value;

            // Validation
            if (!surname) {
                this.showError(this.surnameElement);
                showError = true;
            }
            if (!name) {
                this.showError(this.nameElement);
                showError = true;
            }
            if (!email || !this.validateEmail(email)) {
                this.showError(this.emailElement);
                showError = true;
            }
            if (!dob) {
                this.showError(this.dateOfBirthElement);
                showError = true;
            }
            if (!nationality) {
                this.showError(this.nationalityElement);
                showError = true;
            }

            const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})');
            if (!password || !passwordRegex.test(password)) {
                this.showError(this.passwordElement);
                showError = true;
            }
            if (!password && !confirmPassword && password !== confirmPassword) {
                this.showError(this.confirmPasswordElement);
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

            this.submitForm({ surname, name, email, dob, nationality, password });
        });
    },

    showError: function (element) {
        element.closest('.input-group').classList.add('input-group--invalid');
    },

    validateEmail: function (email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    },

    submitForm: function (data) {
        var formData = new FormData();
        formData.append("Email", data.email);
        formData.append("Password", $("#password").val());
        formData.append("ConfirmPassword", $("#confirm-password").val());
        formData.append("g-recaptcha-response", $("#registration-form").find('.g-recaptcha').find('.g-recaptcha-response').val());
        formData.append("FirstName", $("#name").val());
        formData.append("LastName", $("#surname").val());
        formData.append("Country", $("#nationality").val());
        formData.append("Birthday", $("#dob").val().replace(/\s+/g, ''));

        document.querySelectorAll('.r-submit-text').forEach(el => {
            el.style.display = 'none';
        });
        document.querySelector('.r-loading-text').style.display = '';

        $.ajax({
            url: "/api/villagejapanaccount/register",
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            data: formData,
            success: function (response) {

                document.querySelectorAll('.r-submit-text').forEach(el => {
                    el.style.display = '';
                });
                document.querySelector('.r-loading-text').style.display = 'none';

                if (response != "fail") {
                    window.location.href = regisThankyouPage;
                }
                else {
                    const currentForm = document.querySelector('#registration-form');
                    const formErrorElement = currentForm.querySelector('.form_error');
                    formErrorElement.classList.add('active');

                    window.scrollTo({
                        top: currentForm.getBoundingClientRect().top + window.scrollY - 200,
                        behavior: 'smooth'
                    });
                }
            }
        });
    },

    getCaptchaResponse: function () {
        return $("#registration-form").find('.g-recaptcha').find('.g-recaptcha-response').val() !== '';
    },

    validateRequiredFieldsOnBlur: function () {
        const requiredFields = [
            this.surnameElement,
            this.nameElement,
            this.emailElement,
            this.dateOfBirthElement,
            this.passwordElement,
            this.confirmPasswordElement
        ];
        const currentForm = document.querySelector('#registration-form');
        const formErrorElement = currentForm.querySelector('.form_error');

        requiredFields.forEach(input => {
            input.addEventListener('blur', () => {
                formErrorElement.classList.remove('active');
                if (input.value.trim() === '') {
                    input.closest('.input-group').classList.add('input-group--invalid');
                }
            });
        });
    },

    validatePasswordOnInput: function () {
        const passwordInput = this.passwordElement;
        const confirmPasswordInput = this.confirmPasswordElement;

        const passwordRegex = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})');

        passwordInput.addEventListener('input', () => {
            const isValid = passwordRegex.test(passwordInput.value);
            const inputGroup = passwordInput.closest('.input-group');
            if (isValid) {
                inputGroup.classList.remove('input-group--invalid');
            } else {
                inputGroup.classList.add('input-group--invalid');
            }
        });

        confirmPasswordInput.addEventListener('input', () => {
            const matches = confirmPasswordInput.value === passwordInput.value;
            const inputGroup = confirmPasswordInput.closest('.input-group');
            if (matches) {
                inputGroup.classList.remove('input-group--invalid');
            } else {
                inputGroup.classList.add('input-group--invalid');
            }
        });
    },
};

document.addEventListener('DOMContentLoaded', function () {
    Registration.init();
});
