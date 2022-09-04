<?include("header.php")?>
<?

    $no = $_GET['no'];
    $sql = "SELECT * from board where no=$no";
    $result = mysqli_query($con, $sql);
    $info = mysqli_fetch_array($result);

    $sql = "SELECT * FROM board WHERE `no`>$no AND (title LIKE '%{$_GET['search']}%' OR body LIKE '%{$_GET['search']}%') ORDER BY `no` ASC LIMIT 1";
    $result = mysqli_query($con, $sql);
    $pre = mysqli_fetch_array($result);

    $sql = "SELECT * FROM board WHERE `no`<$no AND (title LIKE '%{$_GET['search']}%' OR body LIKE '%{$_GET['search']}%') ORDER BY `no` DESC LIMIT 1";
    $result = mysqli_query($con, $sql);
    $next = mysqli_fetch_array($result);
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

            <div class="viewBox">
            <table>

                <thead>
                    <tr>
                        <th class="title"><?=$info['title']?></th>
                    </tr>
                    <tr>
                        <td class="writer"><span>작성자 : </span><?=$info['writer']?></td>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="content"><?=$info['body']?></td>
                    </tr>

                </tbody>
            </table>


                <div class="btngrp">
                <a href="notice.php" class="btn">목록</a>
                <a href="modify.php?no=<?=$no?>" class="btn">수정</a>
            </div>

            </div>



            <table class="pageBox">
                <tr>
                    <th>이전글</th>
                    <td>
                    <? if($pre['title']){ ?>
                        <a href="?no=<?=$pre['no']?>&search=<?=$_GET['search']?>">
                            <?=$pre['title']?>
                        </a>
                    <?}else{?> <span>이전 게시물이 없습니다.</span>
                        <?}?>
                </td>
                </tr>
                <tr>
                    <th>다음글</th>
                    <td>
                    <? if($next['title']){ ?>
                        <a href="?no=<?=$next['no']?>&search=<?=$_GET['search']?>">
                            <?=$next['title']?>
                        </a>
                        <?} else {?> <span>다음 게시글이 없습니다.</span>
                            <?}?>
                </td> 
                </tr>
            </table>

        </article>

    </section>


<?include("../../footer.php")?>