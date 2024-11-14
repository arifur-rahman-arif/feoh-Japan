Date.prototype.addDays = function (days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
};
Date.prototype.subtract = function (d) {
    var oneDay = 1000 * 60 * 60 * 24;
    var ms1 = this.getTime();
    var ms2 = d.getTime();
    var diff = ms1 - ms2;
    return Math.round(diff / oneDay);
};

$(function () {
    $('.filtering-container').on('change', function () {
        var self = $(this);
        var selected = self.find('option:selected');
        var value = selected.val();
        processListings(self, value)
    }).on('filtering', function () {
        processListings($(this));
    }).trigger('filtering');

    function processListings(filter, filterValue) {
        var containers = filter.find('[data-dynamic=true]');
        containers.each(function (i) {
            var container = $(containers[i]);
            var brand = container.data('brand');
            var param = {
                type: container.data('type'),
                attributes: []
            };
            if (filterValue) {
                param.attributes.push({
                    name: 'country',
                    value: filterValue
                });
            }
            if (brand) {
                param.attributes.push({
                    name: 'brand',
                    value: brand
                });
            }
            $.ajax({
                url: '/ajax/listings/thumbnails',
                method: 'POST',
                data: JSON.stringify(param),
                contentType: 'application/json; charset=utf-8'
            }).done(function (response) {
                container.find('[data-remove=true]').remove();
                var config = createConfig(container);
                createListings(response, config, container);
            }).fail(function (response) {
                console.log('An error occurred while processing your request.');
            });
        });
    }

    function computeMediumPushValue(listingsCount) {
        var maxCount = 3;
        var colSizePerListing = 4;
        var totalSize = maxCount * colSizePerListing;
        var sizeOfListingCols = listingsCount * colSizePerListing;
        var freeSpace = totalSize - sizeOfListingCols;
        var pushValue = freeSpace === 0 ? 0 :
            freeSpace / 2;
        return pushValue;
    }

    function createListings(response, config, container) {
        if (response.length === 0) {
            container
                .closest('[data-hideable=true]').hide()
                .prev('.line-separator[data-hideable=true]').hide();
            return;
        } else {
            container
                .closest('[data-hideable=true]').show()
                .prev('.line-separator[data-hideable=true]').show();
        }

        var pushValue = computeMediumPushValue(response.length);
        for (var j = 0, l = response.length; j < l; ++j) {
            var listing = response[j];
            var html = createListingHtml(listing, config, pushValue);
            container.append(html);
        }
    }

    function createListingHtml(listing, config, pushValue) {
        var colPush = pushValue === 0 ? '' : ' col-md-push-' + pushValue;
        var html = '<div class="col-md-4 col-sm-6" data-remove="true">';
        html += '<div class="hotel-content-wrapper">';
        html += '<div class="hotel-image">';
        html += '<div class="deal-image image-with-txt">';
        html += '<a href="' + (listing.url ? listing.url : '#') + '">';
        if (listing.smallThumbnail) {
            html += '<img src="' + listing.smallThumbnail.src + '" alt="' + listing.smallThumbnail.alt + '" />';
        }
        html += '<div class="caption">';
        html += '<div class="content-v-align">';
        if (config.showTitle) {
            html += '<h3>' + (listing.title ? listing.title : '') + '</h3>';
        }
        html += '</div>';
        html += '</div>';
        html += '<p>' + (listing.caption ? listing.caption : '') + '</p>';
        html += '</a>';
        html += '</div>';
        html += '</div>';
        html += '<div class="hotel-content description">';
        html += '<h4>' + (listing.underlinedText ? listing.underlinedText : '') + '</h4>';
        html += '<div class="line-divider ' + config.dividerColor + '"></div>';
        html += '<p>' + (listing.summary ? listing.summary : '') + '</p>';
        html += '</div>';
        html += '</div>';
        html += '</div>';
        return html;
    }

    function createConfig(container) {
        return {
            dividerColor: container.find('[data-prop=DividerColor]').val(),
            showTitle: container.find('[data-prop=ShowTitle]').val()
        };
    }

});
var mindatenewone,checkinFormat,checkoutFormat;
$(function () {
    var sr = $('.sr-marker').find('select');
    var checkin = $('.checkin-marker').find('.datepicker');
    var checkout = $('.checkout-marker').find('.datepicker');
    
    //checkout.datepicker( "option", "disabled", true );
	//07062020 - Added for new SC Form
	var checkinDate = $('.checkin-marker input[type="date"]');
	var checkoutDate = $('.checkout-marker input[type="date"]');
    
	checkinDate.val(new Date().toISOString().substr(0, 10));
	checkinDate.attr('min', new Date().toISOString().substr(0, 10));
	checkoutDate.val(new Date().addDays(30).toISOString().substr(0, 10));
    checkoutDate.attr('min', new Date().addDays(30).toISOString().substr(0, 10));

	checkinDate.on('change', function () {
		var daysrestriction = parseInt($('input[data-sc-field-name="DaysRestriction"]').val());
		var val = $(this).val();
		var newDate = new Date(val + 'T00:00');
		checkoutDate.attr('min', newDate.addDays(parseInt(daysrestriction)).toISOString().substr(0, 10));
		//checkoutDate.attr('max', newDate.addDays(parseInt(daysrestriction)).toISOString().substr(0, 10));
	});
	//07062020 - Added for new SC Form

    function updateDates(date1, date2) {
        var checkinId = checkin.attr('id');
        var checkoutId = checkout.attr('id');
        var checkinFieldData = window.WffmFieldsData[checkinId];
        var checkoutFieldData = window.WffmFieldsData[checkoutId];
        checkinFormat = checkinFieldData.dateFormat;
        checkoutFormat = checkoutFieldData.dateFormat;

        var checkinDateString = $.datepicker.formatDate(checkinFormat, date1);
        var checkoutDateString = $.datepicker.formatDate(checkoutFormat, date2);

        checkin.val(checkinDateString);
        checkout.val(checkoutDateString);
        checkout.datepicker( "option","minDate", checkoutDateString);
        mindatenewone = checkoutDateString;
        setTimeout(function(){ 
            checkout.datepicker( "option","minDate", checkoutDateString);
         }, 2000);

    }

    function onSrChange(id) {
        var mindays = 0, found = false;
		var daysrestriction = parseInt($(".app-form-control-hidden-field .text-box").val());
        if (groups) {
            for (var i in groups) {
                var country = groups[i];
                var cities = country.cities;
                if (cities && cities.length > 0) {
                    for (var j in cities) {
                        var city = cities[j];
                        var grouping = city.grouping;
                        if (grouping && grouping.length > 0) {
                            for (var k in grouping) {
                                var group = grouping[k];
                                var items = group.items;
                                if (items && items.length > 0) {
                                    for (var l in items) {
                                        var item = items[l];
                                        if (item.id === id) {
                                            mindays = item.mindays;
                                            found = true;
                                            break;
                                        }
                                    }
                                }
                                if (found) break;
                            }
                        }
                        if (found) break;
                    }
                }
                if (found) break;
            }
        }
		if(daysrestriction>0){
			checkin.data('mindays', daysrestriction);
            checkout.data('mindays', daysrestriction);
			var checkinDate = new Date();
            var checkoutDate = checkinDate.addDays(daysrestriction);
			
            updateDates(checkinDate, checkoutDate);
		}
        else if (mindays > 0) {
            $('.minnight-label').text(mindays);

            checkin.data('mindays', mindays);
            checkout.data('mindays', mindays);

            var checkinDate = new Date();
            var checkoutDate = checkinDate.addDays(mindays);
			
            updateDates(checkinDate, checkoutDate);
        } else {
            $('.minnight-label').text('7');
            checkin.removeData('mindays');
            checkout.removeData('mindays');
            var checkinDate = new Date();
            var checkoutDate = checkinDate.addDays(7);
            updateDates(checkinDate, checkoutDate);
        }
    }

    sr.on('change', function () {
        var id = $(this).val();
        onSrChange(id);
    });

    checkin.on('onDateSelected', function () {
        var checkinId = checkin.attr('id');
        var checkoutId = checkout.attr('id');
        var checkinFieldData = window.WffmFieldsData[checkinId];
        var checkoutFieldData = window.WffmFieldsData[checkoutId];
        var checkinFormat = checkinFieldData.dateFormat;
        var checkoutFormat = checkoutFieldData.dateFormat;

        var mindays = $(this).data('mindays');
        var checkinDate = $.datepicker.parseDate(checkinFormat, $(this).val());
        var checkoutDate = $.datepicker.parseDate(checkoutFormat, checkout.val());
        var diff = checkoutDate.subtract(checkinDate);
        /*if (diff < mindays) {
            var newCheckoutDate = checkinDate.addDays(mindays);
            updateDates(checkinDate, newCheckoutDate);
        }else if(mindays!=null && mindays!="undefined" && mindays!=""){
            
        }*/
		var daysrestriction = parseInt($(".app-form-control-hidden-field .text-box").val());
		
		if(daysrestriction>0){
			var newCheckoutDate = checkinDate.addDays(daysrestriction);
            updateDates(checkinDate, newCheckoutDate);
		}
        if(mindays!=null && mindays!="undefined" && mindays!=""){
            var newCheckoutDate = checkinDate.addDays(mindays);
            updateDates(checkinDate, newCheckoutDate);
        }else{
            var newCheckoutDate = checkinDate.addDays(7);
            updateDates(checkinDate, newCheckoutDate);
        }
       // checkout.datepicker( "option", "enabled", true );
        //checkout.datepicker('setDate', null);
        
    });

    checkout.on('onDateSelected', function () {
        var checkinId = checkin.attr('id');
        var checkoutId = checkout.attr('id');
        var checkinFieldData = window.WffmFieldsData[checkinId];
        var checkoutFieldData = window.WffmFieldsData[checkoutId];
        var checkinFormat = checkinFieldData.dateFormat;
        var checkoutFormat = checkoutFieldData.dateFormat;

        var mindays = $(this).data('mindays');
        var checkinDate = $.datepicker.parseDate(checkinFormat, checkin.val());
        var checkoutDate = $.datepicker.parseDate(checkoutFormat, $(this).val());
        var diff = checkoutDate.subtract(checkinDate);

        if (diff < mindays) {
            var newCheckoutDate = checkinDate.addDays(mindays);
            updateDates(checkinDate, newCheckoutDate);
        }

        var checkoutDateString = $.datepicker.formatDate(checkoutFormat, checkoutDate);
        checkout.val(checkoutDateString);
    });

    
    $(window).on("load",function(){
        if(checkinFormat!=null){
             var dateformat = $.datepicker.formatDate(checkinFormat, new Date());
        $(".checkin-marker input.datepicker").datepicker('option', 'minDate', dateformat);
        if(mindatenewone!=null && mindatenewone!="undefined" && mindatenewone!=""){
            $(".checkout-marker input.datepicker").datepicker( "option","minDate", mindatenewone);
        }
    }   
       
        
    })
});

// WFFM
