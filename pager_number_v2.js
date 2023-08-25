let perPage = 12,

    numPages = 3,

    firstText = "« First",

    lastText = "Last »",

    prevText = "«",

    nextText = "»",

    urlactivepage = location.href,

    batas = "<span>...</span>",

    home_page = "/";



function looppagecurrentg(e) {
    let a = "";
    pageNumber = parseInt(numPages / 2), pageNumber == numPages - pageNumber && (numPages = 2 * pageNumber + 1), pageStart = currentPageNo - pageNumber, pageStart < 1 && (pageStart = 1), lastPageNo = parseInt(e / perPage) + 1, lastPageNo - 1 == e / perPage && (lastPageNo -= 1), pageEnd = pageStart + numPages - 1, pageEnd > lastPageNo && (pageEnd = lastPageNo), a += "<span class='showpageOf'>Page " + currentPageNo + " of " + lastPageNo + "</span>";
    let t = parseInt(currentPageNo) - 1;
    currentPageNo > 1 && (a += "page" == currentPage ? '<a class="showpage firstpage" href="' + home_page + '">' + firstText + "</a>" : '<a class="displaypageNum firstpage" href="/search/label/' + postLabel + "?&max-results=" + perPage + '">' + firstText + "</a>"), currentPageNo > 2 && (a += 3 == currentPageNo ? "page" == currentPage ? '<a class="showpage" href="' + home_page + '">' + prevText + "</a>" : '<a class="displaypageNum" href="/search/label/' + postLabel + "?&max-results=" + perPage + '">' + prevText + "</a>" : "page" == currentPage ? '<a class="displaypageNum" href="#" onclick="redirectpage(' + t + ');return false">' + prevText + "</a>" : '<a class="displaypageNum" href="#" onclick="redirectlabel(' + t + ');return false">' + prevText + "</a>"), pageStart > 1 && (a += "page" == currentPage ? '<a class="displaypageNum" href="' + home_page + '">1</a>' : '<a class="displaypageNum" href="/search/label/' + postLabel + "?&max-results=" + perPage + '">1</a>'), pageStart > 2 && (a += batas);
    for (var s = pageStart; s <= pageEnd; s++) a += currentPageNo == s ? '<span class="pagecurrent">' + s + "</span>" : 1 == s ? "page" == currentPage ? '<a class="displaypageNum" href="' + home_page + '">1</a>' : '<a class="displaypageNum" href="/search/label/' + postLabel + "?&max-results=" + perPage + '">1</a>' : "page" == currentPage ? '<a class="displaypageNum" href="#" onclick="redirectpage(' + s + ');return false">' + s + "</a>" : '<a class="displaypageNum" href="#" onclick="redirectlabel(' + s + ');return false">' + s + "</a>";
    pageEnd < lastPageNo - 1 && (a += batas), pageEnd < lastPageNo && (a += "page" == currentPage ? '<span class="displaypageNum"><a href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastPageNo + "</a></span>" : '<span class="displaypageNum"><a href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastPageNo + "</a></span>");
    let r = parseInt(currentPageNo) + 1;
    currentPageNo < lastPageNo - 1 && (a += "page" == currentPage ? '<a class="displaypageNum" href="#" onclick="redirectpage(' + r + ');return false">' + nextText + "</a>" : '<a class="displaypageNum" href="#" onclick="redirectlabel(' + r + ');return false">' + nextText + "</a>"), currentPageNo < lastPageNo && (a += "page" == currentPage ? '<a class="displaypageNum lastpage" href="#" onclick="redirectpage(' + lastPageNo + ');return false">' + lastText + "</a>" : '<a class="displaypageNum lastpage" href="#" onclick="redirectlabel(' + lastPageNo + ');return false">' + lastText + "</a>");
    for (var p = document.getElementsByName("pageArea"), n = document.getElementById("blog-pager"), l = 0; l < p.length; l++) p[l].innerHTML = a;
    p && p.length > 0 && (a = ""), n && (n.innerHTML = a)
}

function totalcountdata(e) {
    let a = e.feed;
    looppagecurrentg(parseInt(a.openSearch$totalResults.$t, 10))
}

function pagecurrentg() {
    let e = urlactivepage; - 1 != e.indexOf("/search/label/") && (postLabel = -1 != e.indexOf("?updated-max") ? e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?updated-max")) : e.substring(e.indexOf("/search/label/") + 14, e.indexOf("?&max"))), -1 == e.indexOf("?q=") && -1 == e.indexOf(".html") && (-1 == e.indexOf("/search/label/") ? (currentPage = "page", currentPageNo = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + 'feeds/posts/summary?max-results=1&alt=json-in-script&callback=totalcountdata"><\/script>')) : (currentPage = "label", -1 == e.indexOf("&max-results=") && (perPage = 20), currentPageNo = -1 != urlactivepage.indexOf("#PageNo=") ? urlactivepage.substring(urlactivepage.indexOf("#PageNo=") + 8, urlactivepage.length) : 1, document.write('<script src="' + home_page + "feeds/posts/summary/-/" + postLabel + '?alt=json-in-script&callback=totalcountdata&max-results=1" ><\/script>')))
}

function redirectpage(e) {
    jsonstart = (e - 1) * perPage, noPage = e;
    let a = document.getElementsByTagName("head")[0],
        t = document.createElement("script");
    t.type = "text/javascript", t.setAttribute("src", home_page + "feeds/posts/summary?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), a.appendChild(t)
}

function redirectlabel(e) {
    jsonstart = (e - 1) * perPage, noPage = e;
    let a = document.getElementsByTagName("head")[0],
        t = document.createElement("script");
    t.type = "text/javascript", t.setAttribute("src", home_page + "feeds/posts/summary/-/" + postLabel + "?start-index=" + jsonstart + "&max-results=1&alt=json-in-script&callback=finddatepost"), a.appendChild(t)
}

function finddatepost(e) {
    post = e.feed.entry[0];
    let a = post.published.$t.substring(0, 19) + post.published.$t.substring(23, 29),
        t = encodeURIComponent(a);
    if ("page" == currentPage) var s = "/search?updated-max=" + t + "&max-results=" + perPage + "#PageNo=" + noPage;
    else s = "/search/label/" + postLabel + "?updated-max=" + t + "&max-results=" + perPage + "#PageNo=" + noPage;
    location.href = s
}
void 0 === firstText && (firstText = "First"), void 0 === lastText && (lastText = "Last"), pagecurrentg();
