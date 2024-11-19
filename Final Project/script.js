window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header.navbar-container');
    if (window.scrollY > 50) { // Atur nilai sesuai kebutuhan
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});