const infoSwiper = new Swiper('.info-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.info-pagination',
    clickable: true,
  },
  grid: {
    rows: 2,
    fill: "row",
  },
  breakpoints: {
    // when window width is >= 320px
    500: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 480px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 640px
    991: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});
const sewingSwiper = new Swiper('.sewing-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.blocks-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
const repairSwiper = new Swiper('.repair-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.blocks-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
    },
  },
  navigation: {
    nextEl: '.repair-button-next',
    prevEl: '.repair-button-prev',
  },
});
const tarrifsSwiper = new Swiper('.tariffs-swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.tariffs-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },

});

