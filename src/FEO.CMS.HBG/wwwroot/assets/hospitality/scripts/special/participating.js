(function($){
    function insetHtmlParticipating(data,listing,update=0) {  
        var blog = listing.find('.participating-listing'),
            tx1 = listing.data('viewmoreinclusion'),
            tx2 = listing.data('learnmore'),
            tx3 = listing.data('checkavailable'),
            tx4 = listing.data('loadmore'),oasia=false;
            if(listing.hasClass('oasia-participating-listing')){
                oasia=true;
            }

        //data = JSON.parse(data);
        if(update==0){
            blog.html('');
            listing.find('.btn-loadmore').remove();
        }

        $('.section-participating-listing .result-participating .count').html(data.totalCount);
        if(data.totalCount<2) {
            $('.section-participating-listing .result-participating').hide();
        }else{
            $('.section-participating-listing .result-participating').show();
        }
            
        $.each(data.hotels, function (index, value) {
            //console.log(value);
            var card = '<div class="participating-card">',
                list1 = '',list2 = '',carousel='',
                more = $('<div>',{'class':'wviewmore', text : '' }),
                arrayEmty = ['<div></div>','<p></p>','<span></span>','<div>&nbsp;</div>','<p>&nbsp;</p>','<span>&nbsp;</span>'];

                var inclusions = value.inclusions;
                more.append('<div class="view-more">'+tx1+'</div>');

                $.each(arrayEmty, function (i, val) {
                    if (inclusions.indexOf(val) >= 0) {
                        inclusions = inclusions.replace(val, '');
                    }
                });



            if(value.previewImages && value.previewImages.length>0){
                $.each(value.previewImages, function (i, val) {
                    carousel+='<div class="item-carousel"><div class="thumb-56"><img src="'+val+'" alt="'+value.title+'" /></div></div>';
                });
            }else{
                carousel +='<div class="item-carousel"><div class="thumb-56"></div></div>';
            }


            card +='<div class="img"><div class="previews">';
                if(oasia){
                    card +='<div class="slick-carousel slick-carousel-1 custom-default-nav-carousel">'+carousel+'</div>';
                }else{
                    card +='<div class="owl-carousel owl-carousel-1 custom-default-nav-carousel">'+carousel+'</div>';
                }
                
                if(value.country){
                    card +='<div class="country">'+value.country+'</div>';
                }                
                if(value.ribbonText){
                    card +='<div class="ribbon-text">'+value.ribbonText+'</div>';
                }
            card +='</div></div>';


            card +='<div class="divtext">';
                card +='<a  href="'+value.linkPropertyDetail+'" class="title">'+value.title+'</a>';

                card +='<div class="group-list" >';
                    card +=inclusions;                    
                card +='</div>';//divtext
                //card +=more;
                card +='<div class="group-bottom"> <a  href="'+value.linkPropertyDetail+'" class="btn-par-1">'+tx2+'</a> <a href="'+value.linkCheckAvailable+'" class="btn-par-2" target="_blank">'+tx3+'</a></div>';

            card +='</div>';//divtext
            card +='</div>';//item card
            


            blog.append(card); 
            more.on('click',function(event){
                showModalParticipating($(this)); 
            });
            blog.find('.group-list').each(function(){
                $(this).after(more);
            });

        });
        beginParticipatingInclusion(blog); 
        if(oasia){
            blog.find('.participating-card .slick-carousel-1:not(.slick-initialized)').each(function(){
                getSlickCarouselParticipating($(this));
            });
        }else{
            blog.find('.participating-card .owl-carousel-1:not(.owl-loaded)').each(function(){
                getCarouselParticipating($(this));
            });            
        }

        



      

        var paging = data.paging;
        var viewmore = getViewmore(data.totalCount,paging.pageCount,paging.pageNumber,tx4);
        listing.find('.bottom-listing').append(viewmore);

        listing.find('.btn-loadmore').on('click',function(){
            var current=$(this).data('page');
            $(this).remove();
            beginParticipatingAPI(listing,current,1); 
        });



    }

    function beginParticipatingInclusion(blog) {
        blog.find(".participating-card").each(function(){
            //$(this).find('.group-list ul:nth-child(1)').addClass('list');

            $(this).find('.group-list ul.list li').each(function(i, val){
                var svg ='<svg xmlns="http://www.w3.org/2000/svg" width="14" height="21" viewBox="0 0 14 21"><text id="_" data-name="✓ " fill="#333" font-size="16" font-family="SegoeUIEmoji, Segoe UI Emoji"><tspan x="0" y="17">✓</tspan><tspan y="17" font-family="WorkSans-Regular, Work Sans"> </tspan></text></svg>';
                //$(this).prepend(svg);
            });




            var inclusion = $(this).find('ul.list li'),
                listHeight = $(this).find('.group-list').outerHeight();
            // if(inclusion.length>3){
            //     $(this).find('.divtext').addClass('has-more');
            // }
            if(listHeight>70){
                $(this).find('.divtext').addClass('has-ellipsis');
            }

        });

    };

    // Begin connect API
    $(".section-participating-listing").each(function(){
        var listing = $(this);
        beginParticipatingAPI(listing);

        listing.find('select').on('change',function(){
            beginParticipatingAPI(listing);
        });


    });



    function beginParticipatingAPI(e,currentPage=1,update=0) {  
        e.addClass('loading');
        var lang = $('html').attr('lang'),
            ppp = e.data('desktop'),
            mobile = e.data('mobile'),
            pageid = e.data('pageid'),
            country= e.find('select[name="country"]').val();

        if(!ppp || ppp=='' || ppp=='undefined'){
            ppp=0;
        }    
        if(($(window).width()<768) && mobile){
            ppp = mobile;
        }

        var params = {
            pageId:pageid,
            language:lang,
            pageNumber:currentPage,
            pageSize:ppp,
            type:'blog',
            filters:[]    
        };

        if(country && country!=''){
            var arrayCountry = [];
            arrayCountry.push(country);        
            params['filters'].push({'name': 'country', 'value': arrayCountry});
        }




        //API
        var domain = window.location.origin;
        jQuery.ajax({
            url: domain+'/ajax/participatingproperty',
            method: 'POST',
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8'

        }).done(function (response) {
            if(response.totalCount>0){
                e.removeClass('result-emty');
                insetHtmlParticipating(response,e,update);

            }else{
                e.addClass('result-emty');
            }
            e.removeClass('loading');
        }).fail(function (response) {
            console.log('An error occurred while processing your request.');
        });

    }


    function getViewmore(total,pageSize,current,text) {
        if(pageSize>current) {
            return  '<div data-page="'+(current+1)+'" class="btn-loadmore"><span class="tx">'+text+'</span></div>';
        }
    }
    function getCarouselParticipating(e) {
        e.owlCarousel({
            loop: false,
            navText: [' ', ' '],
            dots:false,
            items: 1,
            nav: true
        });
    }
    function getSlickCarouselParticipating(e) {
        e.slick({
          dots: false,
          infinite: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        });
    }


    function showModalParticipating(e) {
        var card=e.closest('.participating-card'),
            listing=e.closest('.section-participating-listing'),
            modal='<div id="participatingCardModal" class="customMyModal participatingCardModal active"><span class="btnModal overlay"></span><div class="container"><div class="contentModal"><div class="innerModal"><span class="btnModal close-modal"> </span></div></div></div></div>';

        $('body').append(modal); 
        $('body').addClass('showModal');
        var divmodal = $('#participatingCardModal');
        card.clone().appendTo(divmodal.find('.innerModal'));

        //Callback Carousel
        if(listing.hasClass('oasia-participating-listing')){
            divmodal.find('.container').addClass('wrap');
            divmodal.find('.previews').append('<div class="slick-carousel slick-carousel-2 custom-default-nav-carousel"></div>'); 
            divmodal.find('.slick-carousel-1 .thumb-56').each(function(){
                $(this).clone().appendTo(divmodal.find('.slick-carousel-2'));
            });
            divmodal.find('.slick-carousel-1').remove();
            getSlickCarouselParticipating(divmodal.find('.slick-carousel-2'));
        }else{
            divmodal.find('.previews').append('<div class="owl-carousel owl-carousel-2 custom-default-nav-carousel"></div>'); 
            divmodal.find('.owl-carousel-1 .thumb-56').each(function(){
                $(this).clone().appendTo(divmodal.find('.owl-carousel-2'));
            });
            divmodal.find('.owl-carousel-1').remove();
            getCarouselParticipating(divmodal.find('.owl-carousel-2'));                    
        }

        //End Callback Carousel
        divmodal.find('.btnModal').on('click',function(){
            $('body').removeClass('showModal');
            divmodal.remove();
        });

    }


})(jQuery);
