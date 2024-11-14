var CookieAdult = 0, CookieChild = 0, totalCookieAdultChild = 0, adultsLabel2, childrenLabel2, adultsText2, childrenText2, adultshidden2, childrenhidden2, defaultAdultsHidden2, defaultChildrenHidden2;

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
    adultsLabel2 = $(".adults-block .adultsLabel2");
    childrenLabel2 = $(".children-block .childrenLabel2");
    adultsText2 = $(".room-adult-child-btn2 text.adults1");
    childrenText2 = $(".room-adult-child-btn2 text.children1");
    adultshidden2 = $(".hiddenadults2");

    childrenhidden2 = $(".hiddenchildren2");

    defaultAdultsHidden2 = $(".hiddendefaultAdults2");
    defaultChildrenHidden2 = $(".hiddendefaultChildren2");
    $('.location1')
        .on('refreshed.bs.select', onLocationChange1)
        .on('change', onLocationChange1);
    $('.property1')
        .on('refreshed.bs.select', onListingChange1)
        .on('change', onListingChange1);

    selectCity1();
    selectListing1();
});

function onLocationChange1(e) {
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
        var selector = 'select.property1';
        var listings = $(selector).empty();
        var options = '';
        for (var i in grouping) {
            var group = grouping[i];
            options += '<optgroup label="' + group.group.toUpperCase() + '">';
            var items = group.items;
            for (var j in items) {
                options += '<option value="' + items[j].id + '" data-mindays="' + (items[j].mindays > 0 ? items[j].mindays : '') + '" data-minNightText="' + (items[j].mindayText) + '" data-maxnoofpax="' + items[j].maxNoOfPax + '" data-minnoofadults="' + items[j].minNoOfAdults + '" data-minnoofchildren="' + items[j].minNoOfChildren + '" data-maxnoofguests="' + items[j].maxNoOfGuests + '" data-PropertyNote="' + items[j].propertyNote + '" data-PropertyNoteColor= "' + items[j].propertyNoteColor + '" data-ChainId= "' + items[j].chainId + '">' + items[j].title + '</option>';
            }
            options += '</optgroup>';
        }
        listings.html(options);
        listings.selectpicker('refresh');
    }
}
function onListingChange1(e) {
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
        adultsLabel2.attr("data-min-limit", minnoofadults).attr("data-max-pax-limit", maxnoofpax);
        childrenLabel2.attr("data-min-limit", minnoofchildren).attr("data-max-pax-limit", maxnoofpax);

        if (maxnoofpax >= 1 && maxnoofpax >= minnoofadults && maxnoofpax >= minnoofchildren && (maxnoofpax >= (minnoofadults + minnoofchildren))) {
            $(".room-adult-child-btn2").removeClass("opacity");
        } else {
            $(".room-adult-child-btn2").addClass("opacity");
        }

        var defaultAdultHiddenvalue = parseInt(defaultAdultsHidden2.val());
        var defaultChildrenHiddenvalue = parseInt(defaultChildrenHidden2.val());

        var curentAdult = parseInt($(".room-adult-child-btn2 .filter-option .adults1").html()),
            curentChild = parseInt($(".room-adult-child-btn2 .filter-option .children1").html()),
            totalCurrent = curentAdult + curentChild;

        if (totalCurrent > maxnoofpax) {

            adultsLabel2.html(defaultAdultHiddenvalue);
            adultsText2.html(defaultAdultHiddenvalue);

            childrenLabel2.html(defaultChildrenHiddenvalue);
            childrenText2.html(defaultChildrenHiddenvalue);

            //reset button
            $(".dropdown-rooms .minus-sign2").addClass("active");
            $(".dropdown-rooms .plus-sign2").addClass("active");


            $(".dropdown-rooms .adults-block .minus-sign2").removeClass("active");
            if (maxnoofpax > (defaultAdultHiddenvalue + defaultChildrenHiddenvalue)) {
                $(".dropdown-rooms .plus-sign2").removeClass("active");
            }

        } else {
            if (totalCookieAdultChild && totalCookieAdultChild != 'undefined') {
                if (totalCookieAdultChild > maxnoofpax) {
                    adultsLabel2.html(defaultAdultHiddenvalue);
                    adultsText2.html(defaultAdultHiddenvalue);
                    childrenLabel2.html(defaultChildrenHiddenvalue);
                    childrenText2.html(defaultChildrenHiddenvalue);
                    //reset button
                    $(".dropdown-rooms .minus-sign2").addClass("active");
                    $(".dropdown-rooms .plus-sign2").addClass("active");
                    $(".dropdown-rooms .adults-block .minus-sign2").removeClass("active");
                    if (maxnoofpax > (defaultAdultHiddenvalue + defaultChildrenHiddenvalue)) {
                        $(".dropdown-rooms .plus-sign2").removeClass("active");
                    }

                } else {
                    $(".dropdown-rooms .minus-sign2").addClass("active");
                    $(".dropdown-rooms .plus-sign2").addClass("active");


                    if (CookieAdult > 1) {
                        $(".dropdown-rooms .adults-block .minus-sign2").removeClass("active");

                    }
                    if (CookieChild > 0) {
                        $(".dropdown-rooms .children-block .minus-sign2").removeClass("active");
                    }

                    if (totalCookieAdultChild == maxnoofpax) {

                    } else {
                        $(".dropdown-rooms .plus-sign2").removeClass("active");

                    }

                    adultsLabel2.html(CookieAdult);
                    adultsText2.html(CookieAdult);

                    childrenLabel2.html(CookieChild);
                    childrenText2.html(CookieChild);

                }
            } else {
                if (totalCurrent == maxnoofpax) {

                    $(".dropdown-rooms .plus-sign2").addClass("active");
                } else {
                    $(".dropdown-rooms .plus-sign2").removeClass("active");
                    if (curentAdult > 1) {
                        $(".dropdown-rooms .adults-block .minus-sign2").removeClass("active");

                    }
                    if (curentChild > 0) {
                        $(".dropdown-rooms .children-block .minus-sign2").removeClass("active");
                    }
                    console.log('curentAdult ' + curentAdult)

                }
            }
        }

        selected.parents("form").find("li.max-guests").html(maxnoofguests);
    }
}

function selectCity1() {
    var value = '';
    var locations = $('.location1');
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
function selectListing1() {
    var listing = $('input:hidden.listingid');
    if (listing && listing.length > 0) {
        var value = listing.val();
        var listings = $('.property1')
        listings.selectpicker('refresh');
        listings.selectpicker('val', value)
        listings.selectpicker('refresh');
    }
}
$(document).ready(function () {


    $("#checkin2").change(function () {
        var sfecheckinDate = $(this).val();
        $.cookie("cookie-checkin-date", sfecheckinDate, { path: '/' });

    });
    $("#checkout2").change(function () {
        var sfecheckoutDate = $(this).val();
        $.cookie("cookie-checkout-date", sfecheckoutDate, { path: '/' });

    });

    $("#property1").change(function () {
        setTimeout(function () {
            var sfecheckinDate = $("#checkin2").val();
            $.cookie("cookie-checkin-date", sfecheckinDate, { path: '/' });
            var sfecheckoutDate = $("#checkout2").val();
            $.cookie("cookie-checkout-date", sfecheckoutDate, { path: '/' });
        }, 300);
    });

    if ($.cookie("cookie-checkin-date")) {
        $("#checkin2").val($.cookie("cookie-checkin-date"))
    }
    if ($.cookie("cookie-checkout-date")) {
        $("#checkout2").val($.cookie("cookie-checkout-date"))
    }

    $("#property1").change(function () {
        setTimeout(function () {
            var sfecheckinDate = $("#checkin2").val();
            $.cookie("cookie-checkin-date", sfecheckinDate, { path: '/' });
            var sfecheckoutDate = $("#checkout2").val();
            $.cookie("cookie-checkout-date", sfecheckoutDate, { path: '/' });
        }, 300);
    });

    setTimeout(function () {

        if ($('input:hidden.listingid').length > 0) {

            var activeListingid = $('input:hidden.listingid').val();

            //Desktop
            var mindaysDefault = 1;
            $('#property1 option').each(function (index) {
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

            $("#checkout2").datepicker("option", "minDate", getDateDefault);
            if (daysDefault < mindaysDefault) {
                $("#checkout2").datepicker("setDate", getDateDefault);
            }
        }

    }, 1000);


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