/* TwinswHeel — révélation au scroll + parallaxe légère */
(function () {
  'use strict';

  /* --- Menu burger (mobile) --- */
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('site-nav');

  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
    });

    // Refermer après le choix d'une ancre
    nav.addEventListener('click', function (e) {
      if (!e.target.closest('a')) return;
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Ouvrir le menu');
    });
  }

  var reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var anims = document.querySelectorAll('[data-anim]');

  /* --- Révélation au scroll (stagger de 60 ms, par groupes de 6) --- */
  if (reduced || !('IntersectionObserver' in window)) {
    anims.forEach(function (el) { el.classList.add('is-in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        e.target.classList.add('is-in');
        io.unobserve(e.target);
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.05 });

    anims.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 6, 5) * 60) + 'ms';
      io.observe(el);
    });
  }

  /* --- Parallaxe : le visuel se décale de scrollY * facteur --- */
  var layers = document.querySelectorAll('[data-parallax]');
  if (reduced || !layers.length) return;

  var ticking = false;

  function update() {
    var y = window.scrollY;
    layers.forEach(function (el) {
      var k = parseFloat(el.getAttribute('data-parallax')) || 0;
      var child = el.firstElementChild;
      if (child) child.style.transform = 'translateY(' + (-y * k) + 'px)';
    });
    ticking = false;
  }

  window.addEventListener('scroll', function () {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(update);
  }, { passive: true });

  update();
})();
