// scroll
$(function () {
  // header effect on scroll
  var prevScrollTop = 0;

  $(window).on('scroll', function () {
    var scrollTop = $(this).scrollTop();
    // console.log(scrollTop)

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
    $('html, body').animate({
      scrollTop: 680
    }, 500);
  });

  $('.property .big_img .scroll').on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
      scrollTop: window.innerHeight
    }, 500);
  });

});

// ------------- company stat counter -------------
var isCounterTriggered = false;

document.addEventListener('scroll', function (e) {
  var scrollPos = window.scrollY;

  const triggerCounter = ()=>{

    const counters = document.querySelectorAll('.counter');
    let duration = 3000;

    counters.forEach((counter) => {
      let target = parseInt(counter.getAttribute('data-target'));
      // let count = parseInt(counter.innerText);
      let count = 0;

      // let rem_target = target;
      // let rem_duration = duration;
      let avg = Math.round(duration/target);


      // let time = 0;
      // var intvl = setInterval(() => {
      //   time++;
      // }, 10);


      const updateCount = (target, count)=>{

        if(count < target){
          counter.innerText = count++;
          // let waiting_time = Math.round(rem_duration/rem_target);
          // rem_duration = rem_duration - waiting_time;
          // rem_target = rem_target - 1;

          setTimeout(() => {
            updateCount(target, count);
          }, avg);
        }
        else{
          // clearInterval(intvl);
          // console.log(time)
          counter.innerText = target;
        }
      }
      updateCount(target, count);
    });
  }

  if( scrollPos >= 2540 && isCounterTriggered == false ){
    console.log('trigger')
    isCounterTriggered = true;
    triggerCounter();
  }
});