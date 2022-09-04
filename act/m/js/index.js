//index.js
$(function () {
    //초기설정버튼색상

    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        centeredSlides: true,
        autoplay: 2500,
        autoplayDisableOnInteraction: false
    });

    //    $('.btngrp li:first').css({
    //        color: "#d3313a"
    //    });

    //    var i = 0;
    //
    //    function slide() {
    //        i++;
    //        if (i == 4) {
    //            $('.slide').css({
    //                left: 0
    //            });
    //            i = 1;
    //        }
    //        $('.slide').animate({
    //            left: (-100 * i) + '%'
    //        }, 'slow');
    //
    //        //버튼 색상 초기화
    //        $('.btngrp li').css({
    //            color: "#eee"
    //        });
    //
    //        $('#btn' + i).css({
    //            color: "#d3313a"
    //        });
    //
    //        if (i === 3) {
    //            $('#btn0').css({
    //                color: "#d3313a"
    //            });
    //        }
    //    } //slide();
    //
    //    var slideSt = setInterval(function () {
    //        slide();
    //    }, 3000);
    //    $('.slide').hover(
    //        function () {
    //            clearInterval(slideSt)
    //        },
    //        function () {
    //            slideSt = setInterval(function () {
    //                slide();
    //            }, 4000);
    //        }
    //    ); //hover();

    //    $('.btngrp li').click(function () {
    //
    //        gbtn = $(this).attr('id');
    //        gbtn = Number(gbtn.substr(3, 1)); //btn1
    //        console.log(gbtn);
    //
    //        $('.btngrp li').css({
    //            color: '#eee'
    //        });
    //
    //        $(this).css({
    //            color: '#d3313a'
    //        });
    //
    //        $('.slide').animate({
    //            left: (-100 * gbtn) + '%'
    //        });


    //    });
    //    //3.상단 햄버거메뉴 클릭 시 사이드바 나타내기
    $('.burger-check').click(function () {
        $('#gnb').stop().slideToggle(300);
    });
    $('#gnb>ul>li>a').click(function () {
        $(this).siblings('ul').stop().slideToggle(300);
    });

    //
    //
    //4. moter 이동시키기
    function moterAuto() {
        setInterval(motermove, 10);
    }
    moterAuto();
    var dis = 0;

    function motermove() {
        dis++;

        $('.moter').css({
            right: dis + 'px'
        });
        if (dis === 500) {
            dis = 0;
            $('.moter').css({
                right: 0
            });
        }
    }
    //
    //
    //
    //5.comu flow시키기
    var acall;
    $(function () {
        acall = setInterval(comuFlow, 20);
    });

    var fnum = 0;

    var fwidth = $('.comuslider').width() - ($('.comu-box').width() * 2);
    console.log(fwidth);

    function comuFlow() {
        fnum++;
        if (fnum > fwidth) {
            $('.comuslider').append($('.comu-box')).first().css({
                left: 0
            });
            fnum = 0;
        } else {
            $('.comuslider').css({
                left: -fnum + 'px'
            });
        }
    }


    //6.플레이버튼 스탑버튼 comuslider 호버시 멈춤
    var movst = 0; //광클막기

    $('.stopbtn').click(function () {
        clearInterval(acall);
        movst = 0; //초기화
        $('.playbtn').click(function () {
            if (movst === 1) return false;
            movst = 1; //광클막기
            acall = setInterval(comuFlow, 20);
        });
    });


    $('.sns-img:gt(3)').hide();

    $('#loadMore').click(function (e) {
        e.preventDefault();
        $('.sns-img:hidden').slice(0, 4).slideDown();
        if ($('.sns-img:hidden').length === 0) {
            $('#loadMore').fadeOut();
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top - 120
        }, 1500);
    });
    //7.top버튼 클릭 시 상단으로 이동
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    //8.스크롤시
    var gap = 200; //높이값 차이 주기
    var gap3 = 100;
    var checkf = 0; //참,거짓 여부확인
    var a1pos, a2pos, a3pos, a4pos, a5pos, a6pos; //높이값 변수

    var menui = $('.ch-grid');
    var stam = $('.start-wrap');

    $(window).scroll(function () {
        var scVal = $(this).scrollTop();
        console.log('스크롤값:' + scVal);
        var chItem = a2pos - gap;
        var sTam = a5pos - gap;

        a1pos = $('.swiper-container').offset().top;
        a2pos = $('.menu').offset().top;
        a3pos = $('.deli').offset().top;
        a4pos = $('.comu').offset().top;
        a5pos = $('.start').offset().top;
        a6pos = $('.sns').offset().top;
        console.log(a1pos, a2pos, a3pos, a4pos, a5pos, a6pos);
        //헤더변경하기


        //menu item 나타내기
        if (!checkf) {
            if (scVal > chItem) {
                menui.addClass('active');
                checkf = 1;
            }
            checkf = 0;
        }


        if (scVal > sTam) {
            stam.addClass('active');
        }
    });
}); //jQuery();
//높이값에 따른 효과
