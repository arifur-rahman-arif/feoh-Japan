(function () {
    // setTimeout(newsletterModal, 5000);
    //
    // function newsletterModal(){
    //   $('#newsletter').modal('show');
    // }

    //searchbar ajax
    //$.getJSON("ajax/listing", function(data){
    //    console.log('data', data);
    //    $('#homebanner-search').typeahead({ source:data });
    //});

    function GetProtocol() {
        return window.location.protocol;
    }

    function GetPort() {
        return window.location.port;
    }

    function GetHostName() {
        return window.location.host;
    }

    function emptyElement(element) {
        if (element == null || element == '')
            return false;
        else return true;
    }

    function GetPathName(LanguageCode) {
        var langarr = [];
        var IslanguageEmbedd = false;
        $("#languageselector > option").each(function () {
            langarr.push(this.value);
        });
        var urlarr = window.location.pathname.split('/');
        urlarr = urlarr.filter(emptyElement);
        for (var i = 0; i < langarr.length; i++) {
            for (var m = 0; m < urlarr.length; m++) {
                if (langarr[i].toLowerCase() == urlarr[m].toLowerCase()) {
                    IslanguageEmbedd = true;
                }
            }
        }
        if (IslanguageEmbedd) {
            urlarr[0] = LanguageCode;
            if (window.location.pathname == "/") {
                return urlarr.join('/');
            }
            else {
                return "/" + urlarr.join('/');
            }

        }
        else {
            if (window.location.pathname == "/") {
                return window.location.pathname + LanguageCode;
            }
            else {
                return LanguageCode + "/" + window.location.pathname;
            }
        }

    }

    $(".language-selector").change(function (e) {
        //var currentLocation = window.location; 
        //window.location.href = $(this).val();
        var lang = $(this).val();
        var port = "";
        if (GetPort() != "") {
            port = ":" + GetPort();
        }
        var currentLocation = GetProtocol() + port + "//" + GetHostName();
        var path = "/" + GetPathName(lang);
        path = path.replace("//", "/");
        currentLocation = currentLocation + path;
        window.location.href = currentLocation;
    });
})();

$(document).ready(function() {

  /*--------- EXTRA OFF STICKY STARTS----------- */
  
  $(document).on('click', '.extra-off', function() {
    if ($(this).hasClass('opened')) {
        $(this).removeClass('opened');
        $(this).animate({ 'width': '85px' });
    } else {
        $(this).addClass('opened');
        $(this).animate({ 'width': '361px' });
    }

});

$(window).scroll(function() {
    $('#submenu-selec ul').hide();
    if ($('.extra-off').hasClass('opened')) {
        $('.extra-off').removeClass('opened');
        $('.extra-off').animate({ 'width': '85px' });
    }
});

 $(document).mouseup(function(e) {
    var container = $(".extra-off");
    var staySelection = $(".choose-your-stay-selection");
    
    if (!container.is(e.target) && container.has(e.target).length === 0) {
        container.removeClass('opened');
        container.animate({ 'width': '85px' });
    }
    if (!staySelection.is(e.target) && staySelection.has(e.target).length === 0) {
        $('.choose-your-stay-selection .location').hide();
    }
   
});

  /*--------- EXTRA OFF STICKY ENDS----------- */
     
});
