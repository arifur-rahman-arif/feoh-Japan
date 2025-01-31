const HotelBooking = {
    init: function () {
        this.forms = document.querySelectorAll('.hotel-booking-form');

        if (!this.forms || !this.forms.length) return;

        this.forms.forEach(form => {
            this.currentForm = form;
            this.initializeDatepicker(form);
            this.initializeDropdown(form);
            this.quantityIncreaser(form);
        });
    },

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

                    checkOutPicker.set('minDate', minCheckOutDate);
                    checkOutPicker.setDate(minCheckOutDate, true); // Automatically set checkout to next day if it's before
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

                    if (currentCheckInDate && selectedCheckOutDate <= currentCheckInDate) {
                        checkOutPicker.setDate(null); // Reset the checkout date if invalid
                    }
                }
            }
        });
    }
};

document.addEventListener('DOMContentLoaded', function () {
    HotelBooking.init();
});
