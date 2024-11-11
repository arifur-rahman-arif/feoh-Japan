(function() {

    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }

    var player,
        thumbnailsData,
        amenetiesData;


    function setSelectActive(select,index) {
        var item = select.find('li [data-index="' + index + '"]'),
            tx = item.html();
        select.find('.title .tx').html(tx).addClass('hasval');
        select.find('.item').removeClass('active');
        item.addClass('active');
    }


    // Begin modal
    $('[data-lightbox=gallery]').each(function() {
        var modal = $(this),
            owl = modal.find('.gallery-carousel'),
            select = modal.find('.select-jump-to');

        var idData = $(this).attr('data-listing');
        idData = idData.toString();
        var items = idData.split(';');
        var contextLanguage = $('input#contextLanguage').val();

        $.getJSON('/' + contextLanguage + '/ajax/amenity/thumbnails/' + items[0] + '/' + items[1], function(data) {
            modal.on('show.bs.modal', function (e) {
                if(modal.find('.gallery-carousel > div').length>0){
                }else{
                    insetThumbnailHtml(modal,data);
                }
            });
        });

        // Event Click
        owl.on('click', '.item', function(e) {
            e.preventDefault();
            owl.find('a').removeClass('active');
            $(this).find('a').addClass('active');
            var amenityId = $(this).data('amenity-id'),
                index = $(this).data('index');
            getAmenities(modal,amenityId);
            setSelectActive(select,index);
        });        

        select.on('click', '.item', function() {
            var index = $(this).data('index'),
                tx = $(this).html();
            owl.find('[data-index="' + index + '"]').trigger('click');
            select.removeClass('active');
            if (owl.find(".owl-item").eq(index).hasClass('active')) {
                if ($(window).width() < 1199 && $(window).width() > 1000) {
                    if (index == 6) {
                        owl.trigger("to.owl.carousel", [index, 300, true]);
                    }
                } else if ($(window).width() < 1001) {
                    if (index == 3) {
                        owl.trigger("to.owl.carousel", [index, 300, true]);
                    }
                }
            } else {
                owl.trigger("to.owl.carousel", [index, 300, true]);
            }
        });   

    });

    function insetThumbnailHtml(modal,data) {
        var thumbnailLength = data.length,
            thumbnailList = '',
            selectList = '',
            owl = modal.find('.gallery-carousel'),
            select = modal.find('.select-jump-to .content ul');

        for (var i = 0; i < thumbnailLength; i++) {
            var thumbnailId = data[i].id,
                thumbnailImg = data[i].thumbnail,
                thumbnailTitle = data[i].title,
                thumbnailActive = data[i].active;
            var thumbHtml = '<div  data-index="' + i + '"  class="item" data-amenity-id="' + thumbnailId + '">';
            thumbHtml += '<div class="image-with-txt">';

            if (thumbnailActive) {
                thumbHtml += '<a href="#" class="active">';
            } else {
                thumbHtml += '<a href="#">';
            }

            thumbHtml += '<img src="' + thumbnailImg + '" alt="" />';
            thumbHtml += '<div class="caption"><div class="content-v-align"><p>' + thumbnailTitle + '</p>';
            thumbHtml += '</div></div></a></div></div>';

            selectList += '<li><div data-index="' + i + '" class="item">' + thumbnailTitle + '</div></li>';

            thumbnailList += thumbHtml;
        }

        select.html(selectList);
        owl.addClass('owl-carousel').html(thumbnailList);
        owl.owlCarousel({
            loop: false,
            nav: true,
            margin: 10,
            navText: ['<span class="icon"></span>', '<span class="icon"></span>'],
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
   

        owl.find('.owl-nav > div').on("click", function() {
            setTimeout(function() {
                var first = owl.find(".owl-item.active:first .item");
                first.trigger('click');    
            }, 100);
        });


        getAmenities(modal,data[0].id); // First content

        modal.on('hidden.bs.modal', function () {
            stopVideo();
            modal.find('.gallery-image').children().fadeOut();
            modal.find('.gallery-image img').fadeIn();
        })

    }    





    //----- Toggle Select
    $('.select-jump-to .title').each(function() {
        $(this).on('click', function() {
            $(this).parent().toggleClass('active');
        });
    });

    $(document).mouseup(e => {
        if (!$(".select-jump-to").is(e.target) // if the target of the click isn't the container...
            &&
            $(".select-jump-to").has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".select-jump-to").removeClass('active');
        }
    });    
//------------------------------------------------------------------------------------------------
    //getThumbnail();






    var dataCounter = 0;


    var isLooped = true;
    var isNav = true;


    function getAmenities(modal,amenityId) {
        var contextLanguage = $('input#contextLanguage').val();
        // if (typeof contextLanguage === "undefined") {
        //     contextLanguage='en';
        // }
        $.getJSON('/' + contextLanguage + '/ajax/amenity/' + amenityId)
            .done(function(data) {
                updateAmenityHtml(modal,data);
            });
    }

    function returnValOrDef(val, def) {
        if (!def) def = '';
        if (val) return val;
        return def;
    }

    function updateAmenityHtml(modal,amenetiesData) {
        var amenityTitle = amenetiesData.amenity.title,
            amenitySummary = amenetiesData.amenity.summary,
            amenityDescription = amenetiesData.amenity.description,
            amenityImage = amenetiesData.amenity.image,
            amenityMapUrl = amenetiesData.amenity.tourUrl,
            amenityVideoUrl = amenetiesData.amenity.videoUrl;
        //alert(amenitySummary);
        //alert(amenityDescription);
        var amenityHtml = '<div class="content-gallery">';
        amenityHtml += '<div class="gallery-image">';
        amenityHtml += '<div class="landscape-mode-msg"><p>360º tour best viewed in landscape mode</p></div>';
        amenityHtml += '<img src="' + returnValOrDef(amenityImage, '#') + '" alt="" />';
        if (amenityMapUrl != null && amenityMapUrl != "undefined" && amenityMapUrl != "") {
            amenityHtml += '<div id="map-canvas" class="map-canvas"><iframe src="' + returnValOrDef(amenityMapUrl, '#') + '" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe></div>';
        }
        amenityHtml += '<div class="youtube"><div class=" videoholder" ></div></div>';
        amenityHtml += '<a href="#" class="close-btn">Close X</a>';
        amenityHtml += '</div>';
        amenityHtml += '<div class="gallery-description">';
        //amenityHtml += '<h4>' + returnValOrDef(amenityTitle) + '</h4><p>' + returnValOrDef(amenitySummary) + '</p>';
        if (amenityDescription) {
            amenityHtml += '<h4>' + returnValOrDef(amenityTitle) + '</h4><p>' + returnValOrDef(amenityDescription) + '</p>';
        } else {
            amenityHtml += '<h4>' + returnValOrDef(amenityTitle) + '</h4><p>' + returnValOrDef(amenitySummary) + '</p>';
        }



        var hasBoth = amenityMapUrl && amenityVideoUrl;

        amenityHtml += '<p>';

        if (amenityMapUrl)
            amenityHtml += '<a href="#" class="map-btn" data-pano-id="' + returnValOrDef(amenityMapUrl, '#') + '"><u>' + amenetiesData.dictionary.tourText + '</u></a> ';
        if (hasBoth)
            amenityHtml += amenetiesData.dictionary.textSeparator;
        if (amenityVideoUrl)
            amenityHtml += ' <a class="youtube-btn" data-youtube-id="' + amenityVideoUrl + '" href="#"><u>' + amenetiesData.dictionary.videoText + '</u></a>';

        amenityHtml += '</p>';
        amenityHtml += '</div>';
        amenityHtml += '</div>';
        modal.find('.content-gallery-wrapper').html(amenityHtml);

    }

    // enable maps
    $('.content-gallery-wrapper').on('click', '.map-btn', function(e) {
        var panoId = $(this).data('pano-id'),
            parent = $(this).closest('.content-gallery-wrapper');
        e.preventDefault();

        if (isMobile) {
            parent.find('.gallery-image').children().fadeOut();
            parent.find('.landscape-mode-msg').show();
            setTimeout(function() {
                parent.find('.landscape-mode-msg').hide();
                parent.find('.map-canvas').fadeIn().find('iframe').attr('src', panoId);
                parent.find('.close-btn').fadeIn();
            }, 2000);
        } else {
            parent.find('.gallery-image').children().fadeOut();
            parent.find('.map-canvas').fadeIn().find('iframe').attr('src', panoId);
            parent.find('.close-btn').fadeIn();
        }

        stopVideo();
    });


    // youtube player in gallery
    $('.content-gallery-wrapper').on('click', '.youtube-btn', function(e) {
        e.preventDefault();
        var videoId = $(this).data('youtube-id'),
            
            parent = $(this).closest('.content-gallery-wrapper'),
            youtube = parent.find('.youtube');

        parent.find('.gallery-image').children().fadeOut();
        parent.find('.close-btn').fadeIn();
        youtube.fadeIn();
        onYouTubeIframeAPIReady(youtube,videoId);
        return false;
    });

    // close-btn
    $('.content-gallery-wrapper').on('click', '.close-btn', function(e) {
        e.preventDefault();
        var parent = $(this).closest('.content-gallery-wrapper');
        parent.find('.gallery-image').children().fadeOut();
        parent.find('.gallery-image img').fadeIn();

    });

    function onYouTubeIframeAPIReady(youtube,videoId) {
        player = new YT.Player(youtube.children().get(0), {
            height: '100%',
            width: '100%',
            videoId: videoId,
            playerVars: {
                controls: 0,
                autoplay: 1,
                rel: 0,
                showinfo: 0
            },
            events: {
                'onReady': onPlayerReady,
                'onStateChange': onPlayerStateChange
            }
        });
    }

    function onPlayerReady(event) {

        event.target.playVideo();
    }

    function onPlayerStateChange(event) {
        if (event.data === 0) {
            stopVideo();
            //onPlayerDestroy();
        }
        var $thumbnails = $('.gallery-carousel .item a');
        $thumbnails.on('click', stopVideo);

        var $closeBtn = $('.gallery-image .close-btn');
        $closeBtn.on('click', stopVideo);
    }

    function stopVideo() {
        if(player){
            player.stopVideo();
            player.destroy();
        }
    }



})();