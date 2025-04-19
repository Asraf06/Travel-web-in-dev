// home.js
document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.card');
    let animationDelay = 100;

    // First animate the initially visible cards (first 6)
    const firstBatch = Array.from(cards).slice(0, 6);
    firstBatch.forEach((card, index) => {
        setTimeout(() => {
            card.style.transitionDelay = `${index * 0.05}s`;
            card.classList.add('animate-in');
        }, index * 50); // Faster initial animation
    });

    // Configure Intersection Observer for remaining cards
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const card = entry.target;
                const index = Array.from(cards).indexOf(card);

                // Calculate delay based on position
                const delay = Math.min(index * 30, 300); // Max 300ms delay

                setTimeout(() => {
                    card.style.transitionDelay = `${delay}ms`;
                    card.classList.add('animate-in');
                    observer.unobserve(card);
                }, delay);
            }
        });
    }, {
        threshold: 0.05, // More sensitive trigger
        rootMargin: '0px 0px -50px 0px' // Smaller margin
    });

    // Observe only cards after the first 6
    Array.from(cards).slice(6).forEach(card => {
        observer.observe(card);
    });

    // Optimize scroll performance
    let lastScrollTime = 0;
    window.addEventListener('scroll', function () {
        const now = Date.now();
        if (now - lastScrollTime > 100) { // Throttle to 100ms
            observer.takeRecords(); // Process any pending observations
            lastScrollTime = now;
        }
    }, { passive: true });
});

document.querySelector('.menu-toggle').addEventListener('click', function () {
    this.classList.toggle('active');
    document.querySelector('.sidebar').classList.toggle('active');
    document.querySelector('.overlay').classList.toggle('active');
    if (document.body.style.overflow === 'hidden') {
        document.body.style.overflow = 'visible';
    } else {
        document.body.style.overflow = 'hidden';
    }

    const hamburger = document.querySelector(".hamburger");

    // if (hamburger.style.backgroundColor = "#000000")
});

document.querySelector('.overlay').addEventListener('click', function () {
    this.classList.remove('active');
    document.querySelector('.menu-toggle').classList.remove('active');
    document.querySelector('.sidebar').classList.remove('active');
    document.body.style.overflow = "visible";
});

