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

  slidesPerView: 3,
  spaceBetween: 17,
});