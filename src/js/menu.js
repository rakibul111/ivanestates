// menu
$(function () {
  $('#hamburger').on('click', function (event) {
    event.preventDefault();
    openSideMenu();
  });
  const openSideMenu = ()=> { 
    $('#sidemenu').addClass('visible');
    $('body').addClass('locked');
  }

  $('.sidemenu_close_btn').on('click', function (event) {
    event.preventDefault();
    closeSideMenu();
  });
  const closeSideMenu = ()=> {
    $('#sidemenu').removeClass('visible');
    $('body').removeClass('locked');
  }
});
