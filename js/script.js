$('.slider__inner').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 700,
    adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev left"><img src="img/fourth_section/chevron-left-solid.png"></button>',
    nextArrow: '<button type="button" class="slick-prev right"><img src="img/fourth_section/chevron-right-solid.png"></button>',
    responsive: [
        {
          breakpoint: 992,
          settings: {
            arrows: false,
            infinite: true,
            dots: true
          }
        },
      ]

    }
);
(function($) {
$(function() {
 $('div.catalog__tabs').on('click', 'button:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
});
$('.catalog__link').each(function(i) {
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.catalog__main-information').eq(i).toggleClass('catalog__main-information_active');
    $('.catalog__additional-information').eq(i).toggleClass('catalog__additional-information_active');
  })
});
$('.click_back').each(function(i) {
  $(this).on('click', function(e) {
    e.preventDefault();
    $('.catalog__main-information').eq(i).toggleClass('catalog__main-information_active');
    $('.catalog__additional-information').eq(i).toggleClass('catalog__additional-information_active');
  })
}); 
})
})(jQuery);