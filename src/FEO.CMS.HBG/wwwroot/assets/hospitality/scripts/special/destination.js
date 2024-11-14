(function ($) {
    var countries = REGCONFIG.countries;
    var cities = REGCONFIG.cities;
    var seeAllPropertyUrl = REGCONFIG.seeAllPropertyUrl;
    var lat = REGCONFIG.lat;
    var long = REGCONFIG.long;
    var desktopZoomLevel = REGCONFIG.desktopZoomLevel;
    var tabletZoomLevel = REGCONFIG.tabletZoomLevel;
    var mobileZoomLevel = REGCONFIG.mobileZoomLevel;
    var propertyText = REGCONFIG.propertyText;
    var propertiesText = REGCONFIG.propertiesText;
    var cityText = REGCONFIG.cityText;
    var citiesText = REGCONFIG.citiesText;
    var cityIconSrc = REGCONFIG.cityIconSrc;
    var dragMessageIconSrc = REGCONFIG.dragMessageIconSrc;

    var closeInfoWindowAndResetMap;
    var showCityCountrySpecificMarkers;
    var resetMarkers;
    var removeCityMarkers;
    // var markerCity;
    var markers = [];
    var removeCountryIcon;
    var showClickAndDragMarker;
    var hideClickAndDragMarker;
    var markerBanner;

    var destinationCarousel = $('.destination-carousel');
    destinationCarousel.owlCarousel({
        loop: false,
        margin: 16,
        responsiveClass: true,
        navText: [' ', ' '],
        responsive: {
            0: { items: 2, nav: false, margin: 14, stagePadding: 15 },
            767: { items: 4, nav: true, margin: 14 },
            1024: { items: 6, nav: true, loop: false }

        }
    });

    function centerListItem() {
        if ($(window).width() >= 1024) {
            if ($('.destination-carousel .owl-item:visible').length < 6) {
                $('.country-name, .seeall-properties').css('text-align', 'center');
            } else {
                $('.country-name, .seeall-properties').removeAttr("style");
            }
        }
        if ($(window).width() <= 1023) {
            if ($('.destination-carousel .owl-item:visible').length < 2) {
                $('.country-name, .seeall-properties').css('text-align', 'center');
                $('.owl-item').css('margin-left', '14px')
            } else {
                $('.country-name, .seeall-properties').removeAttr("style");
                $('.owl-item').css('margin-left', '0')
            }
        }
    }
    centerListItem();

    function setMapHeight() {
        setTimeout(function () {
            var w = $(window).height(),
                n = $('.navbar.navbar-default').height(),
                o = $('.owl-carousel.owl-loaded').height();
            var h = w - (o + n);
            $('#destinationMap').css('height', h);

        }, 1000);
    }
    setMapHeight();

    $(window).resize(function () {
        centerListItem();
        setMapHeight();
    });

    function showCityCountrySpecificList(CountryName, CountryScId) {
        const url = seeAllPropertyUrl;
        $('#reset-state').show();
        $('.country-name').text(CountryName).show();

        //$('.destination-wrap').each(function (i) {
        //    if ($(this).attr('data-CountryScId') == CountryScId) {
        //        $(this).show();
        //    }
        //    else { $(this).hide();}
        //});

        var itemLength = $('.destination-carousel div.owl-item').length;
        for (var i = 0; i < itemLength; i++) {
            destinationCarousel.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
        }

        $.each(cities, function (i, val) {
            if (val.CountryScId === CountryScId) {
                const NoOfPropertiesInCity = val.NoOfPropertiesInCity;
                const PropertyText = NoOfPropertiesInCity == 1 ? propertyText : propertiesText
                const NoOfPropertiesInCityWithPropertyText = NoOfPropertiesInCity + " " + PropertyText;

                const html = '<div class="destination-wrap" data-CountryScId="' + val.CountryScId + '"><a target="_blank" href="' + url + '?country=' + CountryName + '&city=' + val.name + '"><img src="' + val.ThumbnailSrc + '" alt="" /><div class="destination-content-wrap"><div class="destination-content"><div class="location">' + val.name + '</div><div class="property-count">' + NoOfPropertiesInCityWithPropertyText + '</div></div></div></a><p>' + val.description + '</p></div>';

                destinationCarousel.trigger('add.owl.carousel', [$(html)]).trigger('refresh.owl.carousel');
            }
        });
        centerListItem();
    }
    function filterCity(CityScId) {
        const url = seeAllPropertyUrl;
        var itemLength = $('.destination-carousel div.owl-item').length;
        for (var i = 0; i < itemLength; i++) {
            destinationCarousel.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
        }

        $.each(cities, function (i, val) {
            if (val.CityScId === CityScId) {
                const NoOfPropertiesInCity = val.NoOfPropertiesInCity;
                const PropertyText = NoOfPropertiesInCity == 1 ? propertyText : propertiesText
                const NoOfPropertiesInCityWithPropertyText = NoOfPropertiesInCity + " " + PropertyText;

                const html = '<div class="destination-wrap" data-CountryScId="' + val.CountryScId + '"><a target="_blank" href="' + url + '?country=' + val.CountryName + '&city=' + val.name + '"><img src="' + val.ThumbnailSrc + '" alt="" /><div class="destination-content-wrap"><div class="destination-content"><div class="location">' + val.name + '</div><div class="property-count">' + NoOfPropertiesInCityWithPropertyText + '</div></div></div></a><p>' + val.description + '</p></div>';

                destinationCarousel.trigger('add.owl.carousel', [$(html)]).trigger('refresh.owl.carousel');
            }
        });
        centerListItem();
    }

    function updateCityCountrySpecificLink(CountryName, CountryScId) {
        var newLink = seeAllPropertyUrl + "?country=" + CountryName;
        $('.seeall-properties a').attr("href", newLink);
    }

    $('#reset-state').on('click', function (ev) {
        closeInfoWindowAndResetMap();
        showClickAndDragMarker();
        const url = seeAllPropertyUrl;
        $(this).hide();

        //$('.destination-wrap').each(function (i, val) {
        //    $(this).show();
        //});

        var itemLength = $('.destination-carousel div.owl-item').length;
        for (var i = 0; i < itemLength; i++) {
            destinationCarousel.trigger('remove.owl.carousel', [i]).trigger('refresh.owl.carousel');
        }

        $.each(cities, function (i, val) {
            const NoOfPropertiesInCity = val.NoOfPropertiesInCity;
            const PropertyText = NoOfPropertiesInCity == 1 ? propertyText : propertiesText
            const NoOfPropertiesInCityWithPropertyText = NoOfPropertiesInCity + " " + PropertyText;

            var html = '<div class="destination-wrap" data-CountryScId="' + val.CountryScId + '"><a target="_blank" href="' + url + '?country=' + val.CountryName + '&city=' + val.name + '"><img src="' + val.ThumbnailSrc + '" alt="" /><div class="destination-content-wrap"><div class="destination-content"><div class="location">' + val.name + '</div><div class="property-count">' + NoOfPropertiesInCityWithPropertyText + '</div></div></div></a><p>' + val.description + '</p></div>';

            destinationCarousel.trigger('add.owl.carousel', [$(html)]).trigger('refresh.owl.carousel');
        });
        centerListItem();
        $('div.country-name').hide();
        $('.seeall-properties a').attr("href", url);
    });

    function initMap() {
        const map = new google.maps.Map(document.getElementById('destinationMap'), {
            zoom: parseInt($(window).width() <= 767 ? mobileZoomLevel : ($(window).width() >= 768 && $(window).width() <= 1024) ? tabletZoomLevel : desktopZoomLevel),
            center: { lat: lat, lng: long },
            disableDefaultUI: true,
            minZoom: 2,
            styles: [{ "featureType": "administrative", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "labels.text.fill", "stylers": [{ "color": "#444444" }] }, { "featureType": "landscape", "elementType": "all", "stylers": [{ "color": "#e3e3e3" }] }, { "featureType": "poi", "elementType": "geometry.fill", "stylers": [{ "saturation": "-100" }, { "lightness": "57" }] }, { "featureType": "poi", "elementType": "geometry.stroke", "stylers": [{ "lightness": "1" }] }, { "featureType": "poi", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "road", "elementType": "all", "stylers": [{ "saturation": -100 }, { "lightness": 45 }] }, { "featureType": "road.highway", "elementType": "all", "stylers": [{ "visibility": "simplified" }] }, { "featureType": "road.arterial", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "all", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit", "elementType": "labels", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels.text", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels.text.fill", "stylers": [{ "visibility": "off" }, { "color": "#484848" }] }, { "featureType": "transit", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "off" }] }, { "featureType": "transit", "elementType": "labels.icon", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit.station.bus", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit.station.bus", "elementType": "labels.text.fill", "stylers": [{ "saturation": "0" }, { "lightness": "0" }, { "gamma": "1.00" }, { "weight": "1" }] }, { "featureType": "transit.station.bus", "elementType": "labels.icon", "stylers": [{ "saturation": "-100" }, { "weight": "1" }, { "lightness": "0" }] }, { "featureType": "transit.station.rail", "elementType": "all", "stylers": [{ "visibility": "on" }] }, { "featureType": "transit.station.rail", "elementType": "labels.text.fill", "stylers": [{ "gamma": "1" }, { "lightness": "40" }] }, { "featureType": "transit.station.rail", "elementType": "labels.icon", "stylers": [{ "saturation": "-100" }, { "lightness": "30" }] }, { "featureType": "water", "elementType": "all", "stylers": [{ "color": "#fbfbfb" }, { "visibility": "on" }] }]
        });
        var mIcon = {
        path: google.maps.SymbolPath.CIRCLE,
        fillOpacity: 0.9,
        fillColor: '#866531',
        strokeOpacity: 1,
        strokeWeight: 1,
        strokeColor: '#fff',
        scale: 25
    };
        //const demo = countries.features.forEach(element => console.log(element.properties.NoOfCitiesInCountry));
        map.data.addGeoJson(countries);
        map.data.setStyle(function (feature) {
            return {
                icon: mIcon,
                label: { color: '#fff', fontSize: '22px', fontWeight: '600', text: feature.getProperty('NoOfPropertiesInCountry') }
            };
        });

        const infoWindow = new google.maps.InfoWindow();
        const infoWindowForMouseOverAndOut = new google.maps.InfoWindow();

        map.data.addListener('mouseover', function (event) {
        const CountryName = event.feature.getProperty('name');
        const content = '<p>' + CountryName + '</p>';
        const position = event.feature.getGeometry().get();

        if (map.getZoom() < 4) {
            infoWindowForMouseOverAndOut.setContent(content);
            infoWindowForMouseOverAndOut.setPosition(position);
            infoWindowForMouseOverAndOut.setOptions({ pixelOffset: new google.maps.Size(0, -20) });
            infoWindowForMouseOverAndOut.open(map);
        }
    });

        map.data.addListener('mouseout', function (event) { infoWindowForMouseOverAndOut.close(); });

        map.data.addListener('click', function (event) {
        $('#reset-state').show();
        hideClickAndDragMarker();
        resetMarkers();
        const CountryName = event.feature.getProperty('name');
        const CityName = event.feature.getProperty('CityName');
        const CountryScId = event.feature.getProperty('CountryScId');
        const NoOfCitiesInCountry = event.feature.getProperty('NoOfCitiesInCountry');
        //const CityText = NoOfCitiesInCountry == 1 ? '@cityText' : '@citiesText'

        //const NoOfCitiesInCountryWithParenthesis = "(" + NoOfCitiesInCountry + " " + CityText + ")";

        const NoOfPropertiesInCountry = event.feature.getProperty('NoOfPropertiesInCountry');
        const PropertyText = NoOfPropertiesInCountry == 1 ? propertyText : propertiesText

        const NoOfPropertiesInCountryWithParenthesis = "(" + NoOfPropertiesInCountry + " " + PropertyText + ")";
        const position = event.feature.getGeometry().get();

        //using CityName if only 1 city is in the country alse use CountryName
        const content = '<h2>' + CityName + '</h2><p>' + NoOfPropertiesInCountryWithParenthesis + '</p>';
        //const content = '<h2>' + CountryName + '</h2><p>' + NoOfPropertiesInCountryWithParenthesis + '</p>';

        infoWindow.close();
        removeCityMarkers();
        infoWindowForMouseOverAndOut.close();
        map.panTo(position);
        map.setZoom(4);

        //if (NoOfCitiesInCountry === 1) {
        //    infoWindow.setContent(content);
        //    infoWindow.setPosition(position);
        //    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -20) });
        //    infoWindow.open(map);
        //}
        //else {
        showCityCountrySpecificMarkers(CountryName, CountryScId);
        map.setCenter(position);
        removeCountryIcon(CountryScId);
        //}
        showCityCountrySpecificList(CountryName, CountryScId);
        updateCityCountrySpecificLink(CountryName, CountryScId);
    });

        showCityCountrySpecificMarkers = function (CountryName, CountryScId) {
        $.each(cities, function (i, val) {
            if (val.CountryScId === CountryScId) {
                var markerCity = new google.maps.Marker({
                    position: { lat: val.cityCoordinates[1], lng: val.cityCoordinates[0] },
                    map: map,
                    icon: {
                        url: cityIconSrc,
                        scaledSize: new google.maps.Size(20, 20)
                    }
                });
                markerCity.addListener("click", function () {
                    const NoOfPropertiesInCity = val.NoOfPropertiesInCity;
                    const CityScId = val.CityScId;

                    const PropertyText = NoOfPropertiesInCity == 1 ? propertyText : propertiesText
                    //const NoOfPropertiesInCityWithPropertyText = NoOfPropertiesInCity + " " + PropertyText;

                    const NoOfPropertiesInCityWithParenthesis = "(" + NoOfPropertiesInCity + " " + PropertyText + ")";

                    const content = '<h2>' + val.name + '</h2><p>' + NoOfPropertiesInCityWithParenthesis + '</p>';

                    const positionForInfoWindow = { lat: val.cityCoordinates[1], lng: val.cityCoordinates[0] };

                    infoWindow.setContent(content);
                    infoWindow.setPosition(positionForInfoWindow);
                    infoWindow.setOptions({ pixelOffset: new google.maps.Size(0, -30) });
                    infoWindow.open(map);
                    filterCity(CityScId);
                });
                markers.push(markerCity);
                //markerCity.setMap(map);
            }
        });
        for (let i = 0; i < markers.length; i++) {
            markers[i].setMap(map);
        }
        if (markers.length === 1) {
            google.maps.event.trigger(markers[0], 'click');
        }
    }
        removeCountryIcon = function (CountryScId) {
            map.data.forEach(function (f) {
                if (CountryScId === f.getProperty('CountryScId'))
                    map.data.remove(f);
            });
        }
        closeInfoWindowAndResetMap = function () {
            infoWindow.close();
            var zoom = parseInt($(window).width() <= 767 ? mobileZoomLevel : ($(window).width() >= 768 && $(window).width() <= 1024) ? tabletZoomLevel : desktopZoomLevel);
            map.setZoom(zoom);
            map.setCenter({ lat: lat, lng: long });
            resetMarkers();
            removeCityMarkers();
        }

        resetMarkers = function () {
            map.data.forEach(function (f) { map.data.remove(f) });

            map.data.addGeoJson(countries);
            map.data.setMap(map);
        }

        removeCityMarkers = function () {
            for (let i = 0; i < markers.length; i++) {
                markers[i].setMap(null);
            }
            markers = [];
        }
        showClickAndDragMarker = function () {
            markerBanner = new google.maps.Marker({
                position: { lat: lat, lng: long
                },
                map: map,
                icon: {
                    url: dragMessageIconSrc
                },
                animation: google.maps.Animation.BOUNCE
            });
            markerBanner.setMap(map);
        }
        showClickAndDragMarker();

        hideClickAndDragMarker = function () {
            markerBanner.setMap(null);
        }
	}


    $(window).on('scroll',function(){
        var WindowTop = $(window).scrollTop();
        if (WindowTop > 1)
        {
            $('.lazy-load-maps').each(function () {               
                lazyLoadsGoogleMaps($(this));
            }); 
        }
    });

    function lazyLoadsGoogleMaps(e) { 
        const apiKey = REGCONFIG.apiKey;
        var src = "https://maps.googleapis.com/maps/api/js?key=" + apiKey;
        $.getScript(src, function(data, textStatus, jqxhr) {  
            initMap();
        });
        e.removeClass("lazy-load-maps").addClass('loaded');
    }

})(jQuery);
