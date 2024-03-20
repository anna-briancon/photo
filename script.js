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
