document.addEventListener("DOMContentLoaded", function () {

  $('.click_btn').click(function () {
    $(this).toggleClass('active');
  });

  $('.tel').mask('+7(999) 999-99-99');
  $(".mail").inputmask("email");

  VanillaTilt.init(document.querySelectorAll(".your-element"), {
		max: 20,
		speed: 2000
	});

  $('.toggle-class-activ').click(function () {
    $(this).closest('.toggle-class-parent').find('.toggle-class-activ').removeClass('active');
    $(this).toggleClass('active');
  });

       // БУРГЕР 

  $(".header__burger").click(function (event) {
    $(".header__burger,.header__bm").toggleClass("active");
    $('html').toggleClass('no__scroll');
  });

  $(".add_c").click(function (event) {
    $(".add_c").removeClass("active");
  });

  $(".header__category").click(function (event) {
    $(".header__category,.header__add-wrap").toggleClass("active");
    $('html').toggleClass('no__scroll');
  });

  // Аккордеон
  $('.accordion').click(function (event) {
    $(this).toggleClass('active').next().slideToggle(300);
    $(this).parent().toggleClass('active');
  });

  // Селект
  $('.filter__item').click(function () {
    $('.filter__item').removeClass('active');
    $(this).addClass('active');
 });
  $('.select_checked').click(function () {
    $(this).closest('.select_parent').find('.select_checked').next().slideUp();
    $(this).next().slideDown();
  });
  $('.filter__item').click(function () {
    var value = $(this).attr('data-value');
    $(this).closest('.select').find('.filter__select').val(value);
    $(this).closest('.select').find('.select_checked').find('.select-text').text(value);
    $(this).parent().slideUp();
  });


  // Слайдеры

  const rem = function (rem) {
    if ($(window).width() > 768) {
        return 0.005208335 * $(window).width() * rem;
    } else {
        // где 375 это ширина моб версии макета
        return (100/375) * (0.05 * $(window).width()) * rem;
    }
  }

  const slider1 = new Swiper(".baner__swiper-big", {
      navigation: {
        nextEl: ".baner__btn-next",
        prevEl: ".baner__btn-prev",
      },
      pagination: {
        el: ".baner__swiper-bullet",
        type: 'bullets',
		    clickable: true
      },
      on: {
        // init: function (swiper) {
        //   const lenghtOfSlides = document.querySelector('.total');
        //   lenghtOfSlides.innerHTML = `0${swiper.slides.length}`;
        // },
        slideChange: function (swiper) {
          let currentSlide = document.querySelector('.current');
          currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
        }
      },
      slidesPerView: 1,
      spaceBetween: 0,
      speed: 1500,
      // allowTouchMove: false,
      effect: 'fade',
      fadeEffect: {
        crossFade: true
      },
      breakpoints: {
        769: {
          slidesPerView: 1,
          spaceBetween: 10,
          speed: 1500,
          // allowTouchMove: false,
        }
      },
      
      thumbs: {
        swiper: {
        el: '.baner__swiper-small',
          slidesPerView: 1,
          speed: 1200,
          spaceBetween: 10,
          watchSlidesProgress: true,
          breakpoints: {
            769: {
              slidesPerView: 1,
              spaceBetween: 10, 
              speed: 1200,
              allowTouchMove: false,
              watchSlidesProgress: true,
              effect: 'fade',
                fadeEffect: {
                  crossFade: true
                },
            }
          },
        }
      },
  });

  const slider2 = new Swiper(".category__swiper", {
    navigation: {
      nextEl: ".category__btn-next",
      prevEl: ".category__btn-prev",
    },
    pagination: {
      el: ".category__swiper-bullet",
      type: 'bullets',
      clickable: true
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current2');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 3,
    spaceBetween: rem(5.4),
    speed: 1500,
  });

  const slider3 = new Swiper(".projects__swiper", {
    navigation: {
      nextEl: ".projects__btn-next",
      prevEl: ".projects__btn-prev",
    },
    pagination: {
      el: ".projects__swiper-bullet",
      type: 'bullets',
      clickable: true
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current3');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 4,
    spaceBetween: rem(9.3),
    speed: 1500,
  });

  const slider4 = new Swiper(".certificates__swiper", {
    navigation: {
      nextEl: ".certificates__btn-next",
      prevEl: ".certificates__btn-prev",
    },
    pagination: {
      el: ".certificates__swiper-bullet",
      type: 'bullets',
      clickable: true
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current4');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 4,
    spaceBetween: rem(6),
    speed: 1500,
  });

  const slider5 = new Swiper(".steps__swiper", {
    navigation: {
      nextEl: ".steps__btn-next",
      prevEl: ".steps__btn-prev",
    },
    pagination: {
      el: ".steps__swiper-pagination .total",
      type: "custom",
      renderCustom: function (swiper, current, total) {
        let totalRes5 = total >= 10 ? total : `0${total}`;
        return totalRes5;
      },
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1000,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
  });
  let curnum5 = document.querySelector(".steps__swiper-pagination .current");
    slider5.on("slideChange", function () {
    let ind5 = slider5.realIndex + 1,
    indRes5 = ind5 >= 10 ? ind5 : `0${ind5}`;
    curnum5.innerHTML = indRes5;
  });

  const slider6 = new Swiper(".catalog__swiper", {
    navigation: {
      nextEl: ".catalog__btn-next",
      prevEl: ".catalog__btn-prev",
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current5');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 4,
    spaceBetween: rem(5.2),
    speed: 1500,
  });

  const slider7 = new Swiper(".hang__swiper", {
    navigation: {
      nextEl: ".hang__btn-next",
      prevEl: ".hang__btn-prev",
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current6');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 4,
    spaceBetween: rem(6),
    speed: 1500,
  });
  

  const slider8 = new Swiper(".card__big-swiper", {
    navigation: {
      nextEl: ".card__btn-next",
      prevEl: ".card__btn-prev",
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1500,
    
    thumbs: {
      swiper: {
        el: '.card__small-swiper',
          slidesPerView: 3,
          speed: 1200,
          spaceBetween: rem(1.9),
          watchSlidesProgress: true,
          allowTouchMove: false,
      },
    },
  });

  const slider9 = new Swiper(".articles__swiper", {
    navigation: {
      nextEl: ".articles__btn-next",
      prevEl: ".articles__btn-prev",
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current7');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 3,
    spaceBetween: rem(7.4),
    speed: 1500,
  });

  const slider10 = new Swiper(".news__swiper", {
    navigation: {
      nextEl: ".news__btn-next",
      prevEl: ".news__btn-prev",
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current8');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 3,
    spaceBetween: rem(7.4),
    speed: 1500,
  });

  const slider11 = new Swiper(".article__big-swiper", {
    navigation: {
      nextEl: ".article__btn-next",
      prevEl: ".article__btn-prev",
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1500,
    
    thumbs: {
      swiper: {
        el: '.article__small-swiper',
          slidesPerView: 6,
          speed: 1200,
          spaceBetween: rem(2.7),
          watchSlidesProgress: true,
          allowTouchMove: false,
      },
    },
  });

  const slider12 = new Swiper(".work__swiper", {
    navigation: {
      nextEl: ".work__btn-next",
      prevEl: ".work__btn-prev",
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current9');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 3,
    spaceBetween: rem(5.5),
    speed: 1500,
  });

  const slider13 = new Swiper(".products__swiper", {
    navigation: {
      nextEl: ".products__btn-next",
      prevEl: ".products__btn-prev",
    },
    pagination: {
      el: ".products__swiper-bullet",
      type: 'bullets',
      clickable: true
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1500,
  });

    const slider14 = new Swiper(".hang__swiper-i", {
    navigation: {
      nextEl: ".hang__btn-next-i",
      prevEl: ".hang__btn-prev-i",
    },
    on: {
      slideChange: function (swiper) {
        let currentSlide = document.querySelector('.current10');
        currentSlide.innerHTML = swiper.activeIndex + 1 < 10 ? `0${swiper.activeIndex + 1}` : `${swiper.activeIndex + 1}`;
      }
    },
    slidesPerView: 1,
    spaceBetween: rem(1),
    speed: 1500,
  });
  function resize() {
    if ($(window).width() >= 769) {
      slider14.destroy();
    }
  }
  if ($(".hang__swiper-i").length > 0) {
      resize();
    } else {
  }

  // Модалка
  class Modal {
    constructor(name) {
        this.name = name;
        this.modal = document.querySelector(`[data-modal="${name}"]`)
        this.triggers = document.querySelectorAll(`[data-class="${name}"]`)
        this.body = document.querySelector(`body`)
        this.openHendler()
    }
    open() {
        this.modal.classList.remove('success', 'error')
        this.modal.classList.add('active')
        this.body.classList.add('hidden')
        this.modal.addEventListener('click', this.closeHendler)
    }
    close() {
        this.modal.classList.remove('active')
        this.body.classList.remove('hidden')
        this.modal.removeEventListener('click', this.closeHendler)
    }
    success() {
        this.modal.classList.remove('error')
        this.modal.classList.add('success')
    }
    error() {
        this.modal.classList.remove('success')
        this.modal.classList.add('error')
    }
    update() {
        this.modal = document.querySelector(`[data-modal="${this.name}"]`)
        this.triggers = document.querySelectorAll(`[data-class="${this.name}"]`)
        this.openHendler()
    }
    openHendler = (e) => {
        this.triggers.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                this.open()
            })
        })
    }
    closeHendler = (e) => {
        if (e.target.classList.contains('close-x')) {
            this.close()
        }
    }
  }
  let filter = document.querySelector('[data-modal="filter"]') ? new Modal('filter') : null;
  let video = document.querySelector('[data-modal="video"]') ? new Modal('video') : null;


 
  const rangeSlider = document.getElementsByClassName('range-slider');

  for (var i = 0; i < rangeSlider.length; i++) {
   
  const slid = noUiSlider.create(rangeSlider[i], {
    start:['30000', '500000'],
    connect: true,
    step: 1,
    tooltips: true,
    range: {
      'min': [0],
      'max': [1000000],
    },
    format: wNumb({
      decimals: 0,
      thousand: ' ',
  })
  });
  }

    // Табы
    $('.tabs__btn').click(function () {
      $('.tabs__btn').removeClass('active');
      $(this).toggleClass('active');
      var data = $(this).data('question');
      $('.tabs__content').removeClass('active');
      $('.tabs__content[data-question=' + data + ']').toggleClass('active');
    });

  // ЯНДЕКС КАРТА
  ymaps.ready(init);
  function init() {
   let breakpoint = window.matchMedia("(max-width: 48em)");
   let descOptions = {
     iconLayout: "default#image",
     iconImageHref: "img/icon/map_logo.svg",
     iconImageSize: [20, 20],
     iconImageOffset: [-15, -30],
   };
   if (breakpoint) {
     descOptions.iconImageSize = [70, 96];
     descOptions.iconImageOffset = [-15, -30];
   }
 
   var myMap = new ymaps.Map("contloc", {
       center: [55.876152, 37.588808],
       zoom: 10,
       controls: ["zoomControl"],
       behaviors: ["drag"],
     }),
     myPlacemark = new ymaps.Placemark(
       [55.876152, 37.588808],
       {
         hintContent: "Россия, Москва, Алтуфьевское шоссе, 48 к. 2, офис 603",
         //  balloonContent: "SmartFood",
       },
       descOptions
     );
     
       myMap.behaviors.disable('scrollZoom');
       myMap.geoObjects.add(myPlacemark);
  }


      // ЯКОРЬ
const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
  anchor.addEventListener("click", function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

});
