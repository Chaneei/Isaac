//store.js

$(function () {
    $('#gnb ul>li').mouseenter(function () {
        $(this).find('ul.smenu').stop().slideDown(300);
    }).mouseleave(function () {
        $(this).find('ul.smenu').stop().slideUp(300);
    });

    $('.burger-check').click(function () {
        $('#gnb-menu').stop().toggle(300);
    });

    $('.mtxt').animate({
        top: "50%"
    }, 1000);
});
