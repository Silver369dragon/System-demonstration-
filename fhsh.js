$('.slider-1').slick({
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000
});
 