// ready

$(document).ready(function() {

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

  // burger

  $(".open-menu-js").on("click", function() {
    $(".mobileMenu-overlay").addClass("open");
  });
  
  // burger close

  $(".mobileMenu__close").on("click", function() {
    $(".mobileMenu-overlay").removeClass("open");
  });

  // work process accordion
  $(".process__item-top-js").on("click", function() {

    let 
      that = $(this),
      submenu = $(".process__item-dropdown"),
      that_submenu = that.siblings(submenu),
      arrow = $(".process__item-arrow")
      that_arrow = that.find(arrow);

    console.log(that_arrow);

    if ( that_submenu.is(":visible") ) {

      submenu.slideUp(300)
      arrow.removeClass("active");

    } else {

      submenu.slideUp(300)
      that_submenu.slideDown(300);
      arrow.removeClass("active");
      that_arrow.addClass("active");
    }

  });

  // banner slider

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