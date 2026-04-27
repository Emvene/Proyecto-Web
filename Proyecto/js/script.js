
document.addEventListener('DOMContentLoaded', () => {

    const nav = document.getElementById('mainNav');
    if (nav) {
        const updateNav = () => {
            if (window.scrollY > 50) nav.classList.add('scrolled');
            else nav.classList.remove('scrolled');
        };
        window.addEventListener('scroll', updateNav, { passive: true });
        updateNav();
    }

    const reveals = document.querySelectorAll('.reveal');
    if (reveals.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        reveals.forEach(el => observer.observe(el));
    }

    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));

    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    [...popoverTriggerList].forEach(el => new bootstrap.Popover(el));

    const path = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('#mainNav .nav-link').forEach(link => {
        const href = link.getAttribute('href');
        if (href === path) link.classList.add('active');
    });

});
