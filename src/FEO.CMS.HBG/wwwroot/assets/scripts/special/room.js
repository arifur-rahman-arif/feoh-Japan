(function() {
  // ROOM LIGHTBOX
  var isMobile = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    isMobile = true;
  }

  $('.view-room').on('click', function(e){
    var roomSauce = $(this).data('roomsauce'),
        roomMapModal = $(this).closest('.room-detail'),
        roomMapWrapper = roomMapModal.find('.room-pano'),
        roomIframe = '<iframe src="'+ roomSauce +'" width="100%" height="100%" frameborder="0" style="border:0" allowfullscreen></iframe>';
    e.preventDefault();

    if (isMobile) {
      $('.landscape-mode-msg').show();
      // console.log('show msg');
      setTimeout(function(){
        // console.log('hide msg');
        $('.landscape-mode-msg').hide();
        roomMapWrapper.html(roomIframe).addClass('active').fadeIn();
      }, 2000);
    
    } else {
      roomMapWrapper.html(roomIframe).addClass('active').fadeIn();
    }
    $('body, html, .modal-dialog, .modal').scrollTop(0);
    roomMapModal.addClass('active_modal');
    roomMapModal.find('.close-room-pano').fadeIn();
  });


  $('.close-room-pano,.room-detail.gallery button.close.btn').on('click', function(e){
    e.preventDefault();
    closeRoomPano($(this));

  });

  function closeRoomPano(e) {
    var roomMapModal = e.closest('.room-detail.modal');
    roomMapModal.find('.room-pano').removeClass('active').fadeOut();
    roomMapModal.find('.close-room-pano').fadeOut();
    roomMapModal.removeClass('active_modal');
  }






    $(".new-room-detail-popup").each(function () {
        var popup = $(this),
            id= popup.attr('id'),
            carousel = popup.find('.owl-carousel');

        getCarouselRoomDetail(carousel,id);


    });   

  function getCarouselRoomDetail(e,dots) {
    var dot ='.'+dots;
    e.owlCarousel({
        margin:2,
        items:1,
        nav:true,
        dots:true,
        dotsContainer :dot
    });
  }

  
  $(".new-room-detail-popup .btn-view-360").on('click',function() {
    
    var roomSauce = $(this).data('roomsauce'),
        parent = $(this).closest('.new-room-detail-popup');
    if(parent.find('.wrap-iframe360').hasClass('loaded')){
    }else{
      parent.find('.wrap-iframe360 iframe').attr('src',roomSauce);
      parent.find('.wrap-iframe360').addClass('loaded');
    }
    
    if (isMobile) {
      parent.find('.landscape-mode-msg').show();
      setTimeout(function(){
        parent.find('.landscape-mode-msg').hide();
      }, 2000);
    }
    $(this).closest(".new-room-detail-popup").addClass('show-iframe');
  });
  $(".new-room-detail-popup .close-three-sixty").on('click',function() {
      $(this).closest(".new-room-detail-popup").removeClass('show-iframe');
  });


})();
