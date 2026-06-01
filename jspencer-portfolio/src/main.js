/* ============================================================
   Jamie Spencer Portfolio — main.js
   ============================================================ */

// Set footer year dynamically
document.getElementById('year').textContent = new Date().getFullYear();

// ── Mobile nav toggle ──────────────────────────────────────
var navToggle = document.getElementById('navToggle');
var navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', function () {
  navLinks.classList.toggle('open');
});

// Close mobile nav when any link is clicked
document.querySelectorAll('.nav-links a').forEach(function (link) {
  link.addEventListener('click', function () {
    navLinks.classList.remove('open');
  });
});

// ── Scroll reveal (IntersectionObserver) ──────────────────
var revealEls = document.querySelectorAll('#reveal');

var revealObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
);

revealEls.forEach(function (el) {
  revealObserver.observe(el);
});

// ── Active nav link highlight on scroll ───────────────────
var sections = document.querySelectorAll('section[id]');
var navAnchors = document.querySelectorAll('.nav-links a');

window.addEventListener(
  'scroll',
  function () {
    var scrollY = window.pageYOffset;

    sections.forEach(function (section) {
      var top    = section.offsetTop - 100;
      var height = section.offsetHeight;
      var id     = section.getAttribute('id');

      if (scrollY >= top && scrollY < top + height) {
        navAnchors.forEach(function (link) {
          link.style.color = '';
          if (link.getAttribute('href') === '#' + id) {
            link.style.color = 'var(--accent)';
          }
        });
      }
    });
  },
  { passive: true }
);
