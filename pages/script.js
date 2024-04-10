const galleryItems = document.querySelectorAll('.grid-item img');
const photoViewer = document.getElementById('photoViewer');
const photoViewerImg = photoViewer.querySelector('.photo-viewer__img');
const photoViewerClose = photoViewer.querySelector('.photo-viewer__close');

galleryItems.forEach((item) => {
    item.addEventListener('click', (event) => {
        const largeImageUrl = event.target.getAttribute('data-large-image');

        photoViewerImg.src = largeImageUrl;

        photoViewer.style.display = 'block';
    });
});

photoViewerClose.addEventListener('click', () => {
    closePhotoViewer();
});

photoViewer.addEventListener('click', (event) => {
    if (event.target !== photoViewerImg) {
        closePhotoViewer();
    }
});

const photoViewerNavPrev = photoViewer.querySelector('.photo-viewer__nav--prev');
const photoViewerNavNext = photoViewer.querySelector('.photo-viewer__nav--next');

let currentImageIndex = -1;

galleryItems.forEach((item, index) => {
    item.addEventListener('click', (event) => {
        const largeImageUrl = event.target.getAttribute('data-large-image');

        photoViewerImg.src = largeImageUrl;

        currentImageIndex = index;

        photoViewer.style.display = 'block';
    });
});

photoViewerNavPrev.addEventListener('click', (event) => {
    event.stopPropagation();
    navigate(-1);
});

photoViewerNavNext.addEventListener('click', (event) => {
    event.stopPropagation();
    navigate(1);
});

function navigate(direction) {
    const newIndex = currentImageIndex + direction;

    if (newIndex >= 0 && newIndex < galleryItems.length) {
        photoViewerImg.src = galleryItems[newIndex].getAttribute('data-large-image');

        currentImageIndex = newIndex;
    }
}

function closePhotoViewer() {
    photoViewer.style.display = 'none';
}

// Affiche le tooltip lors du survol d'un projet
document.addEventListener('DOMContentLoaded', function () {
    const tooltip = document.getElementById('tooltip');
    const projets = document.querySelectorAll('.grid-item');
    let mouseX, mouseY;

    document.addEventListener('mousemove', function (event) {
        mouseX = event.clientX + window.scrollX;
        mouseY = event.clientY + window.scrollY;
        updateTooltipPosition();

    });

    function updateTooltipPosition() {
        tooltip.style.position = 'absolute';
        tooltip.style.left = `${mouseX + 10}px`;
        tooltip.style.top = `${mouseY + 10}px`;
    }

    projets.forEach(projet => {
        projet.addEventListener('mouseover', function () {
            if (window.innerWidth > 1000) {
                const category = projet.getAttribute('data-text');
                tooltip.style.display = 'block';
                tooltip.innerHTML = category;
                projet.classList.add('hovered');
            }
        });

        projet.addEventListener('mouseout', function () {
            if (window.innerWidth > 1000) {
                tooltip.style.display = 'none';
                projet.classList.remove('hovered');
            }
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


