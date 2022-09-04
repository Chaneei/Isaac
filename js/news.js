//news.js

$(function () {

    $('.mtxt').animate({
        top: "50%"
    }, 1000);
    $('#gnb ul>li').mouseenter(function () {
        $(this).find('ul.smenu').stop().slideDown(300);
    }).mouseleave(function () {
        $(this).find('ul.smenu').stop().slideUp(300);
    });

    //3.상단 햄버거메뉴 클릭 시 사이드바 나타내기
    $('.burger-check').click(function () {
        $('#gnb-menu').stop().toggle(300);
    });


    $(".eitem").slice(0, 6).show();

    $('#loadMore').click(function (e) {
        e.preventDefault();
        $('.eitem:hidden').slice(0, 3).slideDown();
        if ($('.eitem:hidden').length === 0) {
            $('#loadMore').fadeOut();
        }
    });

    $('.tmenu li a').click(function () {

        var idx = $(this).parent().index();
        console.log(idx);

        $('.top-menu li').eq(idx).addClass('selM').siblings().removeClass('selM');
        //        $('.mbig-wrap>li').stop().hide().eq(idx).stop().show();
    });

    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    var head = $('header');
    $(window).scroll(function () {
        var scTop = $(this).scrollTop();
        //        console.log(scTop);
        if (scTop > 0) {
            head.addClass('newh');
        } else {
            head.removeClass('newh');
        }
    });
});
