(function($){

    $(".get-pagination-listing").each(function(){
        var listing = $(this),
            ppp = listing.data("ppp"),
            total = listing.data("total"),
            currentPage= listing.data("current-page"),
            pagination = getPaginationMedia(total,ppp,currentPage),
            blog = listing.find('.listing'),
            wrapPagi =  listing.find('.wrap-pagination');
            

            setActiveMediaListting(blog,currentPage,ppp);
            wrapPagi.html(pagination);                
    });

    $('body').delegate('a.page-number','click',function(e) {
        var listing = $(this).closest('.get-pagination-listing'),
            wrapPagi =  listing.find('.wrap-pagination'),
            blog = listing.find('.listing'),
            ppp = listing.data("ppp"),
            total = listing.data("total"),
            current=$(this).data('page'),
            pagination = getPaginationMedia(total,ppp,current);

            setActiveMediaListting(blog,current,ppp);
        wrapPagi.html(pagination);

        $('html, body').animate({
        scrollTop: listing.offset().top - 50
        }, 1000)
        
    });

    function setActiveMediaListting(blog=20,current=1,ppp=5) {
        var star = ((current-1)*ppp) + 1,
            end =current*ppp;
            blog.children().removeClass('active');
        for(var i=star;i<=end;i++){
            blog.children(':eq('+(i-1)+')').addClass('active');
        }
    }
    function getPaginationMedia(total=20,pageSize=5,current=1) {
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
