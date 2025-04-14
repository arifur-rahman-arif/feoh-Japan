// This is not needed as we've included the cdn fine in the page itself
// this import is mainly for type support purposes
// While development keep it uncommented so that you get type-specific hints
// After development is done, comment it out, otherwise errors will be reported to console
// import SlimSelect from 'slim-select';

const Contact = {
    init: function () {
        this.form = document.getElementById('contact-form');

        // Contact form dropdown javascript
        this.selectObjects = {};
        this.dropdowns = ['#inquiry', '#accommodation'];
        this.initializeDropdowns();

        // Form submission javascript
        this.submitButton = document.getElementById('contact-form-submit');

        this.surnameElement = this.form.querySelector('#surname');
        this.nameElement = this.form.querySelector('#name');
        this.emailElement = this.form.querySelector('#email');
        this.phoneElement = this.form.querySelector('#telephone');
        this.inquiryElement = this.form.querySelector('#inquiry');
        this.accommodationElement = this.form.querySelector('#accommodation');
        this.messageElement = this.form.querySelector('#inquiry-content');

        this.removeShowErrorOnChange();
        this.handleSubmit();
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
            const selectElement = this.form.querySelector(dropdown);
            // Ensure the first option is a placeholder and not selectable
            const placeholder = selectElement.querySelector('option[data-placeholder]');
            const placeholderTextContent = placeholder?.dataset.placeholdertext || '';

            const select = new SlimSelect({
                select: selectElement,
                settings: {
                    showSearch: false,
                    placeholderText: placeholderTextContent || ''
                }
            });

            this.selectObjects[dropdown] = select;
        }
    },

    removeShowErrorOnChange: function () {
        const inputs = [
            this.surnameElement,
            this.nameElement,
            this.emailElement,
            this.phoneElement,
            this.messageElement
        ];

        const changeEventTypeElements = [this.inquiryElement, this.accommodationElement];

        inputs.forEach(input => {
            input.addEventListener('input', event => {
                const currentTarget = event.target;
                currentTarget.closest('.input-group').classList.remove('input-group--invalid');
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
            const phone = this.phoneElement.value.trim();
            const inquiry = this.selectObjects['#inquiry'].getSelected()[0] || '';
            const accommodation = this.selectObjects['#accommodation'].getSelected()[0] || '';
            const message = this.messageElement.value.trim();

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

            if (!inquiry) {
                this.showError(this.inquiryElement);
                showError = true;
            }

            if (!accommodation) {
                this.showError(this.accommodationElement);
                showError = true;
            }

            if (!message) {
                this.showError(this.messageElement);
                showError = true;
            }

            if (showError) {
                // Show the form error
                const formErrorElement = this.form.querySelector('.form_error');
                formErrorElement.classList.add('active');

                // Scroll top to the form element
                window.scrollTo({
                    top: this.form.getBoundingClientRect().top + window.scrollY - 200,
                    behavior: 'smooth'
                });
                return;
            }

            if (!this.getCaptchaResponse()) {
                const formCaptcha = document.getElementById('form-captcha');
                formCaptcha.classList.add('input-group--invalid');

                return;
            }

            this.submitForm({ surname, name, email, phone, inquiry, accommodation, message });
        });
    },

    showError: function (element) {
        element.closest('.input-group').classList.add('input-group--invalid');
    },

    validateEmail: function (email) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
    },

    submitForm: function (data) {
        // this.submitButton.classList.add('button--loading');

        console.log(data);

        // Redirect to thank you page after submitting
        window.location.href = '/contact/thank-you';

        // $.ajax({
        //     url: `${globalVariables.themeRestUrl}/contact-form`,
        //     type: 'POST',
        //     headers: { 'X-WP-NONCE': globalVariables.nonce },
        //     data: JSON.stringify(data),
        //     complete: () => this.submitButton.removeClass('jc-button--loading'),
        //     success: () => {
        //         this.form.addClass('hidden');
        //         this.thankYouContainer.fadeIn(2000);
        //         $('html, body').animate({ scrollTop: this.thankYouContainer.offset().top - 400 }, 500);
        //     },
        //     error: (error) => {
        //         this.alertElement.text(error.responseJSON?.data?.message || '送信エラーが発生しました').fadeIn(2000);
        //     }
        // });
    },

    getCaptchaResponse: function () {
        // Check if reCAPTCHA is completed
        if (grecaptcha.getResponse() === '') {
            return false;
        }

        return true;
    }
};

document.addEventListener('DOMContentLoaded', function () {
    Contact.init();
});
