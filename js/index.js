//index.js
$(function () {

    //1.상단메뉴 호버효과
    $('#gnb ul>li').mouseenter(function () {
        $(this).find('ul.smenu').stop().slideDown(300);
    }).mouseleave(function () {
        $(this).find('ul.smenu').stop().slideUp(300);
    });

    $(function () {
        $('.close').click(function () {
            $('#badge').hide();
        });
    });
    //초기설정버튼색상
    $('.btngrp li:first').css({
        color: "#d3313a"
    });

    var i = 0;

    function slide() {
        i++;
        if (i == 4) {
            $('.banner-list').css({
                left: 0
            });
            i = 1;
        }
        $('.banner-list').animate({
            left: (-100 * i) + '%'
        }, 'slow');

        //버튼 색상 초기화
        $('.btngrp li').css({
            color: "#eee"
        });

        $('#btn' + i).css({
            color: "#d3313a"
        });

        if (i === 3) {
            $('#btn0').css({
                color: "#d3313a"
            });
        }
    } //slide();

    var slideSt = setInterval(function () {
        slide();
    }, 3000);


    $('.banner-list').hover(
        function () {
            clearInterval(slideSt)
        },
        function () {
            slideSt = setInterval(function () {
                slide();
            }, 4000);
        }
    ); //hover();

    $('.btngrp li').click(function () {

        gbtn = $(this).attr('id');
        gbtn = Number(gbtn.substr(3, 1)); //btn1
        console.log(gbtn);

        $('.btngrp li').css({
            color: '#eee'
        });

        $(this).css({
            color: '#d3313a'
        });

        $('.banner-list').animate({
            left: (-100 * gbtn) + '%'
        });


    });


    //3.상단 햄버거메뉴 클릭 시 사이드바 나타내기
    $('.burger-check').click(function () {
        $('#gnb-menu').stop().toggle(300);
    });


    //4. moter 이동시키기
    function moterAuto() {
        setInterval(motermove);
    }
    moterAuto();
    var dis = 0;
    var deliwth = $('.deli').width();

    function motermove() {
        dis++;

        $('.moter').css({
            right: dis + 'px'
        });
        if (dis === deliwth) {
            dis = 0;
            $('.moter').css({
                right: 0
            });
        }
    }


    //5.comu flow시키기
    var acall;
    $(function () {
        acall = setInterval(comuFlow, 20);
    });

    var fnum = 0;

    function comuFlow() {
        fnum++;
        //    console.log("이동거리:" + fnum);
        if (fnum > 1440) {
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

    $('.playbtn').click(function () {
        if (movst === 1) return false;
        movst = 1; //광클막기
        acall = setInterval(comuFlow, 20);
    });
    $('.stopbtn').click(function () {
        clearInterval(acall);
        movst = 0; //초기화
    });

    $('.comuslider>div', this).hover(function () {
        clearInterval(acall);
    }, function () {
        acall = setInterval(comuFlow, 20);
    });

    //7.top버튼 클릭 시 상단으로 이동
    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    //8.스크롤시
    var gap = 400; //높이값 차이 주기
    var gap2 = 200;
    var gap3 = 100;
    var checkf = 0; //참,거짓 여부확인
    var a1pos, a2pos, a3pos, a4pos, a5pos, a6pos; //높이값 변수

    var menui = $('.ch-grid');
    var head = $('header');
    var snsm = $('.sns-wrap');
    //.ch-grid  스크롤에 따라 item opacity변경

    //    var snsAction = function () {
    //
    //        $('.sns-wrap').animate({
    //            top: '0px',
    //            opacity: 1
    //        }, 1000, 'easeInOutQuint');
    //    };

    $(window).scroll(function () {
        var scVal = $(this).scrollTop();
        console.log('스크롤값:' + scVal);
        var chItem = a2pos - gap;
        //console.log(chItem);
        var deliItem = a2pos + gap2;
        //console.log(deliItem);
        var snsItem = a5pos + gap3;
        //console.log(snsItem);

        a1pos = $('.main').offset().top;
        a2pos = $('.menu').offset().top;
        a3pos = $('.deli').offset().top;
        a4pos = $('.comu').offset().top;
        a5pos = $('.start').offset().top;
        a6pos = $('.sns').offset().top;
        console.log(a1pos, a2pos, a3pos, a4pos, a5pos, a6pos);
        //헤더변경하기
        if (scVal > 0) {
            head.addClass('newh');
        } else {
            head.removeClass('newh');
        }

        //menu item 나타내기
        if (!checkf) {
            if (scVal > chItem) {
                menui.addClass('active');
                checkf = 1;
            }
            checkf = 0;
        }

        //deli 스크롤에 따른 이벤트
        if (scVal > deliItem) {
            //alert('도착했어!!');
            $('.deli-txt').delay(500).animate({
                right: 540 + 'px'
            }, 2000, 'easeOutElastic');
            $('.delibtn').delay(500).animate({
                right: 540 + 'px'
            }, 2000, 'easeOutElastic');
        }

        //        $('.sns-wrap').css({
        //            top
        //        });
        //sns 스크롤에 따른 이벤트
        if (scVal > snsItem) {
            snsm.addClass('ch');
        }

    });
}); //jQuery();
//높이값에 따른 효과
