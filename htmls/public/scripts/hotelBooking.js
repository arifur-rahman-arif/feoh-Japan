const HotelBooking = {
    /**
     * Initializes all hotel booking form elements by setting up date pickers, dropdowns, and quantity
     * controls. Also binds form submission events to each form.
     */
    init: function () {
        this.forms = document.querySelectorAll('.hotel-booking-form');
        this.currentForm = null;

        this.initializeForms();

        document.addEventListener('modalOpened', event => {
            if (event.detail.eventType === 'booking-popup') {
                this.forms = document.querySelectorAll('.booking-popup .hotel-booking-form');
                this.initializeForms();
                this.toggleBookingPromo();
                this.initializeSlider();
            }
        });

        this.toggleBookingPromo();
    },

    toggleBookingPromo: function () {
        this.forms?.forEach(form => {
            const bookingPromo = form.querySelector('.booking-promo');
            const bookingPromoBtn = bookingPromo?.querySelector('.booking-promo__btn');
            const bookingPromoInput = bookingPromo?.querySelector('.booking-promo__input');
            const arrowIcon = bookingPromo?.querySelector('.arrow-icon');

            if (bookingPromoBtn) {
                bookingPromoBtn.addEventListener('click', () => {
                    // Toggle the collapsed state on the input
                    bookingPromoInput.classList.toggle('collapsed');

                    // Rotate the arrow icon
                    arrowIcon.classList.toggle('rotate');
                });
            }
        });
    },

    initializeForms: function () {
        if (!this.forms || !this.forms.length) return;

        this.forms.forEach(form => {
            this.currentForm = form;
            this.removeShowErrorOnChange(form);
            this.initializeDatepicker(form);
            this.initializeDropdown(form);
            this.initializeSelector();
            this.quantityIncreaser(form);
            this.submitForm(form);
        });
    },

    initializeSelector: function () {
        const hotelSelector = this.currentForm.querySelector('#select-hotel');

        if (!hotelSelector) return;

        new SlimSelect({
            select: hotelSelector,
            settings: {
                showSearch: false
            }
        });
    },
    /**
     * Removes the error class from input groups containing the following inputs when changed:
     * - Check-in date
     * - Check-out date
     * - Adult quantity
     * - Child quantity
     * - Room quantity
     * - Promo code
     *
     * @param {HTMLElement} form - The form element containing the above inputs.
     */
    removeShowErrorOnChange: function () {
        const inputs = [
            this.currentForm.querySelector('#check-in'),
            this.currentForm.querySelector('#check-out'),
            this.currentForm.querySelector('#promo-code'),
            this.currentForm.querySelector('#select-hotel')
        ];

        inputs.forEach(input => {
            if (input) {
                input.addEventListener('input', event => {
                    event.target.closest('.input-group').classList.remove('input-group--invalid');
                });
            }
        });

        const hiddenInputs = [
            this.currentForm.querySelector('#adult'),
            this.currentForm.querySelector('#child'),
            this.currentForm.querySelector('#rooms')
        ];

        const observer = new MutationObserver(mutationsList => {
            for (let mutation of mutationsList) {
                if (mutation.type === 'attributes' && mutation.attributeName === 'value') {
                    const target = mutation.target;
                    if (target.value !== '') {
                        target.closest('.input-group').classList.remove('input-group--invalid');
                    }
                }
            }
        });

        hiddenInputs.forEach(input => {
            observer.observe(input, { attributes: true, attributeFilter: ['value'] });
        });
    },

    /**
     * Initializes the dropdown functionality for room options within the specified form.
     *
     * @param {HTMLElement} form - The form element containing the dropdown controls.
     *
     * This function sets up click event listeners on the dropdown button to toggle
     * the visibility of the associated dropdown panel and rotate the arrow icon. It
     * also adds a document-wide click event listener to close the dropdown if a click
     * is detected outside the dropdown area.
     */

    initializeDropdown: function (form) {
        const dropdownBtn = form.querySelector('.room-options__btn');
        const dropdownPanel = form.querySelector('.room-options__dropdown');
        const arrowIcon = form.querySelector('.room-options__arrow-icon');

        dropdownBtn.addEventListener('click', e => {
            const currentTarget = e.target;

            if (currentTarget !== dropdownBtn) return;

            dropdownPanel.classList.toggle('hidden');
            dropdownPanel.classList.toggle('pointer-events-none');
            arrowIcon.classList.toggle('rotate-90');
            arrowIcon.classList.toggle('-rotate-90');
        });

        document.addEventListener('click', e => {
            const currentTarget = e.target;

            if (!currentTarget.closest('.room-options')) {
                dropdownPanel.classList.add('hidden', 'pointer-events-none');

                arrowIcon.classList.add('rotate-90');
                arrowIcon.classList.remove('-rotate-90');
            }
        });
    },

    /**
     * Updates and manages the quantity of adults, children, and rooms in a booking form.
     *
     * @param {HTMLElement} form - The form element containing the quantity controls.
     *
     * This function sets up event listeners on increment and decrement buttons to increase
     * or decrease the corresponding quantities displayed in the form. It updates the
     * quantity values in hidden inputs and refreshes the summary of selected quantities
     * (adults, children, rooms) displayed on the form. The decrement button is visually
     * disabled if the quantity reaches zero, and the summary is initialized on function
     * execution.
     */

    quantityIncreaser: function (form) {
        const decrementBtns = form.querySelectorAll('.decrement-btn');
        const incrementBtns = form.querySelectorAll('.increment-btn');
        const quantityTexts = form.querySelectorAll('.quantity-text');
        const quantityValues = form.querySelectorAll('.quantity-value');

        const adultCountElement = form.querySelector('.adult-count');
        const childCountElement = form.querySelector('.child-count');
        const roomCountElement = form.querySelector('.room-count');

        const updateSummary = () => {
            let adultCount = 0;
            let childCount = 0;
            let roomCount = 0;

            quantityValues.forEach(quantityValue => {
                const name = quantityValue.getAttribute('name');
                const value = parseInt(quantityValue.value, 10) || 0;

                if (name === 'adult') adultCount = value;
                if (name === 'child') childCount = value;
                if (name === 'rooms') roomCount = value;
            });

            adultCountElement.textContent = adultCount;
            childCountElement.textContent = childCount;
            roomCountElement.textContent = roomCount;
        };

        quantityTexts.forEach((quantityText, index) => {
            let quantity = parseInt(quantityText.textContent, 10) || 0;
            const decrementBtn = decrementBtns[index];
            const incrementBtn = incrementBtns[index];
            const quantityValue = quantityValues[index];

            decrementBtn.addEventListener('click', () => {
                if (quantity > 0) {
                    quantity--;
                    quantityText.textContent = quantity;
                    quantityValue.value = quantity;
                    updateSummary();
                }

                if (quantity < 1) {
                    decrementBtn.classList.add('bg-color15');
                    decrementBtn.classList.remove('bg-color1');
                }
            });

            incrementBtn.addEventListener('click', () => {
                quantity++;
                quantityText.textContent = quantity;
                quantityValue.value = quantity;
                updateSummary();

                if (quantity > 0) {
                    decrementBtn.classList.remove('bg-color15');
                    decrementBtn.classList.add('bg-color1');
                }
            });
        });

        updateSummary(); // Initialize the summary when the function runs
    },

    /**
     * Initializes date pickers for check-in and check-out inputs within the given form.
     *
     * @param {HTMLElement} form - The form element containing the check-in and check-out input fields.
     *
     * This function sets up Flatpickr date pickers on check-in and check-out inputs, enforcing
     * locale settings for weekdays and months. The check-out date is constrained to be at least
     * one day after the selected check-in date. If a user selects a check-out date earlier than
     * the check-in date, the check-out date is reset. The date format is set to 'd / m / Y', and
     * mobile date pickers are disabled to ensure consistent behavior across devices.
     */

    initializeDatepicker: function (form) {
        if (!form) return;

        const checkInInput = form.querySelector('#check-in');
        const checkOutInput = form.querySelector('#check-out');

        if (!checkInInput || !checkOutInput) return;

        const defaultSettings = {
            locale: {
                firstDayOfWeek: 0,
                weekdays: {
                    shorthand: ['日', '月', '火', '水', '木', '金', '土'],
                    longhand: ['日曜日', '月曜日', '火曜日', '水曜日', '木曜日', '金曜日', '土曜日']
                },
                months: {
                    shorthand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                    longhand: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
                }
            },
            dateFormat: 'd / m / Y',
            minDate: 'today',
            disableMobile: true
        };

        // Initialize Check-in Date Picker
        const checkInPicker = flatpickr(checkInInput, {
            ...defaultSettings,
            onChange: function (selectedDates) {
                if (selectedDates.length > 0) {
                    const minCheckOutDate = new Date(selectedDates[0]);
                    minCheckOutDate.setDate(minCheckOutDate.getDate() + 1); // Checkout must be at least 1 day later

                    // checkOutPicker.set('minDate', minCheckOutDate);
                    // checkOutPicker.setDate(minCheckOutDate, true); // Automatically set checkout to next day if it's before
                }
            }
        });

        // Initialize Check-out Date Picker
        const checkOutPicker = flatpickr(checkOutInput, {
            ...defaultSettings,
            onChange: function (selectedDates) {
                if (selectedDates.length > 0) {
                    const selectedCheckOutDate = selectedDates[0];
                    const currentCheckInDate = checkInPicker.selectedDates[0];

                    // if (currentCheckInDate && selectedCheckOutDate <= currentCheckInDate) {
                    //     checkOutPicker.setDate(null); // Reset the checkout date if invalid
                    // }
                }
            }
        });
    },

    initializeSlider: function () {

        const slides = document.querySelectorAll('.swiper--deal-swiper .swiper-slide');
        // Initialize Swiper
        const dealSwiper = new Swiper('.swiper--deal-swiper', {
            slidesPerView: 'auto',
            speed: 1000,
            centerInsufficientSlides: true,
            spaceBetween: 20,
            autoHeight: false,
            loop: slides.length > 2,
            centeredSlides: slides.length > 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                768: {
                    centeredSlides: false,
                    // slidesOffsetBefore: 20
                }
            },
            on: {
                init: function () {
                    if (slides.length > 2 && window.innerWidth < 768) {
                        requestAnimationFrame(() => {
                            this.slideNext();
                            setTimeout(() => {
                                this.slidePrev();
                            }, 1200);
                        });
                    }
                }
            }
        });
    },

    submitForm: function (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();

            const checkInDate = form.querySelector('#check-in').value.trim();
            const checkOutDate = form.querySelector('#check-out').value.trim();
            const adultCount = form.querySelector('#adult').value.trim();
            const childCount = form.querySelector('#child').value.trim();
            const roomCount = form.querySelector('#rooms').value.trim();
            const promoCode = form.querySelector('#promo-code').value.trim();

            const hotelSelection = form.querySelector('#select-hotel');
            let selectedHotel;

            if (hotelSelection) {
                selectedHotel = form.querySelector('#select-hotel').value.trim();

                if (!selectedHotel) {
                    this.showError(hotelSelection);
                    showError = true;
                }
            }

            let showError = false;

            // Validation
            if (!checkInDate) {
                this.showError(form.querySelector('#check-in'));
                showError = true;
            }
            if (!checkOutDate) {
                this.showError(form.querySelector('#check-out'));
                showError = true;
            }
            if (!adultCount || isNaN(adultCount) || adultCount <= 0) {
                this.showError(form.querySelector('#adult'));
                showError = true;
            }
            if (isNaN(childCount) || childCount < 0) {
                this.showError(form.querySelector('#child'));
                showError = true;
            }
            if (!roomCount || isNaN(roomCount) || roomCount <= 0) {
                this.showError(form.querySelector('#rooms'));
                showError = true;
            }
            if (!promoCode) {
                this.showError(form.querySelector('#promo-code'));
                showError = true;
            }

            if (showError) {
                return;
            }
        });
    },

    /**
     * Adds the 'input-group--invalid' CSS class to the element's closest '.input-group' parent element,
     * effectively displaying an error message for the element.
     * @param {HTMLElement} element - The element to target for displaying the error message.
     */
    showError: function (element) {
        element.closest('.input-group').classList.add('input-group--invalid');
    }
};

document.addEventListener('DOMContentLoaded', function () {
    HotelBooking.init();
});
