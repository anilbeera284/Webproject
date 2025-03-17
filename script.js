let currentIndex = 0;

function scrollLeft() {
    console.log('Left arrow clicked');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (currentIndex === 0) {
        currentIndex = totalSlides - 1;
    } else {
        currentIndex--;
    }
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

function scrollRight() {
    console.log('Right arrow clicked');
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    if (currentIndex === totalSlides - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    document.querySelector('.slider').style.transform = `translateX(-${currentIndex * 100}%)`;
}

document.querySelector('.arrow2-left').addEventListener('click', scrollLeft);
document.querySelector('.arrow2-right').addEventListener('click', scrollRight);

document.addEventListener('scroll', function() {
    const disappearSection = document.getElementById('disappear-section');
    if (window.scrollY > 0) {
        disappearSection.classList.add('hidden');
    }
});

window.addEventListener('load', function() {
    const disappearSection = document.getElementById('disappear-section');
    disappearSection.classList.remove('hidden');
});
