$(window).on("load", () => {
  if (window.innerWidth > 768) {
    const items = document.querySelectorAll(".achievements__item");
    const total = items.length.toString().padStart(2, "0");

    items.forEach((item, index) => {
      const current = (index + 1).toString().padStart(2, "0");
      const numBlock = item.querySelector(".achievements__num");

      if (numBlock) {
        const currentSpan = numBlock.querySelector(".current");
        const totalSpan = numBlock.querySelector(".total");

        if (currentSpan) currentSpan.textContent = current;
        if (totalSpan) totalSpan.textContent = total;
      }
    });

    gsap.registerPlugin(ScrollTrigger);

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievements__left",
        start: "top 15%",
        end: "+=400",
        //   pin: true,
        scrub: true,
        markers: false,
      },
    });

    let tr = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievements__right",
        start: "top 15%",

        end: "+=400",
        onUpdate: (self) => {
          if (self.progress >= 0.9) {
            $(".achievements__item_link").addClass("show");
          } else {
            $(".achievements__item_link").removeClass("show");
          }
        },
        //   pin: true,
        scrub: true,
        markers: false,
      },
    });

    let trs = gsap.timeline({
      scrollTrigger: {
        trigger: ".achievements",
        start: "top 15%",
        end: "+=400",
        pin: true,
        scrub: true,
        markers: false,
      },
    });

    trs.to(".achievements__left-content", { x: "0", y: "0", ease: "none" });
    tl.fromTo(".achievements__left", { width: "65%" }, { width: "30%", ease: "none" });

    tr.fromTo(".achievements__right", { width: "35%" }, { width: "70%", ease: "none" }, 0);
    tr.fromTo(".achievements__text_1", { width: "80%" }, { width: "45%", ease: "none" }, 0);
    tr.fromTo(
      ".achievements__text_2",
      { transform: "translateX(100%)", width: "95%", opacity: "0" },
      { transform: "translateX(0)", width: "45%", opacity: "1", ease: "none" },
      0
    );
    tr.fromTo(".achievements__img", { borderRadius: "335px" }, { borderRadius: "30px", ease: "none" }, 0);
    tr.fromTo(".achievements__left-h3", { fontSize: "5rem" }, { fontSize: "2.5rem", ease: "none" }, 0);

    // Initialize Lenis
  }
  const lenis = new Lenis({
    autoRaf: true,
  });

  // Listen for the scroll event and log the event data
});
