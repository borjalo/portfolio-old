const navToggle = document.getElementById('navi-toggle');
const navLinks = document.querySelectorAll('.navigation__link');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navToggle.checked = false;
    })
});

new Typed(".typing", {
    strings: ["enthusiast", "proactive", "smart worker", "ambitious", "passionate", "Borja Alonso"],
    typeSpeed: 100,
    backSpeed: 60,
});

