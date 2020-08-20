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
$('[data-form=consultation]').on('click', function() {
$('.overlay, #consultation').fadeIn()
});
$('.modal__close').on('click', function(){
$('.overlay, #order, #consultation, #thanks').fadeOut()
});
$('.catalog__button').each(function(i){
  $(this).on('click', function(){
    $('#order .modal__subtitle').text($('.catalog__header').eq(i).text());
    $('.overlay, #order').fadeIn('slow');
  });
});
$('input[name=phone]').mask("+380(99) 999-99-99");
$('form').submit(function(e) {
e.preventDefault();
$.ajax({
  type: "POST",
  url: "mailer/smart.php",
  data: $(this).serialize()
}).done(function() {
  $(this).find("input").val("");
  $('form').trigger('reset');
  $('#order, #consultation').fadeOut();
  $('#thanks, .overlay').fadeIn('slow');
});
});
$(window).scroll(function(){
if ($(this).scrollTop() > 1200) {
  $('.up').fadeIn();
} else {
  $('.up').fadeOut();
}
});
$("a[href^='#']").click(function(){
  const _href = $(this).attr("href");
  $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
  return false;
});
});
})(jQuery);