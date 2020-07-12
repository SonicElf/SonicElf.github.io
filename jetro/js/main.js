$(function() {

    $('.slider__inner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider__thumbs',
    });

    $('.slider__thumbs').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider__inner',
        dots: true,
        focusOnSelect: true,
    });
});