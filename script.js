document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they enter the viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.section, .hero').forEach((el) => {
  el.classList.add('fade-init');
  observer.observe(el);
});

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => navLinks.classList.remove('open'));
  });
}

// Conference gallery lightbox
const lightbox = document.getElementById('lightbox');
if (lightbox) {
  const lbImg = lightbox.querySelector('img');
  const lbCap = lightbox.querySelector('.lightbox-caption');
  const closeLb = () => { lightbox.hidden = true; lbImg.src = ''; };
  document.querySelectorAll('.lightbox-link').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const img = link.querySelector('img');
      lbImg.src = link.href; lbImg.alt = img.alt;
      const cap = link.parentElement.querySelector('figcaption');
      lbCap.textContent = cap ? cap.textContent : '';
      lightbox.hidden = false;
    });
  });
  lightbox.addEventListener('click', (e) => { if (e.target !== lbImg) closeLb(); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb(); });
}
