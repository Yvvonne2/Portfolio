// ===== COPY DEMO CREDENTIALS =====
function copyDemo(el) {
    navigator.clipboard.writeText(el.textContent).then(() => {
        el.classList.add('copied');
        const original = el.textContent;
        el.textContent = 'Copied!';
        setTimeout(() => {
            el.textContent = original;
            el.classList.remove('copied');
        }, 1500);
    });
}

// ===== NAVBAR SCROLL EFFECT =====
const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
});

// ===== ACTIVE NAV LINK ON SCROLL =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        if (window.scrollY >= section.offsetTop - 120) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===== SMOOTH CLOSE MOBILE MENU ON LINK CLICK =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const collapse = document.getElementById('navbarNav');
        const bsCollapse = bootstrap.Collapse.getInstance(collapse);
        if (bsCollapse) bsCollapse.hide();
    });
});

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
const note = document.getElementById('formNote');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = form.querySelector('button[type="submit"]');
        btn.textContent = 'Sending...';
        btn.disabled = true;

        setTimeout(() => {
            form.reset();
            btn.textContent = 'Send Message ✈';
            btn.disabled = false;
            note.textContent = '✅ Message sent! I\'ll get back to you soon.';
            note.style.color = '#10b981';
            setTimeout(() => { note.textContent = ''; }, 5000);
        }, 1500);
    });
}

// ===== SCROLL REVEAL ANIMATION =====
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll(
    '.skill-card, .project-card, .tl-card, .exp-card, .contact-card, .stat, .about-card'
).forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
});

// Add reveal CSS dynamically
const style = document.createElement('style');
style.textContent = `
    .reveal { opacity: 0; transform: translateY(24px); transition: opacity 0.55s ease, transform 0.55s ease; }
    .reveal.visible { opacity: 1; transform: translateY(0); }
`;
document.head.appendChild(style);
