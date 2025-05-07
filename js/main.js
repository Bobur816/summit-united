$(window).on("load", () => {
  // ______________________________header__scroll_________________________________
  let rootFont = parseInt($(":root").css("font-size"));
  let scroll = $(window).scrollTop();
  scroll > rootFont * 2 ? $(".header").addClass("header__scrolled") : $(".header").removeClass("header__scrolled");

  $(document).on("scroll", function () {
    let rootFont = parseInt($(":root").css("font-size"));
    let scroll = $(window).scrollTop();
    scroll > rootFont * 2 ? $(".header").addClass("header__scrolled") : $(".header").removeClass("header__scrolled");
  });

  // ______________________________animate________________________________
  function animSvg() {
    let svgA1C = document.querySelectorAll(".svgAnim1 circle");

    svgA1C.forEach((el, n) => {
      gsap.to(el, {
        xPercent: (65 / svgA1C.length) * n,
        yPercent: (-65 / svgA1C.length) * n,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });

    let svgA2C = document.querySelectorAll(".svgAnim2 path");
    var tl = gsap.timeline({ repeat: -1 });
    svgA2C.forEach((el, n) => {
      tl.to(
        el,
        {
          rotate: (90 / (svgA1C.length - 1)) * n,
          duration: 1.6,
          ease: "power1.inOut",
          transformOrigin: "center center",
        },
        0
      );
    });

    svgA2C.forEach((el, n) => {
      tl.to(
        el,
        {
          rotate: (90 / (svgA1C.length - 1)) * n + 180,
          duration: 2,
          ease: "power1.in",
          transformOrigin: "center center",
        },
        1.6
      );
    });
    svgA2C.forEach((el, n) => {
      tl.to(
        el,
        {
          rotate: 720,
          duration: 2,
          ease: "power1.out",
          transformOrigin: "center center",
        },
        3.6
      );
    });

    let svgA3C = document.querySelectorAll(".svgAnim3 ellipse ");
    svgA3C.forEach((el, n) => {
      gsap.to(el, {
        attr: { rx: 125 - (100 * n) / (svgA3C.length - 1) },
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    });
  }

  animSvg();

  // ______________________________.mobile__toggler________________________________

  $(".mobile-nav__open").on("click", function () {
    $(".mobile-nav").fadeIn(300);
    setTimeout(() => {
      $(".mobile-nav__wrapper").slideDown(300);
    }, 300);
    setTimeout(() => {
      $(".mobile-nav__close").fadeIn(100);
    }, 700);
  });
  $(".mobile-nav__close").on("click", function () {
    $(".mobile-nav__close").fadeOut(100);
    $(".mobile-nav__wrapper").slideUp(300);
    setTimeout(() => {
      $(".mobile-nav").fadeOut(300);
    }, 300);
  });
  $(".mobile-nav__list__link").on("click", function () {
    setTimeout(() => {
      $(".mobile-nav").fadeOut(300);
      $(".mobile-nav__wrapper").slideUp(300);
    }, 200);
  });

  // ______________________________popup_________________________________
  $(".corner-call-btn").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });

  $(".call-form__open").on("click", function () {
    $(".popup-call-form").fadeIn(300);
  });

  $(".popup__close").on("click", function () {
    $(".popup").fadeOut(300);
  });

  $(".popup-mini__form").on("submit", function (e) {
    e.preventDefault();
    $(".popup-call-form").fadeOut(300);
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".popup__form input").val("");
    }, 700);
  });

  $(".callback-form").on("submit", function (e) {
    e.preventDefault();
    $(".successful").fadeIn(300);
    setTimeout(() => {
      $(".callback-form input").val("");
    }, 700);
  });

  $(".popup").click((e) => {
    let div = $(".popup__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".popup").fadeOut(400);

      setTimeout(() => {
        $(".popup__form input").val("");
      }, 700);
    }
  });

  // ______________________________language_________________________________

  $(".language__open").on("click", function (e) {
    $(this).parent().find(".language__body").slideToggle(400);
  });

  $(".language__body").on("click", function (e) {
    const langEl = e.target.closest(".lang-el");
    $(".language__open").html(langEl.innerHTML);
    $(this).slideToggle(400);
  });

  $(window).click((e) => {
    let div = $(".language");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      $(".language__body").slideUp(400);
    }
  });

  // ______________________________show-service-more_________________________________

  function openServicePopup() {
    $(".services-popup").fadeIn(300);
    setTimeout(() => {
      $(".services-popup__wrapper").addClass("active");
    }, 100);
  }

  function closeServicePopup() {
    $(".services-popup__wrapper").removeClass("active");
    setTimeout(() => {
      $(".services-popup").fadeOut(300);
    }, 100);
  }

  $(".show-service-more").on("click", function (e) {
    const data = $(this).parent().find(".services-card__info").clone();
    $(".services-popup__content").html(data);
    openServicePopup();
  });
  $(".services-popup__close, .services-popup__close-2").on("click", function (e) {
    closeServicePopup();
  });

  $(".services-popup").click((e) => {
    let div = $(".services-popup__wrapper");
    if (!div.is(e.target) && div.has(e.target).length === 0) {
      closeServicePopup();
    }
  });

  // ______________________________cards-show__more-btn_________________________________

  $(".cards-show__more-btn").on("click", function () {
    $(this).parent().hide();
    $(this).parent().parent().find(".for__more").show();
  });

  $(".form_tel").inputmask("+\\9\\98 99 999 99 99");

  // ______________________________slider_________________________________

  const sliderToLeft = new Splide("#auto-scroll-slider", {
    type: "loop",
    drag: true,
    arrows: false,
    pagination: false,
    fixedWidth: "15.5rem",
    gap: "1.15rem",
    autoScroll: {
      speed: 1.5,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      768: { fixedWidth: "9.25rem" },
    },
  }).mount(window.splide.Extensions);

  const sliderToRight = new Splide("#auto-scroll-slider-right", {
    type: "loop",
    drag: true,
    arrows: false,
    pagination: false,
    fixedWidth: "15.5rem",
    gap: "1.15rem",
    updateOnMove: true,
    swipeThreshold: false,
    autoScroll: {
      speed: 1,
      pauseOnHover: true,
      pauseOnFocus: true,
    },
    breakpoints: {
      768: { fixedWidth: "9.25rem" },
    },
  }).mount(window.splide.Extensions);

  new WOW({
    offset: 50,
    mobile: false,
  }).init();

  //___________________________________________________YANDEX MAp

  ymaps.ready(function () {
    mapStart();
  });

  function mapStart() {
    var footerMap = new ymaps.Map(
      "contactsMap",
      {
        center: [41.34795, 69.398157],
        zoom: 14,
        controls: [],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    footerMap.geoObjects.add(
      new ymaps.Placemark(
        [41.34795, 69.398157],
        {},
        {
          iconLayout: "default#image",
          iconImageHref: "./img/icons/mp.svg",
          iconImageSize: [4 * rootFont, 4 * rootFont],
        }
      )
    );

    footerMap.panes.get("ground").getElement().style.filter = "grayscale(100%)";
  }
});
