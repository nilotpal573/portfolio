document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');

    // Toggle mobile navigation
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });

    // Smooth scrolling for navigation links
    const scrollLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    
    scrollLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const offsetTop = targetElement.offsetTop;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
            navMenu.classList.remove('show'); // Close mobile navigation after clicking a link
        });
    });

    // Form validation
    const form = document.querySelector('.contact-form form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            alert('Please fill in all fields.');
            return;
        }

        // Simple email validation
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // If all fields are filled and email is valid, proceed with form submission
        alert('Form submitted successfully!');
        form.reset();
    });

    // Email validation function
    function validateEmail(email) {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    // Animate elements on scroll
    const scrollElements = document.querySelectorAll('.scroll-animate');

    window.addEventListener('scroll', scrollHandler);

    function scrollHandler() {
        scrollElements.forEach(element => {
            if (isElementInViewport(element)) {
                element.classList.add('animate');
            } else {
                element.classList.remove('animate');
            }
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Trigger scrollHandler on page load
    scrollHandler();
});
