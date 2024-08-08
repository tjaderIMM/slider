let currentIndex = 0;
const slide = document.querySelectorAll('.slide');
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;
const dotsContainer = document.querySelector('.dots');
function showSlide(index) {
    const newTransformValue = -index * 100 + '%';
    slides.style.transform = `translateX(${newTransformValue})`;
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        if (idx === index) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
}
slide.forEach((_, index) => {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    if (index === 0) dot.classList.add('active'); // Pierwsza kropka aktywna na starcie
    dotsContainer.appendChild(dot);
    // Event listener do przełączania slajdów
    dot.addEventListener('click', () => {
      showSlide(index);
    });
  });