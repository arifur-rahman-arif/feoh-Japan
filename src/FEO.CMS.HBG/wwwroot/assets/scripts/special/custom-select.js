//(function($){
    
    // Custom select
    /*-----------------------------------------------------------------*/

    function toLowerCaseNonAccentVietnameseSelect(str) {
        str = str.toString()
        str = str.toLowerCase();
        str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
        str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
        str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
        str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
        str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
        str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
        str = str.replace(/đ/g, "d");
        // Some system encode vietnamese combining accent as individual utf-8 characters
        str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, "");
        str = str.replace(/\u02C6|\u0306|\u031B/g, ""); 
        return str;
    }

    function insetHtmlSelect(select) {  
        var className = '',
            textCount = '',
            val = select.val(),
            type=select.attr('type'),
            multi = select.prop('multiple'),
            search = select.attr('search'),    
            searchIn = select.attr('search-in'),
            placeholder = select.attr('placeholder'),        
            content = $('<div class="select-content"></div>'),
            inputSearch = '<label class="select-search"><span><input class="input-search-custom-select" placeholder="'+search+'" /><span class="clear"></span><svg xmlns="http://www.w3.org/2000/svg" width="15.9" height="15.9" viewBox="0 0 15.9 15.9"> <path id="Path_8943" data-name="Path 8943" d="M15.9,14.5l-3.3-3.3A6.847,6.847,0,0,0,14,7,6.957,6.957,0,0,0,7,0,6.957,6.957,0,0,0,0,7a6.957,6.957,0,0,0,7,7,6.847,6.847,0,0,0,4.2-1.4l3.3,3.3ZM2,7A4.951,4.951,0,0,1,7,2a4.951,4.951,0,0,1,5,5,4.951,4.951,0,0,1-5,5A4.951,4.951,0,0,1,2,7Z" /></svg></span></label>';
        if(!searchIn || searchIn=='' || searchIn=='undefined') searchIn = 1;

        if(select.attr('data-count')){
            textCount = '<span class="text">'+select.attr('data-count')+'</span>';
        }
        
        if(type=='checkbox'){
            className +=' is-checkbox';
        }else if(type=='radio'){
            className +=' is-radio';
        }else {
            className +=' is-div';
        }
        if(search){
            if(searchIn==1){
                className +=' is-search-title';
            }else{
                className +=' is-search-content';
            }  
        }

        if(multi){
            var title = $('<div class="select-value"><span class="text"> '+placeholder+' </span> <span class="count">(<span class="number"></span>'+textCount+')</span> <i class="icon-arrow-1 ib"></i></div>');
            if(search){
                if(searchIn==1){
                    title = $('<div class="select-value"><div class="select-search"><input  class="input-search-custom-select" placeholder="'+search+'" size="5"/></div> <span class="close-all"></span><i ></i></div>');
                }else{
                    content.append(inputSearch);   
                }                
            }
            className +=' is-multiple';
        }else{
            var title = $('<div class="select-value"><span class="text">'+placeholder+'</span> <i class="icon-arrow-1 ib"></i></div>');
            if(search){content.append(inputSearch);}
        }
        select.wrap('<div class="custom-html-select   '+className+'"></div>').after(content).after(title);
        var option = select.children();
        insertOptionSelect(select,content,option);
        select.children('optgroup').each(function() {
            var l = $(this).attr('label'),
                parents = $(this).closest('.custom-html-select');
            insertOptionSelect(select,parents.find('.select-group[label="'+l+'"] .content'),$(this).children());
        });

        //Toggle select
        title.on('click',function(){
            var parent = $(this).parent();
            if(multi && search && searchIn==1){
                $('.custom-html-select.active').removeClass('active');
                parent.addClass('active');
            }else{
                if(parent.hasClass('active')){
                    parent.removeClass('active');
                }else{
                    $('.custom-html-select.active').removeClass('active');
                    parent.addClass('active');
                }
            }
        }); 
        updateActiveLabelSelect(select);
    }
    function insertOptionSelect(select,content,option) {  
        var value = select.val(),
            multi = select.prop('multiple');

            content.append('<div class="list-option"></div>');

        option.each(function() {
            var attr = '',
                active = '',
                label = $(this).attr('label'),
                checkall = $(this).attr('checkall'),
                uncheck = $(this).attr('uncheck'),
                selected = $(this).attr('selected'),
                disabled = '';
            if(label){
                var labelGroup = $('<div class="select-group" label="'+label+'"><div class="title"><span class="text">'+label+'</text></div><div class="content"></div></div>');
                if(checkall && uncheck){
                    var check = $('<span class="toggle-check" data-checkall="'+checkall+'"  data-uncheck="'+uncheck+'">'+checkall+'</span>');
                    labelGroup.find('.title').append(check);

                    check.on('click',function(){

                        var parent = $(this).closest('.custom-html-select'),
                            group = $(this).closest('.select-group');

                        if(group.hasClass('active')){
                            group.removeClass('active');
                            $(this).html(checkall);
                            group.find(".option:not(.disabled)").each(function() {
                                var val = $(this).attr('value'),
                                    opt = select.find('option[value="'+val+'"]');
                                $(this).removeClass('active');
                                opt.prop('selected',false);
                            });  
                        }else{
                            group.addClass('active');
                            $(this).html(uncheck);
                            group.find(".option:not(.disabled)").each(function() {
                                var val = $(this).attr('value'),
                                    opt = select.find('option[value="'+val+'"]');
                                $(this).addClass('active');
                                opt.prop('selected',true);
                            });                
                        }
                        select.change();

                        updateCountValSelect(select.val().length,parent);
                    });

                }
                content.children('.list-option').append(labelGroup);
            }else{
                $.each(this.attributes, function() {
                    if(this.specified) {
                      attr +=' '+this.name+'="'+this.value+'"';
                    }
                    if(this.name=='disabled'){
                        disabled='disabled';
                    }         
                    if(this.name=='selected'){
                        active='active';
                    }                         
                });                
                var htmlOption = $('<div class="option '+active+' '+disabled+'"  '+attr+'><i></i>'+$(this).html()+'</div>');
                // Event change option
                htmlOption.on('click',function(){
                    if(!htmlOption.hasClass('disabled')){
                        var val = $(this).attr('value');

                        if(multi){
                            if($(this).hasClass('active')){
                                $(this).removeClass('active');
                                select.find('option[value="'+val+'"]').prop('selected',false);
                            }else{
                                $(this).addClass('active');
                                select.find('option[value="'+val+'"]').prop('selected',true);
                            }
                            updateActiveLabelSelect(select);
                            //Check toggle
                            updateCheckToggleGroup($(this));
 
                        }else{
                            if(!$(this).hasClass('active')){
                                var parent = $(this).closest('.custom-html-select');
                                parent.removeClass('active');
                                parent.find('.option').removeClass('active');
                                $(this).addClass('active');
                                select.find('option[value="'+val+'"]').prop('selected',true);
                                updateActiveLabelSelect(select);

                            }

                        }

                        
                    }
                });  
                content.children('.list-option').append(htmlOption);
            }
        });

        
        //content.append(html);
    }   

    function updateCheckToggleGroup(e) {
        var group = e.closest('.select-group'),
            list = e.parent('.list-option'),
            check = group.find('.toggle-check');
            
        if(check.length>0){
            if(list.children('.active').length==list.children().length){
                group.addClass('active');
                check.html(check.data('uncheck'));
            }else{
                group.removeClass('active');
                check.html(check.data('checkall'));
            }
        }
    }
    function updateActiveLabelSelect(select,update=0) {
        var val = select.val(),
            placeholder = select.attr('placeholder'),
            multi = select.prop('multiple'),
            parent = select.parent();



        // if(update){
        //     parent.find('.select-value .val').remove();
        // }


        if(multi){

            updateCountValSelect(val.length,parent);
            if(parent.hasClass('is-search-title')){
                parent.find('.select-value .val').remove();
                $.each(val, function( index, value ) {
                    var text = value;
                    //Val in title
                    var span = $('<span value="'+value+'" class="val '+value+' " >'+text+'<span class="close-label"></span></span>');
                    parent.find('.select-value .select-search').before(span);  
                    span.click(function(){
                        var val = span.attr('value');
                        parent.addClass('active');
                        parent.find('.option[value="'+val+'"]').trigger('click');        
                    });     
                });                

            }
        }else{
            var selected = select.find('option:selected'),
                text = selected.html(),
                textSm = selected.data('textsm');
                if(textSm){
                    text = textSm;
                }
            if(!placeholder){
                parent.find('.select-value .text').html(text);
            }
            
        }

        select.change();
    }  


    function searchSelect() {  
        var oldVal;
        $('input.input-search-custom-select').bind('DOMAttrModified textInput input change keypress paste focus', function() {
            var key = $(this).val(),
                parent = $(this).closest('.custom-html-select'),
                group = parent.find('.select-group'),
                search = parent.find('.select-search'),
                check = group.find('.toggle-check'),
                c = key.length;

            key = toLowerCaseNonAccentVietnameseSelect(key);
            if(c<5) c=5;
            $(this).attr('size',c);

            if(key){
                check.addClass('hidden');
                search.addClass('has-val');
            }else{
                check.removeClass('hidden');
                search.removeClass('has-val');
            }
            parent.find('.option').each(function() { //:not(.active)
                var val = $(this).html();
                val = toLowerCaseNonAccentVietnameseSelect(val);
                if(val.indexOf(key) != -1){
                    $(this).removeClass('hidden');
                }else{
                    $(this).addClass('hidden');
                }
            });
            group.each(function() {
                var text = $(this).attr('label');
                text = toLowerCaseNonAccentVietnameseSelect(text);
                if(text.indexOf(key) != -1){
                    $(this).removeClass('hidden');
                    $(this).find('.option').removeClass('hidden');
                }else{
                    $(this).addClass('hidden');
                    if($(this).find('.option:not(.hidden)').length>0){
                        $(this).removeClass('hidden');
                    }
                }

            });

        });
    }


    function updateCountValSelect(count,parent)  {
        if(count>0){
            parent.addClass('has-val');
            parent.find('.select-value').addClass('is-close').removeClass('emty');  
            parent.find('.select-value .count .number').html(count);
        }else{
            parent.removeClass('has-val');
            parent.find('.select-value').removeClass('is-close').addClass('emty');  
            parent.find('.select-value .count .number').html('0');
        }        
    }
    function resetValueMultiSelect(e) {
        var multi = e.prop('multiple'),
            parent = e.closest('.custom-html-select'),
            option = parent.find('.option'),
            v = e.val(),
            group = parent.find('.select-group'),
            check = group.find('.toggle-check');

        option.removeClass('active');

        e.find('option').prop('selected',false);

        if(!multi){
            if(e.find('option[default]').length>0){
                e.find('option[default]').prop('selected',true);
                parent.find('.option[default]').addClass('active');                
            }else {
                e.find('option:first-child').prop('selected',true);
                parent.find('.option:first-child').addClass('active');                 
            }            
        }                    
        parent.removeClass('has-val');
        parent.find('.select-value').removeClass('is-close');
        group.removeClass('active');
        check.html(check.data('checkall'));
    }


    function selectClose() {
        $('.custom-html-select .select-value .close-all').on('click',function(){
            var parent = $(this).closest('.custom-html-select'),
                select = parent.children('select');
                select.val('');
                select.find('option').removeAttr('selected');
                parent.find('.option').removeClass('active');
            updateActiveLabelSelect(select); 
        });  
    }


    function selectClearSearchbox() {
        $('.custom-html-select .select-search  .clear').on('click',function(){
            var parent = $(this).closest('.select-content'),
                input = parent.find('.input-search-custom-select');
            input.val('');
            input.change();
        });  
    }
   
    function selectBeginHtml(e) {
        e.each(function() {
            insetHtmlSelect($(this));
        });
        searchSelect();
        selectClearSearchbox();
        selectClose();
        
    }


    function activeSelectFilter(s,v) {
        var str2 = '%20',
            parent = s.closest('.custom-html-select'),
            placeholder = s.attr('placeholder');

            
        if(parent.hasClass('is-multiple')) {
            parent.addClass('has-val');
            parent.find('.select-value').removeClass('emty').addClass('is-close');
            parent.find('.select-value .number').html(v.length);
            $.each(v, function(i,e){
                if(e.indexOf(str2) != -1){
                    e = e.replace(/\%20/g, ' ');
                }
                e = toLowerCaseNonAccentVietnameseSelect(e);
                s.find('option').each(function(){
                    var value = $(this).attr('value'),
                        val = toLowerCaseNonAccentVietnameseSelect(value);
                    if(e == val) {
                        $(this).prop('selected',true);
                        parent.find('.option[value="'+value+'"]').addClass('active');
                    }
                });
            });

            var group = parent.find('.select-group');
            group.each(function(){
                if($(this).find('.option').length == $(this).find('.option.active').length){
                    $(this).addClass('active');
                    var check = $(this).find('.toggle-check');
                    check.html(check.data('uncheck'));
                }
            });
        }else{
            if(v.indexOf(str2) != -1){
                v = v.replace(/\%20/g, ' ');
            }
            v = toLowerCaseNonAccentVietnameseSelect(v);
            s.children('option').each(function(){
                var value = $(this).attr('value'),
                    val = toLowerCaseNonAccentVietnameseSelect(value);
                if(v == val) {
                    $(this).prop('selected',true);
                    parent.find('.option[value="'+value+'"]').addClass('active').siblings().removeClass('active');  

                    var text = $(this).html(),
                        textSm = $(this).data('textsm');
                        if(textSm){
                            text = textSm;
                        }
                    if(!placeholder){
                        parent.find('.select-value .text').html(text);
                    }


                    return ;
                }
            });
        }
        s.change();
    }

    selectBeginHtml($("select.custom-select"));


    $(document).mouseup(e => {
        if (!$(".custom-html-select").is(e.target) // if the target of the click isn't the container...
        && $(".custom-html-select").has(e.target).length === 0) // ... nor a descendant of the container
        {
            $(".custom-html-select").removeClass('active');
        }
    }); 



//})(jQuery);