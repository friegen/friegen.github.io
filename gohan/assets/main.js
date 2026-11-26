// ごはん屋さんで何食べよう？ の紹介ページ。tools/lp/build.py（gohan_android）が gohan/assets/ にコピーする
(function () {
  // スクロールで表示
  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("shown"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) { entry.target.classList.add("shown"); io.unobserve(entry.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();
