"use strict";

(function () {
  'use strict';

  var burgerBtn = document.querySelector('.navigation__link_burger');
  var burgerModal = document.querySelector('.modal-window');
  var burgerBtnClose = document.querySelector('.modal-window__header_link');

  var openModalMenu = function openModalMenu() {
    burgerModal.classList.add('modal-window_active');
  };

  var closeModalMenu = function closeModalMenu() {
    burgerModal.classList.remove('modal-window_active');
  };

  burgerBtn.addEventListener('click', openModalMenu);
  burgerBtnClose.addEventListener('click', closeModalMenu);
})();
"use strict";

(function ($) {
  $(function () {
    $('.menu__icon').on('click', function () {
      $(this).closest('.menu').toggleClass('menu--show');
    });
    $('.menu--show').on('click', function () {
      // do something
      $(this).closest('.menu').removeClass('menu--show');
    });
  });
})(jQuery);
"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

(function () {
  var currentIndex = 0;
  var prevIndex = 0;

  var slides = _toConsumableArray(document.querySelectorAll('.slider__wrapper'));

  var sliderBullets = _toConsumableArray(document.querySelectorAll('.slider__feedback-image'));

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
  } // var sliderBullets = [...document.querySelectorAll('.slider__feedback-image')];
  // sliderBullets.forEach((item, index) => {
  //     item.onclick = function() {
  //         prevIndex = currentIndex;
  //         currentIndex = index; // update index
  //         updateSlide(currentIndex);
  //     }
  // });


  setInterval(function (el) {
    if (currentIndex >= slides.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    updateSlide(currentIndex);
  }, 1500);
})();