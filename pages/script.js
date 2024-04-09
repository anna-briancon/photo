document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector('.carousel');
    const images = carousel.querySelectorAll('img');
    const totalImages = images.length;
    let currentIndex = 0;

    function showImage(index) {
        images.forEach((image, i) => {
            image.style.transform = `translateX(-${index * 100}%)`;
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        showImage(currentIndex);
    }

    const interval = setInterval(nextImage, 20000); 

    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    prevButton.addEventListener('click', function() {
        clearInterval(interval);
        prevImage();
    });

    nextButton.addEventListener('click', function() {
        clearInterval(interval);
        nextImage();
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const nav = document.querySelector('header');
    const banner = document.querySelector('.banner');

    window.addEventListener('scroll', function() {
        if (window.scrollY > banner.offsetHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.nav-link');

    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop && scrollPosition < section.offsetTop + section.offsetHeight) {
                const sectionId = section.getAttribute('id');
                navLinks.forEach(link => {
                    if (link.getAttribute('href').slice(1) === sectionId) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        });
    }

    highlightNavLink();

    window.addEventListener('scroll', highlightNavLink); 
});


// Affiche le menu lors du clique sur le bouton burger
document.addEventListener('DOMContentLoaded', function () {
    const burgerBtn = document.getElementById('burger-btn');
    const nav = document.querySelector('nav');
    const navLinks = document.querySelectorAll('.nav-link');

    burgerBtn.addEventListener('click', function () {
        nav.classList.toggle('show-menu');
    });

    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            nav.classList.remove('show-menu');
        });
    });
});