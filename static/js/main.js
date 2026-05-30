// unmai-tn main.js
(function() {
  'use strict';

  // Mark active nav link
  var path = window.location.pathname;
  document.querySelectorAll('.site-nav a').forEach(function(link) {
    if (path.indexOf(link.getAttribute('href')) === 0 && link.getAttribute('href') !== '/') {
      link.classList.add('active');
    }
  });

  // Language toggle — preserve path when switching
  document.querySelectorAll('.lang-toggle a').forEach(function(link) {
    link.addEventListener('click', function(e) {
      // Let the default href handle navigation
    });
  });
})();
