// Function to add or remove the scrolled class to/from the navbar
function handleScroll() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
}

// Smooth scroll to section when button is clicked
function scrollToSection(id) {
    document.querySelector(`#${id}`).scrollIntoView({ behavior: 'smooth' });
}

// Listen for scroll events
window.addEventListener('scroll', handleScroll);

// Make smooth scroll function available globally
window.scrollToSection = scrollToSection;
