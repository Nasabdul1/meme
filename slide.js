let index = 0;
const slides = document.querySelectorAll('.slides img');
const slideCount = slides.length;
const intervalTime = 2000; // 2 seconds

function nextSlide() {
  index = (index + 1) % slideCount;
  const translateValue = -index * 100;
  document.querySelector('.slides').style.transform = `translateX(${translateValue}%)`;
}

setInterval(nextSlide, intervalTime);
