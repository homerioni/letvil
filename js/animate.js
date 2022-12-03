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
    let lottieLogoHeader = document.querySelector('.header__logo-anim').getLottie();
    setTimeout(function () {
        lottieLogoHeader.play();
    }, 5000);
    lottieLogoHeader.addEventListener("complete", () => {
        setTimeout(function () {
            lottieLogoHeader.stop();
            lottieLogoHeader.play();
        }, 30000);
    });
    let lottieLogoFooter = document.querySelector('.footer__logo-anim').getLottie();
    setTimeout(function () {
        lottieLogoFooter.play();
    }, 15000);
    lottieLogoFooter.addEventListener("complete", () => {
        setTimeout(function () {
            lottieLogoFooter.stop();
            lottieLogoFooter.play();
        }, 40000);
    });

    // Categories
    // const categoryHoverAnime = anime({
    //     targets: '.category__hover svg path',
    //     autoplay: false,
    //     easing: 'cubicBezier(0.250, 0.100, 0.250, 1.000)',
    //     duration: 700,
    //     delay: -350,
    //
    //     d: [
    //         { value: 'M12 0C9.9 15.1 6 35 3 60L1 81C1 97 11 108 29 108L62 109C96 109 107 109 128 108L127.6 133.6-15.4 133.6-15.4.6Z' },
    //         { value: 'M12 0C9.9 15.1 21.7 28.5 36.9 28.4L80.2 28.1C95.4 28 107.2 41.4 105.1 56.5L103 71.7C100.9 86.7 112.6 100.1 127.7 100.1L127.6 133.6-15.4 133.6-15.4.6Z' },
    //     ],
    // });

    // categoryHoverAnime.play();
    // console.log(categoryHoverAnime);
    // $('.category__slide').hover(function () {
    //     categoryHoverAnime.reverse();
    //     categoryHoverAnime.play();
    // }, function () {
    //     categoryHoverAnime.reverse();
    //     categoryHoverAnime.play();
    // });

    class CategoryItem {
        constructor(el) {
            this.el = el;
            this.MyIndex = $(el).index() + 1;
            this.initEvents();
        }
        initEvents() {
            this.mouseenterFn = () => {
                this.mouseTimeout = setTimeout(() => {
                    this.isActive = true;
                    this.animate();
                }, 75);
            }
            this.mouseleaveFn = () => {
                clearTimeout(this.mouseTimeout);
                if( this.isActive ) {
                    this.isActive = false;
                    this.animate();
                }
            }
            this.el.addEventListener('mouseenter', this.mouseenterFn);
            this.el.addEventListener('mouseleave', this.mouseleaveFn);
            this.el.addEventListener('touchstart', this.mouseenterFn);
            this.el.addEventListener('touchend', this.mouseleaveFn);
        }
        getAnimeObj() {
            const target = '.category__slide:nth-child('+ this.MyIndex + ') .category__hover svg path';
            let animeOpts = {
                targets: target,
                autoplay: true,
                easing: 'cubicBezier(0.250, 0.100, 0.250, 1.000)',
                duration: 300,
            };
            animeOpts.d = this.isActive
                ? 'M12 0C9.9 15.1 6 35 3 60L1 81C1 97 11 108 29 108L62 109C96 109 107 109 128 108L127.6 133.6-15.4 133.6-15.4.6Z'
                : 'M12 0C9.9 15.1 21.7 28.5 36.9 28.4L80.2 28.1C95.4 28 107.2 41.4 105.1 56.5L103 71.7C100.9 86.7 112.6 100.1 127.7 100.1L127.6 133.6-15.4 133.6-15.4.6Z';
            anime.remove(target);
            return animeOpts;
        }
        animate() {
            anime(this.getAnimeObj());
        }
    }

    const items = Array.from(document.querySelectorAll('.category__slide'));
    const init = (() => items.forEach(item => new CategoryItem(item)))();

});