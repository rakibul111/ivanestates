// modals
// video modal
$(function(){
  let btn = $('.btn-play');
  
  btn.on('click', function () {
    btn = this;
    openVideoModal();
  });

  let openVideoModal = ()=>{
    $('body').append(`<div id="modal-${btn.getAttribute('id')}" class="modal visible play_video">
    <div class="modal-content">
      <div class="lightbox-video">
        <div class="video-player">
          <div class="embed-container">
            <iframe frameborder="0" allowfullscreen="1" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" title="YouTube video player" width="100%" height="100%" src="${btn.getAttribute('data-src')}">
            </iframe>
          </div>
        </div>
      </div>
    </div>
    <a class="close">
      <img src="https://s3-us-west-2.amazonaws.com/luxurycoders-user-uploads/uploads/icon-close-white.png" alt="close">
    </a>
    </div>`);

    $(`#modal-${btn.getAttribute('id')} .close`).on('click', function(e) {
      e.preventDefault();
      $(`#modal-${btn.getAttribute('id')}`).remove();
    });
  }
  // ----------------- contact modal ---------------------
  $('.contact_us__btn').on('click', function (e) {
    e.preventDefault();
    $('#modal_contact_us').addClass('visible');
    $('body').addClass('locked');
  });
  $('.contact_us__close').on('click', function (e) {
    e.preventDefault();
    $('#modal_contact_us').removeClass('visible');
    $('body').removeClass('locked');
  });

});