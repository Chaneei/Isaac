//news.js

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


    $(".eitem").slice(0, 4).show();

    $('#loadMore').click(function (e) {
        e.preventDefault();
        $('.eitem:hidden').slice(0, 4).slideDown();
        if ($('.eitem:hidden').length === 0) {
            $('#loadMore').fadeOut();
        }

        $('html,body').animate({
            scrollTop: $(this).offset().top + 1000
        }, 2000);
    });

    $('.tmenu li a').click(function () {

        var idx = $(this).parent().index();
        console.log(idx);

        $('.top-menu li').eq(idx).addClass('selM').siblings().removeClass('selM');

    });

    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);
    });
});
