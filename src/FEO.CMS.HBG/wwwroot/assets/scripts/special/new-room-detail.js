(function($){
    var arrayRoomDetails = JSON.parse($("input[name=info-details-json]").val());

    $('.details-button-popup').on('click',function() {
        $('body').addClass('noscroll');
        var index = $(this).data("index") - 1,
            listing,
            listingRow = $(this).closest('.new-room-listing'),
            listingOwl = $(this).closest('.room-listing-carousel');

        if(listingRow.length>0){
            listing=listingRow;

        }else if(listingOwl.length>0){
            listing=listingOwl;
        }
        insetHtmlRoomPopup(index,listing);

        $(".room-detail-popup-custom-dot").each(function(index, e){
          setTimeout(function () {
            var owlItem = $(e).find('.owl-dot');
            console.log(owlItem);
            for(var i = 0; i < owlItem.length; i++)
              {
                owlItem.eq(i).html(i+1 + '/' + owlItem.length);
              }
          }, 500);
        });

    });


    function insetHtmlRoomPopup(index,listing){
        var popup = $('.new-room-detail-popup'),
            room = arrayRoomDetails[index],
            //carousel = $('#room-detail-gallery-carousel'),
            carousel = $('<div>',{'class':'custom-default-nav-carousel', text : '' });

            $("#preview-images-template-owl").tmpl(room).appendTo(carousel);
            $('.wrap-gallery').prepend(carousel);

            if(room.PreviewImages.length>1){
                carousel.addClass('owl-carousel');
                getCarouselRoomDetail(carousel);
            }


        if (room.TourUrl) {
            popup.find(".wrap-iframe360 iframe").attr("src", room.TourUrl);
            popup.find(".bottom-action .btn-view-360").addClass("active");
            //popup.addClass('show-iframe');
        } else {
            popup.find(".wrap-iframe360 iframe").attr("src", '');
            popup.find(".bottom-action .btn-view-360").removeClass("active");
        }

        popup.find(".close-icon").on('click',function() {
            carousel.remove();
            popup.find('.room-detail-popup-custom-dot').html('');
        });




        //Add more Navigation
        var textRoom = listing.data('text-room'),
            textPrev = listing.data('text-prev'),
            textNext = listing.data('text-next'),
            i = index+1, count=0,text,
            svg = '<svg xmlns="http://www.w3.org/2000/svg" width="22.859" height="13.761" viewBox="0 0 22.859 13.761"> <g id="Group_124520" data-name="Group 124520" transform="translate(-602 -5863.12)">  <path id="Path_235" data-name="Path 235" d="M8.88,10.93,2,4.049,4.049,2,8.88,6.831,13.711,2,15.76,4.049Z" transform="translate(613.93 5878.881) rotate(-90)"  /> <path id="Path_234" data-name="Path 234" d="M8.88,10.93,2,4.049,4.049,2,8.88,6.831,13.711,2,15.76,4.049Z" transform="translate(600 5878.881) rotate(-90)"  /></g></svg>',
            prev=$('<div class="text">'+svg+' <span class="t">'+textPrev+'</span></div>'),
            next=$('<div class="text"><span class="t">'+textNext+'</span>'+svg+' </div>');

        if(listing.find('.col-item').length>0){
            count=listing.find('.col-item').length;
        }else if(listing.find('.block-slide').length>0){
            count = listing.data('count');
        }
        text = textRoom+' '+i+'/'+count;

        if(i==1) {
            prev = '';
        } else{
            prev.on('click',function() {
                carousel.remove();
                popup.find('.room-detail-popup-custom-dot').html('');
                popup.removeClass('show-iframe');
                listing.find('.details-button-popup[data-index="'+(i-1)+'"]').trigger('click');
            });
        }
        if(i==count) {
            next = '';
        } else{
            next.on('click',function() {
                carousel.remove();
                popup.find('.room-detail-popup-custom-dot').html('');
                popup.removeClass('show-iframe');
                listing.find('.details-button-popup[data-index="'+(i+1)+'"]').trigger('click');
            });
        }
        popup.find('.navigation-room-modal .text-count').html(text);
        popup.find('.navigation-room-modal .nav-prev').html(prev);
        popup.find('.navigation-room-modal .nav-next').html(next);
        // End Navigation

    }

    //insetHtmlRoomPopup(1);
    function getCarouselRoomDetail(e) {
        e.owlCarousel({
            margin:2,
            items:1,
            nav:true,
            dots:true,
            dotsContainer :'.room-detail-popup-custom-dot'
        });
    }


    $(".new-room-detail-popup .btn-view-360").on('click',function() {
        $(this).closest(".new-room-detail-popup").addClass('show-iframe');
    });
    $(".new-room-detail-popup .close-three-sixty").on('click',function() {
        $(this).closest(".new-room-detail-popup").removeClass('show-iframe');
    });





})(jQuery);
