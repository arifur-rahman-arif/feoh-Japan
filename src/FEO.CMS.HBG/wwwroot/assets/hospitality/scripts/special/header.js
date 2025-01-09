$('.sbe-login-required').on('click', function (e) {
    e.preventDefault();
    var href = $(this).attr('href'),
        form = $('#form-sbe-login-required');
    form.attr('action', href);
    form.submit();
});

var CookieAdult = 0, CookieChild = 0, totalCookieAdultChild = 0, adultsLabel, childrenLabel, adultsText, childrenText, adultshidden, childrenhidden, defaultAdultsHidden, defaultChildrenHidden;

function checkCookiePeople() {
    if ($.cookie("cookie-adult")) {
        CookieAdult = parseInt($.cookie("cookie-adult"));
    }
    if ($.cookie("cookie-children")) {
        CookieChild = parseInt($.cookie("cookie-children"));
    }
    totalCookieAdultChild = CookieAdult + CookieChild;
}
checkCookiePeople();

$(function () {
    $('.language').on('changed.bs.select', function (e) {
        var form = $(this).closest('form')[0];
        if (form) form.submit();
    });
    adultsLabel = $(".adults-block .adultsLabel");
    childrenLabel = $(".children-block .childrenLabel");
    adultsText = $(".room-adult-child-btn text.adults");
    childrenText = $(".room-adult-child-btn text.children");
    adultshidden = $(".hiddenadults");

    childrenhidden = $(".hiddenchildren");

    defaultAdultsHidden = $(".hiddendefaultAdults");
    defaultChildrenHidden = $(".hiddendefaultChildren");
    $('.location')
        .on('refreshed.bs.select', onLocationChange)
        .on('change', onLocationChange);
    $('.property')
        .on('refreshed.bs.select', onListingChange)
        .on('change', onListingChange);

    selectCity();
    selectListing();
});

function onLocationChange(e) {
    var self = $(e.target);
    var selected = self.find('option:selected');
    var countryName = selected.data('country');
    var cityName = selected.val();

    var grouping;
    for (var i in groups) {
        var country = groups[i];
        if (country.name !== countryName) continue;

        var cities = country.cities;
        for (var j in cities) {
            var city = cities[j];
            if (city.name !== cityName) continue;
            grouping = city.grouping;
            break;
        }

        break;
    }

    if (grouping) {
        var selector = 'select.property';
        var listings = $(selector).empty();
        var options = '';
        for (var i in grouping) {
            var group = grouping[i];
            options += '<optgroup label="' + group.group.toUpperCase() + '">';
            var items = group.items;
            for (var j in items) {



                options += '<option value="' + items[j].id + '" data-mindays="' + (items[j].mindays > 0 ? items[j].mindays : '') + '" data-minNightText="' + (items[j].mindayText) + '" data-maxnoofpax="' + items[j].maxNoOfPax + '" data-minnoofadults="' + items[j].minNoOfAdults + '" data-minnoofchildren="' + items[j].minNoOfChildren + '" data-maxnoofguests="' + items[j].maxNoOfGuests + '" data-PropertyNote="' + items[j].propertyNote + '" data-PropertyNoteColor= "' + items[j].propertyNoteColor + '" data-ChainId= "' + items[j].chainId + '" >' + items[j].title + '</option>';
            }
            options += '</optgroup>';
        }
        listings.html(options);
        listings.selectpicker('refresh');
    }
}
function onListingChange(e) {
    var self = $(e.target);
    var selected = self.find('option:selected');
    var bookingType = selected.data('type');
    $('input:hidden.booking-type').val(bookingType);

    var mindays = selected.data('mindays');
    $('.mindays').val(mindays);

    var maxnoofpax = parseInt(selected.data("maxnoofpax"));
    var minnoofadults = parseInt(selected.data("minnoofadults"));
    var minnoofchildren = parseInt(selected.data("minnoofchildren"));
    var maxnoofguests = selected.data("maxnoofguests");

    if (!isNaN(maxnoofpax)) {
        adultsLabel.attr("data-min-limit", minnoofadults).attr("data-max-pax-limit", maxnoofpax);
        childrenLabel.attr("data-min-limit", minnoofchildren).attr("data-max-pax-limit", maxnoofpax);

        if (maxnoofpax >= 1 && maxnoofpax >= minnoofadults && maxnoofpax >= minnoofchildren && (maxnoofpax >= (minnoofadults + minnoofchildren))) {
            //$(".room-adult-child-btn").removeClass("opacity");
            $(this).closest('.widget-form').find('.room-adult-child-btn').removeClass("opacity");
        } else {
            //$(".room-adult-child-btn").addClass("opacity");
            $(this).closest('.widget-form').find('.room-adult-child-btn').addClass("opacity");
        }



        var defaultAdultHiddenvalue = parseInt(defaultAdultsHidden.val());
        var defaultChildrenHiddenvalue = parseInt(defaultChildrenHidden.val());

        var curentAdult1 = parseInt($(".room-adult-child-btn .filter-option .adults").html()),
            curentChild1 = parseInt($(".room-adult-child-btn .filter-option .children").html()),
            totalCurrent1 = curentAdult1 + curentChild1;


        if (totalCurrent1 > maxnoofpax) {

            adultsLabel.html(defaultAdultHiddenvalue);
            adultsText.html(defaultAdultHiddenvalue);

            childrenLabel.html(defaultChildrenHiddenvalue);
            childrenText.html(defaultChildrenHiddenvalue);

            //reset button
            $(".dropdown-rooms .minus-sign").addClass("active");
            $(".dropdown-rooms .plus-sign").addClass("active");


            $(".dropdown-rooms .adults-block .minus-sign").removeClass("active");
            if (maxnoofpax > (defaultAdultHiddenvalue + defaultChildrenHiddenvalue)) {
                $(".dropdown-rooms .plus-sign").removeClass("active");
            }

        } else {
            if (totalCookieAdultChild && totalCookieAdultChild != 'undefined') {
                if (totalCookieAdultChild > maxnoofpax) {
                    adultsLabel.html(defaultAdultHiddenvalue);
                    adultsText.html(defaultAdultHiddenvalue);
                    childrenLabel.html(defaultChildrenHiddenvalue);
                    childrenText.html(defaultChildrenHiddenvalue);
                    //reset button
                    $(".dropdown-rooms .minus-sign").addClass("active");
                    $(".dropdown-rooms .plus-sign").addClass("active");
                    $(".dropdown-rooms .adults-block .minus-sign").removeClass("active");
                    if (maxnoofpax > (defaultAdultHiddenvalue + defaultChildrenHiddenvalue)) {
                        $(".dropdown-rooms .plus-sign").removeClass("active");
                    }

                } else {
                    $(".dropdown-rooms .minus-sign").addClass("active");
                    $(".dropdown-rooms .plus-sign").addClass("active");


                    if (CookieAdult > 1) {
                        $(".dropdown-rooms .adults-block .minus-sign").removeClass("active");

                    }
                    if (CookieChild > 0) {
                        $(".dropdown-rooms .children-block .minus-sign").removeClass("active");
                    }

                    if (totalCookieAdultChild == maxnoofpax) {

                    } else {
                        $(".dropdown-rooms .plus-sign").removeClass("active");

                    }

                    adultsLabel.html(CookieAdult);
                    adultsText.html(CookieAdult);

                    childrenLabel.html(CookieChild);
                    childrenText.html(CookieChild);

                }
            } else {
                if (totalCurrent1 == maxnoofpax) {

                    $(".dropdown-rooms .plus-sign").addClass("active");
                } else {
                    $(".dropdown-rooms .plus-sign").removeClass("active");
                    if (curentAdult1 > 1) {
                        $(".dropdown-rooms .adults-block .minus-sign").removeClass("active");

                    }
                    if (curentChild1 > 0) {
                        $(".dropdown-rooms .children-block .minus-sign").removeClass("active");
                    }


                }
            }


        }

        selected.parents("form").find("li.max-guests").html(maxnoofguests);


    }

}

function selectCity() {
    var value = '';
    var locations = $('.location');
    var city = $('input:hidden.cityname');
    if (city && city.length > 0) {
        value = city.val();
    } else {
        value = locations.find('option:eq(0)').val();
    }
    locations.selectpicker('refresh');
    locations.selectpicker('val', value)
    locations.selectpicker('refresh');
}
function selectListing() {
    var listing = $('input:hidden.listingid');
    if (listing && listing.length > 0) {
        var value = listing.val();
        var listings = $('.property')
        listings.selectpicker('refresh');
        listings.selectpicker('val', value)
        listings.selectpicker('refresh');
    }
}
$(document).ready(function () {


    $("#widget-checkin").change(function () {
        var sfecheckinDate = $(this).val();
        $.cookie("cookie-checkin-date", sfecheckinDate, { path: '/' });

    });
    $("#widget-checkout").change(function () {
        var sfecheckoutDate = $(this).val();
        $.cookie("cookie-checkout-date", sfecheckoutDate, { path: '/' });

    });

    //bannerwidget

    $("#checkin2").change(function () {
        var sfebannercheckinDate = $(this).val();
        $.cookie("cookie-banner-checkin-date", sfebannercheckinDate, { path: '/' });

    });
    $("#checkout2").change(function () {
        var sfebannercheckoutDate = $(this).val();
        $.cookie("cookie-banner-checkout-date", sfebannercheckoutDate, { path: '/' });

    });

    //bannerwidget

    $("#widget-mobile-checkin").change(function () {
        var sfemobilecheckinDate = $(this).val();
        $.cookie("cookie-mobilecheckin-date", sfemobilecheckinDate, { path: '/' });

    });
    $("#widget-mobile-checkout").change(function () {
        var sfemobilecheckoutDate = $(this).val();
        $.cookie("cookie-mobilecheckout-date", sfemobilecheckoutDate, { path: '/' });
    });

    $("#property").change(function () {
        setTimeout(function () {
            var sfecheckinDate = $("#widget-checkin").val();
            $.cookie("cookie-checkin-date", sfecheckinDate, { path: '/' });
            var sfecheckoutDate = $("#widget-checkout").val();
            $.cookie("cookie-checkout-date", sfecheckoutDate, { path: '/' });
        }, 300);
    });

    //bannerwidget
    $("#property").change(function () {
        setTimeout(function () {
            var sfebannercheckinDate = $("#checkin2").val();
            $.cookie("cookie-banner-checkin-date", sfebannercheckinDate, { path: '/' });
            var sfebannercheckoutDate = $("#checkout2").val();
            $.cookie("cookie-banner-checkout-date", sfebannercheckoutDate, { path: '/' });
        }, 300);
    });
    //bannerwidget

    $("#mobile-property___").change(function () {
        setTimeout(function () {
            var sfemobilecheckinDate = $("#widget-mobile-checkin").val();
            $.cookie("cookie-mobilecheckin-date", sfemobilecheckinDate, { path: '/' });
            var sfemobilecheckoutDate = $("#widget-mobile-checkout").val();
            $.cookie("cookie-mobilecheckout-date", sfemobilecheckoutDate, { path: '/' });
        }, 300);
    });
    if ($.cookie("cookie-checkin-date")) {
        $("#widget-checkin").val($.cookie("cookie-checkin-date"))
    }
    if ($.cookie("cookie-checkout-date")) {
        $("#widget-checkout").val($.cookie("cookie-checkout-date"))
    }

    //bannerwidget
    if ($.cookie("cookie-banner-checkin-date")) {
        $("#checkin2").val($.cookie("cookie-banner-checkin-date"))
    }
    if ($.cookie("cookie-banner-checkout-date")) {
        $("#checkout2").val($.cookie("cookie-banner-checkout-date"))
    }
    //bannerwidget

    if ($.cookie("cookie-mobilecheckin-date")) {
        $("#widget-mobile-checkin").val($.cookie("cookie-mobilecheckin-date"))
    }
    if ($.cookie("cookie-mobilecheckout-date")) {
        $("#widget-mobile-checkout").val($.cookie("cookie-mobilecheckout-date"))
    }
    /* if ($.cookie("cookie-adults")) {
         adultsLabel.html($.cookie("cookie-adults"));
         adultsText.html($.cookie("cookie-adults"));
         $(".room-adult-child-btn").removeClass("opacity");
     }
     if ($.cookie("cookie-children")) {
         childrenLabel.html($.cookie("cookie-children"));
         childrenText.html($.cookie("cookie-children"));
         $(".room-adult-child-btn").removeClass("opacity");
     }*/
    setTimeout(function () {

        if ($('input:hidden.listingid').length > 0) {

            var activeListingid = $('input:hidden.listingid').val();

            //Desktop
            var mindaysDefault = 1;
            $('#property option').each(function (index) {
                var activeListingValue = $(this).attr('value');
                if (activeListingValue == activeListingid) {
                    mindaysDefault = $(this).attr('data-mindays');
                }
            });

            var startCheckinDateDefault = new Date($.cookie("cookie-checkin-date"));
            var endCheckoutDateDefault = new Date($.cookie("cookie-checkout-date"));

            var newDefaultDate = new Date(startCheckinDateDefault);

            var mindaysTotalDefault = 86400000 * mindaysDefault;
            var getDateDefault = new Date(newDefaultDate.getTime() + mindaysTotalDefault);

            // end - start returns difference in milliseconds
            var diffDefault = new Date(endCheckoutDateDefault - startCheckinDateDefault);

            // get days
            var daysDefault = diffDefault / 1000 / 60 / 60 / 24;

            $("#widget-checkout").datepicker("option", "minDate", getDateDefault);
            if (daysDefault < mindaysDefault) {
                $("#widget-checkout").datepicker("setDate", getDateDefault);
            }

            //bannerwidget
            var mindaysDefaultBanner = 1;
            $('#property option').each(function (index) {
                var activeListingValueBanner = $(this).attr('value');
                if (activeListingValueBanner == activeListingid) {
                    mindaysDefaultBanner = $(this).attr('data-mindays');
                }
            });

            var startCheckinDateDefaultBanner = new Date($.cookie("cookie-banner-checkin-date"));
            var endCheckoutDateDefaultBanner = new Date($.cookie("cookie-banner-checkout-date"));

            var newDefaultDateBanner = new Date(startCheckinDateDefaultBanner);

            var mindaysTotalDefaultBanner = 86400000 * mindaysDefaultBanner;
            var getDateDefaultBanner = new Date(newDefaultDateBanner.getTime() + mindaysTotalDefaultBanner);

            // end - start returns difference in milliseconds
            var diffDefaultBanner = new Date(endCheckoutDateDefaultBanner - startCheckinDateDefaultBanner);

            // get days
            var daysDefaultBanner = diffDefaultBanner / 1000 / 60 / 60 / 24;

            $("#widget-checkout").datepicker("option", "minDate", getDateDefaultBanner);
            if (daysDefaultBanner < mindaysDefaultBanner) {
                $("#widget-checkout").datepicker("setDate", getDateDefaultBanner);
            }



            //Mobile
            var mindaysDefaultMobile = 1;
            $('#mobile-property option').each(function (index) {
                var activeListingValueMobile = $(this).attr('value');
                if (activeListingValueMobile == activeListingid) {
                    mindaysDefaultMobile = $(this).attr('data-mindays');
                }
            });

            console.log(mindaysDefaultMobile);

            var startCheckinDateDefaultMobile = new Date($.cookie("cookie-mobilecheckin-date"));
            var endCheckoutDateDefaultMobile = new Date($.cookie("cookie-mobilecheckout-date"));

            var newDefaultDateMobile = new Date(startCheckinDateDefaultMobile);

            var mindaysTotalDefaultMobile = 86400000 * mindaysDefaultMobile;
            var getDateDefaultMobile = new Date(newDefaultDateMobile.getTime() + mindaysTotalDefaultMobile);

            // end - start returns difference in milliseconds
            var diffDefaultMobile = new Date(endCheckoutDateDefaultMobile - startCheckinDateDefaultMobile);

            // get days
            var daysDefaultMobile = diffDefaultMobile / 1000 / 60 / 60 / 24;

            console.log(getDateDefaultMobile);

            $("#widget-mobile-checkout").datepicker("option", "minDate", getDateDefaultMobile);
            if (daysDefaultMobile < mindaysDefaultMobile) {
                $("#widget-mobile-checkout").datepicker("setDate", getDateDefaultMobile);
            }
        }

    }, 1000);

    var languageLength = $('#sfe-language > option').length;
    if (languageLength <= 1) {
        $('#languageselector').hide();
        $('#language-selector-li').hide();
        $(".language-selector-li").hide();
        $(".languageselector").hide();
    }


    $(".dropdown-rooms .add-less-icon").each(function () {
        $(this).click(function () {
            var parent = $(this).closest('.dropdown-rooms'),
                adults = parent.find('.adults-block .occupancy-selected span').html(),
                children = parent.find('.children-block .occupancy-selected span').html();
            $.cookie("cookie-adult", adults, { path: '/' });
            $.cookie("cookie-children", children, { path: '/' });
            checkCookiePeople();
        });
    });
});

$(function () {

    var selectedLanguageLength = $('#languageselector option').length;
    if (selectedLanguageLength == 1) {
        $('.dropdown-menu.language-selector-ul, .dropdown-toggle.selected-ln .caret').remove();
    } else if (selectedLanguageLength == 0) {
        $('.dropdown-menu.language-selector-ul, .dropdown-toggle.selected-ln').remove();
        $('.mobile-header-wrapper .mobile-nav .language').addClass('mt-20');
        $('.mobile-header-wrapper .mobile-nav .language .language-selector').addClass('hidden');
    }

    var selectedLanguage = $('#languageselector option:selected').text();
    $('.dropdown-toggle.selected-ln span.lan').text(selectedLanguage);

    $(".language-selector-ul li").on("click", function (index) {
        var indexlanguage = $(".language-selector-ul li").index(this);
        $("#languageselector option").removeAttr('selected');
        $("#languageselector").find('option').eq(indexlanguage).click();

        var lang = $(this).attr('language');
        console.log(lang);

        var port = "";
        if (GetPort() != "") {
            port = ":" + GetPort();
        }
        var currentLocation = GetProtocol() + port + "//" + GetHostName();
        var path = "/" + GetPathName(lang);
        path = path.replace("//", "/");
        currentLocation = currentLocation + path;
        window.location.href = currentLocation;
    });

});

function GetProtocol() {
    return window.location.protocol;
}

function GetPort() {
    return window.location.port;
}

function GetHostName() {
    return window.location.host;
}

function emptyElement(element) {
    if (element == null || element == '')
        return false;
    else return true;
}


function GetPathName(LanguageCode) {
    var langarr = [];
    var IslanguageEmbedd = false;
    $("#languageselector > option").each(function () {
        langarr.push(this.value);
    });
    var urlarr = window.location.pathname.split('/');
    urlarr = urlarr.filter(emptyElement);
    for (var i = 0; i < langarr.length; i++) {
        for (var m = 0; m < urlarr.length; m++) {
            if (langarr[i].toLowerCase() == urlarr[m].toLowerCase()) {
                IslanguageEmbedd = true;
            }
        }
    }
    if (IslanguageEmbedd) {
        urlarr[0] = LanguageCode;
        if (window.location.pathname == "/") {
            return urlarr.join('/');
        }
        else {
            return "/" + urlarr.join('/');
        }

    }
    else {
        if (window.location.pathname == "/") {
            return window.location.pathname + LanguageCode;
        }
        else {
            return LanguageCode + "/" + window.location.pathname;
        }
    }

}


$(function () {
    $(document).on("click", "#logout", function (event) {
        //$("#logout").click(function () {
        $.ajax({
            url: "/api/sitecore/StayFarEastInsiders/logout",
            type: 'POST',
            cache: false,
            contentType: false,
            processData: false,
            data: null,
            success: function (response) {
                if (response == "success") {
                    var signOutLink = "@Model.SignOutLink";
                    if (signOutLink != "") {
                        if (signOutLink == location.pathname) {
                            window.location.reload(true);
                        }
                        else {
                            window.location.replace(signOutLink)
                        }
                    }
                    else {
                        if ($("#isAcountPage").data('is-acount-page') == "True") {
                            window.location.href = "/";
                        }
                        else
                            window.location.reload(true);
                    }
                }
                else
                    alert("error while logging out");
            }
        });
    });

    $('.ErrorMessage').hide();
    var defaultValue = $('#SignInButton').html();
    var img_gif = '<span class="loading_spinner"> </span>';
    var LoadingValue = $('#SignInButton').attr("data-loadingbutton-text") + '&nbsp;' + img_gif;
    $("#SignInButton").click(function () {
        if ($("#SignInEmail").val() != "" && $("#SignInPassword").val() != "" && $("#g-recaptcha-response").val() != "") {
            var formData = new FormData();
            formData.append("Email", $("#SignInEmail").val());
            formData.append("Password", $("#SignInPassword").val());
            formData.append("GRecaptchaToken", $("#g-recaptcha-response").val());
            document.getElementById("SignInButton").innerHTML = LoadingValue;
            //$('#SignInButton').text($(this).attr('data-loadingbutton-text'));
            //$('#SignInButton').addClass('gif_added');
            $('html').addClass('fixed_page');
            $.ajax({
                url: "/api/sitecore/StayFarEastInsiders/SignIn",
                type: 'POST',
                cache: false,
                contentType: false,
                processData: false,
                data: formData,
                success: function (response) {
                    //$('.login_notification').show();
                    $.cookie('signInUpSuccess', 'yes', { expires: 1, path: '/' });
                    if (response.toLowerCase() == "fail") {
                        $('.ErrorMessage').show();
                        $('html').removeClass('fixed_page');
                        document.getElementById("SignInButton").innerHTML = defaultValue;
                    }
                    else {
                        $('.ErrorMessage').hide();
                        var email = $("#SignInEmail").val()

                        if (email.length > 0) {

                            $.ajax({
                                url: "/api/sitecore/StayFarEastInsiders/EncryptEmail?email=" + email,
                                type: 'POST',
                                cache: false,
                                contentType: false,
                                processData: false,
                                success: function (response1) {
                                    if (response1.length > 0) {
                                        dataLayer.push({
                                            'userID': response1,
                                            'userIsMember': 'Y'
                                        });
                                    }
                                }
                            });
                        }

                        var returnUrl = window.location.search;
                        var index = returnUrl.indexOf("=");

                        if (index > 0) {
                            var path = returnUrl.substring(index + 1);
                            var url = new URL(path, location);
                            let decoded = decodeURIComponent(url);
                            window.location.replace(decoded);
                        }
                        else {
                            window.location.reload(true);
                        }
                    }
                }
            });
        }
    });
});