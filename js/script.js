// Scroll suave ao clicar no menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Toggle menu mobile
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');

menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  menuOverlay.classList.toggle('active');
});

// Fechar menu ao clicar no overlay
menuOverlay.addEventListener('click', () => {
  navMenu.classList.remove('active');
  menuOverlay.classList.remove('active');
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backToTopButton.classList.add('show');
  } else {
    backToTopButton.classList.remove('show');
  }
});

backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll to contact button
const scrollToContactButton = document.getElementById('scroll-to-contact');
const aboutSection = document.getElementById('about');
const contactSection = document.getElementById('contact');

window.addEventListener('scroll', () => {
  const aboutTop = aboutSection.offsetTop;
  const contactTop = contactSection.offsetTop;
  if (window.scrollY > aboutTop - 100 && window.scrollY < contactTop - 100) {
    scrollToContactButton.classList.add('show');
  } else {
    scrollToContactButton.classList.remove('show');
  }
});

scrollToContactButton.addEventListener('click', () => {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
});