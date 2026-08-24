/* ARJFIT — site interactions.
   GSAP is loaded from CDN and used only for scroll reveals and the hero
   parallax. Everything degrades to plain visible content if it fails. */
(function () {
  'use strict';

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- mobile navigation ---------- */
  var toggle = document.querySelector('[data-nav-toggle]');
  var drawer = document.querySelector('[data-nav-drawer]');

  function setNav(open) {
    if (!drawer || !toggle) return;
    drawer.classList.toggle('translate-x-full', !open);
    toggle.setAttribute('aria-expanded', String(open));
    document.body.style.overflow = open ? 'hidden' : '';
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      setNav(drawer.classList.contains('translate-x-full'));
    });
    drawer.addEventListener('click', function (e) {
      if (e.target.closest('a') || e.target.closest('[data-nav-close]')) setNav(false);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') setNav(false);
    });
  }

  /* ---------- header background on scroll ---------- */
  var header = document.querySelector('[data-header]');
  if (header) {
    var onScroll = function () {
      header.classList.toggle('bg-ink/90', window.scrollY > 24);
      header.classList.toggle('backdrop-blur-md', window.scrollY > 24);
      header.classList.toggle('border-line', window.scrollY > 24);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
  }

  /* ---------- accordion (FAQ) ---------- */
  document.querySelectorAll('[data-accordion] button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var item = btn.parentElement;
      var panel = item.querySelector('[data-panel]');
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      panel.style.maxHeight = open ? '' : panel.scrollHeight + 'px';
      item.classList.toggle('border-volt/40', !open);
    });
  });

  /* ---------- scroll reveal ---------- */
  var nodes = document.querySelectorAll('.reveal');

  function showAll() {
    nodes.forEach(function (n) { n.style.opacity = 1; n.style.transform = 'none'; });
    /* Counters never animate in this path, so show the final figure rather
       than leaving a row of zeros on screen. */
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = Number(el.getAttribute('data-count')).toLocaleString();
    });
  }

  if (reduced || !window.gsap || !window.ScrollTrigger) { showAll(); return; }

  gsap.registerPlugin(ScrollTrigger);

  nodes.forEach(function (node) {
    gsap.to(node, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      ease: 'power3.out',
      scrollTrigger: { trigger: node, start: 'top 88%', once: true }
    });
  });

  /* Subtle hero parallax — the image drifts slower than the page. */
  var heroImg = document.querySelector('[data-parallax]');
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 14,
      ease: 'none',
      scrollTrigger: { trigger: heroImg, start: 'top top', end: 'bottom top', scrub: true }
    });
  }

  /* Counters on the stats strip. */
  document.querySelectorAll('[data-count]').forEach(function (el) {
    var target = parseFloat(el.getAttribute('data-count'));
    var obj = { v: 0 };
    gsap.to(obj, {
      v: target,
      duration: 1.6,
      ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 90%', once: true },
      onUpdate: function () { el.textContent = Math.round(obj.v).toLocaleString(); }
    });
  });
})();
