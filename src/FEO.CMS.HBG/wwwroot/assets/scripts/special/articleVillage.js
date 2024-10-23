$(function () {
    // lazey Loading start
    $('.spinner').hide();
    var isLoading = false;
    var enableScroll = true;

    $(window).scroll(function () {
        var header = $("#village-deals-list");
        var windowHeight = $(window).height();
        var elementHeight = header.height();

        var elementOffset = header.offset();
        var sticky = elementOffset.top;
        var pageOffset = window.pageYOffset + windowHeight - elementHeight;


        if (pageOffset >= sticky) {
            if (!isLoading && enableScroll) {
                $(".see-more").click();
                isLoading = true;
            }
        }
    });

    $(".see-more").on("click", function () {
        var page = $('[data-role=dynamic]').find('.pageNumber');
        var param = {
            pageNumber: page.val(),
            pageSize: $('[data-role=dynamic]').find('.pageSize').val()
        };

        getDealList(param);
        page.val(parseInt(page.val()) + 1);
    });

    $('[data-role=dynamic]').on('display', function (e, args) {
        // reset if action is filter
        if (args.action === 'filter') {
            $(this).find('.pageNumber').val(1);
            $(this).find('.five-blocks-container').empty();
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

    function getValue(name, $filter) {
        var value;
        if (!name) return value;
        $filter.find('option').each(function (i, item) {
            var itemValue = $(item).text().toLowerCase().replace(/ /g, '-');
            if (itemValue && name === itemValue) value = $(item).val();
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

        var contentWrapper = $('.all-deal .five-blocks-container');
        var pageSize = $('.pageSize').val();
        var pageNumber = $('.pageNumber').val();
        for (var i = 0; i < dealLength; i++) {
            var deal = dealData[i];

            var dealHTML = '<div class="col-md-4 col-sm-6">';

            dealHTML += '<a href="' + returnValOrDef(deal.dealUrl, '#') + '" class="village-deals--content-wrapper">';
            dealHTML += '<div class="deals-caption">';
            dealHTML += '<div class="content-v-align">';
            dealHTML += '<h3 class="text-uppercase">' + returnValOrDef(deal.title) + '</h3>';
            dealHTML += '<p>' + returnValOrDef(deal.subTitle) + '</p>'
            dealHTML += '<div class="village-properties-wrap">';
            dealHTML += '<div class="village-properties-logo">';

            if (deal.participantsDescrption)
                dealHTML += '<div class="village-properties-img"></div>	';

            dealHTML += '</div>';
            dealHTML += '<div class="village-properties-text">';
            dealHTML += '<span>' + returnValOrDef(deal.participantsDescrption) + '</span>';
            dealHTML += '</div>';
            dealHTML += '</div></div>';

            if (deal.category)
                dealHTML += '<div class="ribbon">' + returnValOrDef(deal.category) + '</div>';

            dealHTML += '</div></a>';
            dealHTML += '<div class="hotel-image">';
            dealHTML += '<div class="deal-image image-with-txt">';
            dealHTML += '<a href="' + returnValOrDef(deal.dealUrl, '#') + '">';
            dealHTML += '<img src="' + returnValOrDef(deal.thumbnail.url, '#') + '" alt="' + returnValOrDef(deal.thumbnail.alt) + '" />';
            dealHTML += '</a></div></div></div>';

            dealList.push(dealHTML);

        }

        disableScroll = returnValOrDef(deal.totalCount) > (pageSize * pageNumber);
        contentWrapper.append(dealList);

    }

    function getDealList(params) {
        //$('.spinner').show();
        $.ajax({
            // dataType: "json",
            url: '/ajax/VillageArticle',
            method: 'POST',
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8'
        })
        .done(function (response) {
            updateDealList(response);
            $('.spinner').hide();
            isLoading = false;
        });
    }

    (loadDeals = function (changed) {
        var property = $.get('property');
        var reason = $.get('type');
        if (!property && !reason && !changed) {
            $('[data-role=dynamic]').find('.pageNumber').val(1);
            $('.see-more').click();
            return;
        }

        var properties = $('.deal-type');
        var reasons = $('.travel-type');

        var propId = getValue(property, properties);
        var reasonId = getValue(reason, reasons);

        // TODO: create args and invoke display event
        var args = {
            filters: [],
            reset: true,
            action: 'filter'
        };

        if (propId) {
            changeValue(propId, properties);
            args.filters.push({
                name: 'listing',
                value: [propId]
            });
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
