$(document).ready(function () {
    var popup_visibility = 3000;

    if ($("input[name='exit-intent']").val() == "True") {
        var exit_intent = $.cookie("exit-intent");
        timer = parseInt($("input[name='popup-timedelay']").val());
        timer = timer * 1000; // convert seconds to milliseconds

        setTimeout(function () {
            if (exit_intent == null) {
                ExitDetect();
            }
        }, timer);

        $('#newsletter').on('show.bs.modal', function (e) {
            $('body').css('position', 'static');
            appendClassToBody();
        });

        $('#newsletter').on('shown.bs.modal', function (e) {
            $(this).trigger('initNewsletter');
        });

        $('#newsletter-enhanced').on('show.bs.modal', function (e) {
            $('body').css('position', 'static');
            appendClassToBody();
        });

        $('#newsletter-enhanced').on('shown.bs.modal', function (e) {
            $(this).trigger('initNewsletter');
        });
    }
    else {

        if (!$('body').hasClass('newsletter') && !$('body').hasClass('residence')) {
            // check cookie
            var newsletter = $.cookie("newsletter")
            if (newsletter == null) {
                scrollDetect();
            }
            $.cookie('newsletter', 'newsletterYes', { expires: 1, path: '/' });
            // set cookie
            if ($(".newsletter-enhanced").length > 0) {
                var enhanced_newsletter = $.cookie("newsletter-enhanced");
                var session_validity = parseInt($("input[name='session-validity']").val());
                if ($("input[name='popup-timevisibility']").val() != "" && $("input[name='popup-timevisibility']").val() != '' && $("input[name='popup-timevisibility']").val() != '0') {
                    popup_visibility = parseInt($("input[name='popup-timevisibility']").val());
                    popup_visibility = popup_visibility * 1000; // convert seconds to milliseconds
                }
                if (enhanced_newsletter == null) {
                    scrollDetect();
                    $.cookie('newsletter-enhanced', 'newsletterYes', { expires: session_validity, path: '/' });
                    appendClassToBody();
                }
            }

        } else if ($('body').hasClass('residence')) {
            var pageId = $('.pageid').val();
            // console.log(pageId);
            var db = getStorage(localStorage);
            var popup = db.getItem(pageId);
            var popup = localStorage.getItem(pageId);
            if (popup == null) {
                scrollDetect();
                db.setItem(pageId, 'true');
            }
        }

        $('#newsletter').on('show.bs.modal', function (e) {
            $('body').css('position', 'static');
        });
        $('#newsletter').on('shown.bs.modal', function (e) {
            $(this).trigger('initNewsletter');
            appendClassToBody();
        });
        $('#newsletter-enhanced').on('show.bs.modal', function (e) {
            $('body').css('position', 'static');
        });
        $('#newsletter-enhanced').on('shown.bs.modal', function (e) {
            $(this).trigger('initNewsletter');
            appendClassToBody();
        });
    }

    (function (window) {
        'use strict';

        var items = {};

        function MemoryStorage() { }

        MemoryStorage.prototype.getItem = function (key) {
            return items[key];
        };

        MemoryStorage.prototype.setItem = function (key, value) {
            items[key] = value;
        };

        MemoryStorage.prototype.key = function (index) {
            return Object.keys(items)[index];
        };

        MemoryStorage.prototype.get = function () {
            return items;
        };

        Object.defineProperty(MemoryStorage.prototype, "length", {
            get: function length() {
                return Object.keys(items).length;
            }
        });

        window.memoryStorage = new MemoryStorage();
    })(window);

    function getStorage(storage) {
        var x = '__storage_test__';
        try {
            storage.setItem(x, x)
            storage.removeItem(x);
            return storage;
        } catch (e) {
            return getStorage.prototype.FALLBACK_STORAGE;
        }
    }
    getStorage.prototype.FALLBACK_STORAGE = memoryStorage;


    function scrollDetect() {
        var $window = $(window),
            popup = false,
            timer = 1;

        $window.scroll(function (e) {
            e.preventDefault();
            if ($window.scrollTop() >= 200) {
                if (timer === 1) {
                    if ($("input[name='popup-timevisibility']").val() != "" && $("input[name='popup-timevisibility']").val() != '' && $("input[name='popup-timevisibility']").val() != '0') {
                        timer = setTimeout(function () {

                            if ($('body').hasClass('residence')) {
                                OpenModalPopupForm();
                            } else {
                                OpenSiteWidePopup();
                            }
                            TimeOnPage();
                            timer = false;
                            popup = true;
                        }, popup_visibility);
                    }
                    else {
                        timer = setTimeout(function () {

                            if ($('body').hasClass('residence')) {
                                OpenModalPopupForm();
                            } else {
                                OpenSiteWidePopup()
                            }
                            timer = false;
                            popup = true;
                        }, 2000);
                    }
                }
            } else {
                return false;
            }
        });
    }

    function ExitDetect() {
        if ($("input[name='popup-timedelay']").val() != "" && $("input[name='popup-timedelay']").val() != '' && $("input[name='popup-timedelay']").val() != '0') {
            if ($('body').hasClass('residence')) {
                OpenModalPopupForm();
            } else {
                OpenSiteWidePopup();
            }
            TimeOnPage();
            var session_validity = parseInt($("input[name='session-validity']").val());
            $.cookie('exit-intent', 'exitIntentYes', { expires: session_validity, path: '/' });
            $(document).off('mouseleave');
        }
    }

    function TimeOnPage() {
        if ($("input[name='popup-timeonpage']").val() != "" && $("input[name='popup-timeonpage']").val() != '' && $("input[name='popup-timeonpage']").val() != '0') {
            var timeonpage = parseInt($("input[name='popup-timeonpage']").val());
            timeonpage = timeonpage * 1000; // convert seconds to milliseconds
            setTimeout(function () {
                $('#newsletter').modal('hide');
                $('#newsletter-enhanced').modal('hide');
                $('body').removeClass('newsletter-in');
            }, timeonpage);
        }
    }

    function appendClassToBody() {
        $('body').addClass('newsletter-in');
        $('body').on('click', function (e) {
            setTimeout(function () {
                if (!$('#newsletter-enhanced').is(':visible')) {
                    $('body').removeClass('newsletter-in');
                }
            }, 2000);
        });
    }

    function OpenSiteWidePopup() {
        if ($('.booking-widget').attr('style') == undefined || $('.booking-widget').attr('style').indexOf('display: block') < 0) {
            var modals = document.querySelectorAll(".modal.fade");
            if (modals != null && modals.length > 0) {
                var newsletterEnhanced;
                for (var i = 0; i < modals.length; i++) {
                    if (modals[i].id === "newsletter-enhanced") {
                        newsletterEnhanced = modals[i];
                        break;
                    }
                }

                if (newsletterEnhanced != null) {
                    $('#newsletter-enhanced').modal('show');
                }
                else {
                    $('#newsletter').modal('show');
                }
            }
        }
        appendClassToBody();
    }

    function OpenModalPopupForm() {
        if ($('.booking-widget').attr('style') == undefined || $('.booking-widget').attr('style').indexOf('display: block') < 0) {
            var modals = document.querySelectorAll(".modal.fade");
            if (modals != null && modals.length > 0) {
                var residenceQuoteModal;
                for (var i = 0; i < modals.length; i++) {
                    if (modals[i].id === "residenceQuote") {
                        residenceQuoteModal = modals[i];
                        break;
                    }
                }

                if (residenceQuoteModal != null) {
                    $('#residenceQuote').modal('show');
                }
                else {
                    OpenSiteWidePopup();
                }
            }
        }
    }
});
