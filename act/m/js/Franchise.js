//Franchise
$(function () {
    var clickon = 0;
    var pno = 0;
    var p1pos, p2pos, p3pos;

    $('.burger-check').click(function () {
        $('#gnb').stop().slideToggle(300);
    });
    $('#gnb>ul>li>a').click(function () {
        $(this).siblings('ul').stop().slideToggle(300);
    });

    $('.mwrap h2').animate({
        opacity: 1
    }, 1000);

    $('.top-menu a').click(function (e) {
        e.preventDefault();
        var idx = $(this).parent().index();
        $('.top-menu li').eq(idx).addClass('selM').siblings().removeClass('selM');
        $('.tabs>div').hide().eq(idx).show();
    });


    var head = $('header');
    $(window).scroll(function () {
        if (clickon === 1) return false;
        var scTop = $(this).scrollTop();
        //        console.log(scTop);
        //        if (scTop > 0) {
        //            head.addClass('newh');
        //        } else {
        //            head.removeClass('newh');
        //        }

        if (scTop > 500) {
            $('#bnavi').fadeIn(300).css({
                position: "fixed",
                top: "30%"
            });
        } else {
            $('#bnavi').fadeOut(300);
        }

        if (scTop > p1pos && scTop < p1pos + 200) {
            pno = 0;
            chgnavi();
        }
        // 2번째 페이지
        else if (scTop > p2pos - 300 && scTop < p2pos) {
            pno = 1;
            chgnavi();
        }
        // 3번째 페이지
        else if (scTop > p3pos - 400 && scTop < p3pos) {
            pno = 2;
            chgnavi();
        }
    });


    $(function () {
        //스크롤 액션 기준요소 top값 셋팅
        p1pos = $('#page1').offset().top;
        p2pos = $('#page2').offset().top;
        p3pos = $('#page3').offset().top;

        $('#bnavi a').click(function (e) {
            e.preventDefault();

            clickon = 1; //스크롤 이벤트 막기!

            //클릭된 a태그의 li순번
            var bidx = $(this).parent().index();
            pno = bidx;

            var pid = $(this).attr('href'); //#page1~3
            var pagepos = $(pid).offset().top;

            //스크롤 애니메이션
            $('html, body').animate({
                scrollTop: (pagepos - 200) + 'px'
            }, 800, 'easeInOutQuint', function () {
                click_sts = 0;
            });
            chgnavi();
        });
    });

    function chgnavi() {
        $('#bnavi li').eq(pno).addClass('selB').siblings().removeClass('selB');
    }


    $('.qna .question').click(function () {
        $(this).siblings('.answer').fadeToggle(300);
    });

    $('.btn-top').click(function (e) {
        e.preventDefault();
        $('html,body').stop().animate({
            scrollTop: 0
        }, 500);
    });

    $('.sub').eq(0).show();
    $('.map-pos>li').click(function (e) {
        e.preventDefault();
        var sidx = $(this).index();
        //        console.log(sidx);
        $('.map-pos>li').eq(sidx).children('.sub').stop().slideToggle(300);
        $('.map-pos>li').not(this).children('.sub').stop().slideUp(300);
    });


    $('.qbtn').click(function (e) {
        e.preventDefault();
        $('#qmodal').fadeIn(300);

    });

    $('.qmcbtn').click(function (e) {
        e.preventDefault();
        $('#qmodal').fadeOut(300);
    });

    $('.btn-sub').click(function () {
        $('#qmodal').fadeOut(300);
        $('#qquit').fadeIn(300);
    });
    $('.confirm>a').click(function (e) {
        e.preventDefault();
        $('#qquit').fadeOut(300);
    });
});
