const initAllMenu = () => {
  const allMenu = $("header .btn_all_menu");
  const header = $("header");
  const allMenuBg = $(".allMenuWrapBg");

  const onClick = (e) => {
    e.preventDefault();
    header.toggleClass("active");
  };
  allMenu.on("click", onClick);
  allMenuBg.on("click", onClick);
};

const initVisual = () => {
  const visualSlider = $(".visual .visual_slider li");
  const visualNav = $(".visu_nav li");
  const sliderLength = visualSlider.length;
  let index = 0;

  const resetClass = () => {
    visualSlider.removeClass("On");
    visualNav.removeClass("active");
  };
  const activateIndex = (idx) => {
    visualSlider.eq(idx).addClass("On");
    visualNav.eq(idx).addClass("active");
  };

  const onTransitionEnd = (e) => {
    if ($(e.target).index() === index) {
      resetClass();
      index = index === sliderLength - 1 ? 0 : index + 1;
      activateIndex(index);
    }
  };
  const onNavClick = (e) => {
    index = $(e.target).index();
    resetClass();
    activateIndex(index);
  };

  $(".visual .visual_slider").on("transitionend", onTransitionEnd);
  visualNav.on("click", onNavClick);
  activateIndex(0);
};

const moving = () => {};

(function () {
  let ani;

  $(window).on("load", () => {
    const header = $("header");
    const visual = $(".visual");
    ani = $(".ani");

    header.addClass("load");
    visual.addClass("down");

    initAllMenu();
    initVisual();
  });

  $(window).on("load scroll", function () {
    const header = $("header");
    const visual = $(".visual");

    const headerHeight = header.outerHeight();
    const visualHeight = visual.outerHeight();
    const scrollTop = $(window).scrollTop(); // 화면 높이값

    if (visualHeight <= scrollTop + headerHeight) {
      header.addClass("down");
    } else {
      header.removeClass("down");
    }
  });

  $(window).on("load, resize scroll", () => {});
})();
