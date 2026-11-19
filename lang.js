(function () {
  var saved = null;
  try { saved = localStorage.getItem("lang"); } catch (e) {}
  var q = new URLSearchParams(location.search).get("lang");
  var lang = q || saved || ((navigator.language || "en").toLowerCase().indexOf("it") === 0 ? "it" : "en");
  document.documentElement.setAttribute("data-lang", lang);
  document.documentElement.lang = lang;
  window.setLang = function (l) {
    document.documentElement.setAttribute("data-lang", l);
    document.documentElement.lang = l;
    try { localStorage.setItem("lang", l); } catch (e) {}
    mark();
  };
  function mark() {
    var cur = document.documentElement.getAttribute("data-lang");
    document.querySelectorAll("[data-set]").forEach(function (b) {
      b.classList.toggle("on", b.getAttribute("data-set") === cur);
    });
  }
  document.addEventListener("DOMContentLoaded", mark);
})();
