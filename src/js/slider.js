(function() {
    var currentIndex = 0;
    var prevIndex = 0;
    var slides = [...document.querySelectorAll('.slider__wrapper')];
    var sliderBullets = [...document.querySelectorAll('.slider__feedback-image')];

    function updateSlide(nextIndex) {
      if (nextIndex === 0) {
        slides[nextIndex].classList.add('active-slides'); // показать
        slides[slides.length - 1].classList.remove('active-slides');

        sliderBullets[slides.length - 1].classList.remove('slider__feedback-image_active');
        sliderBullets[nextIndex].classList.add('slider__feedback-image_active');
      } else {
        slides[nextIndex - 1].classList.remove('active-slides'); // скрыть
        slides[nextIndex].classList.add('active-slides'); // показать

        sliderBullets[nextIndex - 1].classList.remove('slider__feedback-image_active');
        sliderBullets[nextIndex].classList.add('slider__feedback-image_active');
      }
    }

    // var sliderBullets = [...document.querySelectorAll('.slider__feedback-image')];

    // sliderBullets.forEach((item, index) => {

    //     item.onclick = function() {
    //         prevIndex = currentIndex;

    //         currentIndex = index; // update index

    //         updateSlide(currentIndex);
    //     }
    // });
setInterval(el => {
  if (currentIndex >= slides.length -1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }

  updateSlide(currentIndex);
}, 1500);

})();
