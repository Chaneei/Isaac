

<?include("header.php");?>
<?

    if(!empty($_POST['title']) && !empty($_POST['body'])){

        $sql = "INSERT INTO board (title,writer,body) VALUES ('{$_POST['title']}','{$_POST['writer']}','{$_POST['body']}')";

        $result = mysqli_query($con, $sql) or die("DB error");
        if($result){
            $last_no = mysqli_insert_id($con);
        }

        print "<script>alert('글이 정상적으로 등록되었습니다.');</script>";
        print "<script>location.href='view.php?no=".$last_no."';</script>";
    }
?>
    <section>
        <article class="main">
            <div class="mtxt">
                <h2>NEWS</h2>
                <p><strong>이삭토스트 소식</strong>을 접해보세요</p>
            </div>
        </article>
        <article class="top-menu">
            <div class="tmenu-b">
                <ul class="tmenu">
                    <li><a href="news.php">NEWS</a></li>
                    <li class="selM"><a href="notice.php">공지사항</a></li>
                </ul>
            </div>
        </article>
        <article class="noticewrap">
            <h2>공지사항</h2>
            <form name="inputfrm" method="post">
                <div class="inputBox">
                    <div class="input">

                        <div class="title">
                            <span>제목</span>
                            <input type="text" name="title">
                        </div>

                        <div class="writer">
                            <span>작성자</span>
                            <input type="text" name="writer">
                        </div>

                        <div class="content">
                            <span>내용</span>
                            <textarea name="body" id=""></textarea>
                        </div>
                    </div>


                    <div class="btngrp">
                        <a href="#" class="btn abtn" onclick="location.href='notice.php';return false;">목록</a>
                        <input type="submit" class="btn" value="등록">
                    </div>

                </div>
            </form>
        </article>

    </section>

    <footer>
        <div class="footer-wrap clearfix">
            <div class="footer-logo">
                <h1><a href="/index.php"><img src="img/bt_logo.png" alt="바텀로고"></a></h1>
            </div>
            <div class="footer-main">
                <div class="footer-link">
                    <a href="#">회사소개</a> |
                    <a href="#">제휴/제안</a> |
                    <a href="#">고객의 소리</a> |
                    <a href="#">이용약관</a> |
                    <a href="#">개인정보방침</a> |
                    <a href="#">이메일무단수집거부</a>
                </div>
                <div class="footer-des">
                    <ul>
                        <li>(주)이삭 대표:김하경 / 사업자등로건호:305-81-70958 / 창업문의:1833-9299</li>
                        <li>서울산업본부: 서울시 송파구 중대로97 효원빌딩 6층 13층 / TEL:02-6959-1086</li>
                        <li>대전사무실: 대전광역시 중구 산서로 53번길 11 / TEL: 042-274-3060</li>
                        <li>대구사무실: 대구광역시 수성구 동대구로 376 범어숲화성파크드림S 상가 225호 / TEL: 053-746-3060</li>
                    </ul>
                    <p>Copyright&copy;ISAAC.All right Reserved.</p>
                </div>
            </div>
            <div>
                <a href="#" class="btn-top"><img src="img/top-btn.png" alt="위로가기"></a>
            </div>
        </div>

    </footer>
</body>

</html>


