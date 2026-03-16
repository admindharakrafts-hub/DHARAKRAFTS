/**
 * Dharakrafts International - Main Scripts (Regatta Framework)
 */

document.addEventListener('DOMContentLoaded', () => {

    // --- 1. Sticky Header ---
    const mainHeader = document.getElementById('mainHeader');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            mainHeader.classList.add('scrolled');
        } else {
            mainHeader.classList.remove('scrolled');
        }
    });

    // --- 2. Mobile Menu Overlay Toggle ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mobileMenuCloseBtn = document.querySelector('.mobile-menu-close');
    const mobileNavOverlay = document.getElementById('mobileNav');

    if (mobileMenuBtn && mobileNavOverlay) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    }

    if (mobileMenuCloseBtn && mobileNavOverlay) {
        mobileMenuCloseBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // --- 3. Mobile Dropdown Accordion ---
    const mobileDropdownToggles = document.querySelectorAll('.mobile-dropdown-toggle');
    
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            const menu = this.nextElementSibling;
            const icon = this.querySelector('i');
            
            if (menu.classList.contains('active')) {
                menu.classList.remove('active');
                icon.style.transform = 'rotate(0deg)';
            } else {
                // Close others
                document.querySelectorAll('.mobile-dropdown-menu').forEach(m => m.classList.remove('active'));
                document.querySelectorAll('.mobile-dropdown-toggle i').forEach(i => i.style.transform = 'rotate(0deg)');
                
                // Open clicked
                menu.classList.add('active');
                icon.style.transform = 'rotate(180deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
    });

    // --- 4. Simple Hero Carousel Timing ---
    const slides = document.querySelectorAll('.hero-slide');
    if(slides.length > 1) {
        let currentSlide = 0;
        
        const showSlide = (index) => {
            slides.forEach(slide => slide.classList.remove('active'));
            slides[index].classList.add('active');
        };

        const nextSlide = () => {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        };

        const prevSlide = () => {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        };

        // Auto slide
        let slideInterval = setInterval(nextSlide, 5000);

        // Controls
        const nextBtn = document.querySelector('.hero-next');
        const prevBtn = document.querySelector('.hero-prev');

        if(nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000); // Reset timer
            });
            
            prevBtn.addEventListener('click', () => {
                prevSlide();
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 5000);
            });
        }
    }

    // --- 5. FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const faqItem = this.parentElement;
            const isActive = faqItem.classList.contains('active');

            // Close all
            document.querySelectorAll('.faq-item').forEach(item => item.classList.remove('active'));
            
            // Open clicked (if it wasn't already open)
            if (!isActive) {
                faqItem.classList.add('active');
            }
        });
    });

    // --- 6. Contact Form Submit ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you within 24 hours.');
            this.reset();
        });
    }
});
