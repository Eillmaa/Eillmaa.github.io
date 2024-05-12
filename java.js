window.onscroll = function () {
  scrollingFunction();
};
function scrollingFunction() {
  if (document.body.scrollTop > 35 || document.documentElement.scrollTop > 35) {
    document.getElementById("navibar").style.padding = "20px 10px";
  } else {
    document.getElementById("navibar").style.padding = "60px 10px";
  }
}
