$(function () {

    $('[data-role=dynamic]').on('display', function (e, args) {
        // reset if action is filter
        if (args.action === 'filter') {
            $(this).find('.pageNumber').val(1);
            $(this).find('.three-blocks-container').empty();
        }

        var page = $(this).find('.pageNumber');
        var param = {
            pageNumber: page.val(),
            pageSize: $(this).find('.pageSize').val()
        };
        if (!args.filters || args.filters.length === 0) {
            args.reset = true;
        } else {
            param.filters = args.filters;
        }
            
        getDealList(param);
        page.val(parseInt(page.val()) + 1);
    });

  function getValue(name, $filter,datatype) {
  	var value;
  	if (!name) return value;
  	$filter.find('option').each(function (i, item) {
  	    var itemValue = $(item).text().toLowerCase().replace(/ /g, '-');
  	    var itemid=$(item).val().toLowerCase().replace(/ /g, '-');
  	    if (datatype) {
  	        if (itemValue && name === itemValue && $(item).attr('data-type') == datatype) value = $(item).val();
  	    }
  	    else
  	    {
  	        if (itemValue && name === itemValue) value = $(item).val();
  	        if (itemid && name != itemValue && itemid== name) value = $(item).val();
  	    }
      });
  	return value;
    }

  function changeValue(value, $filter) {
    $filter.selectpicker('render');
    $filter.selectpicker('val', value);
    $filter.selectpicker('refresh');
}

    function returnValOrDef(val, def) {
        if (!def) def = '';
        if (val) return val;
        return def;
    }

    function updateDealList(dealData) {
        var dealLength = dealData.length,
            dealList = [];

        var contentWrapper = $('.all-deal .three-blocks-container');
		var pageSize = $('.pageSize').val();	
		var learnMoreText = $('.learnMoreBtnText').val();	

        for (var i = 0; i < dealLength; i++) {
            var deal = dealData[i];
            var dealHTML = '<div class="col-sm-6 col-md-4">';
            dealHTML += '<div class="deal-image image-with-txt">';
            if (deal.thumbnail) {
				dealHTML += '<div class="deal-image-container">';
                dealHTML += '<a href="' + returnValOrDef(deal.dealUrl, '#') + '"><img src="' + returnValOrDef(deal.thumbnail.url, '#') + '" alt="' + returnValOrDef(deal.thumbnail.alt) + '" /></a>';
                if (deal.dealTag) {
                    if (deal.isMemberExclusive == true) {
                        dealHTML += '<div class="deal-tag-new deal-member-exclusive">';
                        if (deal.tagIcon) {
                            dealHTML += '<img src="' + returnValOrDef(deal.tagIcon) + '" alt="" />';
                        }
                        dealHTML += '<span class="text">' + returnValOrDef(deal.dealTag) + '</span>';
                        dealHTML += '</div>';
                    } else {
                        dealHTML += '<div class="deal-tag-new"><span class="text">' + returnValOrDef(deal.dealTag) + '</span></div>';
                    }
                }
				dealHTML += '</div>';
			}
            dealHTML += '<div class="deal-caption">';
            dealHTML += '<div class="content-v-align">';
            dealHTML += '<div class="deal-content-section">';
            dealHTML += '<h3><a href="' + returnValOrDef(deal.dealUrl, '#') + '" class="color-white">' + returnValOrDef(deal.title) + '</a></h3>';
            // dealHTML += '<p class="sub-title">' + returnValOrDef(deal.subTitle) + '</p>';
            dealHTML += '<div class="text-left description">' + returnValOrDef(deal.description) + '</div>';
            dealHTML += '</div>';
			if(deal.showLearnMore) {
				dealHTML += '<a href="' + returnValOrDef(deal.dealUrl, '#') + '" class="btn-border color-pink">' + returnValOrDef(learnMoreText) + '</a>';
			}
            dealHTML += '</div></div></div></div>';		
            dealList.push(dealHTML);		
        }
		
        setTimeout(function () {
            var dealLengthCount = $('.all-deal .three-blocks-container').find('.col-sm-6').length;
            if (deal) {
                var totalCount = returnValOrDef(deal.totalCount);
                if (dealLengthCount == totalCount) {
                    $('.arrow.see-more').hide();
                }
            }
            else
            {
                if (dealLengthCount==0)
                {
                    $('.arrow.see-more').hide();
                }
            }
		}, 100);
        contentWrapper.append(dealList);
    }

  function getDealList(params) {
    $.ajax({
        // dataType: "json",
        url: '/ajax/deal',
        method: 'POST',
        data: JSON.stringify(params),
        contentType: 'application/json; charset=utf-8'
    })
    .done(function (response) {
      updateDealList(response);
      });
    }

  function getdatatype(changed, propId, $filter) {
      var value;
      if (!propId) return value;
      $filter.find('option').each(function (i, item) {
          var itemValue = $(item).text().toLowerCase().replace(/ /g, '-');
          if (!changed) {
              if ($(item).val() == propId) value = $(item).attr('data-type');
          }
          
      });
      return value;
  }
  (loadDeals = function (changed) {

		var property = Query.get('property');
		var reason = Query.get('type');
		if (!property && !reason && !changed) {
			$('[data-role=dynamic]').find('.pageNumber').val(1);
			$('.see-more').click();
			return;
  }

		var properties = $('.deal-type');
        var reasons = $('.travel-type');
        var datatype = $('option:selected', properties).attr('data-type');
		var propId = getValue(property, properties,datatype);
		var reasonId = getValue(reason, reasons);
		if (!changed && !datatype)
		{
		    datatype = getdatatype(changed, propId, properties);
		}
		// TODO: create args and invoke display event
		var args = {
			filters: [],
			reset: true,
			action: 'filter'
		};

    if (propId && !datatype) {
    	changeValue(propId, properties);
    	args.filters.push({
    		name: 'listing',
    		value: [propId]
        });
    }
    if (datatype) {
        changeValue(propId, properties);
        args.filters.push({
            name: 'datatype',
            value: [datatype]
        });
        if (datatype == 'hotel' || datatype == 'serviced residence') {
            var countryid = $('option:selected', properties).attr('data-country');
            var cityid = $('option:selected', properties).attr('data-city');
            args.filters.push({
                name: 'countryid',
                value: [countryid]
            });
            args.filters.push({
                name: 'cityid',
                value: [cityid]
            });
        }
        else if (propId) {
            args.filters.push({
                name: 'nonlisting',
                value: [propId]
            });
        }
        
       
    }
        if (reasonId) {
      changeValue(reasonId, reasons);
      args.filters.push({
      	name: 'travel',
      	value: [reasonId]
      });
  }

    $('[data-role=dynamic]').trigger('display', args);

    if (args.reset) {
      $('[data-hideable="true"]').show();
    } else {
      $('[data-hideable="true"]').hide();
  }
  })(false);

  History.Adapter.bind(window, 'statechange', function () {
  	loadDeals(true);
  });

});
