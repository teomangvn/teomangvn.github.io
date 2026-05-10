// Navbar scroll effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('active')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans[0].style.transform = '';
    spans[1].style.opacity = '';
    spans[2].style.transform = '';
  }
});

// Close mobile menu on link click
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
});

// Scroll reveal animation
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealElements.forEach(el => revealObserver.observe(el));

// Animated counter for stats
function animateCounter(el, target, suffix = '') {
  let current = 0;
  const increment = target / 60;
  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      current = target;
      clearInterval(timer);
    }
    el.textContent = Math.floor(current) + suffix;
  }, 16);
}

const statValues = document.querySelectorAll('.stat-value');
const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.animated) {
      entry.target.dataset.animated = 'true';
      const text = entry.target.textContent.trim();
      // Handle Turkish percentage: %35 (prefix) or 35% (suffix)
      const prefix = text.match(/^[^\d.]*/)?.[0] || '';
      const suffix = text.match(/[^\d.]*$/)?.[0] || '';
      const numStr = text.replace(/[^\d.]/g, '');
      const num = parseFloat(numStr);
      if (isNaN(num)) return;
      if (numStr.includes('.')) {
        const decimals = numStr.split('.')[1]?.length || 2;
        let current = 0;
        const increment = num / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) { current = num; clearInterval(timer); }
          entry.target.textContent = prefix + current.toFixed(decimals) + suffix;
        }, 16);
      } else {
        let current = 0;
        const increment = num / 60;
        const timer = setInterval(() => {
          current += increment;
          if (current >= num) { current = num; clearInterval(timer); }
          entry.target.textContent = prefix + Math.floor(current) + suffix;
        }, 16);
      }
    }
  });
}, { threshold: 0.5 });

statValues.forEach(el => statsObserver.observe(el));

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Lightbox functionality
let currentGalleryItems = [];
let currentLightboxIndex = 0;

function openLightbox(el) {
  const gallery = el.closest('.gallery-scroll');
  currentGalleryItems = Array.from(gallery.querySelectorAll('.gallery-item'));
  currentLightboxIndex = currentGalleryItems.indexOf(el);
  showLightboxImage();
  document.getElementById('lightbox').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  document.getElementById('lightbox').classList.remove('active');
  document.body.style.overflow = '';
}

function navLightbox(dir) {
  currentLightboxIndex += dir;
  if (currentLightboxIndex < 0) currentLightboxIndex = currentGalleryItems.length - 1;
  if (currentLightboxIndex >= currentGalleryItems.length) currentLightboxIndex = 0;
  showLightboxImage();
}

function showLightboxImage() {
  const item = currentGalleryItems[currentLightboxIndex];
  const img = item.querySelector('img');
  const caption = item.querySelector('.gallery-caption');
  document.getElementById('lightbox-img').src = img.src;
  document.getElementById('lightbox-caption').textContent = caption ? caption.textContent : '';
}

// Close lightbox with Escape key, navigate with arrows
document.addEventListener('keydown', (e) => {
  const lightbox = document.getElementById('lightbox');
  if (!lightbox.classList.contains('active')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowLeft') navLightbox(-1);
  if (e.key === 'ArrowRight') navLightbox(1);
});

// Close lightbox on overlay click
document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target === e.currentTarget) closeLightbox();
});
