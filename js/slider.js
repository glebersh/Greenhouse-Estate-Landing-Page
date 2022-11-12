let slideNumber = 0;

function moveSlideRight() {
  let slides = document.querySelectorAll('.slide');

  slides[slideNumber].style.display = 'none';
  slideNumber = slideNumber + 1;
  if (slideNumber < 0) {
    slideNumber = slides.length + 1;
  }
  slides[slideNumber].style.display = 'inline-block';
}

function moveSlideLeft() {
  let slides = document.querySelectorAll('.slide');

  slides[slideNumber].style.display = 'none';
  slideNumber = slideNumber - 1;
  if (slideNumber < 0) {
    slideNumber = slides.length - 1;
  }
  slides[slideNumber].style.display = 'inline-block';
}

function quotesSlider() {
  const sliderLine = document.querySelector('.slider-line-current');
  const leftArrow = document.querySelector('.left-arrow');
  const rightArrow = document.querySelector('.right-arrow');

  let firstSlideNumber = document.querySelector('.first-number');


  function deactivateLeftArrow() {
    leftArrow.style.pointerEvents = 'none';
    setTimeout(() => leftArrow.style.backgroundColor = 'var(--light-gray-color)', 150);
    leftArrow.classList.add('pseudo-element-colored');
  }

  function activateLeftArrow() {
    leftArrow.style.pointerEvents = 'auto';
    leftArrow.style.backgroundColor = 'var(--dark-gray-color)';
    leftArrow.classList.remove('pseudo-element-colored');
  }

  function deactivateRightArrow() {
    rightArrow.style.pointerEvents = 'none';
    setTimeout(() => rightArrow.style.backgroundColor = 'var(--light-gray-color)', 150);
    rightArrow.classList.add('pseudo-element-colored')
  }

  function activateRightArrow() {
    rightArrow.style.pointerEvents = 'auto';
    rightArrow.style.backgroundColor = 'var(--dark-gray-color)';
    rightArrow.classList.remove('pseudo-element-colored');
  }

  leftArrow.addEventListener('click', function sliderMoveLeft() {
    sliderLine.style.transform += 'translateX(-50px)';
    sliderLine.style.transition = 'transform 0.5s';

    leftArrow.style.transform = 'scale(0.93, 0.93)';
    leftArrow.style.transition = 'transform 1s';

    moveSlideLeft();

    setTimeout(() => leftArrow.style.transform = 'scale(1, 1)', 500);

    if (firstSlideNumber.innerHTML == 2) {
      firstSlideNumber.innerHTML = String(parseInt(firstSlideNumber.innerHTML) - 1);
      setTimeout(deactivateLeftArrow, 200);
      setTimeout(activateRightArrow, 500);
    }
    else {
      firstSlideNumber.innerHTML = String(parseInt(firstSlideNumber.innerHTML) - 1);
      activateRightArrow();
    }
  });


  rightArrow.addEventListener('click', function sliderMoveRight() {

    sliderLine.style.transform += 'translateX(50px)';
    sliderLine.style.transition = 'transform 0.5s';

    rightArrow.style.transform = 'scale(0.93, 0.93)';
    rightArrow.style.transition = 'transform 1s';

    moveSlideRight();

    setTimeout(() => rightArrow.style.transform = 'scale(1, 1)', 500);

    if (firstSlideNumber.innerHTML == 2) {
      firstSlideNumber.innerHTML = String(parseInt(firstSlideNumber.innerHTML) + 1);
      setTimeout(deactivateRightArrow, 200);
      setTimeout(activateLeftArrow, 500);
    }
    else {
      firstSlideNumber.innerHTML = String(parseInt(firstSlideNumber.innerHTML) + 1);
      activateLeftArrow();
    }
  });
}

quotesSlider();
