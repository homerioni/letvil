$(document).ready(function () {

    const rem = function (rem) {
        if ($(window).width() > 768) {
            return 0.005208335 * $(window).width() * rem;
        } else {
            // где 414 это ширина моб версии макета
            return (100/375) * (0.1 * $(window).width()) * rem;
        }
    }

    // section - block
    let formsTimeOut;
    $('.forms__content-form input, .forms__content-form textarea').keypress(function () {
        window.clearTimeout(formsTimeOut);
        $('.forms__img2').addClass('active');
        formsTimeOut = setTimeout(function () {
            $('.forms__img2').removeClass('active');
        }, 200);
    });

    // section pride
    // $('.pride__items').each(function () {
    //     $(this).append($(this).html());
    // });
    const pride_slider = new Swiper(".pride__items", {
        slidesPerView: 7,
        spaceBetween: rem(6),
        speed: 10000,
        loop: true,
        grabCursor: true,
        freeMode: {
            enabled: true,
            momentumBounceRatio: 0.1,
            momentumRatio: 2,
            momentumVelocityRatio: 0.2,
        },

        autoplay: {
            delay: 1,
            disableOnInteraction: false,
        },

        on: {
            transitionStart: function (slider) {
                if (slider.$wrapperEl.css('transition-duration') === '10s') {
                    slider.$wrapperEl.css('transition-timing-function', '');
                }
            },
            touchEnd: function (slider) {
                slider.$wrapperEl.css('transition-timing-function', 'cubic-bezier(0.165, 0.840, 0.440, 1.000)');
            },
        }
    });

    // catalog cards
    $('.catalog__item-wrap').mousemove(function(e){
        let target = this.getBoundingClientRect(),
            x = ((e.clientX - target.left) / $(this).width() - 0.5) * -10,
            y = ((e.clientY - target.top) / $(this).height() - 0.5) * 10;
        $(this).css('--mouseY', x + 'deg').css('--mouseX', y + 'deg');
    });

    // hang cards
    $('.hang__item-content').mousemove(function(e){
        let target = this.getBoundingClientRect(),
            x = ((e.clientX - target.left) / $(this).width() - 0.5) * -10,
            y = ((e.clientY - target.top) / $(this).height() - 0.5) * 10;
        $(this).css('--mouseY', x + 'deg').css('--mouseX', y + 'deg');
    });

    // Logo animate
    let lottieLogo = document.querySelector('.header__logo-anim').getLottie();
    setTimeout(function () {
        lottieLogo.play();
    }, 5000);
    lottieLogo.addEventListener("complete", () => {
        setTimeout(function () {
            lottieLogo.stop();
            lottieLogo.play();
        }, 30000);
    });

});