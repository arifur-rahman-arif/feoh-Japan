$(function () {
  //scrollto
  function scrollTo() {
  		$('html, body').animate({
			scrollTop: $('.press-listing').offset().top -20 
  		}, 500);
  }

  //JSON FOR HOTEL LANDING SEARCH
  var pressData,
      params,
      pageNumber = 1;

  params = getValues();
  getListing(params);


  function getValues() {
	var $pressForm = $('#press-form'),
		  pageSize = $pressForm.find('.pageSize').val();

	return {
		"pageNumber": pageNumber, // can be null
		"pageSize": pageSize,
	};
}


  function getListing(params) {
    
    $.ajax({
     url: '/ajax/news',
     method: 'POST',
     data: JSON.stringify(params),
     contentType: 'application/json; charset=utf-8'
    })
    .done(function( response ) {
      pressData = response;
      updateHTML(pressData);
    });
  }

    function returnValOrDef(val, def) {
      if (!def) def = '';
      if (val) return val;
      return def;
    }

  function updateHTML(pressData) {
  	var btnReadMore = pressData.dictionary.readMoreText,
  		news = pressData.news,
  		newsLength = pressData.news.length,
  		pressListWrapper = $('.press-list'),
  		pressList = [],
  		currentPage = pressData.paging.pageNumber,
  		totalPage = pressData.paging.pageCount;

	for (var i = 0; i < newsLength; i++) {
		var title = news[i].title,
        summary = news[i].summary,
        publishDate = news[i].publishDate,
        newsUrl = news[i].newsUrl;
		var pressHTML = '<div>';
		    pressHTML += '<h4 class="color-pink"><a href="' + returnValOrDef(newsUrl, '#') + '">' + returnValOrDef(title) + '</a></h4>';
        pressHTML += '<p class="date">' + returnValOrDef(publishDate) + '</p>';
        pressHTML += '<p>' + returnValOrDef(summary) + '</p>';
        pressHTML += '<a href="' + returnValOrDef(newsUrl, '#') + '" class="btn-txt color-pink">' + returnValOrDef(btnReadMore) + '</a>';
        pressHTML += '</div>';

		pressList.push(pressHTML);
	}
	pressListWrapper.html(pressList);

	if (totalPage > 1) {
		var paginationHTML = '<nav><ul class="pager">';
		paginationHTML += '<li class="pull-left"><a class="prev" href="#hotel-form">' + pressData.dictionary.pagePrevText + '</a></li>';
		paginationHTML += '<li class="page-num">' + currentPage + ' OF ' + totalPage + '</li>';
		paginationHTML += '<li class="pull-right"><a class="next" href="#hotel-form">' + pressData.dictionary.pageNextText + '</a></li>';
		paginationHTML += '</ul></nav>';
		$('.press-listing .button-wrapper').show();
		$('.press-listing .button-wrapper').html(paginationHTML);

		if (currentPage === 1) {
			$('.press-listing .button-wrapper .prev').hide();
		} else {
			$('.press-listing .button-wrapper .prev').show();
		}

		if (currentPage === totalPage) {
			$('.press-listing .button-wrapper .next').hide();
		} else {
			$('.press-listing .button-wrapper .next').show();
		}

	} else {
		$('.press-listing .button-wrapper').hide();
	}
}

  function updateQueryString(params) {
    var city =  String(params.filters[1].value).split(' ').join('+');
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?query=' + params.query + '&orig=' + params.orig + '&isfacet=' +
                params.isFacet + '&country=' + params.filters[0].value + '&suggested=' + params.suggested + '&type=' + params.type + '&city=' +  city +
                '&ameneties=' + params.filters[2].value + '';
    var decode = decodeURI(newurl);
    window.history.pushState({path:decode},'',decode);
  }

  function nextPage() {
    params =  getValues();

    pageNumber++;
    params.pageNumber = pageNumber;
    getListing(params);
    scrollTo();
  }

  function prevPage() {
    params =  getValues();

    pageNumber--;
    params.pageNumber = pageNumber;
    getListing(params);
    scrollTo();
  }

  $('.press-listing').on('click', '.next', function(e) {
    e.preventDefault();
    nextPage();
    // alert('oi');
  });

  $('.press-listing').on('click', '.prev', function(e) {
    e.preventDefault();
    e.stopPropagation();
    prevPage();
  });

});
