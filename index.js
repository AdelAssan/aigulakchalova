const slides = document.querySelectorAll('.slide');
  const prevBtn = document.querySelector('.slider__btn--prev');
  const nextBtn = document.querySelector('.slider__btn--next');
  let current = 0;
  function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
  }
  prevBtn.addEventListener('click', () => {
    current = (current - 1 + slides.length) % slides.length;
    showSlide(current);
  });
  nextBtn.addEventListener('click', () => {
    current = (current + 1) % slides.length;
    showSlide(current);
  });

  const mediaTrack = document.querySelector('.media__track');
const btnPrev = document.querySelector('.media__btn--prev');
const btnNext = document.querySelector('.media__btn--next');

btnNext.addEventListener('click', () => {
  mediaTrack.scrollBy({ left: 220, behavior: 'smooth' });
});

btnPrev.addEventListener('click', () => {
  mediaTrack.scrollBy({ left: -220, behavior: 'smooth' });
});
