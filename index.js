// scripts.js

// Selectors
const menuIcon = document.getElementById('menu');
const menuSlide = document.getElementById('menuslide');
const navLinks = document.querySelectorAll('.navbar ul li a, #menuslide ul li a');
const animatableElements = document.querySelectorAll('.home-content, .services-list div, .containee div');

// Event listeners
function screenMenu(){
  document.getElementById('menuslide').style.display="block";
  document.getElementById('menu').style.display="none";
  document.getElementById('close').style.display="block";
}
function closeMenu(){
  document.getElementById('menuslide').style.display="none";
  document.getElementById('close').style.display="none";
  document.getElementById('menu').style.display="block";
}

menuIcon.addEventListener('click', toggleMenu);
navLinks.forEach(link => link.addEventListener('click', smoothScroll));

// Toggle menu function
function toggleMenu() {
  menuSlide.classList.toggle('active');
}

// Smooth scroll function
function smoothScroll(event) {
  event.preventDefault();
  const targetId = event.currentTarget.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);
  const offset = 80; // Adjust this value based on your header height

  // Scroll to target element smoothly
  window.scrollTo({
    top: targetElement.offsetTop - offset,
    behavior: 'smooth'
  });

  // Close the mobile menu after clicking a link
  if (menuSlide.classList.contains('active')) {
    menuSlide.classList.remove('active');
  }
}

// Intersection Observer for scroll animations
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

// Observe animatable elements
animatableElements.forEach(element => {
  observer.observe(element);
});
