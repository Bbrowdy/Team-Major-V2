/* ================================
   Script.js - Team Major
================================= */

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     Fade-in on Scroll
  ================================= */
  const fadeElements = document.querySelectorAll('.fade-in');

  const observerOptions = {
    threshold: 0.1, // Trigger when 10% of element is visible
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing once visible
      }
    });
  }, observerOptions);

  fadeElements.forEach(el => observer.observe(el));

  /* ================================
     Smooth Scrolling for Anchor Links
  ================================= */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ================================
     Responsive YouTube Iframes
  ================================= */
  function resizeIframes() {
    const iframes = document.querySelectorAll('iframe');
    iframes.forEach(iframe => {
      const width = iframe.parentElement.offsetWidth;
      const height = width * 0.5625; // 16:9 aspect ratio
      iframe.style.width = width + 'px';
      iframe.style.height = height + 'px';
    });
  }

  window.addEventListener('load', resizeIframes);
  window.addEventListener('resize', resizeIframes);

  /* ================================
     Player Image Hover Fallback
  ================================= */
  const playerImages = document.querySelectorAll('.player img');
  playerImages.forEach(img => {
    img.addEventListener('mouseenter', () => img.style.transform = 'scale(1.05)');
    img.addEventListener('mouseleave', () => img.style.transform = 'scale(1)');
  });

});
