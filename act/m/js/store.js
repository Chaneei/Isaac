//store.js

$(function () {
    $('.burger-check').click(function () {
        $('#gnb').stop().slideToggle(300);
    });
    $('#gnb>ul>li>a').click(function () {
        $(this).siblings('ul').stop().slideToggle(300);
    });
    
    $('.mtxt').animate({
        opacity: 1
    }, 1000);
});
