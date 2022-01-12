$(function () {
  $(".label_group input").on("focus", function () {
    $(this).parent().addClass("is-active");
  });
  $(".label_group input").on("blur", function () {
    $(this).parent().removeClass("is-active");
  });
});
// wow.js initialization //
new WOW().init();
