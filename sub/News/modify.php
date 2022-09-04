<?include("header.php");?>

<?


    if($no = $_GET['no']){
        $sql = "SELECT * from board where no=$no";
        $result = mysqli_query($con, $sql);
        $info = mysqli_fetch_array($result);
    }

    if(!empty($_POST['title']) && !empty($_POST['body'])){

        $sql = "UPDATE board
            set
            title='{$_POST['title']}',
            body='{$_POST['body']}'
            where
            no = '{$_POST['no']}'";


        mysqli_query($con, $sql);

        print "<script>alert('글이 정상적으로 수정되었습니다.');</script>";
        print "<script>location.href='view.php?no=".$no."';</script>";

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
                                <input type="text" name="title" value="<?=$info['title']?>">
                            </div>
                            
                            <div class="writer">
                                <span>작성자</span>
                                <input type="text" name="writer" value="<?=$info['writer']?>">
                            </div>

                            <div class="content">
                                <span>내용</span>
                                <textarea name="body" id=""><?=$info['body']?></textarea>
                                <input type="hidden" name="no" value="<?=$no?>">
                            </div>
                        </div>


                        <div class="btngrp">
                            <a href="#" class="btn abtn" onclick="location.href='notice.php';return false;">목록</a>
                            <input type="submit" class="btn" value="수정">
                        </div>

                    </div>
                </form>
        </article>
    </section>



<?include("../../footer.php");?>