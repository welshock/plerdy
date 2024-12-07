const swiper = new Swiper('.swiper', {
   // Optional parameters
  direction: 'horizontal',
  loop: true,
   // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-nextt',
    prevEl: '.swiper-button-prevv',
  },
  grabCursor: true,

  slidesPerView: 3.3,
  spaceBetween: 17,
  breakpoints: {
    1000: {
        slidesPerView: 3.3,
    },

    768: {
        slidesPerView: 2.3,
    },
    484: {
        slidesPerView: 2,
    },
    280: {
        slidesPerView: 1.2,
    },
    100: {
        slidesPerView: 1,
        spaceBetween: 10,
    },
},

});