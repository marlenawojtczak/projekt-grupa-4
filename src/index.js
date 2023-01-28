import './sass/main.scss';

import Swiper, { Pagination } from 'swiper';

var swiper = new Swiper('.mySwiper', {
  modules: [Pagination],
  // slidesPerVie: 1,
  // spaceBetween: 10,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
});
