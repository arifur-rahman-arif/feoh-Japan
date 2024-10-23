// JavaScript Document
(function($) {
    $(document).ready(function() {
        function lazyHiddenImg(e) {
            var src = e.data('lazy-src'),
                srcset = e.data('lazy-srcset'),
                type = e.data('lazy-type');

            if (type == 'bg') {
                e.css('background-image', 'url(' + src + ')');
            } else {
                if (srcset && srcset != 'undefined') {
                    e.attr('srcset', srcset);
                } else {
                    e.attr('src', src);
                }
            }
            e.addClass('loaded').removeClass('lazy-hidden-event').removeClass('lazy-hidden');
        }

        function lazyHiddenEven(e) {
            e.find(".lazy-hidden-event").each(function() {
                lazyHiddenImg($(this));
            });
        }

        function lazyHiddenEven2(e) {
            e.find(".lazy-hidden").each(function() {
                lazyHiddenImg($(this));
            });
        }
        //Add event
        $('.carousel').each(function() {
          $(this).on('slid.bs.carousel', function() {
              var lazy = $(this).find('.carousel-inner .item img');
              setTimeout(() => {
                  lazyHiddenEven2(lazy);
              }, 200);
          })
      });

        $('.carousel').on('slid.bs.carousel', function() {
            var lazy = $(this).find('.carousel-inner .active').next();
            if (lazy.length > 0) {
                lazyHiddenEven2(lazy);
            }
        })
        $('.dropdown.mega-dropdown').hover(function() {
            lazyHiddenEven2($(this));
        });
        //oasia
        $('.photoTourButton').on('click', function(e) {
            var gallery = $('.app-gallery');
            if (gallery.length > 0) {
                lazyHiddenEven(gallery);
            }
        });
        $('.app-button').on('click', function(e) {
            var id = $(this).data('id'),
                modal = $('.room-panel[id="' + id + '"]');
            if (modal) {
                lazyHiddenEven(modal);
            }
        });

        $(window).bind("load", function() {
            $('.custom-event-slick .slick-active').each(function() {
                lazyHiddenEven($(this));
            })

            var lazybT = $('.carousel .carousel-inner .active').next();
            if (lazybT.length > 0) {
                lazyHiddenEven2(lazybT);
            }
        });

        $('.custom-event-slick').on('beforeChange', function(event, slick) {
            lazyHiddenEven($(this));
        });
        //End oasia

        //Village
        $('.viewGallery').on('click', function() {
            if ($('.image-gallery-compinent').length > 0) {
                lazyHiddenEven($('.image-gallery-compinent'));
            }
        });
        $('.viewGalleryOutpost-gallery').on('click', function() {
            if ($('.image-gallery-component-gallery').length > 0) {
                lazyHiddenEven($('.image-gallery-component-gallery'));
            }
        });
        $('.viewGalleryOutpost').on('click', function() {
          if ($('.image-gallery-component-without-gallery').length > 0) {
              lazyHiddenEven($('.image-gallery-component-without-gallery'));
          }
        });
        $('.see_all_awards').on('click', function() {
            if ($('.awards_popup_modal').length > 0) {
                lazyHiddenEven($('.awards_popup_modal'));
            }
        });
        $('.thingsToDo-more').on('click', function(e) {
            e.preventDefault();
            $(".things-to-do-page-wrapper").html('');
            $("body").addClass("noscroll");
            $("html").addClass("noscroll");


            $('.thingsToDoPopup').addClass('active');

            var thingstodoURL = $(this).parent().find(".thingsToDo-more").attr('data-href');
            $.ajax({
                url: thingstodoURL,
                type: "GET",
                dataType: "html"
            }).done(function(data) {
                // $(".thingsToDoPopup").html($(data).find('.things-to-do-wrapper'));
                $(".things-to-do-page-wrapper").html($(data).find('.things-to-do-wrapper'));
                setTimeout(function() {
                    $(".things-to-do-page-wrapper").find('img').each(function(index, e) {
                        lazyHiddenImg($(e));
                    });
                }, 1000);
            });
        });
        // End Vilaage
        //Barack

        //End Barrack

        $('.menu-burger').on('click', function(e) {
            lazyHiddenEven($('#overlay_menu_new'));
        });


        $('.modal-lazy-img').on('show.bs.modal', function(e) {
            lazyHiddenEven($(this));
        });
        $('.home-banner #videoModal').on('show.bs.modal', function(e) {
            $('.home-banner').addClass('remove-z-index');
        });
        $('.home-banner #videoModal').on('hide.bs.modal', function(e) {
            $('.home-banner').removeClass('remove-z-index');
        });

        $('.owl-carousel').each(function() {
            $(this).on("changed.owl.carousel", function(e) {
                var clone = $(this).find('.cloned'),
                    img = clone.find('img.lazy-hidden');
                if (clone.length > 0 && img.length > 0) {
                    img.each(function() {
                        lazyHiddenImg(img);
                    });
                }
            });
        });

        // Begin Lazy load
        $('.lazy-hidden,.owl-item.active .lazy-hidden-owl').each(function(i) {
            lazyLoadObject($(this), $(window));
        });
        $(window).bind("load", function() {
            $('.owl-item:not(.active) img.lazy-hidden-owl').each(function(i) { //frist item
                var top = $(this).offset().top,
                    WindowTop = $(window).scrollTop(),
                    pointactive = $(window).outerHeight(),
                    sm = $(this).data('lazy-sm');
                if (sm && sm != 'undefined' && WindowTop > top - pointactive && WindowTop < top + ($(this).outerHeight(true))) {
                    $(this).attr('src', sm);
                }
            });
        });
        $(window).on('scroll', function() {
            $('.lazy-hidden,.owl-item .lazy-hidden-owl').each(function(i) {
                var offset = 500;
                if ($(this).hasClass('group-ef')) {
                    offset = -200;
                }
                var offsetTop = parseInt($(this).data('offset'));
                if (offsetTop && offsetTop != 'NaN' && offsetTop != 'undefined') {
                    offset = offsetTop;
                }
                lazyLoadObject($(this), $(window), offset);
            });
        });
    });

})(jQuery);


function lazyLoadObject(e, window, offset = 0) {
    var top = e.offset().top,
        WindowTop = window.scrollTop(),
        pointactive = document.documentElement.clientHeight + parseInt(offset);



    if (WindowTop > top - pointactive && WindowTop < top + (e.outerHeight(true) + offset)) {



        var type = e.data("lazy-type"),
            src = e.data("lazy-src"),
            mb = e.data("lazy-mb"),
            md = e.data("lazy-md");

        if (mb && $(window).width() < 576) {
            src = mb;
        }
        if (md && ($(window).width() > 575 && $(window).width() < 992)) {
            src = md;
        }
        if (type == 'image') {
            e.attr('src', src);
            let srcset = e.data("lazy-srcset");
            if (srcset) {
                e.attr('srcset', srcset);
            }
        } else if (type == 'bg') {
            e.css('background-image', 'url(' + src + ')');
        } else if (type == 'iframe') {
            e.attr('src', src);
        } else if (type == 'mp4') {
            var a = '<source src="' + src + '" type="video/mp4">';
            e.html(a);
        }
        e.removeClass("lazy-hidden").removeClass("lazy-hidden-owl").addClass('loaded');
    }
}


document.addEventListener("DOMContentLoaded", function() {
    var lazyLoadsInstagram = [].slice.call(document.querySelectorAll(".lazy-load-instagram")),
        instagramScript = document.getElementById("instagramScript");

    if ("IntersectionObserver" in window) {
        let lazyLoadObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    let lazyLoad = entry.target;

                    if (instagramScript) {

                    } else {


                        var s = document.createElement("script"),
                            c = document.createElement("link");
                        s.src = "//assets.juicer.io/embed-no-jquery.js";
                        s.id = "instagramScript";
                        c.href = "https://assets.juicer.io/embed.css";
                        c.media = "all";
                        c.rel = "stylesheet";
                        c.type = "text/css";


                        var sa = document.getElementsByTagName("script")[0];
                        sa.parentNode.insertBefore(s, sa);
                        sa.parentNode.insertBefore(c, sa);
                    }
                    setTimeout(function() {

                    }, 200);


                    lazyLoad.classList.remove("lazy-load-instagram");
                    lazyLoad.classList.add('loaded');
                    lazyLoadObserver.unobserve(lazyLoad);
                }
            });
        });

        lazyLoadsInstagram.forEach(function(lazyLoad) {
            lazyLoadObserver.observe(lazyLoad);
        });
    } else {
        // Possibly fall back to event handlers here
    }

    $('#hotel-list li:not(.active) a').click(function (e) {
      e.preventDefault();
      $('html, body').animate({
          scrollTop: $('#hotel-list').offset().top - 50
        }, 400);

      //$(this).tab('show');
  });
});
