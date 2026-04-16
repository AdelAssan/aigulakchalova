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

// --- СВАЙП ДЛЯ СЕКЦИИ ПРОЕКТОВ ---
const projectsContent = document.querySelector('.slider__content');
let projTouchStartX = 0;
let projTouchEndX = 0;
let projTouchStartY = 0;
let projTouchEndY = 0;

projectsContent.addEventListener('touchstart', (e) => {
  projTouchStartX = e.changedTouches[0].screenX;
  projTouchStartY = e.changedTouches[0].screenY;
}, { passive: true });

projectsContent.addEventListener('touchend', (e) => {
  projTouchEndX = e.changedTouches[0].screenX;
  projTouchEndY = e.changedTouches[0].screenY;
  handleProjectsSwipe();
}, { passive: true });

function handleProjectsSwipe() {
  const swipeThreshold = 50; // порог срабатывания в пикселях
  const diffX = projTouchStartX - projTouchEndX;
  const diffY = projTouchStartY - projTouchEndY;

  // Проверка: если движение по горизонтали больше, чем по вертикали (защита от скролла вниз)
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (Math.abs(diffX) > swipeThreshold) {
      if (diffX > 0) {
        // Свайп влево -> следующий слайд
        // Используем твою существующую переменную current и функции
        current = (current + 1) % slides.length;
        showSlide(current);
      } else {
        // Свайп вправо -> предыдущий слайд
        current = (current - 1 + slides.length) % slides.length;
        showSlide(current);
      }
    }
  }
}

const track = document.querySelector('.media__track');
const items = document.querySelectorAll('.media__item');
const prevBtn1 = document.querySelector('.media__btn--prev');
const nextBtn1 = document.querySelector('.media__btn--next');

// 1. Возвращаем индекс на 2 (третья карточка)
let index = 2; 

let touchStartX = 0;
let touchEndX = 0;

function isMobile() {
  return window.innerWidth <= 768;
}

function render() {
  // Сначала убираем выделение у всех (для обоих режимов)
  items.forEach(item => item.classList.remove('media__item--center'));

  if (isMobile()) {
    // 📱 МОБИЛКА
    const width = track.offsetWidth;
    track.style.transform = `translateX(-${index * width}px)`;
  } else {
    // 💻 ДЕСКТОП 
    // 2. Явно выделяем карточку по индексу
    if (items[index]) {
      items[index].classList.add('media__item--center');
    }

    const container = document.querySelector('.media');
    const containerCenter = container.offsetWidth / 2;
    const activeItem = items[index];
    
    // Твой оригинальный расчет центра
    const itemCenter = activeItem.offsetLeft + activeItem.offsetWidth / 2;
    const offset = itemCenter - containerCenter;

    track.style.transform = `translateX(${-offset}px)`;
  }
}

// Функции переключения с зацикливанием
function nextSlide() {
  if (index < items.length - 1) {
    index++;
  } else {
    index = 0; // Переход с последней на первую
  }
  render();
}

function prevSlide() {
  if (index > 0) {
    index--;
  } else {
    index = items.length - 1; // Переход с первой на последнюю
  }
  render();
}

// Кнопки
nextBtn1.addEventListener('click', nextSlide);
prevBtn1.addEventListener('click', prevSlide);

// --- СВАЙП ДЛЯ МОБИЛКИ ---
let touchStartY = 0; // Добавим Y, чтобы не ломать прокрутку страницы вниз

track.addEventListener('touchstart', (e) => {
  touchStartX = e.changedTouches[0].screenX;
  touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

track.addEventListener('touchend', (e) => {
  touchEndX = e.changedTouches[0].screenX;
  const touchEndY = e.changedTouches[0].screenY;

  const diffX = touchStartX - touchEndX;
  const diffY = touchStartY - touchEndY;

  // Если палец двигался по вертикали (скролл) сильнее, чем по горизонтали — не свайпаем
  if (Math.abs(diffY) > Math.abs(diffX)) return;

  // Порог свайпа (50px). Если меньше — это просто клик, и ссылка сработает сама
  const swipeThreshold = 50;
  
  if (Math.abs(diffX) > swipeThreshold) {
    if (diffX > 0) {
      nextSlide(); 
    } else {
      prevSlide();
    }
  }
}, { passive: true });

window.addEventListener('resize', render);

// Первый запуск
render();

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

  function toggleLang() {
    const langMenu = document.getElementById('langMenu');
    langMenu.classList.toggle('active');
  }
  
  // Закрытие выпадашки при клике вне её области
  window.addEventListener('click', (event) => {
    const langParent = document.getElementById('langParent');
    const langMenu = document.getElementById('langMenu');
    
    if (!langParent.contains(event.target)) {
      langMenu.classList.remove('active');
    }
  });