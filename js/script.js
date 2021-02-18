$(function() {
  $('.services__slider').slick({
    prevArrow: '<button class="slick-prev slick-btn"><img src="images/arrow-prev.svg" alt=""></button>',
    nextArrow: '<button class="slick-next slick-btn"><img src="images/arrow-next.svg" alt=""></button>',
    autoplay: true,
    responsive: [{
      breakpoint: 1061,
      settings: {
        arrows: false
      }
    }]
  });

  $('.header__burger').on('click', function() {
    $('.header__menu-list').toggleClass('active');
    $('.header__burger').toggleClass('active');
  });
});