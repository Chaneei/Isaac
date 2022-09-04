<?include("act/db.php");?>


<!DOCTYPE html>
<html lang="ko">

<head>
    <meta charset="UTF-8">
    <title>ISAAC TOAST</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR&display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="img/favicon.ico">
    <link rel="stylesheet" href="css/reset.css">
    <link rel="stylesheet" href="css/header.css">
    <link rel="stylesheet" href="css/index.css">
    <link rel="stylesheet" href="css/footer.css">


    <script src="js/jquery-1.7.2.min.js"></script>
    <script src="js/jquery-ui.min.js"></script>
    <script src="js/index.js"></script>

</head>

<body>
    <header>
        <div class="head-wrap">
            <h1 class="logo"><a href="/index.php"><img src="img/logo.png" alt="로고"></a>
            </h1>

            <nav id="gnb">
                <ul>
                    <li><a href="sub/ISAAC/ISAAC.php">ISAAC</a></li>
                    <li><a href="sub/Franchise/Franchise1.php">FRANCHISE </a>
                        <ul class="smenu">
                            <li><a href="sub/Franchise/Franchise1.php">창업안내</a></li>
                            <li><a href="sub/Franchise/Franchise2.php">추천상권</a></li>
                            <li><a href="sub/Franchise/Franchise3.php">가맹문의</a></li>
                        </ul>
                    </li>
                    <li><a href="sub/Menu/menu1.php">MENU</a>
                        <ul class="smenu">
                            <li><a href="sub/Menu/menu1.php">TOAST</a></li>
                            <li><a href="sub/Menu/menu2.php">COFFEE&amp;TEA</a></li>
                            <li><a href="sub/Menu/menu3.php">BEVERAGE</a></li>
                        </ul>
                    </li>
                    <li><a href="sub/Store/store.php">STORE</a></li>
                    <li>
                        <a href="sub/News/news.php">NEWS</a>
                        <ul class="smenu">
                            <li><a href="sub/News/news.php">EVENT</a></li>
                            <li><a href="sub/News/notice.php">공지사항</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <input class="burger-check" type="checkbox" id="burger-check" /><label class="burger-icon" for="burger-check"><span class="burger-sticks"></span></label>

        </div>
        <div id="gnb-menu">
            <ul>
                <li><a href="/index.php">HOME</a></li>
                <li><a href="sub/ISAAC/ISAAC.php">ISAAC</a></li>
                <li><a href="sub/Franchise/Franchise1.php">FRANCHISE</a></li>
                <li><a href="sub/Menu/menu1.html">MENU</a></li>
                <li class="small"><a href="sub/Store/store.php">STORE</a></li>
                <li class="small2"><a href="sub/News/news.php">NEWS</a></li>
                <li class="copy">Copyright&copy;ISAAC.</li>
            </ul>
        </div>
    </header>