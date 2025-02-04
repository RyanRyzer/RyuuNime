document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        const soldOut = product.querySelector('.sold-out');
        const buyButton = product.querySelector('.buy-button');
        
        if (soldOut) {
            buyButton.classList.add('disabled');
            buyButton.setAttribute('href', '#');
            buyButton.style.pointerEvents = 'none';
        }
    });
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header.navbar-container');
    if (window.scrollY > 50) { 
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 9000);
}

document.getElementById('feedback-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Terkirim');
});

elements.forEach(el => observer.observe(el));

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header.navbar-container');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

function showThankYouMessage() {
    alert("Terima kasih telah mendukung kami");
    window.location.href = "index.html";
    return false;
}