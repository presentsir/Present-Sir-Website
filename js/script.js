// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    console.log('Document is ready.');
  
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        // Prevent default jump
        e.preventDefault();
        // Get the target section using the href attribute value
        const targetElement = document.querySelector(this.getAttribute('href'));
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth'
          });
        }
      });
    });
  });
  