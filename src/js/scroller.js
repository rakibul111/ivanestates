// scroll
$(function () {
  // header effect on scroll
  var prevScrollTop = 0;

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();

    if(scrollTop > 0){
      $('.header').addClass('scroll');
    }
    // scroll up and down effect
    if(scrollTop > 103){
      if(scrollTop > prevScrollTop){
        $('.header').addClass('scroll_down');
        $('.header').removeClass('scroll_up');
      }else{
        $('.header').addClass('scroll_up');
        $('.header').removeClass('scroll_down');
      }
      console.log(scrollTop)
      prevScrollTop = scrollTop;
    }

    if (scrollTop <= 0) {
      $('.header').removeClass('scroll');
      $('.header').removeClass('scroll_down');
      $('.header').removeClass('scroll_up');
    }
  });

  $('.custom_intro_scrolldown').on('click', function (e) {
    e.preventDefault();
    console.log('scrolldwn')
    $('html, body').animate({
      scrollTop: 680
    }, 500);
  });

});
