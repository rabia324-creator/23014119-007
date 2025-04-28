// script.js

// 1. Navbar Toggle (Mobile view)
document.querySelector(".navbar-toggle").addEventListener("click", function () {
    const navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("hidden"); // Toggle the 'hidden' class on the nav-links
  });
  
  
  // 2. Form Validation for Contact Form
  document.addEventListener("DOMContentLoaded", function() {
    // Contact Form Validation
    const contactForm = document.querySelector('.contact-form form'); // This is correct since the form is inside the contact-form container
    if (contactForm) {
      contactForm.addEventListener('submit', function(event) {
        const name = document.querySelector('#name');
        const email = document.querySelector('#email');
        const message = document.querySelector('#message');
  
        // Check if any of the fields are empty
        if (!name.value || !email.value || !message.value) {
          event.preventDefault(); // Prevent form submission
          alert('Please fill in all fields.');
        }
      });
    }
  
    // Payment Form Validation
    const paymentForm = document.querySelector('.payment-form');
    if (paymentForm) {
      paymentForm.addEventListener('submit', function(event) {
        const fullName = document.querySelector('#fullName');
        const email = document.querySelector('#email');
        const cardNumber = document.querySelector('#cardNumber');
        const expiry = document.querySelector('#expiry');
        const cvv = document.querySelector('#cvv');
  
        // Check if any of the payment form fields are empty
        if (!fullName.value || !email.value || !cardNumber.value || !expiry.value || !cvv.value) {
          event.preventDefault(); // Prevent form submission
          alert('Please fill in all fields.');
        }
      });
    }
  
    // Navigation Highlight (optional)
    const navLinks = document.querySelectorAll('nav ul li a');
    const currentPage = window.location.pathname.split('/').pop();
  
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      }
    });
  });
  
  // 4. Close Modal Functionality
  document.querySelector(".close-modal").addEventListener("click", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Close the modal
  });
  
  // 5. Scroll to Top Button
  const scrollTopButton = document.querySelector(".scroll-top-btn");
  scrollTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  
  // 6. Changing Button Text After Form Submission (Example: Contact Form)
  document.querySelector(".contact-form").addEventListener("submit", function () {
    document.querySelector(".btn").textContent = "Sending...";
    setTimeout(function () {
      document.querySelector(".btn").textContent = "Message Sent!";
    }, 2000);
  });
  
  // 7. Dynamic Flavors Section
  const flavors = [
    { name: "Chocolate Delight", description: "Rich, creamy, and irresistibly chocolatey.", img: "images/chocolate-dream.jfif" },
    { name: "Vanilla Dream", description: "Classic, smooth, and oh-so-delicious.", img: "images/vanilla-bliss.jfif" },
    { name: "Strawberry Bliss", description: "Fresh strawberries blended into creamy goodness.", img: "images/strawberry-spark.jpg" }
  ];
  
  const flavorContainer = document.querySelector(".flavor-cards");
  flavors.forEach(flavor => {
    const card = document.createElement("div");
    card.classList.add("flavor-card");
    card.innerHTML = `
      <img src="${flavor.img}" alt="${flavor.name}">
      <h3>${flavor.name}</h3>
      <p>${flavor.description}</p>
    `;
    flavorContainer.appendChild(card);
  });
  
  // 8. Social Media Links Opening in New Tab
  document.querySelectorAll(".social-links a").forEach(link => {
    link.setAttribute("target", "_blank");
  });
  
  // 9. Sticky Navbar
  window.onscroll = function () {
    const header = document.querySelector("header");
    if (window.pageYOffset > 100) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  };
  
  // 10. Toggle Between Dark/Light Mode (Optional)
  const toggleModeButton = document.querySelector(".toggle-mode");
  toggleModeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
  