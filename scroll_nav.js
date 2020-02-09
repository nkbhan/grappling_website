var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        document.getElementsByClassName("main-nav")[0].style.top = "0";
    } else {
        document.getElementsByClassName("main-nav")[0].style.top = "-50px";
    }
    prevScrollpos = currentScrollPos;
}
