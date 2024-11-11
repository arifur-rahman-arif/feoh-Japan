$(function () {
    $('.spinner').hide();
    var pagesize = $(".pageSize").val(), dealsresponse = "";

    var thingtodo = $('[data-role=dynamic]').find('.pageID').val();
    var loading = false;
    var stoplooping = false;

    $(window).on("scroll", function () {
        if (!loading && !stoplooping) {
            var header = $(".thingstodo-component");
            var elementHeight = header.height();

            var elementOffset = header.offset();
            var sticky = elementOffset.top + elementHeight / 2;
            var pageOffset = window.scrollY - 60;
            var page = $('[data-role=dynamic]').find('.pageNumber').val();

            if (pageOffset >= sticky) {
                console.log("dsfds");
                loading = true;

                page = parseInt(page) + 1;
                var param = {
                    pageNumber: page,
                    pageSize: pagesize,
                    pageID: thingtodo
                };
                getArticleList(param);
            }
        }
    });

    $('[data-role=dynamic]').on('display', function (e, args) {
        if (args.action === 'filter') {
            $(this).find('.pageNumber').val(1);
            $(this).find('.five-blocks-container').empty();
        }

        var page = $(this).find('.pageNumber').val();
        var param = {
            pageNumber: page,
            pageSize: pagesize,
            pageID: thingtodo
        };
        if (!args.filters || args.filters.length === 0) {
            args.reset = true;
        } else {
            param.filters = args.filters;
        }

        getArticleList(param);
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
    var parsedata = {};
    function updateDealList(dealData) {
        if (dealData == '{}')
            return '';

        parsedata.data = JSON.parse(dealData);
        $("#things-to-do-template").tmpl(parsedata).appendTo(".thingstodo-component.features");
        loading = false;
    }

    function getArticleList(params) {
        $.ajax({
            url: '/ajax/BindArticles',
            method: 'POST',
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8'

        })
        .done(function (response) {
            if (JSON.parse(response).length == 0) {
                stoplooping = true;
                loading = false;
            } else {
                dealsresponse = response;
                updateDealList(dealsresponse);
                loading = false;
            }

            $('.thingsToDo-more').on('click', function (e) {
                e.preventDefault();
                $(".things-to-do-page-wrapper").html('');
                $("body").addClass("noscroll");
                $("html").addClass("noscroll");


                $('.thingsToDoPopup').addClass('active');

                var thingstodoURL = $(this).parent().find(".thingsToDo-more").attr('data-href');
                $.ajax({
                    url: thingstodoURL,
                    type: "GET",
                    dataType: "html"
                }).done(function (data) {
                    $(".things-to-do-page-wrapper").html($(data).find('.things-to-do-wrapper'));
                });
            });
        });
    }

    (loadDeals = function (changed) {
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
});