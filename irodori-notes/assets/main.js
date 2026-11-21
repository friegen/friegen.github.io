// いろどりメモの紹介ページ。tools/lp/build.py（memo_android）が irodori-notes/assets/ にコピーする
(function () {
  // 言語を選んだら覚える（英語のページを開いたとき、自動でほかの言語に移らないように）
  document.querySelectorAll(".lang a[data-lang]").forEach(function (a) {
    a.addEventListener("click", function () {
      try { localStorage.setItem("irodori-lang", a.getAttribute("data-lang")); } catch (err) {}
    });
  });

  // 言語のメニューの外を押したら閉じる
  var menu = document.querySelector(".lang");
  document.addEventListener("click", function (ev) {
    if (menu && menu.open && !menu.contains(ev.target)) menu.open = false;
  });
  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && menu && menu.open) { menu.open = false; menu.querySelector("summary").focus(); }
  });

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
