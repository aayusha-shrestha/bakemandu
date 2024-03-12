document.addEventListener("DOMContentLoaded", function () {
  var reviewSlider = new Swiper('.reviewSlider', {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    }
  });

  var reviewButtons = document.querySelectorAll('.reviewBtn');

  reviewButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var slideIndex = parseInt(button.getAttribute('index'));

      reviewSlider.slideTo(slideIndex);

    });
  });
});