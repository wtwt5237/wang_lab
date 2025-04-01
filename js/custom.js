let currentIndex = 0;

function moveSlide(direction) {
    const items = document.querySelectorAll('.news-item');
    currentIndex += direction;

    if (currentIndex < 0) currentIndex = items.length - 1;
    if (currentIndex >= items.length) currentIndex = 0;

    const offset = -currentIndex * 100 + '%';
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset})`;
}

// Auto slide every 3 seconds
setInterval(() => moveSlide(1), 3000);
