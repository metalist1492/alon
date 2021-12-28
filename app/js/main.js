$(function () {

  $('.menu__btn, menu a').on('click', function() {
    $('.menu__list').toggleClass('menu__list--active')
  })


  const mySwiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 120,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const swiperPrev = document.getElementById('swiperPrev');
  console.log(swiperPrev);
  const swiperNext = document.getElementById('swiperNext');
  console.log(swiperNext);
  swiperPrev.addEventListener('click', () => {
    mySwiper.slidePrev();
  });
  swiperNext.addEventListener('click', () => {
    mySwiper.slideNext();
  });


});