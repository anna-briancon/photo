
// // Défilement du carousel
// document.addEventListener("DOMContentLoaded", function () {
//     const carousel = document.querySelector('.carousel');
//     const images = carousel.querySelectorAll('img');
//     const totalImages = images.length;
//     let currentIndex = 0;

//     function showImage(index) {
//         images.forEach((image, i) => {
//             image.style.transform = `translateX(-${index * 100}%)`;
//         });
//     }

//     function nextImage() {
//         currentIndex = (currentIndex + 1) % totalImages;
//         showImage(currentIndex);
//     }

//     function prevImage() {
//         currentIndex = (currentIndex - 1 + totalImages) % totalImages;
//         showImage(currentIndex);
//     }

//     const interval = setInterval(nextImage, 20000);

//     const prevButton = document.querySelector('.prev');
//     const nextButton = document.querySelector('.next');

//     prevButton.addEventListener('click', function () {
//         clearInterval(interval);
//         prevImage();
//     });

//     nextButton.addEventListener('click', function () {
//         clearInterval(interval);
//         nextImage();
//     });
// });

// Détecte des qu'on sort du header en scrollant
document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector('header');
    const banner = document.querySelector('.banner');

    window.addEventListener('scroll', function () {
        if (window.scrollY > banner.offsetHeight) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });
});

// Change l'état de la nav en fonction d'où on se trouve sur la page
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navHeight = document.querySelector('nav').offsetHeight;

    function highlightNavLink() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY + navHeight;

        sections.forEach(section => {
            if (scrollPosition >= section.offsetTop + 10 && scrollPosition < section.offsetTop + section.offsetHeight) {
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

    // const scrollToTop = document.querySelector('.scroll-to-top');

    // window.addEventListener('scroll', () => {
    //     if (window.pageYOffset > 300) {
    //         scrollToTop.classList.add('show');
    //     } else {
    //         scrollToTop.classList.remove('show');
    //     }
    // });

    // scrollToTop.addEventListener('click', (event) => {
    //     event.preventDefault();
    //     window.scrollTo({
    //         top: 0,
    //         behavior: 'smooth'
    //     });
    // });
});

// Défilement fluide lors du clique sur les deux fleches vers le bas 
document.addEventListener("DOMContentLoaded", function () {
    const scrollDownLink = document.querySelector('.scroll-down');

    scrollDownLink.addEventListener('click', function (event) {
        event.preventDefault(); 

        const targetSection = document.querySelector('#presentation');
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    });
});
