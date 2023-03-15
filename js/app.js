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
const whyUsSwiper = new Swiper('.why-us-swiper', {
  slidesPerView: 1,
  spaceBetween: 40,
  pagination: {
    el: '.why-us-pagination',
    clickable: true,
  },
  grid: {
    rows: 3,
    fill: "row",
  },
  breakpoints: {
    767: {
      slidesPerView: 2,
    },
    1250: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

const menuBurger = document.querySelector(".header__burger");
const headerMenu = document.querySelector(".header__nav");

function toggleMenu() {
  menuBurger.classList.toggle("active");
  headerMenu.classList.toggle("active");
  document.body.classList.toggle("lock");
}

document.body.addEventListener("click", function(e){
  const target = e.target;
  console.log(target);
  if(target.classList.contains('header__burger')){
    menuBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
  }
});