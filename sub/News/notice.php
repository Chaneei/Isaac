<?include("header.php")?>
<?

    $sql = "SELECT * from board 
    where 
    title like '%".$_GET['search']."%' 
    or 
    body like '%".$_GET['search']."%' 
    order by no desc";


    $result = mysqli_query($con, $sql);

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
            <p><strong>이삭토스트 소식</strong>을 알아보세요</p>
            <form name="searchfrm">
                <div class="searchBox">
                    <div class="keyword"><input type="text" name="search" placeholder="검색어를 입력해 주세요."></div>
                    <button>검색</button>
                </div>
            </form>

            <div class="noticeBox">
                <table>
                    <colgroup>
                        <col width="5%">
                        <col width="60%">
                        <col width="10%">
                        <col width="10%">
                    </colgroup>

                    <thead>
                        <tr>
                            <th>번호</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일자</th>
                        </tr>
                    </thead>

                    <tbody>
                        <?
                            while($info = mysqli_fetch_array($result)){
                        ?>
                            <tr>
                                <td><?=$info['no']?></td>
                                <td class="title">
                                    <a href="view.php?no=<?=$info['no']?>"><?=$info['title']?></a>
                                </td>
                                <td><?=$info['writer']?></td>
                                <td><?=$info['time']?></td>
                            </tr>

                        <?
                            }
                        ?>
                    </tbody>
                </table>


                <div class="writeBtn"><button onclick="location.href ='input.php';">글쓰기</button></div>

            </div>



            <div class="page">

                <a href="#" class="left">&lt;</a>

                <ol>
                    <li class="active"><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ol>

                <a href="#" class="right">&gt;</a>

            </div>
        </article>

    </section>


<?include("../../footer.php")?>
