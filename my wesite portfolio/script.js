document.addEventListener('DOMContentLoaded', () => {
    // Contact Number Reveal
    const revealBtn = document.getElementById('contact-reveal-btn');
    const numberDisplay = document.getElementById('contact-number-display');
    const phoneNumber = "on this place write your phone number";

    if (revealBtn && numberDisplay) {
        revealBtn.addEventListener('click', () => {
            numberDisplay.textContent = phoneNumber;
            numberDisplay.classList.add('visible');
            revealBtn.style.display = 'none'; // Hide button after revealing
        });
    }

    // Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle && nav) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');

            // Animate hamburger icon
            const spans = mobileToggle.querySelectorAll('span');
            spans[0].style.transform = nav.classList.contains('active') ? 'rotate(45deg) translate(5px, 5px)' : 'none';
            spans[1].style.opacity = nav.classList.contains('active') ? '0' : '1';
            spans[2].style.transform = nav.classList.contains('active') ? 'rotate(-45deg) translate(7px, -6px)' : 'none';
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-list a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                // Reset hamburger icon
                const spans = mobileToggle.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }

    // Header scroll effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
        } else {
            header.style.boxShadow = 'none';
        }
    });

    // Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(el => {
        observer.observe(el);
    });
});
