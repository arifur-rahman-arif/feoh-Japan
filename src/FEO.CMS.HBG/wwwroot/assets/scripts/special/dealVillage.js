$(function () {
    // lazey Loading start
    $('.spinner').hide();
    var isLoading = false;
    var enableScroll = true;
    var selecteddatatype;
    var stoplooping = false;
    $(window).scroll(function () {
        if (!stoplooping) {
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
        }
    });

    $(".see-more").on("click", function () {
        var page = $('[data-role=dynamic]').find('.pageNumber');
        var param = {
            pageNumber: page.val(),
            pageSize: $('[data-role=dynamic]').find('.pageSize').val()
        };
        if ($("#deals-template").length != 0) {
            getDealList(param);
        }
        else if ($("#deals-filtertemplate").length != 0) {
            var selected_property_id = $("#DealFilter").val()
            var isGUID = checkforGUID(selected_property_id);
            var datatype = selecteddatatype;
            var param = {
                pageNumber: page.val(),
                pageSize: $('[data-role=dynamic]').find('.pageSize').val(),
                isguid: isGUID,
                selected_property_id: selected_property_id,
                clearfilterdealData: false,
                datatype: datatype
            }
            getFilterDealList(param);
        }
        page.val(parseInt(page.val()) + 1);
    });

    $('[data-role=dynamic]').on('display', function (e, args) {
        // reset if action is filter
        if (args.action === 'filter') {
            $(this).find('.pageNumber').val(1);
            //$(this).find('.five-blocks-container').empty();
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
    var dealsdata = {};
    function updateDealList(dealData) {
        dealsdata.data = dealData;
        $("#deals-template").tmpl(dealsdata).appendTo(".all-deal .five-blocks-container");
    }
    function updateFilterDealList(dealData) {
        if ($("#deals-template").length != 0 || dealData[0].clearfilterdealData) {
            $(".all-deal .five-blocks-container").html("");
        }
        dealsdata.data = dealData;
        $("#deals-filtertemplate").tmpl(dealsdata).appendTo(".all-deal .five-blocks-container");
    }
    function getDealList(params) {
        $('.spinner').show();
        $.ajax({
            // dataType: "json",
            url: '/ajax/deal',
            method: 'POST',
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8'
        })
            .done(function (response) {
                if (response.length == 0) {
                    stoplooping = true;
                    isLoading = false;
                    $('.spinner').hide();
                } else {
                    setTimeout(function () {
                        $('.spinner').hide();
                        updateDealList(response);
                        isLoading = false;
                    }, 2000);
                }
            });
    }

    (loadDeals = function (changed) {
        var propId = "";
        var reasonId = "";

        // TODO: create args and invoke display event
        var args = {
            filters: [],
            reset: true,
            action: 'filter'
        };

        $('[data-role=dynamic]').trigger('display', args);

        if (args.reset) {
            $('[data-hideable="true"]').show();
        } else {
            $('[data-hideable="true"]').hide();
        }
    })(false);

    function checkforGUID(value) {
        var pattern = new RegExp('^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$', 'i');
        return pattern.test(value);
    }

    function getFilterDealList(params) {
        $('.spinner').show();
        $.ajax({
            url: '/ajax/deal',
            method: 'POST',
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8'
        })
            .done(function (response) {
                if (response.length == 0) {
                    stoplooping = true;
                    isLoading = false;
                    $('.spinner').hide();
                } else {
                    setTimeout(function () {
                        $('.spinner').hide();
                        updateFilterDealList(response);
                        isLoading = false;
                    }, 2000);

                }
            });
    }

    $("#DealFilter").on("change", function () {
        if ($("#deals-template").length != 0) {
            $(".all-deal .five-blocks-container").html("");
        }
        selected_property_id = this.value;
        var page = $('[data-role=dynamic]').find('.pageNumber');
        page.val = 1;
        stoplooping = false;
        // check for GUID
        var isGUID = checkforGUID(selected_property_id);
        var datatype = $('option:selected', this).attr('data-type');
        selecteddatatype = datatype;
        var param = {
            pageNumber: page.val,
            pageSize: $('[data-role=dynamic]').find('.pageSize').val(),
            isguid: isGUID,
            selected_property_id: selected_property_id,
            clearfilterdealData: true,
            datatype: datatype
        };

        getFilterDealList(param);
        page.val = page.val + 1;
        $('[data-role=dynamic]').find('.pageNumber').val(page.val);
    });
});
