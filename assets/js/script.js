// Animated Counter for Stats
function animateCounter() {
  const counters = document.querySelectorAll('.stat h3');
  const speed = 200; // The lower the slower

  counters.forEach((counter) => {
    const target = +counter.getAttribute('data-target');
    const count = +counter.innerText;
    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = Math.ceil(count + increment);
      setTimeout(() => animateCounter(), 1);
    } else {
      counter.innerText = target.toLocaleString(); // Adds commas for thousands
    }
  });
}

// Run when the page loads
document.addEventListener('DOMContentLoaded', function () {
  // Initialize counter animation
  animateCounter();

  // Add scroll effect to header
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
      header.style.padding = '0.5rem 0';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
      header.style.padding = '1rem 0';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
  });
});
