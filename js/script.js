$(function () {
  $(window).on('load scroll', function () {
    const header = $('header');
    const headerHeight = header.outerHeight();
    const visualHeight = $('.visual').outerHeight();
    const scrollTop = $(window).scrollTop(); // 화면 높이값

    header.addClass('load');
    if (visualHeight <= scrollTop + headerHeight) {
      header.addClass('down');
    } else {
      header.removeClass('down');
    }
  });
})();
