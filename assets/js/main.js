// Mobile menu toggle
menuIcon.addEventListener("click", () => {
  sideMenu.style.right = "0";
});
closeMenu.addEventListener("click", () => {
  sideMenu.style.right = "-250px";
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
    snapOnRelease: true,
    draggable: true,
  },
});
