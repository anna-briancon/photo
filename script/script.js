
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

// Carte
var map = L.map('map').setView([50, 0], 2); 

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

var LeafIcon = L.Icon.extend({
    options: {
        shadowUrl: 'assets/cadre.png',
        iconSize: [80, 65],
        shadowSize:   [95, 81],
        iconAnchor: [30, 94],
        shadowAnchor: [39, 97],
        popupAnchor: [-3, -76]
    }
});

var costa_rica = new LeafIcon({ iconUrl: 'assets/photos/costa_rica/tempete2.jpg' }),
    italie = new LeafIcon({ iconUrl: 'assets/photos/italie/affiche.png' }),
    amsterdam = new LeafIcon({ iconUrl: 'assets/photos/amsterdam/ruenuit.jpg' });

L.icon = function (options) {
    return new L.Icon(options);
};

var marker1 = L.marker([9.7489, -83.7534], {icon: costa_rica}).addTo(map);
var marker2 = L.marker([41.8719, 12.5674], {icon: italie}).addTo(map);
var marker3 = L.marker([52.3676, 4.9041], {icon: amsterdam}).addTo(map);

marker1.on('click', function() {
    window.location.href = 'pages/costa_rica.html';
});

marker2.on('click', function() {
    window.location.href = 'pages/italie.html';
});

marker3.on('click', function() {
    window.location.href = 'pages/amsterdam.html';
});

// choix carte / gallerie
document.addEventListener("DOMContentLoaded", function () {
    var galleryText = document.querySelector('.toggleText:first-child');
    var mapText = document.querySelector('.toggleText:last-child');
    var gallerySection = document.querySelector('.gallery-container');
    var mapSection = document.querySelector('.map');

    mapText.addEventListener('click', function () {
        if (!gallerySection.classList.contains('invisible')) {
            mapText.style.fontWeight = 'bold';
            galleryText.style.fontWeight = 'normal';
            gallerySection.classList.add('invisible');
            gallerySection.style.display = 'none';
            mapSection.classList.remove('invisible');
            mapSection.style.display = 'block';
        }
    });

    galleryText.addEventListener('click', function () {
        if (!mapSection.classList.contains('invisible')) {
            galleryText.style.fontWeight = 'bold';
            mapText.style.fontWeight = 'normal';
            gallerySection.classList.remove('invisible');
            gallerySection.style.display = 'grid';
            mapSection.classList.add('invisible');
            mapSection.style.display = 'none';
        }
    });
});

