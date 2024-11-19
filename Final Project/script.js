window.addEventListener('scroll', function() {
    const navbar = document.querySelector('header.navbar-container');
    if (window.scrollY > 50) { // Atur nilai sesuai kebutuhan
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
