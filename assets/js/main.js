/* CakeDream – kleine Interaktionen, ganz ohne Frameworks */
(function () {
  "use strict";

  /* Aktuelles Jahr im Footer */
  var yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* Mobiles Menü */
  var toggle = document.getElementById("navToggle");
  var links = document.querySelector(".nav__links");
  if (toggle && links) {
    var setOpen = function (open) {
      links.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Menü schließen" : "Menü öffnen");
    };
    toggle.addEventListener("click", function () {
      setOpen(!links.classList.contains("is-open"));
    });
    /* Nach Klick auf einen Link wieder schließen */
    links.addEventListener("click", function (e) {
      if (e.target.tagName === "A") setOpen(false);
    });
  }

  /* "Nach oben" / Brand-Klick: zuverlaessig ganz nach oben scrollen
     (ein Sprung zu #top wird wegen der sticky-Navigation sonst ignoriert) */
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.querySelectorAll('a[href="#top"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  });

  /* Reveal-on-scroll */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window && revealEls.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-visible"); });
  }
})();
