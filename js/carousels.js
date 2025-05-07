$(window).on("load", () => {
  function updatePagination(swiper, numDiv) {
    const currentSlide = swiper.realIndex + 1;
    const totalSlides = swiper.slides.length;
    document.querySelector(
      `.${numDiv}`
    ).innerHTML = `<span class="current">${currentSlide}</span>/<span class="total">${totalSlides}</span>`;
  }
  
  function updatePaginationMobile(swiper, numDiv) {
    const currentSlide = (swiper.realIndex + 1).toString().padStart(2, "0");
    const totalSlides = swiper.slides.length.toString().padStart(2, "0");
    document.querySelector(
      `.${numDiv}`
    ).innerHTML = `<span class="current">${currentSlide}</span>/<span class="total">${totalSlides}</span>`;
  }
  const head = new Swiper(".carousel__head", {
    loop: true,
    speed: 2000,
    autoplay: {
      delay: 2000,
    },
  });
  const employee = new Swiper(".carousel__employee", {
    loop: true,
    spaceBetween: 30,
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: function () {
        updatePagination(this, "employee__carousel-num");
      },
      slideChange: function () {
        updatePagination(this, "employee__carousel-num");
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".employee__carousel-next",
      prevEl: ".employee__carousel-prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      400: {
        slidesPerView: 1.2,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        // spaceBetween: 40,
      },
    },
  });

  if (window.innerWidth < 768) {
    const arr = $(".achievements__item");

    arr.each(function (index, element) {
      const content = $(element).find(".achievements__item-content").clone(); // jQuery element
      const slideItem = $("<div>").addClass("swiper-slide").append(content); // yangi div yaratib qo‘shamiz

      $(".carousel__achievements .swiper-wrapper").append(slideItem);
    });

    const achievements = new Swiper(".carousel__achievements", {
      // loop: true,
      spaceBetween: 30,
      fadeEffect: {
        crossFade: true,
      },
      on: {
        init: function () {
          updatePaginationMobile(this, "achievements__right_mobile-num");
        },
        slideChange: function () {
          updatePaginationMobile(this, "achievements__right_mobile-num");
        },
      },

      // Navigation arrows

      breakpoints: {
        768: {
          slidesPerView: 1,
        },
      },
    });

    // $(".carousel__achievements swiper-wrapper");
  }

  const news = new Swiper(".carousel__news", {
    loop: true,
    spaceBetween: 20,
    fadeEffect: {
      crossFade: true,
    },
    on: {
      init: function () {
        updatePagination(this, "news__carousel-num");
      },
      slideChange: function () {
        updatePagination(this, "news__carousel-num");
      },
    },

    // Navigation arrows
    navigation: {
      nextEl: ".news__carousel-next",
      prevEl: ".news__carousel-prev",
    },

    breakpoints: {
      400: {
        slidesPerView: 1,
        // spaceBetween: 10,
      },
      600: {
        slidesPerView: 2,
        // spaceBetween: 40,
      },
      768: {
        slidesPerView: 3,
        // spaceBetween: 40,
      },
    },
  });
});
