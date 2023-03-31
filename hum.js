const scrollLinks = [...document.querySelectorAll(".scroll-link")];
// console.log(scrollLinks);
const linksContainer = document.querySelector(".links-container");

scrollLinks.forEach((link) => {
    // scrollLinks の中を1つずつ取ってくる
    // console.log(link);
    link.addEventListener("click", (e) => {
            // console.log(e);
        e.preventDefault();
        // デフォルトの動作を発生させない

        const id = e.target.getAttribute("href").slice(1);
            // getAttribute で場所を指定して、href を取ってくる
            // slice(1): 最初の一文字目を消す(# を消す)
            // console.log(id);
        const element = document.getElementById(id);
            // slice(1): 最初の一文字目を消したことで、id が探せるようになった
            // console.log(element);
        const navHeight = navbar.getBoundingClientRect().height;
            // nav の高さをとる 
            // console.log(navHeight);
        const fixedNav = navbar.classList.contains("fixed-navbar");
        // console.log(fixedNav);
        // t or f
        let position = element.offsetTop - navHeight;
        // console.log(position);
        // 開始値を ヘッターの高さの分だけ下げている-navのたかさ


        if (!fixedNav){
            position = position - navHeight;
            // About から始まる時が navHeight の分だけずれるので、
            // 0 or 10 の時はさらに navHeight の分だけ引く
            // nav の高さ60の分を引く
            // (!fixedNav)　＝　false であれば、動く
            // console.log(position);
        }

        window.scrollTo ({
            left: 0,
            top: position,
        });
        // console.log(position);
    });
});


