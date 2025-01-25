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

document.getElementById('search-button').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Tombol cari diklik');
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    console.log('Kata kunci pencarian:', searchInput);
    const elementsToSearch = document.querySelectorAll('.anime-item');

    elementsToSearch.forEach(element => {
        if (element.textContent.toLowerCase().includes(searchInput)) {
            element.style.display = 'block';
        } else {
            element.style.display = 'none';
        }
    });
});

function showThankYouMessage() {
    alert("Terima kasih telah mendukung kami");
    window.location.href = "index.html";
    return false;
}
