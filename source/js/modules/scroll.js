'use strict';

(function () {
  var swiper = new Swiper('.header .swiper-container', {
    spaceBetween: 30,
    scrollbar: {
      el: '.header .swiper-scrollbar',
      hide: true,
      centeredSlides: true,
    },
  });
})();
