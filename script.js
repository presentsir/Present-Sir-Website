// Example JavaScript: Document Ready equivalent using vanilla JS
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready. Add your custom JS here.');
  
    // Example: Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
  
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  });
  