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

  /* ---------- nav dropdown ---------- */
  /* Opens on hover for pointer users and on click/keyboard for everyone.
     Closes on Escape, outside click, or focus leaving the group. */
  [].slice.call(document.querySelectorAll('[data-dropdown]')).forEach(function (dd) {
    var btn = dd.querySelector('[data-dropdown-toggle]');
    var menu = dd.querySelector('[data-dropdown-menu]');
    if (!btn || !menu) return;
    var closeTimer = null;

    function open() {
      clearTimeout(closeTimer);
      menu.classList.add('is-open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function close() {
      menu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
    }
    function lazyClose() {
      clearTimeout(closeTimer);
      closeTimer = setTimeout(close, 180);
    }

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      menu.classList.contains('is-open') ? close() : open();
    });

    // Hover only where a real pointer exists.
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
      dd.addEventListener('mouseenter', open);
      dd.addEventListener('mouseleave', lazyClose);
    }

    dd.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') { close(); btn.focus(); }
      if (e.key === 'ArrowDown' && menu.classList.contains('is-open')) {
        e.preventDefault();
        var first = menu.querySelector('a');
        if (first) first.focus();
      }
    });

    // Close when focus or a click leaves the group entirely.
    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target)) close();
    });
    dd.addEventListener('focusout', function (e) {
      if (!dd.contains(e.relatedTarget)) close();
    });
  });

  /* ---------- header background on scroll ---------- */
  var header = document.querySelector('[data-header]');
  if (header) {
    var stuck = null, ticking = false;
    var applyHeader = function () {
      ticking = false;
      var next = window.scrollY > 24;
      if (next === stuck) return;          // no DOM work unless it changed
      stuck = next;
      header.classList.toggle('bg-ink/90', next);
      header.classList.toggle('backdrop-blur-md', next);
      header.classList.toggle('border-line', next);
    };
    applyHeader();
    window.addEventListener('scroll', function () {
      if (!ticking) { ticking = true; requestAnimationFrame(applyHeader); }
    }, { passive: true });
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

  /* ---------- dark / light toggle ---------- */
  var modeBtn = document.querySelector('[data-theme-toggle]');
  if (modeBtn) {
    var root = document.documentElement;
    var syncLabel = function () {
      var light = root.getAttribute('data-theme') === 'light';
      modeBtn.setAttribute('aria-pressed', String(light));
      modeBtn.setAttribute('title', light ? 'Switch to dark mode' : 'Switch to light mode');
      modeBtn.setAttribute('aria-label', light ? 'Switch to dark mode' : 'Switch to light mode');
    };
    modeBtn.addEventListener('click', function () {
      var light = root.getAttribute('data-theme') === 'light';
      if (light) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme', 'light');
      try { localStorage.setItem('arjfit-mode', light ? 'dark' : 'light'); } catch (e) {}
      syncLabel();
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    });
    syncLabel();
  }

  /* ---------- TEMPORARY type picker ---------- */
  /* Remove this whole block once a pairing is chosen. */
  var tPicker = document.querySelector('[data-type-picker]');
  if (tPicker) {
    var tPanel = tPicker.querySelector('[data-type-panel]');
    var tToggle = tPicker.querySelector('[data-type-toggle]');
    var tSetters = [].slice.call(tPicker.querySelectorAll('[data-type-set]'));

    var markFont = function (key) {
      tSetters.forEach(function (b) {
        var on = b.getAttribute('data-type-set') === key;
        b.setAttribute('aria-pressed', String(on));
        b.classList.toggle('border-volt', on);
      });
    };

    var applyFont = function (key) {
      document.documentElement.setAttribute('data-font', key);
      try { localStorage.setItem('arjfit-font', key); } catch (e) {}
      markFont(key);
      if (window.ScrollTrigger) ScrollTrigger.refresh();
    };

    tToggle.addEventListener('click', function () {
      var open = tPanel.classList.contains('w-0');
      tPanel.classList.toggle('w-0', !open);
      tPanel.classList.toggle('w-[264px]', open);
      tToggle.setAttribute('aria-expanded', String(open));
    });

    tSetters.forEach(function (b) {
      b.addEventListener('click', function () { applyFont(b.getAttribute('data-type-set')); });
    });

    markFont(document.documentElement.getAttribute('data-font') || 'anton');
  }

  /* ---------- gallery filter ---------- */
  var gallery = document.querySelector('[data-gallery]');
  if (gallery) {
    var figures = [].slice.call(gallery.querySelectorAll('[data-cat]'));
    var buttons = [].slice.call(document.querySelectorAll('[data-filter]'));
    var readout = document.querySelector('[data-gallery-count]');

    var applyFilter = function (key) {
      var shown = 0;
      figures.forEach(function (fig) {
        var match = key === 'all' || fig.getAttribute('data-cat') === key;
        fig.hidden = !match;
        if (match) shown++;
      });
      buttons.forEach(function (b) {
        var on = b.getAttribute('data-filter') === key;
        b.classList.toggle('is-filter-active', on);
        b.setAttribute('aria-pressed', String(on));
      });
      if (readout) {
        readout.textContent = key === 'all'
          ? 'Showing all ' + shown + ' images'
          : 'Showing ' + shown + ' of ' + figures.length + ' images';
      }
    };

    buttons.forEach(function (b) {
      b.addEventListener('click', function () { applyFilter(b.getAttribute('data-filter')); });
    });
  }

  /* ---------- hero carousel ---------- */
  /* Crossfades the hero imagery. Auto-advance is suppressed entirely under
     reduced-motion; the first slide simply stays put. */
  var carousel = document.querySelector('[data-carousel]');
  if (carousel) {
    var slides = [].slice.call(carousel.querySelectorAll('[data-slide]'));
    var dots = [].slice.call(document.querySelectorAll('[data-dot]'));
    var index = 0;
    var timer = null;

    var go = function (i) {
      index = (i + slides.length) % slides.length;
      slides.forEach(function (s, n) { s.classList.toggle('is-active', n === index); });
      dots.forEach(function (d, n) {
        d.classList.toggle('is-active', n === index);
        d.setAttribute('aria-selected', String(n === index));
      });
    };

    var start = function () {
      if (reduced || slides.length < 2) return;
      stop();
      timer = setInterval(function () { go(index + 1); }, 6000);
    };
    function stop() { if (timer) { clearInterval(timer); timer = null; } }

    dots.forEach(function (d, n) {
      d.addEventListener('click', function () { go(n); start(); });
    });

    carousel.addEventListener('mouseenter', stop);
    carousel.addEventListener('mouseleave', start);
    document.addEventListener('visibilitychange', function () {
      document.hidden ? stop() : start();
    });

    go(0);
    start();
  }

  /* ---------- scroll reveal ---------- */
  var nodes = document.querySelectorAll('.reveal');

  function showAll() {
    document.documentElement.classList.add('no-js-safe');
    nodes.forEach(function (n) { n.style.opacity = 1; n.style.transform = 'none'; });
    /* Counters never animate in this path, so show the final figure rather
       than leaving a row of zeros on screen. */
    document.querySelectorAll('[data-count]').forEach(function (el) {
      el.textContent = Number(el.getAttribute('data-count')).toLocaleString();
    });
  }

  if (reduced || !window.gsap || !window.ScrollTrigger) { showAll(); return; }

  gsap.registerPlugin(ScrollTrigger);

  /* ================= MOTION ENGINE ================= */

  /* Splits an element's text into per-word clipping boxes WITHOUT destroying
     nested markup — headings here contain <br> and <span class="text-volt">.
     Returns the inner spans to animate. */
  function splitWords(el) {
    function walk(node) {
      var out = [];
      [].slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          // Keep whitespace as real text nodes so words don't run together.
          child.textContent.split(/(\s+)/).forEach(function (part) {
            if (part === '') return;
            if (!part.trim()) { out.push(document.createTextNode(part)); return; }
            var box = document.createElement('span');
            box.className = 'w';
            var inner = document.createElement('span');
            inner.className = 'w-i';
            inner.textContent = part;
            box.appendChild(inner);
            out.push(box);
          });
        } else if (child.nodeName === 'BR') {
          out.push(child.cloneNode(false));
        } else {
          var clone = child.cloneNode(false);
          walk(child).forEach(function (n) { clone.appendChild(n); });
          out.push(clone);
        }
      });
      return out;
    }
    var built = walk(el);
    while (el.firstChild) el.removeChild(el.firstChild);
    built.forEach(function (n) { el.appendChild(n); });
    return [].slice.call(el.querySelectorAll('.w-i'));
  }

  /* --- headings: masked word stagger --- */
  [].slice.call(document.querySelectorAll('h1, h2')).forEach(function (h) {
    var words = splitWords(h);
    if (!words.length) return;
    gsap.to(words, {
      y: '0%',
      duration: 1.15,
      ease: 'power3.out',
      stagger: 0.045,
      scrollTrigger: { trigger: h, start: 'top 88%', once: true }
    });
  });

  /* --- images: clip wipe + settle --- */
  [].slice.call(document.querySelectorAll('.media:not(.rounded-none)')).forEach(function (m) {
    m.classList.add('img-reveal');
    var pic = m.querySelector('img');
    var tl = gsap.timeline({
      scrollTrigger: { trigger: m, start: 'top 90%', once: true }
    });
    tl.to(m, { clipPath: 'inset(0 0 0% 0)', duration: 1.25, ease: 'power2.inOut' });
    if (pic) tl.to(pic, { scale: 1, duration: 1.8, ease: 'power2.out' }, 0);
  });

  /* --- grouped children stagger --- */
  [].slice.call(document.querySelectorAll('.grid')).forEach(function (grid) {
    var kids = [].slice.call(grid.children).filter(function (k) {
      return k.classList.contains('reveal');
    });
    if (kids.length < 2) return;
    gsap.to(kids, {
      opacity: 1, y: 0, duration: 1, ease: 'power2.out', stagger: 0.08,
      scrollTrigger: { trigger: grid, start: 'top 86%', once: true }
    });
    kids.forEach(function (k) { k.dataset.staggered = '1'; });
  });

  /* --- custom cursor --- */
  if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    var ring = document.createElement('div');
    ring.className = 'cur-ring';
    var label = document.createElement('span');
    label.className = 'cur-label';
    ring.appendChild(label);
    document.body.appendChild(ring);

    gsap.set(ring, { xPercent: -50, yPercent: -50 });
    var rx = gsap.quickTo(ring, 'x', { duration: 0.55, ease: 'power2' });
    var ry = gsap.quickTo(ring, 'y', { duration: 0.55, ease: 'power2' });
    var shown = false;

    window.addEventListener('mousemove', function (e) {
      if (!shown) { gsap.to(ring, { opacity: 1, duration: 0.3 }); shown = true; }
      rx(e.clientX); ry(e.clientY);
    }, { passive: true });

    document.addEventListener('mouseleave', function () {
      gsap.to(ring, { opacity: 0, duration: 0.25 }); shown = false;
    });

    // Interactive targets grow the ring; media and cards can name a label.
    var hoverSel = 'a, button, input, select, textarea, summary, [data-cursor]';
    document.addEventListener('mouseover', function (e) {
      var t = e.target.closest(hoverSel);
      if (!t) return;
      var text = t.getAttribute('data-cursor');
      if (!text && t.closest('.media')) text = 'View';
      if (text) { label.textContent = text; ring.classList.add('is-label'); }
      else ring.classList.add('is-hover');
    });
    document.addEventListener('mouseout', function (e) {
      if (!e.target.closest(hoverSel)) return;
      ring.classList.remove('is-hover', 'is-label');
    });

    // Magnetic pull on primary buttons.
    [].slice.call(document.querySelectorAll('.btn-volt, .btn-ghost')).forEach(function (b) {
      b.addEventListener('mousemove', function (e) {
        var r = b.getBoundingClientRect();
        gsap.to(b, {
          x: (e.clientX - (r.left + r.width / 2)) * 0.22,
          y: (e.clientY - (r.top + r.height / 2)) * 0.32,
          duration: 0.4, ease: 'power3.out'
        });
      });
      b.addEventListener('mouseleave', function () {
        gsap.to(b, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
      });
    });
  }

  /* --- ungrouped reveals (anything the grid stagger did not claim) --- */
  nodes.forEach(function (node) {
    if (node.dataset.staggered) return;
    gsap.to(node, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power2.out',
      scrollTrigger: { trigger: node, start: 'top 88%', once: true },
      onComplete: function () { node.style.willChange = 'auto'; }
    });
  });

  /* Subtle hero parallax — the image drifts slower than the page. */
  var heroImg = document.querySelector('[data-parallax]');
  if (heroImg) {
    gsap.to(heroImg, {
      yPercent: 14,
      ease: 'none',
      scrollTrigger: { trigger: heroImg, start: 'top top', end: 'bottom top', scrub: 0.8 }
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
