
(function($){

  // var sPageURL = window.location.search.substring(1),
  //     paramURL = sPageURL.split('&');
  $('.modal-hotels-filter .select-value').on("click",function(){
      var row = $(this).closest('.item-row');
      $(this).closest('.custom-html-select').removeClass('active');

      if(row.hasClass('active')){
          row.removeClass('active');
      }else{
          row.addClass('active').siblings().removeClass('active');

      }


  });

  var hasEventChange = false,
      hasEventPagi = false,
      hasEventUpdatePrice= true;

  //selectBeginHtml($("select.custom-select"));

      //var formpageurl = window.location.protocol + "//" + window.location.host + window.location.pathname;
      var formpageurl =  window.location.href;

      function updatepageurl(url) {
          if (history.pushState) {
              window.history.pushState({path:url},'',url);
          }
      }
      function updateQueryStringParameter(key,value) {
        var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
        var separator = formpageurl.indexOf('?') !== -1 ? "&" : "?";
        if (formpageurl.match(re)) {
          return formpageurl.replace(re, '$1' + key + "=" + value + '$2');
        }
        else {
          return formpageurl + separator + key + "=" + value;
        }
      }
      function removeQueryStringParameter(parameter) {
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


  // END EVENT UPDATE URL


  function insetHtmlHotels(data,listing,currency) {
      var blog = listing.find('.hotels-listing'),
          tx1 = listing.data('viewmoreinclusion'),
          tx2 = listing.data('learnmore'),
          tx3 = listing.data('checkavailable'),
          tx4 = listing.data('loadmore'),oasia=false;
          if(listing.hasClass('oasia-hotels-listing')){
              oasia=true;
          }



      //data = JSON.parse(data);
      //if(update==0){
      blog.html('');
      listing.find('.btn-loadmore').remove();
      listing.find('.page-numbers').remove();
      //}

      $('.section-hotels-listing .result-hotels .count').html(data.totalCount);
      // if(data.totalCount<2) {
      //     $('.section-hotels-listing .result-hotels').hide();
      // }else{
      //     $('.section-hotels-listing .result-hotels').show();
      // }

      $.each(data.listings, function (index, value) {
          var card = '<div class="hotels-card">',
              carousel='';



          if(value.previewImages && value.previewImages.length>0){
              $.each(value.previewImages, function (i, val) {
                  carousel+='<a class="item-carousel" href="'+value.listingUrl+'" ><div class="thumb-56"><img src="'+val.url+'" alt="'+val.title+'" /></div></a>';
              });
          }else{
              carousel +='<a class="item-carousel" href="'+value.listingUrl+'" ><div class="thumb-56"></div></a>';
          }


          card +='<div class="imgs"><div class="previews">';
              if(oasia){
                  card +='<div class="slick-carousel slick-carousel-1 custom-default-nav-carousel">'+carousel+'</div>';
              }else{
                  card +='<div class="owl-carousel owl-carousel-1 custom-default-nav-carousel">'+carousel+'</div>';
              }

              if(value.country){
                  card +='<div class="country">'+value.country+'</div>';
              }
              if(value.ribbon){
                  card +='<div class="ribbon-text">'+value.ribbon+'</div>';
              }
          card +='</div></div>';


          card +='<div class="divtext">';
              card +='<a  href="'+value.listingUrl+'" class="title">'+value.title+'</a>';
              if(value.customiableLabels.length>0){
                  card +='<div class="group-tags">';
                      $.each(value.customiableLabels, function (i, val) {
                          card +='<span>'+val+'</span>';
                      });
                  card +='</div>';
              }

              card +='<div class="group-location">';
                  if(value.tripAdvisorRating)
                      card +='<div class="tripAdvisorRating" >'+value.tripAdvisorRating+'</div>';
                  if(value.mapUrl)
                      card +='<a class="maps" href="'+value.mapUrl+'" target="_blank" ><svg xmlns="http://www.w3.org/2000/svg" width="13.3" height="19" viewBox="0 0 13.3 19"><path id="ic_place_24px" d="M11.65,2A6.645,6.645,0,0,0,5,8.65C5,13.637,11.65,21,11.65,21S18.3,13.637,18.3,8.65A6.645,6.645,0,0,0,11.65,2Zm0,9.025A2.375,2.375,0,1,1,14.025,8.65,2.376,2.376,0,0,1,11.65,11.025Z" transform="translate(-5 -2)"  /></svg>'+data.dictionary.getDirectionText+'</a>';
                  if(value.distanceToCenterCity)
                      card +='<div ><svg xmlns="http://www.w3.org/2000/svg" width="17.5" height="17.5" viewBox="0 0 17.5 17.5"><g id="Group_125681" data-name="Group 125681" transform="translate(-255.75)"><path id="Ellipse_282" data-name="Ellipse 282" d="M5.5,1A4.5,4.5,0,1,0,10,5.5,4.505,4.505,0,0,0,5.5,1m0-1A5.5,5.5,0,1,1,0,5.5,5.5,5.5,0,0,1,5.5,0Z" transform="translate(259 3.25)"/><circle id="Ellipse_283" data-name="Ellipse 283" cx="2.5" cy="2.5" r="2.5" transform="translate(262 6.25)"/><path id="Ellipse_283_-_Outline" data-name="Ellipse 283 - Outline" d="M2.5,1A1.5,1.5,0,1,0,4,2.5,1.5,1.5,0,0,0,2.5,1m0-1A2.5,2.5,0,1,1,0,2.5,2.5,2.5,0,0,1,2.5,0Z" transform="translate(262 6.25)"/><path id="Line_145" data-name="Line 145" d="M.5,3.5h-1V0h1Z" transform="translate(264.5 14)"/><path id="Line_147" data-name="Line 147" d="M.5,3.5h-1V0h1Z" transform="translate(259.25 8.75) rotate(90)"/><path id="Line_148" data-name="Line 148" d="M.5,3.5h-1V0h1Z" transform="translate(273.25 8.75) rotate(90)"/><path id="Line_146" data-name="Line 146" d="M.5,3.5h-1V0h1Z" transform="translate(264.5)"/></g></svg>' + data.dictionary.distanceToCenterText.replace("{0}", value.distanceToCenterCity) +'</div>';

              card +='</div>';


              if(value.summary)
                  card +='<div class="desc" >'+value.summary+'</div>';


              card +='<div class="group-bottom">';

                  if (value.price != 0)
                  {
                      card +='<div class="group-info" >';
                          card +='<div class="text" > '+data.dictionary.fromText+' </div>';
                          card +='<div class="info-tooltip"><svg   data-name="Group 126130" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path id="Path_48966" data-name="Path 48966" d="M8,15a7,7,0,1,1,7-7,7,7,0,0,1-7,7m0,1A8,8,0,1,0,0,8a8,8,0,0,0,8,8"/><path id="Path_48967" data-name="Path 48967" d="M8.93,6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738,3.468c-.194.9.105,1.319.808,1.319A2.071,2.071,0,0,0,8.831,12l.088-.416a1.108,1.108,0,0,1-.686.246c-.275,0-.375-.193-.3-.533ZM9,4.5a1,1,0,1,1-1-1,1,1,0,0,1,1,1"/></svg><div class="content"> <div class="text">'+value.informationRateText+'</div> </div></div>';
                      card +='</div>';

                      card +='';

                      card +='<div class="prices"><div class="number">'+value.price+'</div> <div class="unit">'+currency+''+data.dictionary.perNightText+'</div></div>';
                  }

                  card +='<a href="'+value.bookingUrl+'" class="check-rates" target="_blank">'+data.dictionary.availabilityText+'</a>';
                  card +='<a  href="'+value.listingUrl+'" class="readmore mybtn-1">'+data.dictionary.learnMoreText+'</a>';
              card +='</div>';


          card +='</div>';//divtext
          card +='</div>';//item card



          blog.append(card);

          blog.find('.group-list').each(function(){
              $(this).after(more);
          });

      });

      if(oasia){
          blog.find('.hotels-card .slick-carousel-1:not(.slick-initialized)').each(function(){
              getSlickCarouselHotels($(this));
          });
      }else{
          blog.find('.hotels-card .owl-carousel-1:not(.owl-loaded)').each(function(){
              getCarouselHotels($(this));
          });
      }


      // EVENT loadmore
      // var paging = data.paging;
      // var viewmore = getViewmore(data.totalCount,paging.pageSize,paging.pageNumber,tx4);
      // listing.find('.bottom-listing').append(viewmore);
      // listing.find('.btn-loadmore').on('click',function(){
      //     var current=$(this).data('page');
      //     $(this).remove();
      //     beginHotelsAPI(listing,current,1);
      // });

      //EVENT pagination
      var paging = data.paging;
      var pagination = getPagination(data.totalCount,paging.pageSize,paging.pageNumber);
      listing.find('.bottom-listing').append(pagination);
      listing.find('a.page-number').on('click',function(){
          if(!$(this).closest('.section-hotels-listing').hasClass('loading'))
              onChangePagination($(this),listing)
      });


  }


  // Begin connect API
  $(".section-hotels-listing").each(function(){
      var listing = $(this);
      beginHotelsAPI(listing);

  });



  function beginHotelsAPI(e,currentPage=1,update=0) {
      e.addClass('loading');
      var sPageURL = window.location.search.substring(1),
          lang = $('html').attr('lang'),
          ppp = e.data('desktop'),
          mobile = e.data('mobile'),
          pageid = e.data('pageid'),
          distance = $('.modal-hotels-filter select.list-distance').val(),
          currency = $('.hotels-filter-bar select.list-currencies').val(),
          filters = [
              //{'name': 'distance', 'value': distance}
          ];

      if(!ppp || ppp=='' || ppp=='undefined'){
          ppp=0;
      }
      if(($(window).width()<768) && mobile){
          ppp = mobile;
      }

      var params = {
          //pageId:pageid,
          language:lang,
          pageSize:ppp,
          //type:'blog',
          sortby:$('.hotels-filter-bar select.list-sortby').val(),
          currency:currency,
          itemId:e.data('itemid')
          //filters:[]
      };
      //filters.push({'name': 'distance', 'value': distance});
      sPageURL = sPageURL.split('&');

      $.each(sPageURL, function(i,e){
          e = e.split('=');
          if(e[0]=='page'){
              currentPage = e[1];

          }

          else if(e[0]=='country'||e[0]=='city'||e[0]=='propertyType'||e[0]=='brand'||e[0]=='priceMin'||e[0]=='priceMax'){
              var v = e[1].split(',');
              filters.push({'name': e[0], 'value': v});
              if(hasEventChange||hasEventPagi){
                  return;
              }

              if(e[0]=='city' ||e[0]=='propertyType'||e[0]=='brand') {
                  activeSelectFilter($('select[name="'+e[0]+'"]'),v);
              }


          }else if(e[0]=='distance'){
              var v = e[1].split(',');
              filters.push({'name': e[0], 'value': v});
              if(hasEventChange||hasEventPagi){
                  return;
              }
              activeSelectFilter($('select[name="'+e[0]+'"]'),v);


          }
          else if(e[0]=='currency'||e[0]=='sortby'){
              if(e[0]=='currency'){
                  currency = e[1];
              }
              params[e[0]] = e[1];
              if(hasEventChange||hasEventPagi){
                  return;
              }
              activeSelectFilter($('select[name="'+e[0]+'"]'),e[1]);

          }

      });


      params['pageNumber'] = currentPage;
      params['filters'] = filters;


      //API
      var domain = window.location.origin;
      jQuery.ajax({
          url: domain+'/ajax/propertylisting',
          method: 'POST',
          data: JSON.stringify(params),
          contentType: 'application/json; charset=utf-8'

      }).done(function (response) {
          if(response.totalCount>0){
              e.removeClass('result-emty');
              insetHtmlHotels(response,e,currency);
          }else{
              e.addClass('result-emty');
              e.find('.hotels-listing').html('');
              e.find('.bottom-listing .page-numbers').remove();
              e.find('.result-hotels .count').html('0');
          }

          //RANGE PRICE

          var stepCurrencies,
              currenciesStepArray = [{"currencyCode":"AED","stepValue":10},{"currencyCode":"ALL","stepValue":1000},{"currencyCode":"AMD","stepValue":5000},{"currencyCode":"ANG","stepValue":10},{"currencyCode":"AOA","stepValue":5000},{"currencyCode":"ARS","stepValue":1000},{"currencyCode":"ARS","stepValue":1000},{"currencyCode":"AUD","stepValue":10},{"currencyCode":"AWG","stepValue":10},{"currencyCode":"AZN","stepValue":10},{"currencyCode":"BAM","stepValue":10},{"currencyCode":"BBD","stepValue":10},{"currencyCode":"BDT","stepValue":1000},{"currencyCode":"BGN","stepValue":10},{"currencyCode":"BHD","stepValue":10},{"currencyCode":"BIF","stepValue":10000},{"currencyCode":"BMD","stepValue":10},{"currencyCode":"BND","stepValue":10},{"currencyCode":"BOB","stepValue":50},{"currencyCode":"BRL","stepValue":50},{"currencyCode":"BSD","stepValue":10},{"currencyCode":"BTN","stepValue":1000},{"currencyCode":"BWP","stepValue":100},{"currencyCode":"BYN","stepValue":10},{"currencyCode":"BZD","stepValue":10},{"currencyCode":"CAD","stepValue":10},{"currencyCode":"CDF","stepValue":10000},{"currencyCode":"CHF","stepValue":10},{"currencyCode":"CLP","stepValue":10000},{"currencyCode":"CNY","stepValue":50},{"currencyCode":"COP","stepValue":50000},{"currencyCode":"CRC","stepValue":5000},{"currencyCode":"CUP","stepValue":100},{"currencyCode":"CVE","stepValue":1000},{"currencyCode":"CZK","stepValue":100},{"currencyCode":"DJF","stepValue":1000},{"currencyCode":"DKK","stepValue":50},{"currencyCode":"DOP","stepValue":500},{"currencyCode":"DZD","stepValue":1000},{"currencyCode":"EGP","stepValue":100},{"currencyCode":"ERN","stepValue":100},{"currencyCode":"ETB","stepValue":500},{"currencyCode":"EUR","stepValue":10},{"currencyCode":"FJD","stepValue":10},{"currencyCode":"FKP","stepValue":10},{"currencyCode":"GBP","stepValue":10},{"currencyCode":"GEL","stepValue":10},{"currencyCode":"GHS","stepValue":100},{"currencyCode":"GIP","stepValue":10},{"currencyCode":"GMD","stepValue":500},{"currencyCode":"GNF","stepValue":100000},{"currencyCode":"GTQ","stepValue":100},{"currencyCode":"GYD","stepValue":1000},{"currencyCode":"HKD","stepValue":100},{"currencyCode":"HNL","stepValue":100},{"currencyCode":"HRK","stepValue":50},{"currencyCode":"HTG","stepValue":1000},{"currencyCode":"HUF","stepValue":5000},{"currencyCode":"IDR","stepValue":100000},{"currencyCode":"ILS","stepValue":50},{"currencyCode":"INR","stepValue":1000},{"currencyCode":"IQD","stepValue":10000},{"currencyCode":"IRR","stepValue":500000},{"currencyCode":"ISK","stepValue":1000},{"currencyCode":"JMD","stepValue":1000},{"currencyCode":"JOD","stepValue":10},{"currencyCode":"JPY","stepValue":1000},{"currencyCode":"KES","stepValue":1000},{"currencyCode":"KGS","stepValue":1000},{"currencyCode":"KHR","stepValue":50000},{"currencyCode":"KMF","stepValue":5000},{"currencyCode":"KPW","stepValue":10000},{"currencyCode":"KRW","stepValue":10000},{"currencyCode":"KWD","stepValue":10},{"currencyCode":"KYD","stepValue":10},{"currencyCode":"KZT","stepValue":5000},{"currencyCode":"LAK","stepValue":100000},{"currencyCode":"LBP","stepValue":100000},{"currencyCode":"LKR","stepValue":1000},{"currencyCode":"LRD","stepValue":1000},{"currencyCode":"LSL","stepValue":100},{"currencyCode":"LTL","stepValue":null},{"currencyCode":"LVL","stepValue":null},{"currencyCode":"LYD","stepValue":50},{"currencyCode":"MAD","stepValue":100},{"currencyCode":"MDL","stepValue":100},{"currencyCode":"MGA","stepValue":50000},{"currencyCode":"MKD","stepValue":1000},{"currencyCode":"MMK","stepValue":10000},{"currencyCode":"MNT","stepValue":50000},{"currencyCode":"MOP","stepValue":100},{"currencyCode":"MRO","stepValue":500},{"currencyCode":"MUR","stepValue":500},{"currencyCode":"MVR","stepValue":100},{"currencyCode":"MWK","stepValue":10000},{"currencyCode":"MXN","stepValue":100},{"currencyCode":"MYR","stepValue":10},{"currencyCode":"MZN","stepValue":1000},{"currencyCode":"NAD","stepValue":100},{"currencyCode":"NGN","stepValue":5000},{"currencyCode":"NIO","stepValue":100},{"currencyCode":"NOK","stepValue":100},{"currencyCode":"NPR","stepValue":1000},{"currencyCode":"NZD","stepValue":10},{"currencyCode":"OMR","stepValue":10},{"currencyCode":"PAB","stepValue":10},{"currencyCode":"PEN","stepValue":50},{"currencyCode":"PGK","stepValue":50},{"currencyCode":"PHP","stepValue":100},{"currencyCode":"PKR","stepValue":1000},{"currencyCode":"PLN","stepValue":50},{"currencyCode":"PYG","stepValue":100000},{"currencyCode":"QAR","stepValue":50},{"currencyCode":"RON","stepValue":50},{"currencyCode":"RSD","stepValue":1000},{"currencyCode":"RUB","stepValue":1000},{"currencyCode":"RWF","stepValue":10000},{"currencyCode":"SAR","stepValue":50},{"currencyCode":"SBD","stepValue":100},{"currencyCode":"SCR","stepValue":100},{"currencyCode":"SDG","stepValue":10000},{"currencyCode":"SEK","stepValue":100},{"currencyCode":"SGD","stepValue":10},{"currencyCode":"SHP","stepValue":10},{"currencyCode":"SLL","stepValue":100000},{"currencyCode":"SOS","stepValue":10000},{"currencyCode":"SRD","stepValue":500},{"currencyCode":"STD","stepValue":100000},{"currencyCode":"SVC","stepValue":100},{"currencyCode":"SYP","stepValue":10000},{"currencyCode":"SZL","stepValue":100},{"currencyCode":"THB","stepValue":500},{"currencyCode":"TJS","stepValue":100},{"currencyCode":"TMT","stepValue":50},{"currencyCode":"TND","stepValue":10},{"currencyCode":"TOP","stepValue":10},{"currencyCode":"TRY","stepValue":100},{"currencyCode":"TTD","stepValue":50},{"currencyCode":"TWD","stepValue":100},{"currencyCode":"TZS","stepValue":10000},{"currencyCode":"UAH","stepValue":100},{"currencyCode":"UGX","stepValue":10000},{"currencyCode":"USD","stepValue":10},{"currencyCode":"UYU","stepValue":500},{"currencyCode":"UZS","stepValue":100000},{"currencyCode":"VEF","stepValue":10000000},{"currencyCode":"VND","stepValue":100000},{"currencyCode":"VUV","stepValue":1000},{"currencyCode":"WST","stepValue":10},{"currencyCode":"XAF","stepValue":5000},{"currencyCode":"XCD","stepValue":10},{"currencyCode":"XOF","stepValue":5000},{"currencyCode":"XPF","stepValue":1000},{"currencyCode":"YER","stepValue":1000},{"currencyCode":"ZAR","stepValue":100},{"currencyCode":"ZMW","stepValue":100}];
          for(var i = 0;i<currenciesStepArray.length;i++){
              if(currenciesStepArray[i]['currencyCode']==currency){
                  if(currenciesStepArray[i]['stepValue']){
                      stepCurrencies = currenciesStepArray[i]['stepValue'];
                  }else{
                      stepCurrencies = 1;
                  }
                  //return false;
              }
          }



          var rangePriceFrom = response.priceMin,
              rangePriceTo = response.priceMax,
              url_params = new URLSearchParams(window.location.search); // Get Parameters
          // New or Update RangePrice
          if(url_params.has('priceMin'))
              rangePriceFrom = url_params.get('priceMin');
          if(url_params.has('priceMax'))
              rangePriceTo = url_params.get('priceMax');
          if(hasEventUpdatePrice){
              var range = $('<div class="group-range-prcie"><div class="group-input-price"><span class="unit">'+currency+'</span><input first="1" class="price-input-1"  name="priceMin" class="input " value="" type="text" placeholder="From" data-min="'+response.priceMin+'"  /><span> - </span><span class="unit">'+currency+'</span><input  first="50" class="price-input-2"  name="priceMax" class="input " value="" type="text" placeholder="To"  data-max="'+response.priceMax+'" /></span></div> <span class="price-range-input" data-type="double" data-grid="false" data-postfix="" data-min="'+response.priceMin+'" data-max="'+response.priceMax+'" data-from="'+rangePriceFrom+'" data-to="'+rangePriceTo+'" data-step="'+stepCurrencies+'"></span></div> ');
              $('.wrap-group-range-prcie').html('').append(range);
              beginIonRange($('.wrap-group-range-prcie .group-range-prcie'));
          }
          $.getScript("https://www.tripadvisor.com.sg/WidgetEmbed-socialButtonBubbles", function(){
              if (typeof(window.taValidate) != 'undefined') {
                window.taValidate();
              }
          });

          onChangeUpdateBtn();
          e.removeClass('loading');
      }).fail(function (response) {

          e.addClass('result-emty');
          e.find('.hotels-listing').html('');
          e.find('.bottom-listing .page-numbers').remove();
          e.find('.result-hotels .count').html('0');

          e.removeClass('loading');

          //e.find('.hotels-listing').html('<div style="text-align:center">An error occurred while processing your request.<div>');
          console.log('An error occurred while processing your request.');
      });

  }

  function getPagination(total,pageSize,current) {

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
          html += '<ul class="page-numbers">';
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
  function getViewmore(total,pageSize,current,text) {
      if(pageSize>current) {
          return  '<div data-page="'+(current+1)+'" class="btn-loadmore"><span class="tx">'+text+'</span></div>';
      }
  }
  function getCarouselHotels(e) {
      e.owlCarousel({
          loop: false,
          navText: [' ', ' '],
          dots:false,
          items: 1,
          nav: true
      });
  }
  function getSlickCarouselHotels(e) {
      e.slick({
        dots: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
      });
  }

  //beginIonRange
  function beginIonRange(e) {
      e.each(function () {
          var $wslide = $(this),
              $range = $(this).find(".price-range-input"),
              $input = $(this).find(".price-input-1"),
              $input2 = $(this).find(".price-input-2"),
              instance,
              type = parseInt($range.data('type')),
              grid = parseInt($range.data('grid')),
              min = parseInt($range.data('min')),
              max = parseInt($range.data('max')),
              from = parseInt($range.data('from')),
              to = parseInt($range.data('to')),
              step = parseInt($range.data('step')),
              prefix = parseInt($range.data('prefix')),
              postfix = parseInt($range.data('postfix'));
              //if(!type) { type = 'single';}

          $range.ionRangeSlider({
              type: type,
              grid: grid,
              min: min,
              max: max,
              from: from,
              to: to,
              step: step,

              prefix: prefix,
              postfix: postfix,

              onStart: function(data) {
                  $input.prop("value", formatNumber(data.from));
                  $input2.prop('value', formatNumber(data.to));
              },
              onChange: function(data) {
                  onChangeRange(data.from,data.to,min,max,$input,$input2);
              }
          });
          instance = $range.data("ionRangeSlider");
          $input.on("change ", function() { //keyup
              onChangeInput1($(this),min,max,instance);
          });
          $input2.on("change ", function() { //keyup
              onChangeInput2($(this),min,max,instance);
          });
      });


  }

  function onChangeInput1(input1,min,max,instance) {
      var val1 = input1.val(),
          val2= input1.closest('.group-range-prcie').find('.price-input-2').val();

      val1 = parseInt(val1.replace(/\D+/g, ''));
      val2 = parseInt(val2.replace(/\D+/g, ''));

      if ((val1 < min)  || isNaN(val1) ) {
          val1 = min;
      } else if (val1 > val2) {
          val1 = val2;
      }

      instance.update({
          from: val1,
      });
      onChangeUpdateBtn();
      input1.val(formatNumber(val1));
  }
  function onChangeInput2(input2,min,max,instance) {
      var val2 = input2.val(),
          val1= input2.closest('.group-range-prcie').find('.price-input-1').val();

      val1 = parseInt(val1.replace(/\D+/g, ''));
      val2 = parseInt(val2.replace(/\D+/g, ''));

      if (val2 < val1) {
          val2 = val1;
      } else if ((val2 > max) || isNaN(val2)) {
          val2 = max;
      }
      instance.update({
          to: val2,
      });
      onChangeUpdateBtn();
      input2.val(formatNumber(val2));
  }
  function onChangeRange(from,to,min,max,input,input2) {
      if(from<=min){  from = min;   }
      if(to>=max){   to = max;  }

      input.prop("value", formatNumber(from));
      input2.prop('value', ((to == max) ? formatNumber(max) : formatNumber(to)));
      onChangeUpdateBtn();
  }
  $.each($('.modal-hotels-filter .group-row select'), function(i,e){
      $(this).on("change",function(){
          onChangeUpdateBtn();
      })
  });
  function onChangeUpdateBtn() {
      var change = false,
          select = false,
          inputMin = $('.modal-hotels-filter .price-input-1'),
          priceMin = inputMin.val(),
          min = parseInt(inputMin.data('min')),
          inputMax = $('.modal-hotels-filter .price-input-2'),
          priceMax = inputMax.val(),
          max = parseInt(inputMax.data('max')),
          sPageURL = window.location.search.substring(1),

          priceMin = parseInt(priceMin.replace(/\D+/g, ''));
          priceMax = parseInt(priceMax.replace(/\D+/g, ''));

          $.each($('.modal-hotels-filter .group-row select'), function(i,e){
              var val = $(this).val(),
                  multi = $(this).prop('multiple');
              if(multi){
                  if(val!='' && val!='undefined') select = true;
              }else{
                  if(val!='all' && val !='000') select = true;
              }
          });

          if(select || priceMin>min || priceMax<max){
              change = true;
          }


          sPageURL = sPageURL.split('&');

          $.each(sPageURL, function(i,e){
              e = e.split('=');
              if(e[0]=='country' || e[0]=='city'||e[0]=='brand'||e[0]=='propertyType'){
                  change = true;
                  return;
              }  else if(e[0]=='distance'){
                  if(e[1]!='all') {
                      change = true;
                      return;
                  }
              } else if(e[0]=='priceMin'){
                  if(e[1]!=0){
                      change = true;
                      return;
                  }
              } else if(e[0]=='priceMax'){
                  if(e[1]!=priceMax){
                      change = true;
                      return;
                  }
              }
          })




          if(change){
              $('.modal-hotels-filter .group-action .btn-listing-reset').prop('disabled',false);
              $('.modal-hotels-filter .group-action .btn-listing-api').removeClass('disabled');
          }else{
              $('.modal-hotels-filter .group-action .btn-listing-reset').prop('disabled',true);
              $('.modal-hotels-filter .group-action .btn-listing-api').addClass('disabled');
          }
  }

  //EVENT Filter
  function onChangePagination(e,listing) {
      hasEventPagi = true;
      hasEventUpdatePrice= false;
      var current=e.data('page'),
          top = listing.offset().top;

      if(current==1){
          formpageurl=removeQueryStringParameter('page');
      }else{
          formpageurl=updateQueryStringParameter('page',current);
      }
      updatepageurl(formpageurl);
      beginHotelsAPI(listing);


      $('html, body').animate({
        scrollTop: listing.offset().top - 50
      }, 1000)
  }

  $('.modal-hotels-filter .btn-listing-reset').on("click",function(){

          hasEventChange=false;
          hasEventPagi= false;
          hasEventUpdatePrice= true;

          var arrays = ['propertyType','country','city','brand','priceMin','priceMax','distance'];
          $.each(arrays, function(i,e){
              formpageurl=removeQueryStringParameter(e);
          });
          updatepageurl(formpageurl);
          $.each($('.modal-hotels-filter .custom-html-select select'), function(i,e){
              resetValueMultiSelect($(this));
          });
          var listing = $(this).closest($(".section-hotels-listing"));
          beginHotelsAPI(listing);
          $(this).prop('disabled',true);
          $('.modal-hotels-filter .group-action .btn-listing-api').addClass('disabled');
          $('.modal-hotels-filter select[name="country"]').val([]);
  });




  $('.modal-hotels-filter .btn-listing-api').on("click",function(){
      if(!$(this).hasClass('disabled')){


          hasEventChange=true;
          hasEventPagi= false;
          hasEventUpdatePrice= false;
          $.each($('.modal-hotels-filter select'), function(i,e){
              var name = $(this).attr('name'),
                  val = $(this).val();
              if(val=='000'||val==''){
                  formpageurl=removeQueryStringParameter(name);
              }else{
                  formpageurl=updateQueryStringParameter(name,val);
              }
              updatepageurl(formpageurl);
          });
          formpageurl=removeQueryStringParameter('page');
          updatepageurl(formpageurl);

          $.each($('.modal-hotels-filter .wrap-group-range-prcie input'), function(i,e){
              var name = $(this).attr('name'),
                  val = $(this).val(),
                  first= parseInt($(this).attr('first'));
              if(first==val){
                  formpageurl=removeQueryStringParameter(name);
              }else{
                  formpageurl=updateQueryStringParameter(name,val.replaceAll(',',''));
              }
              updatepageurl(formpageurl);
          });



          var listing = $(this).closest($(".section-hotels-listing"));
          beginHotelsAPI(listing);

          $('#hotel-filter-modal').modal('hide');

          $('html, body').animate({
            scrollTop: listing.offset().top - 50
          }, 1000)

      }

  })

  $(".hotels-filter-bar .custom-select.single-select").each(function() {
      $(this).on("change",function(){
          hasEventChange=true;
          hasEventPagi= false;
          hasEventUpdatePrice= false;

          var name = $(this).attr('name'),
              val = $(this).val();
          formpageurl=updateQueryStringParameter(name,val);
          formpageurl=removeQueryStringParameter('page');

          if($(this).hasClass('list-currencies')){
              hasEventUpdatePrice= true;
              formpageurl=removeQueryStringParameter('priceMin');
              formpageurl=removeQueryStringParameter('priceMax');
          }

          updatepageurl(formpageurl);
          var listing = $(this).closest($(".section-hotels-listing"));
          beginHotelsAPI(listing);
          $('html, body').animate({
            scrollTop: listing.offset().top - 50
          }, 1000)
      })
  });

  function formatNumber(nStr)
  {
      nStr += '';
      x = nStr.split('.');
      x1 = x[0];
      x2 = x.length > 1 ? '.' + x[1] : '';
      var rgx = /(\d+)(\d{3})/;
      while (rgx.test(x1)) {
          x1 = x1.replace(rgx, '$1' + ',' + '$2');
      }
      return x1 + x2;
  }

  $(".modal-hotels-filter .select-city").on("change",function(){
      var select = $(this),
          vals = select.val(),
          array=[];


      $.each(vals, function(i,e){
          var opt = select.find('option[value="'+e+'"]'),
              country = opt.data('country-value');
          if(array.indexOf(country) == -1){
              array.push(country);
          }
          //opt.prop('selected',true);
      });


      $('.modal-hotels-filter select[name="country"]').val(array);
  })

})(jQuery);
