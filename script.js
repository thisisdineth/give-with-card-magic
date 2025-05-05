
// Set current year in footer
document.addEventListener('DOMContentLoaded', function() {
  const yearElements = document.querySelectorAll('#current-year');
  const currentYear = new Date().getFullYear();
  
  yearElements.forEach(element => {
    element.textContent = currentYear;
  });

  // Donation amount selection
  const donationOptions = document.querySelectorAll('.donation-option');
  const customAmountInput = document.getElementById('customAmount');
  
  if (donationOptions.length > 0 && customAmountInput) {
    // Handle donation option selection
    donationOptions.forEach(option => {
      option.addEventListener('click', function() {
        // Remove selected class from all options
        donationOptions.forEach(opt => opt.classList.remove('selected'));
        
        // Add selected class to clicked option
        this.classList.add('selected');
        
        // Clear custom amount input
        customAmountInput.value = '';
      });
    });
    
    // Clear selection when custom amount is entered
    customAmountInput.addEventListener('input', function() {
      donationOptions.forEach(opt => opt.classList.remove('selected'));
    });
    
    // Modal functionality
    const modal = document.getElementById('paymentModal');
    const donateButton = document.getElementById('donateButton');
    const closeButton = document.querySelector('.close-button');
    const paymentOptions = document.querySelectorAll('.payment-option');
    
    if (modal && donateButton && closeButton) {
      // Open modal on donate button click
      donateButton.addEventListener('click', function() {
        // Check if an amount is selected or entered
        const selectedOption = document.querySelector('.donation-option.selected');
        const customAmount = customAmountInput.value;
        
        if (selectedOption || (customAmount && parseFloat(customAmount) > 0)) {
          modal.style.display = 'block';
          document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
        } else {
          // Show alert if no amount is selected
          alert('Please select or enter a donation amount');
        }
      });
      
      // Close modal when clicking on X
      closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
        document.body.style.overflow = ''; // Re-enable scrolling
      });
      
      // Close modal when clicking outside of it
      window.addEventListener('click', function(event) {
        if (event.target === modal) {
          modal.style.display = 'none';
          document.body.style.overflow = ''; // Re-enable scrolling
        }
      });
      
      // Handle payment option selection
      paymentOptions.forEach(option => {
        option.addEventListener('click', function() {
          const paymentMethod = this.getAttribute('data-payment');
          console.log('Selected payment method:', paymentMethod);
          
          // Close the modal
          modal.style.display = 'none';
          document.body.style.overflow = ''; // Re-enable scrolling
          
          // Redirect to thank you page (simulating payment processing)
          setTimeout(() => {
            window.location.href = 'thank-you.html';
          }, 500);
        });
      });
    }
  }
  
  // Add animation classes on page load
  const animatedElements = document.querySelectorAll('.impact-card, .icon-circle, .hero-content, .hero-image, .thank-you-card');
  
  animatedElements.forEach(element => {
    element.classList.add('fade-in');
  });
  
  // Add smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});

// Add responsive navigation for smaller screens
window.addEventListener('load', function() {
  // Check if we're on mobile and add a hamburger menu if needed
  // This is just a placeholder for a more complex implementation
  const navLinks = document.querySelector('.nav-links');
  
  if (window.innerWidth < 768 && navLinks) {
    // Mobile navigation implementation would go here
    // This is a simplified version to demonstrate the concept
    const navbar = document.querySelector('.navbar .container');
    
    // Create mobile menu button
    const menuButton = document.createElement('button');
    menuButton.className = 'mobile-menu-button';
    menuButton.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <line x1="3" y1="12" x2="21" y2="12"></line>
        <line x1="3" y1="6" x2="21" y2="6"></line>
        <line x1="3" y1="18" x2="21" y2="18"></line>
      </svg>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      .mobile-menu-button {
        background: none;
        border: none;
        color: var(--red-600);
        font-size: 1.5rem;
        cursor: pointer;
        display: block;
      }
      
      .nav-links {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: white;
        box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        padding: 1rem;
      }
      
      .nav-links.show {
        display: flex;
      }
      
      @media (min-width: 768px) {
        .mobile-menu-button {
          display: none;
        }
        
        .nav-links {
          display: flex;
          position: static;
          box-shadow: none;
          padding: 0;
          flex-direction: row;
        }
      }
    `;
    
    document.head.appendChild(style);
    navbar.appendChild(menuButton);
    
    // Toggle menu on button click
    menuButton.addEventListener('click', function() {
      navLinks.classList.toggle('show');
    });
    
    // Hide menu when clicking outside
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target)) {
        navLinks.classList.remove('show');
      }
    });
    
    // Hide menu when clicking on a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', function() {
        navLinks.classList.remove('show');
      });
    });
  }
});
