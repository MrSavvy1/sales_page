const menuBtn = document.getElementById("menuBtn");

menuBtn.addEventListener("click", () => {
  // Add mobile menu functionality if needed in future
  console.log("Menu clicked");
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Track WhatsApp CTA clicks
document.querySelectorAll('.whatsapp-btn').forEach(btn => {
  btn.addEventListener('click', function() {
    console.log('WhatsApp button clicked');
  });
});