(function($){
    $(".section-new-room-listing").each(function() {
       var  total = parseFloat($(this).data('total')),
            total = $(this).find('.new-room-listing .col-item').length,
            pc = parseFloat($(this).data('pc')),
            mb = parseFloat($(this).data('mb')),
            current = 1,
            ppp=pc,
            listing = $(this).find('.new-room-listing'),
            more = $(this).find('.btn-loadmore'),
            less = $(this).find('.btn-viewless');

        if(($(window).width() < 768)&&mb){
            ppp=mb;
        }

        if(ppp>=total){
            $(this).find('.bottom-listing').hide();
        }

        var pageSize = Math.ceil(total/ppp);
        getMoreRoomListting(listing,current,ppp);

        more.on('click',function (event) {
            current++;
            getMoreRoomListting(listing,current,ppp);
            if(current>=pageSize){
                more.addClass('hidden');
                less.removeClass('hidden');
            }
        });

        less.on('click',function (event) {
            $('html, body').animate({
              scrollTop: $('#rooms').offset().top - 100
            }, 300)            
            current=1;
            for(var i=1;i<=total;i++){
                if(i<=ppp){
                    listing.children(':eq('+(i-1)+')').addClass('active');
                }else{
                    listing.children(':eq('+(i-1)+')').removeClass('active');
                }
            }

            less.addClass('hidden');
            more.removeClass('hidden');

        });
    });
    function getMoreRoomListting(listing,current,ppp) {
        var star = ((current-1)*ppp) + 1,
            end =current*ppp;
        for(var i=star;i<=end;i++){
            listing.children(':eq('+(i-1)+')').addClass('active');
        }
    }

})(jQuery);
