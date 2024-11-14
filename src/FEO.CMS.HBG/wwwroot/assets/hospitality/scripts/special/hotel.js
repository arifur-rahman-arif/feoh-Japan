var getListingOnChange;
$(function () {

  function isMobile () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  function scrollTo() {
    $('html, body').animate({
      scrollTop: $('.filter-hotel-listing').offset().top
    }, 500);
  }

  function refresh (location) {
    var parts = location.split(','),
        country = parts[0],
        city = parts[1],
        area = parts[2];

    var url = Query.update('pgnum', '1');
    url = Query.update('country', (country ? country.toLowerCase().replace(/ /g, '+') : ''), url);
    url = Query.update('city', (city ? city.toLowerCase().replace(/ /g, '+') : ''), url);
    url = Query.update('area', (area ? parts[2].toLowerCase().replace(/ /g, '+') : ''), url);
    History.pushState(null, document.title, url);
  }

   var insideajaxforlistings=0;
  function nextPage() {
    var pageNumber = Query.get('pgnum');
    pageNumber = pageNumber ? ++pageNumber : 2;

    var url = Query.update('pgnum', pageNumber);
    if(!insideajaxforlistings){
      insideajaxforlistings=1;
      History.pushState(null, document.title, url);
    }
  }

  function prevPage() {
    var pageNumber = Query.get('pgnum');
    pageNumber = pageNumber ? --pageNumber : 1;

    var url = Query.update('pgnum', pageNumber);
    if(!insideajaxforlistings){
      insideajaxforlistings=1;
      History.pushState(null, document.title, url);
    }
  }

  function getListings(params) {
    $.ajax({
      url: '/ajax/listing',
      method: 'POST',
      data: JSON.stringify(params),
      contentType: 'application/json; charset=utf-8'
    })
    .done(function(response) {
      updateHTML(response);
      insideajaxforlistings=0;
    });
  }

  function returnValOrDef(val, def) {
    if (!def) def = '';
    if (val) return val;
    return def;
  }

  function joinValsOrDef(vals, def, separator) {
    if (!def) def = '';
    if (!vals || vals.length == 0) return def;
    var invalidCount = 0;
    for (var i in vals) {
      if (!vals[i]) ++invalidCount;
    }
    if (invalidCount === vals.length) return def;
    if (!separator) separator = ', ';
    vals = vals.slice(0, vals.length - invalidCount)
    return vals.join(separator);
  }

  function updateHTML(hotelData) {
    var totalCount = hotelData.totalCount,
        dictionary = hotelData.dictionary,
        listings = hotelData.listings,
        paging = hotelData.paging;

    var btnAvailability = dictionary ? dictionary.availabilityText : '',
        btnLearnMore = dictionary ? dictionary.learnMoreText : '',
        pagePrevText = dictionary ? dictionary.pagePrevText : '',
        pageNextText = dictionary ? dictionary.pageNextText: '';
      pageNumText = dictionary ? dictionary.pageNumText: '';

    var currentPage = paging ? paging.pageNumber : 1,
        totalPage = paging ? paging.pageCount : 0;

    var listingsLength = listings ? listings.length : 0,
        hotelListWrapper = $('.hotel.listing-container .row'),
        hotelList = [];

    var hotelHTML = '';
    if (listingsLength > 0) {
      for (var i = 0; i < listingsLength; i++) {

        var listing = listings[i];
        hotelHTML = '<div class="col-sm-6 listing-wrapper">';
        hotelHTML += '<div class="hotel-image-slider-wrapper">';
        hotelHTML += '<div class="hotel-image-slider owl-carousel">';

        var imgs = listing.previewImages;
        for (var j = 0, imgLength = imgs ? imgs.length : 0; j < imgLength; j++) {
          var img = imgs[j];
          hotelHTML += '<a href="' + returnValOrDef(listing.listingUrl, '#') + '"><img src="' + returnValOrDef(img.url, '#') + '" alt="' + returnValOrDef(img.alt) + '" /></a>';
        }

        hotelHTML += '</div>';
        hotelHTML += '<div class="note">' + returnValOrDef(listing.caption) + '</div>';
        hotelHTML += '</div>';
        hotelHTML += '<div class="row"><div class="col-md-9">'
        hotelHTML += '<p class="header"><a href="' + returnValOrDef(listing.listingUrl, '#') + '">' + returnValOrDef(listing.title) + '</a> <span class="visible-xs pull-right"><a href="' + returnValOrDef(listing.mapUrl, '#') + '" target="_blank"><img src="' + returnValOrDef(hotelData.mapIconUrlMobile, '#') + '" alt="" /></a></span></p>';
        hotelHTML += '</div><div class="col-md-3"><div class="tripadvisor-widget">';
        hotelHTML += '</div></div></div>';
        hotelHTML += '<p class="address">' + joinValsOrDef([listing.country, listing.distance]) + '<span class="hidden-xs"><a href="' + returnValOrDef(listing.mapUrl, '#') + '" target="_blank"><img src="' + returnValOrDef(hotelData.mapIconUrl, '#') + '" alt="" /></a></span></p>';
        hotelHTML += '<p class="summary clamp2Line">' + returnValOrDef(listing.summary) + '</p>';
        hotelHTML += '<a href="' + returnValOrDef(listing.listingUrl, '#') + '" class="btn-txt color-pink">' + returnValOrDef(btnLearnMore) + '</a>';
        hotelHTML += '<div class="check-availability"><a target="_blank" href="' + returnValOrDef(listing.bookingUrl, '#') + '" class="btn-border color-pink">' + returnValOrDef(btnAvailability) + '</a></div>';
        hotelHTML += '</div>';
        hotelList.push(hotelHTML);
      }
    } else {
      var noResults = $('.filter-hotel-listing > .noResults').val();
      hotelHTML = '<div class="col-sm-6 col-sm-push-1 listing-wrapper">';
      hotelHTML += '<h2>' + noResults + '</h2>';
      hotelHTML += '</div>';
      hotelList.push(hotelHTML);
    }

    hotelListWrapper.html(hotelList);
    $('.hotel-image-slider').owlCarousel({
      loop: false,
      navText: [' ', ' '],
      responsiveClass: true,
      items: 1,
      nav: true
    });

    if (totalPage > 1) {
      var paginationHTML = '<nav><ul class="pager">';
      paginationHTML += '<li class="pull-left"><a class="prev" href="#hotel-form">' + returnValOrDef(pagePrevText) + '</a></li>';
        paginationHTML += '<li class="page-num">' + currentPage + ' ' + pageNumText+' ' + totalPage + '</li>';
      paginationHTML += '<li class="pull-right"><a class="next" href="#hotel-form">' + returnValOrDef(pageNextText) + '</a></li>';
      paginationHTML += '</ul></nav>';
      $('#hotel-listing .button-wrapper').show();
      $('#hotel-listing .button-wrapper').html(paginationHTML);

      if (currentPage === 1) {
        $('#hotel-listing .button-wrapper .prev').hide();
      } else {
        $('#hotel-listing .button-wrapper .prev').show();
      }

      if (currentPage === totalPage) {
        $('#hotel-listing .button-wrapper .next').hide();
      } else {
        $('#hotel-listing .button-wrapper .next').show();
      }

    } else {
      $('#hotel-listing .button-wrapper').hide();
    }
  }

  function getParams () {
    var country = Query.get('country'),
        city = Query.get('city')
        area = Query.get('area'),
        type = Query.get('type'),
        isFacet = Query.get('isfacet'),
        suggested = Query.get('suggested'),
        pageNumber = Query.get('pgnum');

    var options = {
      keyword: Query.get('query'),
      orig: Query.get('orig'),
      isFacet: isFacet ? isFacet : false,
      suggested: suggested ? suggested : false,
      type: type ? type : $('.filter-hotel-listing').find('.type').val(),
      pageSize: $('.filter-hotel-listing').find('.pageSize').val(),
      pageNumber: pageNumber ? pageNumber : $('.filter-hotel-listing').find('.pageNumber').val(),
      filters: []
    };

    if (country) options.filters.push({
      name: 'country',
      value: [country]
    });
    if (city) options.filters.push({
      name: 'city',
      value: [city]
    });
    if (area) options.filters.push({
      name: 'area',
      value: [area]
    });

    var params = $.extend({}, options);
    return params;
  }

  $('#refresh').on('click', function(e) {
    e.preventDefault();

    var location = $('#hotel-form').find('.location-filter').selectpicker('val');
    refresh(location);
  });

  $('#hotel-listing').on('click', '.next', function(e) {
    e.preventDefault();
    e.stopPropagation();
    nextPage();
  });

  $('#hotel-listing').on('click', '.prev', function(e) {
    e.preventDefault();
    e.stopPropagation();
    prevPage();
  });

  if (isMobile()) {
    $('#hotel-form .location-filter').on('change', function (e) {
      var location = $(e.target).val();
      refresh(location);
    });
  } else{
	  $('#hotel-form .location-filter').on('change', function (e) {
		var location = $('#hotel-form').find('.location-filter').selectpicker('val');
		refresh(location);
	  });
  }

  if ($('#hotel-form').hasClass('get-listing')) {

    History.Adapter.bind(window, 'statechange', function () {
      
      var params = getParams();
      getListings(params);

      scrollTo();
    });

  }
  
    getListingOnChange = function () {
    //console.log('hi getListingOnChange function');

    var location = $('#hotel-form').find('.location-filter').selectpicker('val');
    refresh(location);
 }

});

$(function () {
  var property = $('input:hidden.listingid');
  if (property && property.length > 0) {
    var id = property.val();
    if (id) {
      var srSelect = $('.sr-marker').find('select');
      if (srSelect && srSelect.length > 0) {
        srSelect.val(id).triggerHandler('change');
      }
    }
  }
});