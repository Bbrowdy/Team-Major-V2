/* ================================
   Script.js - Team Major
================================= */

document.addEventListener("DOMContentLoaded", () => {

  /* ================================
     Fade-in on Scroll
  ================================= */
  const fadeElements = document.querySelectorAll('.fade-in');
  const observerOptions = { threshold: 0.1 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
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
      if (target) target.scrollIntoView({ behavior: 'smooth' });
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

  /* ================================
     Latest YouTube Video Loader
     - Replace iframe with latest video automatically
     - Requires your YouTube API key and channel IDs
  ================================= */
  const apiKey = "YOUR_YOUTUBE_API_KEY"; // <-- Put your API key here

  // Map each page to the correct channel ID
  const channelMap = {
    "index.html": "MAIN_PAGE_CHANNEL_ID", // main page channel
    "MJR_Kobey.html": "KOBEY_CHANNEL_ID",
    "MJR_Krankykoalq.html": "KRANKY_CHANNEL_ID",
    "MJR_Flukes.html": "FLUKES_CHANNEL_ID",
    "MJR_Yenewtt.html": "YENEWTT_CHANNEL_ID",
    "MJR_Lachy.html": "LACHY_CHANNEL_ID",
    "MJR_Sanity.html": "SANITY_CHANNEL_ID",
    "MJR_Dayno.html": "DAYNO_CHANNEL_ID",
    "MJR_Monsterrzz.html": "MONSTERRZZ_CHANNEL_ID",
    "MJR_Robbie.html": "ROBBIE_CHANNEL_ID",
    "MJR_Patericko.html": "PATERICKO_CHANNEL_ID"
  };

  // Detect current page
  const path = window.location.pathname.split("/").pop();
  const channelId = channelMap[path];

  if (channelId) {
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=1`;

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        if (data.items && data.items.length > 0) {
          const videoId = data.items[0].id.videoId;
          const iframe = document.querySelector("#yt-latest-video");
          if (iframe) {
            iframe.src = `https://www.youtube.com/embed/${videoId}`;
          }
        }
      })
      .catch(err => console.error("YouTube API fetch error:", err));
  }

});
