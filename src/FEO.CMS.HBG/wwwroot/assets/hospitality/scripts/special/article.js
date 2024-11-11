$(function () {

    function scrollTo() {
        $('html, body').animate({
            scrollTop: $('#article-listing').offset().top
        }, 500);
    }

    function returnValOrDef(val, def) {
        if (!def) def = '';
        if (val) return val;
        return def;
    }

    function updateHTML(articleData, container) {
        var articles = articleData.articles,
          articlesLength = articleData.articles.length,
          articleList = [],
          wrapper = container.find('.row'),
          currentPage = articleData.paging.pageNumber,
          totalPage = articleData.paging.pageCount;

        for (var i = 0; i < articlesLength; i++) {
            var article = articles[i];
            var thumbnail = article.thumbnail;
            var category = article.category,
              title = article.title,
              summary = article.summary,
              url = article.articleUrl,
			  articleCategoryName=article.articleCategoryName;
			  
			  if(articleCategoryName==null)
			  {
				  articleCategoryName=category
			  }

            var articleHTML = '<div class="col-md-4 col-sm-6">';
            if (thumbnail)
                articleHTML += '<a href="' + returnValOrDef(url, '#') + '"><img src="' + returnValOrDef(thumbnail.url, '#') + '" alt="' + returnValOrDef(thumbnail.alt) + '" /></a>';
            articleHTML += '<div class="caption"><p class="category text-uppercase">' + returnValOrDef(articleCategoryName) + '</p>';
            articleHTML += '<h3><a href="' + returnValOrDef(url, '#') + '">' + returnValOrDef(title) + '</a></h3>';
            articleHTML += '<p>' + returnValOrDef(summary) + '</p>';
            articleHTML += '</div>';
            articleHTML += '</div>';

            articleList.push(articleHTML);

        }
        wrapper.html(articleList);

        var buttonWrapper = container.find('.button-wrapper');
        if (totalPage > 1) {
            var paging = articleData.paging;
            var prev = paging.prevPageNumber ? 'data-page="' + paging.prevPageNumber + '"' : 'data-page=""';
            var next = paging.nextPageNumber ? 'data-page="' + paging.nextPageNumber + '"' : 'data-page=""';

            var paginationHTML = '<nav><ul class="pager">';
            paginationHTML += '<li class="pull-left"><a class="prev" href="#hotel-form" ' + prev + '>' + articleData.dictionary.pagePrevText + '</a></li>';
            paginationHTML += '<li class="page-num">' + currentPage + ' OF ' + totalPage + '</li>';
            paginationHTML += '<li class="pull-right"><a class="next" href="#hotel-form" ' + next + '>' + articleData.dictionary.pageNextText + '</a></li>';
            paginationHTML += '</ul></nav>';
            buttonWrapper.show();
            buttonWrapper.html(paginationHTML);

            if (currentPage === 1) {
                buttonWrapper.find('.prev').hide();
            } else {
                buttonWrapper.find('.prev').show();
            }

            if (currentPage === totalPage) {
                buttonWrapper.find('.next').hide();
            } else {
                buttonWrapper.find('.next').show();
            }

        } else {
            buttonWrapper.hide();
        }
    }

    function getArticles(params, container) {
        $.ajax({
            url: '/ajax/article',
            method: 'POST',
            data: JSON.stringify(params),
            contentType: 'application/json; charset=utf-8'
        }).done(function (response) {
            updateHTML(response, container);
        });
    }

    $('[data-role=content]').on('display', function (e, arg) {
        var self = $(this);
        var type = self.data('type');
        if (type !== arg.value) {
            return;
        }

        console.log('on display type:' + type);
        console.log('arg.value:' + arg.value);
        if (!Query.storeHas('page')) {
            Query.store('page', function (type) {
                var container = $('[data-role=content][data-type="' + type + '"]');
                return container.data('page') ? container.data('page') : 1;
            });
        }

        var page = Query.get('page') ? Query.get('page') : 1;
        var params = {
            pageNumber: page,
            pageSize: self.find('.pageSize').val(),
            type: type,
			language: document.getElementsByTagName('html')[0].getAttribute('lang')
        };
        getArticles(params, self);

    });

    $('.articles').on('click', '.next', function (e) {
        e.preventDefault();
        var container = $(this).closest('[data-role=content]');
        var page = container.data('page') ? container.data('page') : 1;
        container.data('page', ++page);

        var url = Query.update('page', page);
        History.pushState(null, document.title, url);

        scrollTo();
    });

    $('.articles').on('click', '.prev', function (e) {
        e.preventDefault();
        var container = $(this).closest('[data-role=content]');
        var page = container.data('page') ? container.data('page') : 1;
        container.data('page', --page);

        var url = Query.update('page', page);
        History.pushState(null, document.title, url);

        scrollTo();
    });

});