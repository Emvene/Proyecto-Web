/* ==============================================
   NOVATECH — script.js
   1. Navbar scroll effect
   2. Scroll Top button
   3. IntersectionObserver — reveal animations
   4. Enlace activo en navbar según sección visible
============================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* -----------------------------------------------
       1. NAVBAR — clase "scrolled" al hacer scroll
    ----------------------------------------------- */
    const nav = document.getElementById('mainNav');

    function updateNav() {
        if (window.scrollY > 60) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    }

    window.addEventListener('scroll', updateNav, { passive: true });
    updateNav();


    /* -----------------------------------------------
       2. BOTÓN SCROLL TOP
    ----------------------------------------------- */
    const scrollTopBtn = document.getElementById('scrollTop');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });


    /* -----------------------------------------------
       3. REVEAL AL HACER SCROLL — IntersectionObserver
    ----------------------------------------------- */
    const revealEls = document.querySelectorAll('.reveal-up, .reveal-izq, .reveal-der');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealEls.forEach(el => revealObserver.observe(el));


    /* -----------------------------------------------
       4. ENLACE ACTIVO en navbar al scrollear
    ----------------------------------------------- */
    const sections   = document.querySelectorAll('section[id], header[id]');
    const navLinks   = document.querySelectorAll('#navMenu .nav-link');
    const navOffset  = 80; // altura navbar

    function setActiveLink() {
        let current = '';

        sections.forEach(sec => {
            const top = sec.offsetTop - navOffset - 10;
            if (window.scrollY >= top) {
                current = sec.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active-link');
            const href = link.getAttribute('href');
            if (href === '#' + current) {
                link.classList.add('active-link');
            }
        });
    }

    // Estilo para el enlace activo (inyectado por JS para no tocar el CSS)
    const activeStyle = document.createElement('style');
    activeStyle.textContent = `
        #navMenu .nav-link.active-link {
            color: var(--secondary) !important;
            background: rgba(0,198,255,0.08);
        }
    `;
    document.head.appendChild(activeStyle);

    window.addEventListener('scroll', setActiveLink, { passive: true });
    setActiveLink();


    /* -----------------------------------------------
       5. CERRAR menú móvil al hacer clic en un enlace
    ----------------------------------------------- */
    const navCollapse = document.getElementById('navMenu');
    const bsCollapse  = new bootstrap.Collapse(navCollapse, { toggle: false });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navCollapse.classList.contains('show')) {
                bsCollapse.hide();
            }
        });
    });

});
