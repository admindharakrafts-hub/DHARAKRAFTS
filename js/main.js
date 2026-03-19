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
        toggle.addEventListener('click', function () {
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

    // --- 4. Dynamic Hero Product Carousel ---
    const heroCarousel = document.getElementById('heroCarousel');
    if (heroCarousel) {
        // All 107 products — name, file, category
        const allProducts = [
            { n: "Absolute Black Slab", f: "product-absolute-black-slab.html", c: "Granite", img: "assets/images/products/absolute_black_granite_final.png" },
            { n: "Agra Red Sandstone Pebbles", f: "product-agra-red-sandstone-pebbles.html", c: "Pebbles", img: "assets/images/products/Agra-Red-Sandstone-Pebbles.webp" },
            { n: "Agra Red Sandstone", f: "product-agra-red-sandstone.html", c: "Sandstone", img: "assets/images/products/agra_red_sandstone.jpg" },
            { n: "alaska gold", f: "product-alaska-gold.html", c: "Granite", img: "assets/images/products/gold-alaska-granite.jpg" },
            { n: "Biege Color Sandstone", f: "product-biege-color-sandstone.html", c: "Pebbles" },
            { n: "Black Butterfly Granite Tombstone", f: "product-black-butterfly-granite-tombstone-monuments.html", c: "Monuments", img: "assets/images/products/butterfly_monument.avif" },
            { n: "Black Butterfly Monument", f: "product-black-butterfly-monument.html", c: "Monuments" },
            { n: "Black Cross Granite Monument", f: "product-black-cross-granite-monument.html", c: "Monuments", img: "assets/images/products/india-black-cross-7.jpg" },
            { n: "Black French Tombstone", f: "product-black-french-tombstone-granite-monument.html", c: "Monuments", img: "assets/images/products/french-style-monument-tombstone-shanxi-black-granit-monuments-p291120-1b.jpg" },
            { n: "Black Galaxy Granite", f: "product-black-galaxy-granite.html", c: "Granite", img: "assets/images/products/black-galaxy-granite-stone-376782267-wi944.avif" },
            { n: "Black Heart Granite Monument", f: "product-black-heart-granite-monument.html", c: "Monuments", img: "assets/images/products/india-black-small-heart.jpg" },
            { n: "Black Leaf Design Tombstone", f: "product-black-leaf-design-granite-tombstone.html", c: "Monuments", img: "assets/images/products/black_leaf_tombstone.webp" },
            { n: "Black Molloy Tombstone", f: "product-black-molloy-tombstone-granite-monument.html", c: "Monuments" },
            { n: "Black Olive Shaped Monument", f: "product-black-olive-shaped-granite-monument.html", c: "Monuments" },
            { n: "Black Pearl Granite", f: "product-black-pearl-granite.html", c: "Granite", img: "assets/images/products/black-pearl-rajasthan-best-quality.webp" },
            { n: "Black Polished Serp Top Monument", f: "product-black-polished-serp-top-granite-monument.html", c: "Monuments" },
            { n: "Black River Pebbles", f: "product-black-river-pebbles.html", c: "Pebbles", img: "assets/images/products/black-river-pebbles.jpeg" },
            { n: "Black Rock Pitched Oval Monument", f: "product-black-rock-pitched-oval-granite-monument.html", c: "Monuments" },
            { n: "Black Serp Top Monument 2", f: "product-black-serp-top-granite-monument-2.html", c: "Monuments" },
            { n: "Black Serp Top Monument", f: "product-black-serp-top-granite-monument.html", c: "Monuments" },
            { n: "Black Single Monument", f: "product-black-single-granite-monument.html", c: "Monuments" },
            { n: "Blue Dunes Granite", f: "product-blue-dunes-granite.html", c: "Granite", img: "assets/images/products/blue dunes slab2.jpg" },
            { n: "Borghini White Quartz", f: "product-borghini-white-quartz.html", c: "Quartz" },
            { n: "Calacatta Angola Quartz", f: "product-calacatta-angola-quartz.html", c: "Quartz" },
            { n: "Calacatta Classic Quartz", f: "product-calacatta-classic-quartz.html", c: "Quartz" },
            { n: "Calacatta Muses Quartz", f: "product-calacatta-muses-quartz.html", c: "Quartz" },
            { n: "Calacatta Noble Quartz", f: "product-calacatta-noble-quartz.html", c: "Quartz" },
            { n: "Calacatta Nuvo Quartz", f: "product-calacatta-nuvo-quartz.html", c: "Quartz" },
            { n: "Calacatta Ocean Quartz", f: "product-calacatta-ocean-quartz.html", c: "Quartz" },
            { n: "Calacatta Pearl White Quartz", f: "product-calacatta-pearl-white-quartz.html", c: "Quartz" },
            { n: "Calacatta Sahara Quartz", f: "product-calacatta-sahara-quartz.html", c: "Quartz" },
            { n: "Calacatta Sky Quartz", f: "product-calacatta-sky-quartz.html", c: "Quartz" },
            { n: "Calacatta Statuario Quartz", f: "product-calacatta-statuario-quartz.html", c: "Quartz" },
            { n: "Calacatta Unique Quartz", f: "product-calacatta-unique-quartz.html", c: "Quartz" },
            { n: "Calacatta Venice Quartz", f: "product-calacatta-venice-quartz.html", c: "Quartz" },
            { n: "Calcutta Raphael Quartz", f: "product-calcutta-raphael-quartz.html", c: "Quartz" },
            { n: "Camel Dust Sandstone", f: "product-camel-dust-sandstone.html", c: "Sandstone" },
            { n: "Carrara Alaska Quartz", f: "product-carrara-alaska-quartz.html", c: "Quartz" },
            { n: "Carrara Bianco Quartz", f: "product-carrara-bianco-quartz.html", c: "Quartz" },
            { n: "Carrara Cloud Quartz", f: "product-carrara-cloud-quartz.html", c: "Quartz" },
            { n: "Carrara White Quartz", f: "product-carrara-white-quartz.html", c: "Quartz" },
            { n: "Carrera Polish Marble", f: "product-carrera-polish-marble.html", c: "Marble" },
            { n: "Classic Paradise Granite", f: "product-classic-paradise-granite.html", c: "Granite", img: "assets/images/products/classic-paradise-granite.png" },
            { n: "Cross Celtic Cross Monument", f: "product-cross-celtic-cross-black-granite-monument.html", c: "Monuments" },
            { n: "Crystal White Quartz", f: "product-crystal-white-quartz.html", c: "Quartz" },
            { n: "Dholpur Beige Sandstone", f: "product-dholpur-beige-sandstone.html", c: "Sandstone", img: "assets/images/products/dholpur_beige_sandstone.jpg" },
            { n: "Diana Italian Marble", f: "product-diana-italian-marble.html", c: "Marble" },
            { n: "Dulhan Statue", f: "product-dulhan.html", c: "Statues", img: "assets/images/products/dulhan-statue.png" },
            { n: "Durga Statue", f: "product-durga.html", c: "Statues", img: "assets/images/products/MaaDurga.webp" },
            { n: "Elephant Statue", f: "product-elephant.html", c: "Statues", img: "assets/images/products/elephant.jpg" },
            { n: "Engineered Calacatta Quartz", f: "product-engineered-calacatta-quartz.html", c: "Quartz" },
            { n: "Epoxied Mix Color Pebbles", f: "product-epoxied-mix-color-pebbles.html", c: "Pebbles", img: "assets/images/products/epoxised-mix-color-pebbles.jpeg" },
            { n: "Fantasy Brown Marble", f: "product-fantasy-brown-marble.html", c: "Marble" },
            { n: "Fossil Mint Sandstone", f: "product-fossil-mint-sandstone.html", c: "Sandstone", img: "assets/images/products/FossilMint_Sandstone-Tumbled.webp" },
            { n: "Gandhiji Marble Statue", f: "product-gandhiji-marble-statue.html", c: "Statues", img: "assets/images/products/gandhi.webp" },
            { n: "Ganesh Statue", f: "product-ganesh-statue.html", c: "Statues", img: "assets/images/products/ganesh.avif" },
            { n: "Golden Beach Granite", f: "product-golden-beach-granite.html", c: "Granite", img: "assets/images/products/Golden-Beach-Granite.png" },
            { n: "Gray Family Tombstone", f: "product-gray-family-tombstone-granite-monument.html", c: "Monuments" },
            { n: "Grey Flamed Granite", f: "product-grey-flamed-granite.html", c: "Granite", img: "assets/images/products/Grey-Flamed-Granite.png" },
            { n: "Grey Granite Monument", f: "product-grey-granite-monument.html", c: "Monuments" },
            { n: "Grey River Flat Pebbles", f: "product-grey-river-flat-pebbles.html", c: "Pebbles", img: "assets/images/products/Grey-river-flat-pebbles.jpeg" },
            { n: "Handcrafted Marble Lamp", f: "product-handcrafted-marble-lamp.html", c: "Statues", img: "assets/images/products/handcrafted-marble-lamp.jpg" },
            { n: "Handcrafted Marble Pot", f: "product-handcrafted-marble-pot.html", c: "Statues", img: "assets/images/products/handcrafted-marble-pot.webp" },
            { n: "Handcrafted Marble Wine Glass Pair", f: "product-handcrafted-marble-wine-glass-pair.html", c: "Statues", img: "assets/images/products/handcrafted-marble-wine-glass-pair.jpg" },
            { n: "Hanuman Ji Statue", f: "product-hanuman-ji.html", c: "Statues", img: "assets/images/products/hanuman.jpg" },
            { n: "Heart Shaped Tombstone", f: "product-heart-shaped-tombstone-granite-monument.html", c: "Monuments" },
            { n: "Indian Green Marble", f: "product-indian-green-marble.html", c: "Marble" },
            { n: "Indian Statuario Marble", f: "product-indian-statuario-marble.html", c: "Marble" },
            { n: "Indo Italian Marble", f: "product-indo-italian-marble.html", c: "Marble" },
            { n: "Indo Pista Marble", f: "product-indo-pista-marble.html", c: "Marble" },
            { n: "Kadappa Black Limestone", f: "product-kadappa-black-limestone.html", c: "Sandstone", img: "assets/images/products/kadappa-black-limestone.jpg" },
            { n: "Kali Maa Statue", f: "product-kali-maa.html", c: "Statues", img: "assets/images/products/kali-maa.jpg" },
            { n: "Kandla Grey Sandstone", f: "product-kandla-grey-sandstone.html", c: "Sandstone", img: "assets/images/products/Kandla-Grey-Sandstone-Split-Surface.webp" },
            { n: "Kerala Green Granite", f: "product-kerala-green-granite.html", c: "Granite", img: "assets/images/products/Kerala-Green-Granite.png" },
            { n: "Kota Blue Limestone", f: "product-kota-blue-limestone.html", c: "Sandstone", img: "assets/images/products/Kota-Blue-Limestone.png" },
            { n: "Kota Brown Limestone", f: "product-kota-brown-limestone.html", c: "Sandstone", img: "assets/images/products/Kota-Brown-Limestone.png" },
            { n: "Lalitpur Yellow Sandstone", f: "product-lalitpur-yellow-sandstone.html", c: "Sandstone", img: "assets/images/products/Lalitpur-Yellow-Sandstone.png" },
            { n: "Lavender Fusion Marble", f: "product-lavender-fusion-marble.html", c: "Marble" },
            { n: "Lion Statue", f: "product-lion.html", c: "Statues", img: "assets/images/products/lion.jpg" },
            { n: "Lord Buddha Statue", f: "product-lord-buddha.html", c: "Statues", img: "assets/images/products/buddha.jpg" },
            { n: "Makrana White Marble", f: "product-makrana-white-marble.html", c: "Marble" },
            { n: "Mandana Red Sandstone", f: "product-mandana-red-sandstone.html", c: "Sandstone", img: "assets/images/products/Mandana-Red-Sandstone.png" },
            { n: "Marble Lady Statue", f: "product-marble-lady-statue.html", c: "Statues", img: "assets/images/products/marble-lady-statue.jpg" },
            { n: "Marble Vase Pair", f: "product-marble-vase-pair.html", c: "Statues", img: "assets/images/products/marble-vase-pair.jpg" },
            { n: "Mint Sandstone", f: "product-mint-sandstone.html", c: "Sandstone", img: "assets/images/products/Mint-Sandstone.jpg" },
            { n: "Mix Color Pebbles", f: "product-mix-color-pebbles.html", c: "Pebbles", img: "assets/images/products/mix-color-pebbles.jpeg" },
            { n: "Morwad White Marble", f: "product-morwad-white-marble.html", c: "Marble" },
            { n: "Nano White Marble", f: "product-nano-white-marble.html", c: "Marble" },
            { n: "Natural Beige & Red River", f: "product-natural-beige-_-red-river.html", c: "Pebbles", img: "assets/images/products/Natural-beige-red-river.jpeg" },
            { n: "Natural Multi Color Pebbles", f: "product-natural-multi-color-pebbles.html", c: "Pebbles", img: "assets/images/products/natural-multi-color-pebbles.jpeg" },
            { n: "P White Granite", f: "product-p-white-granite.html", c: "Granite", img: "assets/images/products/P-White-3.jpg" },
            { n: "Paradisso Bash Granite", f: "product-paradisso-bash-granite.html", c: "Granite" },
            { n: "Radha Krishna Statue", f: "product-radha-krishna.html", c: "Statues", img: "assets/images/products/radha-krishna.webp" },
            { n: "Raj Green Sandstone", f: "product-raj-green-sandstone.html", c: "Sandstone", img: "assets/images/products/Raj-green-sandstone.png" },
            { n: "Rajasthan Black Granite", f: "product-rajasthan-black-granite.html", c: "Granite", img: "assets/images/products/rajasthan_black_granite_slab.jpg" },
            { n: "Ram Lakshman Sita Statue", f: "product-ram-lakshman-sita.html", c: "Statues", img: "assets/images/products/ram-sita.jpeg" },
            { n: "Saraswati Statue", f: "product-saraswati.html", c: "Statues", img: "assets/images/products/saraswati.jpg" },
            { n: "Shiva Statue", f: "product-shiva.html", c: "Statues", img: "assets/images/products/shiva.jpg" },
            { n: "Single Brown Tombstone", f: "product-single-brown-tombstone-granite-monument.html", c: "Monuments" },
            { n: "Single Grey Tombstone", f: "product-single-grey-tombstone-granite-monument.html", c: "Monuments" },
            { n: "Small Black Pebbles", f: "product-small-black-pebbles.html", c: "Pebbles", img: "assets/images/products/small-black-river-pebbles.jpeg" },
            { n: "Copper Slatestone", f: "product-copper-slatestone.html", c: "Slate" },
            { n: "Deoli Green Slatestone", f: "product-deoli-green-slatestone.html", c: "Slate" },
            { n: "Jeera Green Slatestone", f: "product-jeera-green-slatestone.html", c: "Slate" },
            { n: "Kund Multi Slate", f: "product-kund-multi-slate.html", c: "Slate" },
            { n: "Silver Grey Slate", f: "product-silver-grey-slate.html", c: "Slate" },
            { n: "Green Rustic Slate", f: "product-green-rustic-slate.html", c: "Slate" },
            { n: "Chocolate Slate", f: "product-chocolate-slate.html", c: "Slate" },
            { n: "M. Green Slate", f: "product-m-green-slate.html", c: "Slate" },
            { n: "D. Green Slate", f: "product-d-green-slate.html", c: "Slate" },
            { n: "Terra Yellow Slate", f: "product-terra-yellow-slate.html", c: "Slate" },
            { n: "Kund Black Slate", f: "product-kund-black-slate.html", c: "Slate" },
            { n: "California Gold Slate", f: "product-california-gold-slate.html", c: "Slate" },
            { n: "Fossil Mint Slate", f: "product-fossil-mint-slate.html", c: "Slate" },
            { n: "H. White Slate", f: "product-h-white-slate.html", c: "Slate" },
            { n: "Indian Autumn Rustic Slate", f: "product-indian-autumn-rustic-slate.html", c: "Slate" },
            { n: "India Autumn Slate", f: "product-india-autumn-slate.html", c: "Slate" },
            { n: "Jak Black Slate", f: "product-jak-black-slate.html", c: "Slate" },
            { n: "Kodak Slate", f: "product-kodak-slate.html", c: "Slate" },
            { n: "SRA Multi Slate", f: "product-sra-multi-slate.html", c: "Slate" },
            { n: "Silver Shine Slate", f: "product-silver-shine-slate.html", c: "Slate" },
            { n: "Terra Red Slate", f: "product-terra-red-slate.html", c: "Slate" },
            { n: "Multi Pink Slatestone", f: "product-multi-pink-slatestone.html", c: "Slate" },
            { n: "South Black Slatestone", f: "product-south-black-slatestone.html", c: "Slate" },
            { n: "Subhash Chandra Bose Statue", f: "product-subhash-chandra-bose.html", c: "Statues", img: "assets/images/products/subhash-chandra-bose.avif" },
            { n: "Tandur Grey Limestone", f: "product-tandur-grey-limestone.html", c: "Sandstone", img: "assets/images/products/tandur_grey_limestone.jpg" },
            { n: "Tandur Yellow Limestone", f: "product-tandur-yellow-limestone.html", c: "Sandstone", img: "assets/images/products/tandoor-yellow-limestone-paving-patio-slabs.jpg" },
            { n: "Vietnam White Marble", f: "product-vietnam-white-marble.html", c: "Marble" },
            { n: "Viscon White Granite", f: "product-viscon-white-granite.html", c: "Granite", img: "assets/images/products/viscon-white-granite-slab.jpeg" },
            { n: "White River Pebbles", f: "product-white-river-pebbles.html", c: "Pebbles", img: "assets/images/products/white-river-pebbles.jpeg" }
        ];

        // Color palette for slide backgrounds (elegant gradients)
        const gradients = [
            'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
            'linear-gradient(135deg, #2d1b34 0%, #1a1a2e 50%, #16213e 100%)',
            'linear-gradient(135deg, #0a192f 0%, #112240 50%, #1d3557 100%)',
            'linear-gradient(135deg, #1b1b2f 0%, #162447 50%, #1f4068 100%)',
            'linear-gradient(135deg, #2c3e50 0%, #1a252f 50%, #0d1b2a 100%)',
            'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)',
        ];

        // Generate slides
        const nextBtn = heroCarousel.querySelector('.hero-next');
        const prevBtn = heroCarousel.querySelector('.hero-prev');

        allProducts.forEach((p, i) => {
            const slide = document.createElement('a');
            slide.href = p.f;
            slide.className = 'hero-slide' + (i === 0 ? ' active' : '');
            let bgContent = '';
            if (p.img) {
                bgContent = `<div style="position:absolute; top:0; left:0; width:100%; height:100%; overflow:hidden; z-index:0;"><img src="${p.img}" alt="${p.n}" class="hero-bg-img"></div>`;
            } else {
                slide.style.background = gradients[i % gradients.length];
            }

            slide.innerHTML = `
                ${bgContent}
                <div class="hero-overlay"></div>
                <div class="container hero-content">
                    <h2 class="hero-subtitle">${p.c}</h2>
                    <h1 class="hero-title">${p.n}</h1>
                    <p class="hero-desc">Premium quality ${p.c.toLowerCase()} from India. Click to explore specifications.</p>
                    <span class="btn btn-ghost">View Details</span>
                </div>
            `;
            heroCarousel.insertBefore(slide, nextBtn);
        });

        // Carousel logic
        const slides = heroCarousel.querySelectorAll('.hero-slide');
        let currentSlide = 0;

        const showSlide = (index) => {
            slides.forEach(s => s.classList.remove('active'));
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

        let slideInterval = setInterval(nextSlide, 4000);

        if (nextBtn && prevBtn) {
            nextBtn.addEventListener('click', () => {
                nextSlide();
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 4000);
            });

            prevBtn.addEventListener('click', () => {
                prevSlide();
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 4000);
            });
        }
    }

    // --- 5. FAQ Accordion ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function () {
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
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Thank you for your inquiry! We will get back to you within 24 hours.');
            this.reset();
        });
    }
});
