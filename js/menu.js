//menu.js

$(function () {
    $('#gnb ul>li').mouseenter(function () {
        $(this).find('ul.smenu').stop().slideDown(300);
    }).mouseleave(function () {
        $(this).find('ul.smenu').stop().slideUp(300);
    });

    //3.상단 햄버거메뉴 클릭 시 사이드바 나타내기
    $('.burger-check').click(function () {
        $('#gnb-menu').stop().toggle(300);
    });

    $('.mtxt').animate({
        top: "50%"
    }, 1000);

    //상단 배너 슬라이더
    $('.slider ul li:last').prependTo('.slider ul');

    var chW = $('.slider ul li').width();
    console.log('margin-left: -' + chW);
    $('.slider ul').css('margin-left', -chW);

    $('.btnR').click(function () {
        $('.slider ul').animate({
            marginLeft: '-=' + $('.slider ul li').width()
        }, 'slow', function () {
            $('.slider ul li:first').appendTo('.slider ul');
            $('.slider ul').css('margin-left', -chW);
        })

    }); //btnR

    $('.btnL').click(function () {

        $('.slider ul').animate({
            marginLeft: '+=' + chW
        }, 'slow', function () {
            $('.slider ul li:last').prependTo('.slider ul');
            $('.slider ul').css('margin-left', -chW);
        });
    }); //btnL


    //메뉴변경시키기
    $('.top-menu a').click(function (e) {
        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        $('.top-menu li').eq(idx).addClass('selM').siblings().removeClass('selM');

        $('.mbig-wrap>li').hide().eq(idx).show();
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


    var tmenu = [
        "핫치플레 리챔과 딥치즈 소스의 만남! 리챔과 두번쨰 콜라보 메뉴",
        "통새우 커플릿,피클,양배추를 올리고 칠리와 핫스모크 소스로 맛을 더한 토스트",
        "통새우 커플릿,피클,양배추를 올리고 머스타드 소스로 맛을 더한 토스트",
        "트리플 소세지, 치즈, 양배추를 올리고 머스터드 소스로 맛을 더한 토스트",
        "더블 소세지, 치즈, 양배추를 올리고 머스터드 소스로 맛을 더한 토스트",
        "국내산 마늘과 달콤한 꿀로 풍부한 맛과 향을 모두 느낄 수 있는 허니갈릭햄치즈 토스트!",
        "쫄깃한 모짜렐라 치즈, 해쉬 포테이토와 베이컨의 만남! 이삭의 프리미엄 메뉴",
        "쫄깃한 모짜렐라 치즈와 그릴 향이 느껴지는 햄을 올려만든 피자 토스트",
        "딥치즈와 베이컨과 해쉬 포테이토의 풍성한 조화를 이룬 이삭의 인기 메뉴 토스트",
        "짭조름한 베이컨과 쫄깃한 피자치즈에 부드러운 치즈소스가 듬뿍 들어간 토스트",
        "햄치즈 토스트에 프레쉬한 양배추를 추가한 토스트",
        "매콤한 핫치킨 패티, 치즈, 피클, 양배추를 올리고 칠리 & 머스터드 소스로 맛을 낸 토스트",
        "달콤한 이삭 소스가 발린 토스트에 베이컨, 치즈, 양배추 등을 올린 인기 토스트",
        "달콤한 이삭 소스가 발린 토스트에 신선한 계란과 옥수수가 들어간 햄 & 치즈를 올린 이삭 대표메뉴",
        "햄치즈 토스트에 해쉬 포테이토를 추가 한 이삭의 믿고먹는 꿀조합 토스트",
        "달콤한 이삭 소스가 발린 베이글에 베이컨, 치즈, 계란 등을 올린 베이글 메뉴!",
        "불고기 패티, 치즈, 피클, 양배추를 올리고 칠리 & 바베큐 소스로 맛을 더한 토스트",
        "불갈비 패티, 치즈, 피클, 양배추를 올리고  칠리& 바베큐 소스로 맛을 낸 토스트"
    ];

    var tsmenu = [
        "계란, 콘, 모짜렐라 치즈, 리챔",
        "계란, 콘, 새우커틀릿, 양배추, 피클",
        "계란, 콘, 새우커틀릿, 양배추, 피클, 치즈",
        "계란, 콘, 치즈, 소세지, 양배추",
        "계란, 콘, 치즈, 소세지, 양배추",
        "계란, 콘, 치즈, 소세지, 양배추",
        "계란, 햄, 체다치즈",
        "계란, 콘, 치즈(모짜렐라/체다), 해쉬브라운, 베이컨, 무쌈",
        "계란, 콘, 치즈(모짜렐라/체다), 스테이크 햄, 피클",
        "계란, 콘, 모짜렐라 치즈, 베이컨, 해쉬브라운",
        "계란, 콘, 모짜렐라 치즈, 베이컨",
        "계란, 콘, 치즈, 햄, 양배추, 피클",
        "계란, 콘, 치즈, 핫치킨패티, 양배추, 피클",
        "계란, 콘, 치즈, 베이컨, 양배추, 무쌈",
        "계란, 콘, 햄, 치즈",
        "계란, 콘, 치즈, 햄, 해쉬브라운",
        "계란, 콘, 치즈, 불고기패티, 양배추, 피클",
        "계란, 콘, 치즈, 불갈비패티, 양배추, 피클"
    ];

    var cmenu = [
        "아라비카 100% 생두를 직접 로스팅한 원두 추출 신선하고 깊은 풍미가 살아있는 에스프레소",
        "아라비카 100% 원두로 추출한 에스프레소 2shot을 넣어 만든 신선한 아메리카노",
        "아라비카 100% 원두로 추출한 에스프레소 2 Shot 스팀밀크 or 신선한 우유를 넣어 부드러운 라떼",
        "아라비카 100% 에스프레소 2 shot 신선한 우유 & 바닐라 향이 가득한 라떼",
        "아라비카 100% 원두로 추출한 에스프레소 2 shot 신선한 우유, 달콤한 초콜릿 풍미 가득한 카페모카",
        "달콤한 휴식이 필요할 때 아라비카 100% 카라멜 라떼",
        "향긋한 얼그레이와 부드러운 우유의 만남",
        "시원하고 달콤하게! 복숭아맛 아이스 티",
        "마음까지 따뜻해지는 달콤 핫초코 무더운 여름 차갑게 먹는 초콜릿 한잔, 아이스 초코",
        "우리 땅, 한국의 맛, 보성 녹차",
        "우아하게 홍차 한잔, 부드러운 향기가 가득한 얼그레이"
    ];

    var bmenu = [
        "국산 딸기를 갈아만든 딸기 주스 이삭 토스트와 찰떡궁합!",
        "상큼 달콤 애플망고를 갈아 만든 애플망고 주스",
        "새콤한 키위를 갈아만든 키위 주스",
        "달콤한 바나나를 갈아 만든 바나나 주스",
        "상큼한 딸기, 달콤한 바나나의 만남 딸기 바나나 주스",
        "달콤한 바나나와 더 달콤한 초코의 만남 초코 바나나 주스",
        "자몽의 상큼함과 탄산의 청량함이 가득한 자몽 스파클링",
        "레몬의 상큼함과 탄산의 청량함이 가득한 레몬 스파클링",
        "청포도의 달콤함과 탄산의 청량함이 가득한 청포도 스파클링",
        "깔끔하고 달콤한 맛! 시원한 밀크 쉐이크",
        "달콤한 밀크와 상큼한 딸기와의 만남 상큼달콤 딸기 쉐이크",
        "달콤함으로 활력충전! 극강의 달콤함 초코 쉐이크"
    ];
    $('.mwrap>li>.menui').click(function (e) {
        e.preventDefault();
        var num = $(this).parent().index();
        console.log(num);
        var mtxt = $(this).parent().find('.tit').text();
        console.log(mtxt);
        $('#tmodal').fadeIn(300);
        $('#tmodal .mcont img').attr("src", "img/md" + (num + 1) + '.png');


        $('#tmodal .mcont .righttxt h2').text(mtxt);
        $('#tmodal .mcont .righttxt .con').text(tmenu[num]);

        $('#tmodal .mcont .righttxt .mspa').text(tsmenu[num]);
    });

    $('.mcont .cbtn').click(function (e) {
        e.preventDefault();
        $('#tmodal').fadeOut(300);
    });

    $('.ctwrap>li>.menui').click(function (e) {
        e.preventDefault();
        var num = $(this).parent().index();
        console.log(num);
        var mtxt = $(this).parent().find('.tit').text();
        console.log(mtxt);
        $('#cmodal').fadeIn(300);
        $('#cmodal .mcont img').attr("src", "img/mct" + (num + 1) + '.png');


        $('#cmodal .mcont .righttxt h2').text(mtxt);
        $('#cmodal .mcont .righttxt .con').text(cmenu[num]);
    });

    $('#cmodal .mcont .cbtn').click(function (e) {
        e.preventDefault();
        $('#cmodal').fadeOut(300);
    });

    $('.bwrap>li>.menui').click(function (e) {
        e.preventDefault();
        var num = $(this).parent().index();
        console.log(num);
        var mtxt = $(this).parent().find('.tit').text();
        console.log(mtxt);
        $('#bmodal').fadeIn(300);
        $('#bmodal .mcont img').attr("src", "img/mb" + (num + 1) + '.png');


        $('#bmodal .mcont .righttxt h2').text(mtxt);
        $('#bmodal .mcont .righttxt .con').text(bmenu[num]);
    });

    $('#bmodal .mcont .cbtn').click(function (e) {
        e.preventDefault();
        $('#bmodal').fadeOut(300);
    });
});
