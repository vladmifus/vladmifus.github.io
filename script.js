// ==================== Mobile Menu Toggle ====================
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');
    });
}

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            // Close mobile menu if open
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
});

// ==================== Navbar Scroll Effect ====================
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.transform = 'translateY(0)';
        return;
    }
    
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScroll = currentScroll;
});

// ==================== Intersection Observer for Animations ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe service cards
document.querySelectorAll('.service-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe work cards
document.querySelectorAll('.work-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
    observer.observe(card);
});

// Observe principles
document.querySelectorAll('.principle').forEach((principle, index) => {
    principle.style.opacity = '0';
    principle.style.transform = 'translateX(-30px)';
    principle.style.transition = `opacity 0.6s ease ${index * 0.15}s, transform 0.6s ease ${index * 0.15}s`;
    observer.observe(principle);
});

// ==================== Contact Form Handling ====================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            company: document.getElementById('company').value,
            message: document.getElementById('message').value
        };
        
        // Here you would typically send the form data to a backend service
        // For now, we'll just show a success message
        console.log('Form submitted:', formData);
        
        // Show success message (you can customize this)
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Message Sent!';
        submitButton.style.background = '#2a4d5c';
        submitButton.disabled = true;
        
        // Reset form
        contactForm.reset();
        
        // Reset button after 3 seconds
        setTimeout(() => {
            submitButton.textContent = originalText;
            submitButton.style.background = '';
            submitButton.disabled = false;
        }, 3000);
    });
}

// ==================== Dynamic Block Animation ====================
const floatingBlocks = document.querySelectorAll('.floating-block');

floatingBlocks.forEach((block, index) => {
    const randomDelay = Math.random() * 5;
    const randomDuration = 15 + Math.random() * 10;
    
    block.style.animationDelay = `${randomDelay}s`;
    block.style.animationDuration = `${randomDuration}s`;
});

// ==================== Parallax Effect for Hero ====================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroContent = document.querySelector('.hero-content');
    const geometricBg = document.querySelector('.geometric-bg');
    
    if (heroContent && geometricBg) {
        heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
        geometricBg.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ==================== Logo Animation ====================
const logo = document.querySelector('.logo');

if (logo) {
    logo.addEventListener('mouseenter', () => {
        const blocks = logo.querySelectorAll('.block');
        blocks.forEach((block, index) => {
            setTimeout(() => {
                block.style.transform = `rotate(${Math.random() * 360}deg) scale(1.1)`;
            }, index * 50);
        });
    });
    
    logo.addEventListener('mouseleave', () => {
        const blocks = logo.querySelectorAll('.block');
        blocks.forEach((block) => {
            block.style.transform = '';
        });
    });
}

// ==================== Active Nav Link Highlighting ====================
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-links a[href="#${sectionId}"]`);
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.classList.remove('active');
            });
            if (navLink) {
                navLink.classList.add('active');
            }
        }
    });
});

// ==================== Composition Block Interaction ====================
const compositionBlocks = document.querySelectorAll('.comp-block');

compositionBlocks.forEach((block, index) => {
    block.addEventListener('mouseenter', () => {
        compositionBlocks.forEach((otherBlock, otherIndex) => {
            if (otherIndex !== index) {
                otherBlock.style.opacity = '0.3';
            }
        });
    });
    
    block.addEventListener('mouseleave', () => {
        compositionBlocks.forEach((otherBlock) => {
            otherBlock.style.opacity = '';
        });
    });
});
