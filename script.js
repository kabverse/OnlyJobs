// Intersection Observer for step cards
const stepCardObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.step-card').forEach(card => {
    stepCardObserver.observe(card);
});

// FAQ Toggles
document.querySelectorAll('.faq-question').forEach(question => {
    question.addEventListener('click', () => {
        const item = question.parentElement;
        item.classList.toggle('active');
    });
});

// Floating button visibility
window.addEventListener('scroll', () => {
    const button = document.querySelector('.floating-button');
    if (button) {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    }
});

// Function to format numbers with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Function to animate a single counter
function animateCounter(element, target) {
    const duration = 2000; // Animation duration in milliseconds
    const steps = 60; // Number of steps (for smoothness)
    const stepDuration = duration / steps;
    let current = 0;

    // Calculate the increment per step
    const increment = target / steps;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = formatNumber(Math.floor(current));
            setTimeout(updateCounter, stepDuration);
        } else {
            element.textContent = formatNumber(target);
        }
    };

    updateCounter();
}

// Intersection Observer setup for stats animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Get all stat numbers within the observed element
            const statNumbers = entry.target.querySelectorAll('.stat-number');

            // Animate each number
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                if (!isNaN(target)) {
                    animateCounter(stat, target);
                }
            });

            // Unobserve after animation starts
            statsObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.25 }); // Trigger when 25% of element is visible

// Start observing the stats section
document.addEventListener('DOMContentLoaded', () => {
    const statsSection = document.querySelector('.stats-grid');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
});

// Newsletter form animation
const form = document.querySelector('.newsletter-form');
if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const button = form.querySelector('button');
        if (button) {
            button.textContent = 'Subscribed!';
            button.classList.add('button-success');
            setTimeout(() => {
                button.textContent = 'Subscribe';
                form.reset();
            }, 2000);
        }
    });
}
