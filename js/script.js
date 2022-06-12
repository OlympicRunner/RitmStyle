var swiper = new Swiper(".review__swiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    initialSlide : 1,
    coverflowEffect: {
      rotate: 0,
      scale: 0.8,
      stretch: -20,
      depth: 200,
      modifier: 1,
      slideShadows: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
  });