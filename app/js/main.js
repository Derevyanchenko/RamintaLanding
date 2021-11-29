// ready

(function($) {
    jQuery.fn.lightTabs = function(options) {
  
        var createTabs = function() {
            tabs = this;
            i = 0;
  
            showPage = function(tabs, i) {
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
  
            showPage(tabs, 0);
  
            $(tabs).children("ul").children("li").each(function(index, element) {
                $(element).attr("data-page", i);
                i++;
            });
  
            $(tabs).children("ul").children("li").click(function() {
                showPage($(this).parent().parent(), parseInt($(this).attr("data-page")));
            });
        };
        return this.each(createTabs);
    };
  })(jQuery);

$(document).ready(function() {

    // ############################
    // tabs module
    // ############################
    $('.tabs').each(function() {
        $(this).lightTabs();
    });

    // ############################
    // faq module
    // ############################
    $(".faq__item").on("click", function(e) {
        let
            that = $(this),
            submenu = $(".faq__submnenu"),
            that_submenu = that.find(submenu);
    
        if ( that_submenu.is(":visible") ) {
            that.removeClass("open");
            that.find(".faq__item-top").removeClass("active");
            that.find(submenu).slideUp(300);
        } else {
            // hide old
            $(this).removeClass("open");
            $(".faq__item-top").removeClass("active");
            submenu.slideUp(300);

            // show current
            that.addClass("open");
            that.find(".faq__item-top").addClass("active");
            that.find(submenu).slideDown(300);
        }
    
    });

    // ############################
    // form
    // ############################
    $("form").on("submit", function(e) {
        e.preventDefault();
        $(this).trigger("reset");
        close_popup();
        show_thanks_popup();

        setTimeout(function(){
        close_popup();
        }, 5000);
    });

    $('.select-js').select2();

    // ############################
    // burger
    // ############################
    $(".open-menu-js").on("click", function() {
        $(".mobileMenu-overlay").addClass("open");
    });
  
    // burger close
    $(".mobileMenu__close").on("click", function() {
        $(".mobileMenu-overlay").removeClass("open");
    });

    // ############################
    // banner slider
    // ############################
    $('.team__slider').not('.slick-initialized').slick({
        dots: false,
        arrows: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        fade: true,
            cssEase: 'linear',
        prevArrow: $(".team__slider-prev"),
        nextArrow: $(".team__slider-next")
    }); 

});