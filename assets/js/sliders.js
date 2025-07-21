// Swiper Setup
const swiper = new Swiper(".heroSwiper", {
  loop: true,
  //   autoplay: {
  //     delay: 6000,
  //     disableOnInteraction: false,
  //   },
  slidesPerView: 1,
  navigation: {
    nextEl: ".home-slider-next",
    prevEl: ".home-slider-prev",
  },
  pagination: {
    el: ".home-slider-pagination",
    clickable: true,
    bulletClass: "swiper-pagination-bullet",
    bulletActiveClass: "swiper-pagination-bullet-active",
  },
  on: {
    init: function () {
      this.pagination.render();
      this.pagination.update();
    },
    slideChangeTransitionEnd: function () {
      const activeSlide = document.querySelector(".swiper-slide-active");
      autoPlayVideo(activeSlide); // if needed for video logic
    },
  },
});

const newswiper = new Swiper(".reelSwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    0: { slidesPerView: 1 },
    768: { slidesPerView: 2 },
    1024: { slidesPerView: 3 },
  },
});

const mySwiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    650: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

const productSwiper = new Swiper(".productSwiper", {
  slidesPerView: 1,
  spaceBetween: 4,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next-custom",
    prevEl: ".swiper-button-prev-custom",
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
