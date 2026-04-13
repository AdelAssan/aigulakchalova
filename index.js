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

const track = document.querySelector('.media__track');
const items = document.querySelectorAll('.media__item');
const prevBtn1 = document.querySelector('.media__btn--prev');
const nextBtn1 = document.querySelector('.media__btn--next');
/*let index = 4; // центральная
function render() {
  items.forEach(item => item.classList.remove('media__item--center'));
  items[index].classList.add('media__item--center');
  const offset = (index - 2) * -220;
  track.style.transform = `translateX(${offset}px)`;
}
prevBtn1.addEventListener('click', () => {
  index = (index - 1 + items.length) % items.length;
  render();
});
nextBtn1.addEventListener('click', () => {
  index = (index + 1) % items.length;
  render();
});
render();*/

let index = 2; // старт — 3-я карточка

function render() {
  // убираем выделение
  items.forEach(item => item.classList.remove('media__item--center'));

  // выделяем текущую
  items[index].classList.add('media__item--center');

  const container = document.querySelector('.media');
  const containerCenter = container.offsetWidth / 2;

  const activeItem = items[index];
  const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;

  const offset = itemCenter - containerCenter;

  track.style.transform = `translateX(${-offset}px)`;
}

// кнопки
nextBtn1.addEventListener('click', () => {
  if (index < items.length - 1) {
    index++;
    render();
  }
});

prevBtn1.addEventListener('click', () => {
  if (index > 0) {
    index--;
    render();
  }
});

// первый рендер
render();

// при изменении окна
window.addEventListener('resize', render);

const burger = document.getElementById('burger');
const menu = document.getElementById('menu');

burger.addEventListener('click', () => {
    menu.classList.toggle('active');
    burger.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !burger.contains(e.target)) {
      menu.classList.remove('active');
      burger.classList.remove('active');
    }
  });