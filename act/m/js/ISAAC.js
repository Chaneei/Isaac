//ISAAC.js

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
    //4.스크롤값에 의한 변화
    $(window).scroll(function () {
        var scVal = $(this).scrollTop();
        console.log('스크롤값:' + scVal);
        var a1pos, a2pos;
        var gap = 200;
        var gap2 = 300;

        a1pos = $('.story').offset().top;
        a2pos = $('.banner').offset().top;
        a3pos = $('.history').offset().top;

        var storyChg = a1pos - gap2;
        var storyChg2 = a1pos - gap;

        if (scVal > storyChg) {
            $('.tbox').animate({
                right: 0,
                opacity: 1
            }, 1000, 'easeOutQuint');
        }

        if (scVal > storyChg2) {
            $('.sbox').animate({
                left: 0,
                opacity: 1
            }, 1000, 'easeOutQuint');
        }
    });



    //연혁 드래그
    $('.his-area').draggable({
        axis: 'y'
        //contaiment: ".his-area",
    });

    $('.his-area').css({
        transition: 'all .6s ease-out'
    });

    $('.his-wrap').on('mouseup mousemove', function () {

        //1.his-area 값구하기
        //var hTop = $('.his-area').offset().top;
        //console.log("상단offset: "+hTop); //2822.890625

        var hTop = $('.his-area').position().top;
        console.log("1. his-wrap(보여지는부분)기준으로 his-area(전체부모)의 postion.top(): " + hTop);
        //0, 위로 올라갈수록 -값

        var totalHeignt = $('.his-area').height();
        console.log("2. his-area 전체높잇값: " + totalHeignt); //총 높잇값 3381


        //2. 첫 번째 한계값 (총 너비의 1/4)\
        //var sPoint = $('.his-area').height() - 200;
        //console.log("상단고정값:" + sPoint);

        var sPoint = $('.his-wrap').height() / 4; //237.5px, 마지막 공간
        console.log("3. 보여지는 영역 his-wrap의 1/4: " + sPoint);


        //3. 마지막 한계값
        //var lPoint = $('.his-cont:last').height();
        //console.log('마지막고정값:' + lPoint);
        var lastConheight = $('.his-cont').last().height();
        console.log("4-1. 마지막 컨텐츠의 높잇값: " + lastConheight); //63.75 (끝나는 컨텐츠의 공간이 너무 적음)

        var lheight = $('.his-area').height() - sPoint;
        console.log("4-2. his-area 총 높잇값에서 보여지는 영역의 1/4을 뺀 값, 마지막 한계점: " + lheight); //3143.5

        var cPoint = totalHeignt - 500;
        console.log("4-3. 마지막한계점 위칫값 기준: " + cPoint); //2701
        //마지막에 고정으로 있어야 할 위치의 값 확인


        if (hTop > 0) {
            $('.his-area').css({
                top: '0px'
            });
        } else if (hTop < -cPoint) {
            $('.his-area').css({
                top: -cPoint + 'px'
            });
        }

        //2. 시작점 기준이 보여지는 공간의 1/4일 때
        //        if(hTop > sPoint) {
        //            $('.his-area').css({
        //                //top: sPoint + 'px'
        //                top: (sPoint-100) + 'px'
        //            });
        //        }else if(hTop < -cPoint) {
        //            $('.his-area').css({
        //                top: -cPoint + 'px'
        //            });
        //        } 


    });

    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);

    });
});
