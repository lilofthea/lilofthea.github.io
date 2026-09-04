(function () {
  "use strict";

  document.getElementById("year").textContent = new Date().getFullYear();

  /* ---- Theme toggle ---- */
  var root = document.documentElement;
  var themeBtn = document.getElementById("themeToggle");
  var stored = null;
  try { stored = localStorage.getItem("theme"); } catch (e) {}
  if (stored === "light" || stored === "dark") {
    root.setAttribute("data-theme", stored);
  }
  themeBtn.addEventListener("click", function () {
    var current = root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
    var next = current === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  /* ---- Mobile nav toggle ---- */
  var navToggle = document.getElementById("navToggle");
  var navLinks = document.getElementById("navLinks");
  navToggle.addEventListener("click", function () {
    var open = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      navLinks.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---- Active link highlighting ---- */
  var sections = Array.prototype.slice.call(document.querySelectorAll("main section[id]"));
  var navItems = Array.prototype.slice.call(document.querySelectorAll('[data-nav]'));
  var byHash = {};
  navItems.forEach(function (a) { byHash[a.getAttribute("href")] = a; });

  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        navItems.forEach(function (a) { a.classList.remove("active"); });
        var link = byHash["#" + entry.target.id];
        if (link) link.classList.add("active");
      }
    });
  }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });

  sections.forEach(function (s) { observer.observe(s); });

  /* ---- Scroll reveal ---- */
  var revealTargets = document.querySelectorAll(
    ".card, .timeline__item, .paper, .stat, .about__text, .skills__group"
  );
  revealTargets.forEach(function (el) { el.classList.add("reveal"); });

  var revealObserver = new IntersectionObserver(function (entries, obs) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealTargets.forEach(function (el) { revealObserver.observe(el); });
})();
