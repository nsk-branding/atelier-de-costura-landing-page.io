document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-grid img');
    const overlay = document.querySelector('.gallery-overlay');
    const overlayImage = overlay.querySelector('img');

    images.forEach(image => {
        image.addEventListener('click', () => {
            overlayImage.src = image.src;
            overlay.classList.add('active');
        });
    });

    overlay.addEventListener('click', () => {
        overlay.classList.remove('active');
    });
});
