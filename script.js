// Intersection Observer for fade-in sections
const sections = document.querySelectorAll('.roster, .youtube-section, .mission, .socials');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('visible');
  });
}, {threshold: 0.1});
sections.forEach(section => observer.observe(section));
