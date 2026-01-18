// ================================
// Fade-in on Scroll
// ================================

// Select all elements that should fade in
const fadeElements = document.querySelectorAll('.fade-in');

// Intersection Observer options
const observerOptions = {
  threshold: 0.1, // Trigger when 10% of element is visible
};

// Create observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, observerOptions);

// Observe each fade-in element
fadeElements.forEach(el => observer.observe(el));

// ================================
// Optional: Smooth scrolling for anchor links
// ================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// ================================
// YouTube iframe resizing (optional)
// ================================
function resizeIframes() {
  const iframes = document.querySelectorAll('iframe');
  iframes.forEach(iframe => {
    const width = iframe.parentElement.offsetWidth;
    const height = width * 0.5625; // 16:9 aspect ratio
    iframe.style.width = width + 'px';
    iframe.style.height = height + 'px';
  });
}

// Run on page load and window resize
window.addEventListener('load', resizeIframes);
window.addEventListener('resize', resizeIframes);
