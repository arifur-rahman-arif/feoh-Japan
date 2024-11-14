(function ($, window) {
  'use strict';

  window.onLinkParamLoaded = ko.observable();

  function propertyVm (params) {

    var self = this;

    self.params = params;

    self.loaded = ko.observable(false);
    self.linkParam = ko.observable('');
    self.id = ko.observable();
    self.url = ko.observable();
    self.title = ko.observable();
    self.city = ko.observable();
    self.country = ko.observable();

    self.locations = ko.observableArray();
    self.properties = ko.observableArray();

    self.propertyArray = [];

    self.config = ko.observable();
    self.dictionary = ko.observable();

    self.header = ko.observable();
    self.itemRenderings = ko.observableArray();
    self.footer = ko.observable();

    self.renderingsCount = ko.observable(0);
    self.renderedCount = ko.observable(0);
    self.amenities = ko.observableArray();
    self.activeAmenity = ko.observable();
    self.selectedLocation = ko.observable();
    self.selectedProperty = ko.observable();
    self.selectedCheckIn = ko.observable();
    self.selectedCheckOut = ko.observable();
    self.hasError = ko.observable(false);
    self.errorMessage = ko.observable();
    self.widgetInit = ko.observable(false);

    self.promotionBar = ko.observable();

    self.availableComponents = [
      'Carousel',
      'Listing',
      'ScrollContainer',
      'HighlightContainer',
      'RoomsContainer',
      'DealHighlight',
      'AmenitiesContainer',
      'SocialWidgetContainer',
      'POIContainer',
      'StaticListingsContainer',
      'StaticArticlesContainer'
    ];

    addMembersToCheckIn(self.selectedCheckIn);
    addMembersToCheckOut(self.selectedCheckOut);

    self.init();

    self.title.subscribe(function (value) {
      document.title = value;
    });

    self.selectedLocation.subscribe(function (value) {
      if (!value) return;
      if (!self.propertyArray || self.propertyArray.length === 0) return;

      var parts = value.split(', ');
      var cityGroup;
      for (var i = 0, l = self.propertyArray.length; i < l; i++) {
        var group = self.propertyArray[i];
        if (group.name !== parts[1]) continue;
        cityGroup = group.cities;
      }

      if (!cityGroup) return;
      for (var i = 0, l = cityGroup.length; i < l; i++) {
        var group = cityGroup[i];
        if (group.name !== parts[0]) continue;
        self.properties(group.grouping);
      }

      if (!self.widgetInit()) return;
      self.properties.open();
    });

    self.properties.changed = function (e) {
      if (!self.widgetInit()) return;
      self.selectedCheckIn.show();
    };

    self.selectedCheckIn.subscribe(function (value) {
      if (!value) return;
      if (!self.widgetInit()) return;
      self.selectedCheckOut.show();
    });

    self.loaded.subscribe(function (value) {
      if (!value) {
        $.blockUI({ message: null });
      } else {
        $.unblockUI();
      }
    });

    window.onLinkParamLoaded.subscribe(function (value) {
      self.linkParam(value);
    });
  }

  propertyVm.prototype.componentExists = function (name) {
    var self = this;
    return self.availableComponents.indexOf(name) > -1;
  }

  propertyVm.prototype.init = function () {
    var self = this;

    self.promotionBar({});


    sfe.services.property
      .get(self.params.id)
      .done(function (data) {
        self.loaded(true);
        self.id(data.id);
        self.url(data.url);
        self.title(data.title);
        self.city(data.city);
        self.country(data.country);
        self.locations(data.locations);
        self.propertyArray = data.properties;

        self.config(data.config);
        self.dictionary(data.dictionary);

        self.addMembersToHeader(data.header);
        self.header(data.header);

        self.countRenderings(data.itemRenderings);
        self.addAfterRender(data.itemRenderings);
        self.addMembersToAmenities(data.itemRenderings);
        self.itemRenderings(data.itemRenderings);

        self.footer(data.footer);

        /**
         * Model for Promotion Bar,
         * change the static/hard coded content,
         * to its respective dynamic content from this API response
        **/
//        self.promotionBar({
//          "backgroundColor": "#00af73",
//          "mainContent": '<p><a href="">Mid Year Mega Sale now on - unlock up to 45% OFF now!</a></p>'
//        });
        self.promotionBar({
          "backgroundColor": data.header.promotionBar.backgroundColor,
          "mainContent": data.header.promotionBar.mainContent
        });
        /**
         * Invoke promobar render handler for
         * the events
        **/
        self.promoBarRendered();
      });
  };

  propertyVm.prototype.checkAvailability = function (root) {
    var location = root.selectedLocation();
    var property = root.selectedProperty();
    var checkIn = root.selectedCheckIn();
    var checkOut = root.selectedCheckOut();

    root.hasError(false);
    root.errorMessage('');

    if (!location || !property || !checkIn || !checkOut) {
      root.hasError(true);
      root.errorMessage('Please select all required.');
      return false;
    }

    if (checkIn && checkOut) {
      var selectedProperty;
      ko.utils.arrayForEach(root.properties(), function (grouping) {
        ko.utils.arrayForEach(grouping.items, function (item) {
          if (item.id === property) selectedProperty = item;
        });
      });
      if (selectedProperty) {
        var checkInValue = new Date(checkIn).getTime();
        var checkOutValue = new Date(checkOut).getTime();
        var total = checkOutValue - checkInValue;
        if (total < 86400000 * selectedProperty.mindays) {
          root.hasError(true);
          root.errorMessage('Minimum ' + selectedProperty.mindays + ' nights required.');
          return false;
        }
      }
    }
    return true;
  };

  propertyVm.prototype.promoBarRendered = function(){
      // console.log('promobar render invoke');
      promobar();
    function promobar(){
        //PROMOTION BAR
        var promotionBar = $('.promotion-bar');
        if(promotionBar.length > 0){
          // console.log('has promotion ', promotionBar);
          $( "#announcement-container, #announcement-triangle" ).hide();
          $('body').addClass('hasPromotionBar');


          calculatePromotionBar(promotionBar);

          promotionBar.find('.promotion-close').on('click', function(){
            var elem = $(this);
            noPromotionBarReset();
            elem.parent().remove();
          });

           $(window).resize(function(){
               // console.log('resizing..');
            if($('.promotion-bar').length > 0){
              // console.log('with promobar');
              debounce(calculatePromotionBar(promotionBar), 300);
            }else{
              // console.log('without promobar');
              debounce(noPromotionBarReset(), 300);
            }
          });
      }else{
          // console.log('no promotion');
          noPromotionBarReset();
        }

        function calculatePromotionBar(promotionBar){
          var pb_height = promotionBar.outerHeight() !== 0 ? promotionBar.outerHeight() : 50;

          var nav_height = $('nav.navbar').outerHeight();

          var pb_bgcolor = promotionBar.attr('data-bgcolor');
          // console.log(pb_height);

          promotionBar.css('backgroundColor', pb_bgcolor);
          $('nav.navbar').css('top', pb_height + 'px');
          $('.menu-burger').css('top', pb_height + 'px');
          $('.static-content').css('marginTop', (nav_height + pb_height) + 'px');

          $('#announcement-container').css('top', (nav_height + pb_height ) + 'px')
          $('.widget').css('top', (nav_height + pb_height ) + 'px');
          $('.breadcrumb-container').css('top', (nav_height + pb_height ) + 'px');
        }

        function noPromotionBarReset(){
          //console.log('resetting')
          $('body').removeClass('hasPromotionBar');
          $('.menu-burger').css('top', '0px');
          $('#announcement-container').css('top', '50px');
          $('.widget').css('top', '50px');
          $('.breadcrumb-container').css('top', '50px');
            $('nav.navbar').css('top', '0px');
          $('.static-content').css('marginTop', '50px');
        }



        function debounce(func, wait, immediate) {
          var timeout;
          return function() {
              var context = this,
                  args = arguments;
              var later = function() {
                  timeout = null;
                  if (immediate) {
                      func.apply(context, args);
                  };
                  var callNow = immediate && !timeout;
                  clearTimeout(timeout);
                  timeout = setTimeout(later, wait);
                  if (callNow) {
                      func.apply(context, args);
                  }
              }
          }
        }





        //END PROMOTION BAR
        //
        ////MENU TRANSFORM
        $('.menu-burger').on('click', function(e){
          var $this = $(this),
              content = $('.menu-burger li p a');

          e.preventDefault();
          $this.toggleClass('open');
          $this.find('.burger-bar').toggleClass('open');
          $('.promotion-bar').toggleClass('menu-opened');

          if ( $('body').hasClass('menu-open') ) {
            $('.overlay-menu').fadeOut('slow');
              $('body').removeClass('menu-open');
          } else {
            $('.overlay-menu').fadeIn('slow');
            $('body').addClass('menu-open');
          }
        });
    }
  }

  propertyVm.prototype.onHeaderRendered = function (elements, data, root) {

    initHeaderDropdown();
    initIataField();
    initCalendarIcons();








    function initHeaderDropdown() {
      ko.utils.arrayForEach(root.locations(), function (location) {
        if (location.name === root.city() && location.value === root.country()) {
          var value = location.name + ', ' + location.value;
          root.locations.change(value);
          root.selectedLocation(value);
        }
      });

      var id = root.id().toUpperCase();
      root.properties.change(id);
      root.selectedProperty(id);

      root.widgetInit(true);
    }

    function initIataField () {
      $(elements).find('.promo.label').on('click', function(e) {
        e.preventDefault();
        $(this).hide();
        $('.input-wrapper').fadeIn();
      });

      $(elements).find('.promo.close-btn').on('click', function(e) {
        e.preventDefault();
        $('.input-wrapper').hide();
        $('.promo.label').fadeIn();
      });
    }

    function initCalendarIcons () {
      $(elements).find('.glyphicon-calendar').click(function () {
        var self = $(this);
        var target = self.prev();
        if (!target)
          return;

        $(target).datepicker('show');
      });
    }


  };

  propertyVm.prototype.onForEachRendered = function (elements, data, root) {
    root.renderedCount(root.renderedCount() + 1);
    if (root.renderedCount() !== root.renderingsCount()) return;

    initBookingWidgetScroller();
    initScrollerBtn();

    // Hack!!!
    $('#ta-ratings').html($('#ta-ratings-temp').html());
  };

  propertyVm.prototype.countRenderings = function (itemRenderings) {
    var self = this;
    self.renderingsCount(self.renderingsCount() + itemRenderings.length);

    for (var i = 0, l = itemRenderings.length; i < l; i++) {
      var rendering = itemRenderings[i];
      if (rendering.childRenderings && rendering.childRenderings.length > 0)
        self.countRenderings(rendering.childRenderings);
    }
  };

  propertyVm.prototype.addAfterRender = function (itemRenderings) {
    var self = this;

    for (var i = 0, l = itemRenderings.length; i < l; i++) {
      var rendering = itemRenderings[i];
      var onRendered = self.afterRenderDictionary[rendering.name];
      if (!onRendered)
        onRendered = function () {
        };
      rendering.onRendered = onRendered;
      if (rendering.childRenderings && rendering.childRenderings.length > 0)
        self.addAfterRender(rendering.childRenderings);
    }
  };

  propertyVm.prototype.addMembersToHeader = function (header) {
    var self = this;

    header.isOpen = ko.observable(false);
    header.openMenu = function (data, e) {

      header.isOpen(!header.isOpen());

      if ( $('body').hasClass('menu-open') ) {
        $('.overlay-menu').fadeOut('slow');
        $('body').removeClass('menu-open');
      } else {
        $('.overlay-menu').fadeIn('slow');
        $('body').addClass('menu-open');
      }
    };

    header.openWidget = function (data, e) {
      $('.widget').slideToggle();
      $('body').toggleClass('widget-open');
    };

    header.languages.changed = function (data, e) {
      var $element = $(e.target);
      var language = $element.selectpicker('val');

      var parts = self.url().split('/');
      var url = parts.slice(2).join('/');

      self.url('/' + language + '/' + url);
      $element.closest('form')[0].submit();
    }
  };

  propertyVm.prototype.addMembersToAmenities = function (itemRenderings) {
    var self = this;
    for (var i = 0, l = itemRenderings.length; i < l; i++) {
      var rendering = itemRenderings[i];
      if (rendering.name !== 'AmenitiesContainer') {
        if (rendering.childRenderings && rendering.childRenderings.length > 0) {
          self.addMembersToAmenities(rendering.childRenderings);
        }
        continue;
      }

      var amenities = rendering.data.allAmenities;
      for (var j = 0, k = amenities.length; j < k; j++) {
        var amenity = amenities[j];
        if (j === 0) {
          amenity.active = ko.observable(true);
        } else {
          amenity.active = ko.observable(false);
        }

        amenity.stopVideo = function () {
          if (this.player) {
            this.player.stopVideo();
            this.player.destroy();
          }
        };

        amenity.show360 = function () {
          if (self.isMobile()) {
            $('.gallery-image').children().fadeOut();
            $('.landscape-mode-msg').show();
            setTimeout(function(){
              $('.landscape-mode-msg').hide();
              $('.map-canvas').fadeIn().find('iframe').attr('src', this.tourUrl);
              $('.close-btn').fadeIn();
            }, 2000);
          } else {
            $('.gallery-image').children().fadeOut();
            $('.map-canvas').fadeIn().find('iframe').attr('src', this.tourUrl);
            $('.close-btn').fadeIn();
          }

          this.stopVideo();
        };

        amenity.closeCurrentDisplay = function () {
          $('.gallery-image').children().fadeOut();
          $('.gallery-image img').fadeIn();
        };

        amenity.playYoutubeVideo = function () {
          var am = this;

          $('.gallery-image').children().fadeOut();
          $('.close-btn').fadeIn();
          $('.youtube').fadeIn();

          this.player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: am.videoId,
            playerVars: {
              controls: 0,
              autoplay: 1,
              rel: 0,
              showinfo: 0
            },
            events: {
              onReady: function (e) {
                e.target.playVideo();
              },
              onStateChange: function (e) {
                if (event.data === 0) {
                  am.stopVideo();
                }

                var $thumbnails = $('.gallery-carousel .item a');
                $thumbnails.on('click', am.stopVideo);

                var $closeBtn = $('.gallery-image .close-btn');
                $closeBtn.on('click', am.stopVideo);
              }
            }
          });
        };
      }
    }
  };

  propertyVm.prototype.groupElements = function (elements, countInGroup) {
    var groupings = [];
    for (var i = 0, l = elements.length; i < l; i += countInGroup) {
      var end = i + countInGroup;
      var group = elements.slice(i, end);
      if (group && group.length > 0)
        groupings.push({
          key: i,
          group: group
        });
      else
        break;
    }
    return groupings;
  };

  propertyVm.prototype.limitElements = function (elements, maxNumber) {
    if (!elements || elements.length < maxNumber)
      return elements;

    return elements.slice(0, maxNumber);
  }

  propertyVm.prototype.take = function (elements, count) {
    return elements.slice(0, count);
  };
  propertyVm.prototype.onForEachAmenityRendered = function (elements, data, root) {
    root.amenities.push(data);
    if (!root.activeAmenity()) {
      root.activeAmenity(data);
    }
  };

  propertyVm.prototype.updateActiveAmenity = function (data, e, root) {
    ko.utils.arrayForEach(root.amenities(), function (amenity) {
      amenity.active(false);
    });
    data.active(true);
    root.activeAmenity(data);
  };

  propertyVm.prototype.afterRenderDictionary = {
    Carousel: function (elements, data, index) {
      initBootstrapCarousel($(elements).find('.carousel'));
    },
    Listing: function (elements, data, index) {
      initBtnCollapse($(elements).find('.btn-collapse'));
    },
    AmenitiesContainer: function (elements, data, index) {
      initBtnCollapse($(elements).find('.btn-collapse'));

      $(elements).find('.gallery-carousel').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        navText: [' ', ' '],
        responsive: {
            0: {
                items: 3
            },
            600: {
                items: 3
            },
            1000: {
                items: 6
            }
        }
      });
    },
    RoomsContainer: function (elements, data, index) {
      var $elements = $(elements);

      initRoomsOwlCarousel($elements);
      initRoomsGoogleMapView($elements);
    },
    DealHighlight: function (elements, data, index) {
      initBootstrapCarousel($(elements).find('.carousel'));
    }
  };

  propertyVm.prototype.prependOrigin = function (url) {
    if (!url)
      return '';
    return this.params.origin + url;
  };

  propertyVm.prototype.isMobile = function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  };

  function addMembersToCheckIn (selectedCheckIn) {
    selectedCheckIn.getOptions = function () {
      return {
        minDate:  0,
        numberOfMonths: 2,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        firstDay: 1,
        changeFirstDay: false,
        beforeShowDay: function(date) {
          try {
            var checkin = $.datepicker.parseDate( "d MM yy", $(".checkin-date").val());
            var checkout = $.datepicker.parseDate( "d MM yy", $(".checkout-date").val());
          } catch (ex) {
            return [true];
          }

          var classes="";

          if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
              classes+="date-highlight";
          }

          if((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
            classes+=" active";
          }

          return [true, classes];

        },
        onClose: function( selectedDate ) {
          if (!selectedDate) {
          } else {
            $( ".checkout-date" ).datepicker( "option", "minDate", selectedDate);
          }
        }
      }
    };
  };

  function addMembersToCheckOut (selectedCheckOut) {
    selectedCheckOut.getOptions = function () {
      return {
        minDate: 0,
        numberOfMonths: 2,
        autoSize: true,
        prevText: " ",
        nextText: " ",
        dateFormat: "d MM yy",
        beforeShowDay: function(date) {
          try {
            var checkin = $.datepicker.parseDate( "d MM yy", $(".checkin-date").val());
            var checkout = $.datepicker.parseDate( "d MM yy", $(".checkout-date").val());
          } catch (ex) {
            return [true];
          }

          var classes="";

          if (checkin && ((date.getTime() == checkin.getTime()) || (checkout && date >= checkin && date <= checkout))) {
              classes+="date-highlight";
          }
          if((checkin && date.getTime() == checkin.getTime()) || (checkout && date.getTime() == checkout.getTime())) {
            classes+=" active";
          }

          return [true, classes];
        }
      }
    };
  };

  // Helper functions
  function initBootstrapCarousel ($element) {
    $element.carousel({
      interval: 5000,
      keyboard: true
    });
  }

  function initBtnCollapse ($element) {
    $element.on('click', function() {
      $(this).parent().parent().find('.content-collapse').slideToggle('slow');
      if ($(this).find('span').hasClass('glyphicon-menu-down') || $(this).find('span').hasClass('glyphicon-menu-up')) {
        if ($(this).hasClass('more')) {
          $(this).next().show();
          $(this).hide();
        } else if ($(this).hasClass('less')) {
          $(this).prev().show();
          $(this).hide();
        } else {
          $(this).find('span').toggleClass('glyphicon-menu-down glyphicon-menu-up');
        }
      } else {
        var icontxt = $(this).find('span').text();
        if (icontxt == '+' && $(this).hasClass('more')) {
          $(this).html('<span>-</span> Read less');
        } else if (icontxt == '-' && $(this).hasClass('less')){
          $(this).html('<span>+</span> Read more');
        } else if (icontxt == '+') {
          $(this).find('span').text('-');
        } else {
          $(this).find('span').text('+');
        }
      }
    });
  }

  // function initBookingWidgetScroller () {
  //   var controller = new ScrollMagic.Controller();
  //   var pin = new ScrollMagic.Scene({
  //     triggerElement: ".our-room",
  //     triggerHook: 'onLeave',
  //     duration: $('.pin-duration').height()
  //   }).on("enter", function (event) {
  //     $('.widget').fadeIn();
  //     $('body').addClass('widget-open');
  //   }).on("leave", function (event) {
  //     $('.widget').fadeOut();
  //     $('body').removeClass('widget-open');
  //   }).addTo(controller);
  // }

  function initScrollerBtn () {
    var controller = new ScrollMagic.Controller();
    var pinBottom = new ScrollMagic.Scene({
      triggerElement: ".pin-bottom",
      triggerHook: 'onEnter',
      offset: 48,
      duration: $('.pin-bottom-duration').height()
    }).setPin(".pin-bottom", {
      pushFollowers: false
    }).on("enter", function (event) {
      $('.pin-bottom').fadeIn();
    }).on("leave", function (event) {
      $('.pin-bottom').hide();
    }).addTo(controller);
  }

  function initRoomsOwlCarousel ($elements) {
    $elements.find('.hotel-image-slider').owlCarousel({
      loop: false,
      margin: 15,
      navText: [ ' ', ' ' ],
      responsiveClass: true,
      items: 1,
      nav: true
    });
  }

  function initRoomsGoogleMapView ($elements) {
    $elements.find('.view-room').on('click', function (e) {
      e.preventDefault();

      var roomSauce = $(this).data('roomsauce'),
        roomMapWrapper = $(this).parents().find('.room-pano'),
        roomIframe = '<iframe src="'+ roomSauce +'" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>';

      if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        $elements.find('.landscape-mode-msg').show();
        setTimeout(function () {
          $elements.find('.landscape-mode-msg').hide();
          roomMapWrapper.html(roomIframe).addClass('active').fadeIn();
        }, 2000);
      } else {
        roomMapWrapper.html(roomIframe).addClass('active').fadeIn();
      }

      $elements.find('.close-room-pano').fadeIn();
    });

    $elements.find('.close-room-pano').on('click', function (e) {
      e.preventDefault();

      $elements.find('.room-pano.active').removeClass('active').fadeOut();
      $elements.find('.close-room-pano').fadeOut();
    });
  }

  $(function () {
    $.blockUI({ message: null });
    ko.applyBindings(new propertyVm(params));
  });

})(jQuery, window);
