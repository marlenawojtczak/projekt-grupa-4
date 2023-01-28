import './sass/main.scss';

import Swiper, { Pagination } from 'swiper';


var swiper = new Swiper(".mySwiper", {
  modules: [Pagination],
  loop: true,
      pagination: {
        el: ".swiper-pagination",
      },
    });