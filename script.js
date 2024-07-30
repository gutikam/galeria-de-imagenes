document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const close = document.getElementById('close');
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');
    const galleryImages = document.querySelectorAll('.gallery img');
    let currentIndex;

    function showModal(index) {
        modal.style.display = "block";
        modalImg.src = galleryImages[index].src;
        captionText.innerHTML = galleryImages[index].alt;
        currentIndex = index;
    }

    galleryImages.forEach((img, index) => {
        img.addEventListener('click', function() {
            showModal(index);
        });
    });

    close.addEventListener('click', function() {
        modal.style.display = "none";
    });

    modal.addEventListener('click', function(event) {
        if (event.target !== modalImg && event.target !== prev && event.target !== next) {
            modal.style.display = "none";
        }
    });

    prev.addEventListener('click', function() {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryImages.length - 1;
        showModal(currentIndex);
    });

    next.addEventListener('click', function() {
        currentIndex = (currentIndex < galleryImages.length - 1) ? currentIndex + 1 : 0;
        showModal(currentIndex);
    });
});