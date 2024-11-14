(function($){

function insetHtmlBlogs(data,listing) {  
    var blog = listing.find('.blog-listing'),
        col0 = $('<div class="column-0"></div>'),
        ipad1 = $('<div class="column-1"></div>'),
        ipad2 = $('<div class="column-2"></div>'),        
        col1 = $('<div class="column-1"></div>'),
        col2 = $('<div class="column-2"></div>'),
        col3 = $('<div class="column-3"></div>');

    //data = JSON.parse(data);
    blog.html('');
        
    
    $.each(data.blogs, function (index, value) {
        //console.log(value);

        var card = '<a href="'+value.articleUrl+'" class="card index-'+(index+1)+'"><div class="divtext">',
            tags = '<p class="tags">';
        $.each(value.tags, function (i, val) {
            tags+='<span>'+val+'</span> ';
        });

        card +='<h3 class="title">'+value.title+'</h3>';
        if(value.summary && value.summary!='undefined' ){
            card +='<div class="desc">'+value.summary+'</div>';
        }
        card +=tags+'</p>';
        card +='</div>';
        card +='<div class="thumb-50"><img src="'+value.thumbnail.url+'" alt="'+value.title+'"></div>';
        card +='</a>';
        
        //Desktop
        if(index==0 || ((index+1)%3 - 1 ==0)){
            col1.append(card);
        }else if(index==1 || ((index+1)%3 - 2 ==0)){
            col2.append(card);
        }else {
            col3.append(card);
        }
        //Ipad
        if( (index + 1)%2!=0){
            ipad1.append(card);
        }else{
            ipad2.append(card);
        }

        // mobile
        col0.append(card); 


    });
    
    if($(window).width()>991){
        blog.append(col1).append(col2).append(col3);
    }else if($(window).width()>767 && $(window).width()<992 ){
        blog.append(ipad1).append(ipad2);
    }
    else{
        blog.append(col0);
    }

    var tx = listing.find('.result-total').data('multiple-result'),
        tx1 = listing.find('.result-total').data('sigle-result');
    if(data.totalCount==1){
        tx = tx1;
    }

    listing.find('.result-total .text').html(tx);
    listing.find('.result-total .number').html(data.totalCount);

    //pagination
    listing.find('.page-numbers').remove();
    var paging = data.paging;
    var pagination = getPagination(data.totalCount,paging.pageSize,paging.pageNumber);
    blog.after(pagination);
    listing.find('a.page-number').on('click',function(){
        var current=$(this).data('page'),
            top = listing.offset().top;
        beginAPI(listing,current); 
        $('html, body').animate({
          scrollTop: listing.offset().top - 50
        }, 1000)
    });

}

// Begin connect API
$(".section-blog-listing").each(function(){
    var listing = $(this);
    beginAPI(listing);
    listing.find('.blog-filter .is-multiple .option:not(.disabled)').on('click',function(){
        var count = listing.find('.blog-filter .option.active').length;
        if(count>0){
            listing.find('.filter-by .clear').removeClass('hidden');
        }else{
            listing.find('.filter-by .clear').addClass('hidden');
        }
    });
    listing.find('select').on('change',function(){
        beginAPI(listing);
    });


});

//Close all
$(".section-blog-listing .filter-by .clear").on('click',function(){
    $(this).addClass('hidden');
    var listing= $(this).closest('.section-blog-listing');
    listing.find(".custom-select").each(function () {
        var multi = $(this).prop('multiple');
        if(multi){
            $(this).val('');
        }else{
            $(this).prop('selectedIndex',0);
            var t = $(this).children("option:selected" ).text();
            $(this).next('.select-value').children('.text').html(t);
        }
    });     
    listing.find(".custom-html-select").removeClass('has-val');
    listing.find(".custom-html-select .select-value").removeClass('is-close');
    listing.find(".custom-html-select .option").removeClass('active');

    beginAPI(listing);
}); 

function beginAPI(e,currentPage=1) {  
    e.addClass('loading');
    var lang = $('html').attr('lang'),
        ppp = e.data('desktop'),
        mobile = e.data('mobile'),
        locations= e.find('select[name="locations"]').val(),
        Seasons= e.find('select[name="Seasons"]').val(),
        Types= e.find('select[name="Types"]').val(),
        Purposes= e.find('select[name="Purposes"]').val(),
        OrderBy= e.find('select[name="OrderBy"]').val();


        if($(window).width()<768){
            ppp = mobile;
        }


    var params = {
        language:lang,
        pageNumber:currentPage,
        pageSize:ppp,
        type:'blog',
        filters:[]    
    };
    if (OrderBy && OrderBy != '') {
        params['filters'].push({ 'name': 'orderby', 'value': OrderBy.split() });
    }
    if(locations && locations!=''){
        params['filters'].push({'name': 'location', 'value': locations});
    }
    if(Seasons && Seasons!=''){
        params['filters'].push({'name': 'season', 'value': Seasons});
    }
    if(Types && Types!=''){
        params['filters'].push({'name': 'type', 'value': Types});
    }
    if(Purposes && Purposes!=''){
        params['filters'].push({'name': 'purpose', 'value': Purposes});
    }



    //API
    var domain = window.location.origin;
    jQuery.ajax({
        url: domain+'/ajax/blog',
        method: 'POST',
        data: JSON.stringify(params),
        contentType: 'application/json; charset=utf-8'

    }).done(function (response) {
        if(response.totalCount>0){
            e.removeClass('result-emty');
            insetHtmlBlogs(response,e);
        }else{
            e.addClass('result-emty');
        }
        e.removeClass('loading');
    }).fail(function (response) {
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
})(jQuery);
