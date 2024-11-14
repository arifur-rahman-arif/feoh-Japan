$(window).on('load', function(){
  // JS page listing
  var eventMeeting = $('.event-recommend');
  var roleSelector = eventMeeting.find('[role="tabpanel"], [role="tablist"] li');
  var formFilter = $('#form_filters');
  var allCheckBoxes = formFilter.find('input[type="checkbox"]');
  var resetButton = formFilter.find('button[type="reset"]');
  var formpageurl =  window.location.href;
  var apiUrlEvent = (window.location.hash && window.location.hash.includes('package')) ? 'packagelisting' : 'venuelisting' || 'venuelisting';
  var apiUrl = "/ajax/" + apiUrlEvent;
  const ulPagination = $('#event-recommend .bottom-listing');
  const { baseUrl, queryParams, hashFragment } = extractUrlParams(window.location.href);
  const searchHash = decodeURIComponent(window.location.hash);
  var desktop = $('#event-recommend').data('desktop'),
  mobile = $('#event-recommend').data('mobile'),
  pageSize = desktop;

  if(!desktop || desktop=='' || desktop=='undefined'){
    pageSize = 0;
  }
  if(($(window).width()<768) && mobile){
    pageSize = mobile;
  }

  var lang = $('html').attr('lang');
  var searchPage = new URLSearchParams(window.location.search).get('page');
  var locationHash = window.location.hash;

  var params = {
      language: lang || 'en',
      pageNumber: searchPage || '1',
      pageSize: pageSize,
      // type: locationHash && locationHash.includes('package') ? 'meetingpackage' : 'meetingvenue' || $(('[role="tablist"] li.active a')).data('eventtype'),
      type: $(('[role="tablist"] li.active a')).data('eventtype') || $(('[role="tablist"] li:first a')).data('eventtype'),
      filters: [
        { name: "hotel", value: [] },
        { name: "capacity", value: [] },
        { name: "roomSetting", value: [] },
        { name: "occasion", value: [] }
      ]
  };

  const callApi = (params, onSuccess, onError) => {
    showLoading();
    $.ajax({
        url: apiUrl,
        method: "POST",
        data: JSON.stringify(params),
        contentType: "application/json",
    })
    .done(onSuccess)
    .fail(onError);
};

  const handleApiSuccess = data => {
    renderTotalCount(data.totalCount);
    renderEventItems(data.results);
    const pagination = getPagination(data.totalCount, data.paging.pageSize, data.paging.pageNumber);
    const listingPagination = eventMeeting.find('.listing-pagingation');

    listingPagination.empty().append(pagination);
    listingPagination.find('a.page-number').off('click').on('click', function() {
        onChangePagination($(this), eventMeeting);
    });
  };

  const handleApiError = (jqXHR, textStatus, errorThrown) => {
      console.log(errorThrown);
  };

  if ($('body').hasClass('venue') || $('body').hasClass('package')) {
    handleNullContent();
    handleEnquiryForm();
  } else{
    if (hashFragment) {
      params.type = hashFragment.replace('#', '') || $(('[role="tablist"] li.active a')).data('eventtype');
      roleSelector.removeClass('active');
      eventMeeting.find(`a[href="${hashFragment}"]`).closest('li').addClass('active');
      eventMeeting.find(`[role="tabpanel"]${hashFragment}`).addClass('in active');
      if (queryParams.page) {
        const pageNumber = queryParams.page;
        params.type = hashFragment.replace('#', '') || $(('[role="tablist"] li.active a')).data('eventtype');
        roleSelector.removeClass('active');
        eventMeeting.find(`a[href="${hashFragment}"]`).closest('li').addClass('active');
        eventMeeting.find(`[role="tabpanel"]${hashFragment}`).addClass('in active');
        loadMeetingByPage(pageNumber);
      } else if (queryParams.hotelid) {
        const hotelId = queryParams.hotelid;
        params.type = hashFragment.replace('#', '') || $(('[role="tablist"] li.active a')).data('eventtype');
        roleSelector.removeClass('active');
        eventMeeting.find(`a[href="${hashFragment}"]`).closest('li').addClass('active');
        eventMeeting.find(`[role="tabpanel"]${hashFragment}`).addClass('in active');
        setTimeout(function () {
          $(`#form_filters .filter-section input[type="checkbox"][value="${hotelId}"]`).prop('checked', true).trigger('change');
        }, 1200);
      } else{
        loadMeetingByPage(1);
      }
    } else {
      callApi(params, data => {
        hideLoading();
        handleApiSuccess(data);
      }, handleApiError);
    }
    const $carousel = $('#carousel-example-generic');
    const carouselHeight = $carousel.outerHeight();

    $carousel.on('click', '.btn-view-360', function() {
      const $thisButton = $(this);
      const roomSauce = $thisButton.data('roomsauce');
      const $parent = $thisButton.closest('#carousel-example-generic');

      if (!$parent.find('.wrap-iframe360').hasClass('loaded')) {
          $carousel.find('.carousel-inner').hide();

          $parent.find('.wrap-iframe360 iframe').attr('src', roomSauce);
          $parent.find('.wrap-iframe360')
              .addClass('loaded')
              .css({
                  'display': 'block',
                  'height': $(window).width() <= 768 ? '100vh' : carouselHeight,
                  'position': 'relative',
              });
          $(".close-three-sixty").fadeIn('slow');
      }
      $parent.addClass('show-iframe');
    });

    $carousel.on('click', '.close-three-sixty', function() {
      const $parent = $(this).closest('#carousel-example-generic');
      $carousel.find('.carousel-inner').fadeIn('slow');
      $parent.find('.wrap-iframe360')
          .removeClass('loaded')
          .css({
              'display': 'none',
              'height': carouselHeight,
              'position': 'absolute',
          });
      $(this).fadeOut('slow');
    });
  }


  $('#event-recommend [role="tablist"] li a').on('click', function(){
    var eventType = $(this).data('eventtype');
    apiUrlEvent = eventType === "meetingvenue" || eventType === "weddingvenue" ? "venuelisting" : "packagelisting";
    // params.type = eventType === "meetingvenue" ? "meetingvenue" : "meetingpackage";
    params.type = eventType;
    params.filters = [
      {
        name: "hotel",
        value: [],
      },
      {
        name: "capacity",
        value: [],
      },
      {
        name: "roomSetting",
        value: [],
      },
      {
        name: "occasion",
        value: [],
      },
    ],
    params.pageNumber = 1;
    formpageurl=removeQueryStringParameter('page');
    updatepageurl(formpageurl);
    formpageurl=removeQueryStringParameter('hotelid');
    updatepageurl(formpageurl);
    var newHash = $(this).attr('href');
    window.history.pushState({}, 'hash', newHash);

    apiUrl = "/ajax/" + apiUrlEvent;
    resetFormFilter();
    showLoading();
    $.ajax({
      url: apiUrl,
      method: "POST",
      data: JSON.stringify(params),
      contentType: "application/json",
    })
      .done(function (data) {
        hideLoading();
        renderTotalCount(data.totalCount);
        renderEventItems(data.results);
        var pagination = getPagination(data.totalCount,data.paging.pageSize,data.paging.pageNumber);
        eventMeeting.find('.listing-pagingation').append(pagination);
        eventMeeting.find('a.page-number').on('click',function(){
          onChangePagination($(this),eventMeeting);
        });

      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        console.log(errorThrown);
      });

  });

  $("#form_filters .filter-section").on("click", "button[type='reset']", function (e) {
    e.preventDefault();
    $('#form_filters form .filter-section label').find('input[type=checkbox]:checked, input[type=radio]:checked').prop('checked', false).trigger('change');
    setTimeout(function () {
      resetFormFilter();
      var newURL = removeSearchParams(window.location.href);
      if (history.replaceState) {
        history.replaceState(null, '', newURL);
      }
    }, 1200);
  });

  $("#form_filters .filter-section").on(
    "click",
    ".icon-hidden-filter",
    function () {
      const _this = $(this),
        filterEle = _this
          .closest(".filter-section")
          .find(".filter-section__wrapper"),
        isVisible = filterEle.is(":visible");

      if (isVisible) {
        _this.text("+");
        filterEle.slideUp("slow");
      } else {
        _this.text("−");
        filterEle.slideDown("slow");
      }
    }
  );

  $("#form_filters .filter-section").on(
    "change",
    "input[type='checkbox']",
    function () {
      const checkedInputs = document.querySelectorAll('#form_filters .filter-section input[type="checkbox"]');
      params.pageNumber = 1;
      formpageurl=removeQueryStringParameter('page');
      updatepageurl(formpageurl);

      var currentCheckbox = $(this);
      $('input[type="checkbox"]').not(currentCheckbox).prop('disabled', true).closest('label').attr('disabled', 'disabled');
      resetButton.prop('disabled', false);

      checkedInputs.forEach(input => {
        const name = input.name;
        const value = input.value;

        const filter = params.filters.find(f => f.name === name);

        if (filter) {
          if (input.checked) {
            if(!filter.value.includes(value)) {
              filter.value.push(value);
            }
          } else {
            filter.value = filter.value.filter(v => v !== value);
          }
        }
      });

      const allFiltersEmpty = params.filters.every(filter => {
        return filter.value.length === 0;
      });

      if (allFiltersEmpty) {
        setTimeout(function () {
          resetFormFilter();
        }, 1000);
      }

      showLoading();
      $('.event-listing-wrapper').css('display','none');
      $.ajax({
        url: apiUrl,
        method: "POST",
        data: JSON.stringify(params),
        contentType: "application/json",
      })
        .done(function (data) {
          hideLoading();
          updateFilter(data.filterData);
          if(data.totalCount === 0){
            let tempCheckedInput = $('#form_filters .filter-section input[type=checkbox]:checked, #form_filters .filter-section input[type=radio]:checked');
            tempCheckedInput.filter(':checked').removeAttr('disabled').closest('label').removeAttr('disabled');
          }
          $('.event-listing-wrapper').css('display','flex');
          renderTotalCount(data.totalCount);
          renderEventItems(data.results);
            var pagination = getPagination(data.totalCount,data.paging.pageSize,data.paging.pageNumber);
            eventMeeting.find('.listing-pagingation').append(pagination);
            eventMeeting.find('a.page-number').on('click',function(){
              onChangePagination($(this),eventMeeting);
            });

        })
        .fail(function (jqXHR, textStatus, errorThrown) {
          console.log(errorThrown);
        });
    }
  );

  function showLoading(){
    // $('#event-recommend .pagination').css('display','none');
    // $('#event-recommend .tab-pane').fadeOut();
    $('#event-recommend .event-list-total .count').fadeOut('slow');
    $('#event-recommend .lds-spinner').css('display','inline-block');
  }

  function hideLoading(){
    $('#event-recommend .lds-spinner').css('display','none');
    // $('#event-recommend .pagination').css('display','flex');
    $('#event-recommend .tab-pane.active').fadeIn('slow');
    $('#event-recommend .event-list-total .count').fadeIn('slow');
  }

  function extractUrlParams(url) {
    const urlObject = new URL(url);

    const queryParams = Object.fromEntries(urlObject.searchParams.entries());
    urlObject.search = '';

    return {
      baseUrl: urlObject.href,
      queryParams: queryParams,
      hashFragment: urlObject.hash,
    };
  }

  function updateFilter(filter){
    var checkboxes = document.querySelectorAll(
      "#form_filters .filter-section input"
    );

    checkboxes.forEach(function (checkbox) {
      var category = checkbox.getAttribute("name");
      var value = checkbox.value;
      if (filter[category] && filter[category].includes(value)) {
        checkbox.disabled = false;
        checkbox.closest("label").removeAttribute("disabled");
      } else {
        checkbox.disabled = true;
        checkbox.closest("label").setAttribute("disabled", "disabled");
      }
    });
  }

  function renderTotalCount(data){
    $('.event-tab-info').find('.count').html(data);
    $('.event-tab-info').find('.countText').html($(('[role="tablist"] li.active a')).data('counttext'));
  }

  function renderEventItems(data) {
    let html = '';
    const sizeTxt = $('#event-recommend').data('size');
    const venueTxt = $('#event-recommend').data('venue');
    const iconHotel = $('#event-recommend').data('hotelicon');
    const learnMore = $('#event-recommend').data('learnmore');

    data.forEach(item => {
      html += `
        <div class="event-item col-md-6 col-sm-6">
          <div class="event-item__wrapper">

            <div class="event-item__thumb">
              <div class="event-item__thumb-slider">
              ${item.previewImages.map(image => `
                <div class="slide">
                  <a href="${item.url}"><img src="${image.url}" alt="${image.alt}"></a>
                </div>
              `).join('')}
              </div>

              ${item.ribbonText ? `
                <div class="event-item__thumb-riboon">
                  ${item.ribbonText}
                </div>
              ` : ''}

            </div>

            <div class="event-item-info">
              <h4 class="event-item__title"><a href="${item.url}">${item.title}</a></h4>
              ${item.hotelName ? `
              <div class="event-item__subtitle"><img src="${iconHotel}" alt="icon hotel"/> ${item.hotelName}${item.venueLocation ? `, ${item.venueLocation}` : ''}</div>
              ` : ''}

              ${
                apiUrlEvent === 'venuelisting' && item.venueSize !== undefined && item.venueSize !== ''
                  ? `<div class="event-item__size">${sizeTxt}: ${item.venueSize}</div>`
                  : item.participatingVenues !== undefined && item.participatingVenues !== ''
                    ? `<div class="event-item__size">${venueTxt}: ${item.participatingVenues}</div>`
                    : ''
              }

              <div class="event-item__desc">${item.summary}</div>
              <div class="event-item__cta btn-primary"><a href="${item.url}">${learnMore}</a></div>
            </div>
          </div>
        </div>
      `;
    });
    $('[role="tabpanel"].active .event-listing-wrapper').html(html);
    $('[role="tabpanel"].active .event-item__thumb-slider').filter(function() {
      return $(this).find('.slide').length > 1;
    }).each(function() {
      $(this).addClass('sliderSlick').slick({
        dots: false,
        arrows: true,
        infinite: false,
        prevArrow: '<div class="slick-prev-wrapper"><button type="button" class="slick-prev"></button></div>',
        nextArrow: '<div class="slick-next-wrapper"><button type="button" class="slick-next"></button></div>',
      });
    });

    if($(window).width() > 991) {
      setTimeout(function () {
        const items = document.querySelectorAll('[role="tabpanel"].active .event-listing-wrapper .event-item');
        let row = [];
        for(let item of items) {
          row.push(item);
          if (row.length === 2) {
            let maxRowHeight = Math.max(...row.map(i => i.offsetHeight));

              row.forEach(item => {
                item.style.height = `${maxRowHeight}px`;
              });
            setTimeout(function () {
              $("#event-recommend .event-item__cta").css({
                'position' : 'absolute',
                'margin' : '0',
                'left' : '15px',
                'bottom' : '15px'
              });
              if(items.length % 2 == 1){
                $(items[items.length - 1]).find('.event-item__cta').css({
                  'position' : 'inherit',
                  'margin-bottom' : '15px',
                  'left' : '0',
                  'bottom' : '0'
                });
              }
            }, 1200);
            row = [];
          }
        }
      }, 1200);
    }
  }

  function updatepageurl(url) {
    if (history.pushState) {
        window.history.pushState({path:url},'',url);
    }
  }

  function updateQueryStringParameter(key, value) {
    var formpageurl = window.location.href;
    var hashIndex = formpageurl.indexOf('#');
    var baseURL = hashIndex !== -1 ? formpageurl.substring(0, hashIndex) : formpageurl;
    var hash = hashIndex !== -1 ? formpageurl.substring(hashIndex) : '';

    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = baseURL.indexOf('?') !== -1 ? "&" : "?";

    if (baseURL.match(re)) {
        baseURL = baseURL.replace(re, '$1' + key + "=" + value + '$2');
    } else {
        baseURL = baseURL + separator + key + "=" + value;
    }

    return baseURL + hash;
  }

  function removeQueryStringParameter(parameter) {
    var formpageurl =  window.location.href;
      var urlparts = formpageurl.split('?');
      if (urlparts.length >= 2) {
          var prefix = encodeURIComponent(parameter) + '=';
          var pars = urlparts[1].split(/[&;]/g);

          //reverse iteration as may be destructive
          for (var i = pars.length; i-- > 0;) {
              //idiom for string.startsWith
              if (pars[i].lastIndexOf(prefix, 0) !== -1) {
                  pars.splice(i, 1);
              }
          }
          formpageurl = urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : "");
          return formpageurl;
      } else {
          return formpageurl;
      }
  }

  function getPagination(total,pageSize,current) {
    ulPagination.empty();
    var html = '',max = 3,sp,pageCount = Math.ceil(total/pageSize);
    if(current < max)
        sp = 1;
    else if(current >= (pageCount - Math.floor(max/2)) ){
        sp = pageCount - max + 1;
    }
    else if(current >= max){
        sp = current  - Math.floor(max/2);
    }
    if(pageCount>1){
        html += '<ul class="page-numbers pagination">';
        if(current>1){
            html +='<li><a class="prev page-number" data-page="'+(current-1)+'" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="10.481" height="10.481" viewBox="0 0 10.481 10.481"><path id="Path_205" data-name="Path 205" d="M7.411,7.411H0v-1H6.411V0h1Z" transform="translate(10.481 5.241) rotate(135)"/></svg></a></li>';
        }

        //If the current page >= max then show link to 1st page
        if( (pageCount  > max ) & current >= max) {
            html +='<li><a class="page-number" data-page="1" href="javascript:void(0)">1</a></li>';
        }
        if(current >= max  & (sp>2)) {
            html +='<li><span  class="page-number   ">...</span></li> ';
        }

        //Loop though max number of pages shown and show links either side equal to $max / 2
        var newFor = sp + (max - 1);

        for(var i = sp; i <= newFor;i++) {
            if(i > pageCount) continue;
            if(current == i) {
                html+='<li class="current  active"><span  class="page-number current  active">'+i+'</span></li>';
            }else{
                html+='<li><a class="page-number sp_'+sp+' max_'+max+'" data-page="'+i+'" href="javascript:void(0)">'+i+'</a></li>';
            }
        }

        if( pageCount > (newFor + 1 )  ) {
            html +='<li><span  class="page-number   ">...</span></li>';
        }
        if( pageCount > newFor  ) {
            html +='<li><a class="page-number " data-page="'+pageCount+'" href="javascript:void(0)">'+pageCount+'</a></li>';
        }

        if(current<pageCount){
            html +='<li><a class="next page-number " data-page="'+(current+1)+'" href="javascript:void(0)"><svg xmlns="http://www.w3.org/2000/svg" width="10.481" height="10.481" viewBox="0 0 10.481 10.481"><path id="Path_204" data-name="Path 204" d="M3822.1,2778.452h-1v-6.411h-6.411v-1h7.411Z" transform="translate(-732.734 -4656.817) rotate(45)" /></svg></a></li>';
        }
        html += '</ul>';
    }

    return html;

  }

  function onChangePagination(e,eventMeeting) {
    hasEventPagi = true;
    hasEventUpdatePrice= false;
    var current=e.data('page'),
        top = eventMeeting.offset().top;

    formpageurl=updateQueryStringParameter('page',current);
    updatepageurl(formpageurl);
    loadMeetingByPage(current);
  }

  function loadMeetingByPage(pageNumber){
    params.pageNumber = pageNumber;
    showLoading();

    //Scroll to tab
    $("html, body").animate({ scrollTop: $('#event-recommend [role="tablist"]').offset().top - 50 }, 1200);
    $.ajax({
      url: apiUrl,
      method: "POST",
      data: JSON.stringify(params),
      contentType: "application/json",
    })
      .done(function (data) {
        hideLoading();
        handleApiSuccess(data);

      })
      .fail(function (jqXHR, textStatus, errorThrown) {
        handleApiError(jqXHR, textStatus, errorThrown);
      });

  }

  function removeSearchParams(url) {
    const urlObject = new URL(url);
    urlObject.search = '';
    return urlObject.href;
  }

  function resetFormFilter(){
    allCheckBoxes.prop('checked', false).removeAttr('disabled').closest('label').removeAttr('disabled');
    resetButton.prop('disabled', true);
  }

  function processHash() {
    var hash = window.location.hash;

    if (hash === "#meetingvenue" || hash === "#meetingpackage" || hash === "#weddingvenue" || hash === "#weddingpackage") {
      $('[role="tablist"] li').removeClass('active');
      $('[role="tablist"] li a[href="' + hash + '"]').closest('li').addClass('active');
      $('[role="tabpanel"]').removeClass('in active');
      $('[role="tabpanel"]' + hash).addClass('in active');
    }
  }

  function handleNullContent() {
    $('.event-item__size--span').each(function() {
      var span = $(this);
      if (span.text().trim() === '') {
        span.closest('.event-item__size').remove();
      }
    });
  }



  function handleEnquiryForm(){
    // Handle Selections
    const $hotelSelect = $('select[data-sc-field-name="Preferred Hotel"]');
    const $packageSelect = $('select[data-sc-field-name="Preferred Package"]');

    $hotelSelect.on('change', function() {
      const selectedHotelId = $(this).val();
      const selectedOption = $(this).find('option:selected');

      $packageSelect.removeClass('disabled-control');
      $packageSelect.val($packageSelect.find('option:first').val());

      if(!selectedHotelId || !selectedOption.attr('value')) {
        $packageSelect.find('option').show();
        return;
      }
      $packageSelect.find('option').each(function() {
        const _option = $(this);

        if(_option.attr('parent-id') === selectedHotelId) {
          _option.show();
        } else {
          _option.hide();
        }
      });
    });
  }

  resetFormFilter();
  processHash();

})
