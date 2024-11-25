// Smooth scroll for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute('href'));
      if (target) {
          window.scrollTo({
              top: target.offsetTop - document.querySelector('.navbar').offsetHeight,
              behavior: 'smooth'
          });
      }
  });
});
