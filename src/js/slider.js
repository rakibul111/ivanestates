$(function () {

  initSlider('slider_testimonials');
  initSlider('slider_testimonials2');

  function initSlider(id) {
    var mainSlider = $(`#${id} .testimonials__slider`);
    var dotsSlider = $(`#${id} .dots-slider`);
    var slidesNum = $(`#${id} .dots-slider`).find('.dots-slider__item').not('.slick-cloned').length;
    // console.log(slidesNum)
    var autoplay = mainSlider.data('autoplay'); // true or false
  
    if (slidesNum <= 7) {
      dotsSlider.addClass('stopTranslation');
    }
  
    mainSlider.slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      pauseOnHover: false,
      adaptiveHeight: true,
      asNavFor: dotsSlider,
      autoplay: autoplay,
      autoplaySpeed: 4000
    });
    dotsSlider.slick({
      dots: false,
      arrows: false,
      infinite: true,
      slidesToShow: slidesNum > 7 ? 7 : slidesNum,
      slidesToScroll: 1,
      asNavFor: mainSlider,
      focusOnSelect: true
    });
    $(`#${id} .testimonials__prev`).on('click', function () {
      mainSlider.slick("slickPrev");
    });
    $(`#${id} .testimonials__next`).on('click', function () {
      mainSlider.slick("slickNext");
    });
  }

});