$(document).ready(function () {

    const rem = function (rem) {
        if ($(window).width() > 768) {
            // return 0.005208335 * $(window).width() * rem;
            return 0.005208335 * $(window).width() * (rem/10);
        } else {
            // где 414 это ширина моб версии макета
            return (100/414) * (0.1 * $(window).width()) * (rem/10);
        }
    }

    // Parallax
    // $('.block').parallax({
    //     imageSrc: './img/block-parallax.webp',
    //     speed: 0.85,
    // });

    // Anime.js
    const logoAnimation = (function() {

        const logoAnimationTL = anime.timeline({
            autoplay: false,
            easing: 'easeOutSine',
        }).add({
            targets: '.header__logo-anim > img:nth-child(5)',
            easing: 'easeOutSine',
            translateY: [
                {value: rem(8), duration: 166},
                {value: rem(-10), duration: 166, easing: 'cubicBezier(0.645, 0.045, 0.355, 1.000)'},
                {value: rem(0), duration: 233, easing: 'cubicBezier(0.645, 0.045, 0.355, 1.000)'}
            ],
            rotate: [
                {value: -10, duration: 166},
                {value: 0, duration: 84},
            ],
            opacity: {value: 0, duration: 117, delay: 2850},
        }).add({
            targets: '.header__logo-anim > img:nth-child(6)',
            easing: 'linear',
            translateX: [
                {value: rem(-10), duration: 116},
                {value: rem(-15), duration: 150},
                {value: rem(-14), duration: 50},
                {value: rem(9), duration: 100},
                {value: rem(16), duration: 66},
                {value: rem(20), duration: 66},
                {value: rem(-7), duration: 300, easing: 'cubicBezier(0.885, 0.250, 0.430, 0.895)'},
                {value: rem(0), duration: 250, easing: 'cubicBezier(0.555, 0.435, 0.695, 0.950)'},
            ],
            translateY: [
                {value: rem(11), duration: 116},
                {value: rem(12), duration: 150},
                {value: rem(6), duration: 50},
                {value: rem(-15), duration: 100, endDelay: 66},
                {value: rem(-11), duration: 66},
                {value: rem(7), duration: 300, easing: 'cubicBezier(0.885, 0.250, 0.430, 0.895)'},
                {value: rem(0), duration: 250, easing: 'cubicBezier(0.555, 0.435, 0.695, 0.950)'},
            ],
            rotate: [
                {value: -15, duration: 83, endDelay: 183},
                {value: -10, duration: 50},
                {value: 33, duration: 100},
                {value: 45, duration: 66, endDelay: 66},
                {value: -10, duration: 300, easing: 'cubicBezier(0.885, 0.250, 0.430, 0.895)'},
                {value: 0, duration: 250, easing: 'cubicBezier(0.555, 0.435, 0.695, 0.950)'},
            ],
            opacity: {value: 0, duration: 117, delay: 2620},
        }, 266).add({
            targets: '.header__logo-anim > img:nth-child(4)',
            easing: 'linear',
            translateY: [
                {value: rem(10), duration: 116, easing: 'cubicBezier(0.505, 0.005, 0.185, 1.000)', endDelay: 17},
                {value: rem(-8), duration: 133, easing: 'cubicBezier(0.885, -0.005, 0.170, 1.000)', endDelay: 17},
                {value: rem(3), duration: 183, easing: 'cubicBezier(0.670, 0.720, 0.735, 1.000)', endDelay: 34},
                {value: rem(0), duration: 216, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
            opacity: {value: 0, duration: 117, delay: 1720},
        }, 1083).add({
            targets: '.header__logo-anim > img:nth-child(3)',
            easing: 'linear',
            scaleX: [
                {value: 1.16, duration: 50, endDelay: 15},
                {value: 0.85, duration: 84, endDelay: 17},
                {value: 1, duration: 350, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
            scaleY: [
                {value: 0.76, duration: 50, endDelay: 15},
                {value: 1.22, duration: 84, endDelay: 17},
                {value: 1, duration: 350, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
            opacity: {value: 0, duration: 117, delay: 1220},
        }, 1566).add({
            targets: '.header__logo-anim > img:nth-child(2)',
            easing: 'linear',
            translateY: [
                {value: rem(3), duration: 50, endDelay: 17},
                {value: rem(-3), duration: 83, endDelay: 17},
                {value: rem(0), duration: 350, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
            scaleX: [
                {value: 1.15, duration: 50, endDelay: 17},
                {value: 0.76, duration: 83, endDelay: 17},
                {value: 1, duration: 350, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
            scaleY: [
                {value: 0.78, duration: 50, endDelay: 17},
                {value: 1.22, duration: 83, endDelay: 17},
                {value: 1, duration: 350, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
            opacity: {value: 0, duration: 117, delay: 950},
        }, 1820).add({
            targets: '.header__logo-letter',
            easing: 'linear',
            translateX: [
                {value: rem(8), delay: 116, duration: 133},
                {value: rem(25), duration: 100, endDelay: 17},
                {value: rem(-10), duration: 166},
                {value: rem(-23), duration: 66, easing: 'cubicBezier(0.165, 0.840, 0.440, 1.000)', endDelay: 34},
                {value: rem(2), duration: 133, endDelay: 84},
                {value: rem(-20), duration: 283, easing: 'cubicBezier(0.720, 0.040, 0.600, 0.945)', endDelay: 34},
                {value: rem(80), duration: 466, easing: 'cubicBezier(0.565, 1.540, 0.670, 1.090)'},
            ],
            translateY: [
                {value: rem(20), duration: 216, easing: 'cubicBezier(0.785, 0.135, 0.150, 0.860)', endDelay: 34},
                {value: rem(-20), duration: 233, easing: 'cubicBezier(0.880, 0.000, 0.160, 1.000)', endDelay: 34},
                {value: rem(3), duration: 216, easing: 'easeOutSine', endDelay: 116},
                {value: rem(-2), duration: 233, easing: 'cubicBezier(0.770, 0.000, 0.175, 1.000)'},
            ],
            rotate: [
                {value: 17, duration: 116, easing: 'cubicBezier(0.785, 0.135, 0.150, 0.860)', endDelay: 100},
                {value: -51, duration: 250, easing: 'cubicBezier(1.000, 0.005, 0.760, 1.000)', endDelay: 133},
                {value: 6, duration: 216, endDelay: 133},
                {value: 30, duration: 183, endDelay: 34},
                {value: 30, duration: 150, endDelay: 83},
                {value: 0, duration: 350, easing: 'cubicBezier(0.600, 1.010, 0.740, 1.425)'},
            ],
        }, 1716).add({
            targets: '.header__logo-circle',
            easing: 'linear',
            translateX: [
                {value: rem(22), delay: 14, duration: 186},
                {value: rem(44), duration: 233, easing: 'cubicBezier(0.660, 0.720, 0.505, 1.000)'},
                {value: rem(35), duration: 50},
                {value: rem(26), duration: 50},
                {value: rem(-2), duration: 215},
                {value: rem(-18), duration: 190, easing: 'easeOutSine'},
                {value: rem(-25), duration: 40},
                {value: rem(-28), duration: 15},
                {value: rem(-35), duration: 80, easing: 'easeInCubic'},
                {value: rem(-54), duration: 166},
                {value: rem(-65), duration: 116, endDelay: 30},
                {value: rem(-80), duration: 135},
                {value: rem(-91), duration: 60, endDelay: 60},
                {value: rem(-121), duration: 150},
                {value: rem(-135), duration: 130},
                {value: rem(-132), duration: 66},
                {value: rem(-126), duration: 166, easing: 'easeInQuad'},
                {value: rem(-122), duration: 286, easing: 'easeOutQuad', endDelay: 225},
                {value: rem(-36), duration: 460, easing: 'cubicBezier(0.425, 0.955, 0.280, 1.950)'},
                {value: rem(-32), duration: 100, easing: 'easeInQuad'},
            ],
            translateY: [
                {value: rem(-31), duration: 200, easing: 'easeOutCubic'},
                {value: rem(-7), duration: 233, easing: 'easeInCubic'},
                {value: rem(10), duration: 50, easing: 'easeOutQuad'},
                {value: rem(1), duration: 50, easing: 'easeOutQuad'},
                {value: rem(-22), duration: 215, easing: 'easeOutQuad'},
                {value: rem(36), duration: 230, easing: 'easeInSine', endDelay: 15},
                {value: rem(-3), duration: 80, easing: 'cubicBezier(1.000, 0.570, 0.840, 0.990)'},
                {value: rem(-18), duration: 166, easing: 'easeOutQuad'},
                {value: rem(8), duration: 126, easing: 'easeInQuad', endDelay: 20},
                {value: rem(-20), duration: 135, easing: 'easeOutQuad'},
                {value: rem(3), duration: 60, easing: 'easeInQuad'},
                {value: rem(14), duration: 40, endDelay: 20},
                {value: rem(-31), duration: 150, easing: 'easeOutQuad'},
                {value: rem(-5), duration: 130, easing: 'easeInQuad'},
                {value: rem(5), duration: 66},
                {value: rem(-13), duration: 166},
                {value: rem(22), duration: 286, easing: 'easeInOutQuad'},
                {value: rem(10), duration: 200, easing: 'easeInSine', endDelay: 460},
                {value: rem(7), duration: 100, easing: 'easeInSine'},
            ],
            scaleY: [
                {value: 0.75, delay: 1120, duration: 73, endDelay: 50},
                {value: 1, duration: 60, endDelay: 30},
                {value: 0.6, duration: 40},
                {value: 1, duration: 40},
                {value: 0.75, duration: 50, endDelay: 50},
                {value: 1, duration: 50},
                {value: 0.75, duration: 60, endDelay: 20},
                {value: 1, duration: 60,},
            ],
            scaleX: [
                {value: 1.15, delay: 1120, duration: 73, endDelay: 50},
                {value: 1, duration: 40},
                {value: 0.9, duration: 40},
                {value: 1.3, duration: 50},
                {value: 1, duration: 50},
                {value: 1.15, duration: 50, endDelay: 50},
                {value: 1, duration: 50},
                {value: 1.15, duration: 60},
                {value: 1, duration: 60},
            ],
            skew: [
                {value: 20, delay: 1060, duration: 60},
                {value: 0, duration: 73},
                {value: -20, duration: 100},
                {value: 0, duration: 60},
                {value: 20, duration: 60, endDelay: 30},
                {value: 0, duration: 60},
                {value: -20, duration: 50},
                {value: 0, duration: 40},
            ],
        }, 250).add({
            targets: '.header__logo-letter-high',
            easing: 'linear',
            duration: 50,
            opacity: 0,
        }, 2940).add({
            targets: '.header__logo-letter-min',
            easing: 'linear',
            duration: 50,
            opacity: 1,
        }, 2920).add({
            targets: '.header__logo-anim',
            easing: 'easeInSine',
            duration: 100,
            scaleX: 1.3,
            scaleY: 1.3,
        }, 2920);

        return logoAnimationTL;

    })();

    $('.header__logo-anim').hover(function () {
        logoAnimation.play();
    }, function () {
        // logoAnimation.restart();
        // logoAnimation.pause();
    });

    // section - block
    let formsTimeOut;
    $('.forms__content-form input, .forms__content-form textarea').keypress(function () {
        window.clearTimeout(formsTimeOut);
        $('.forms__img2').addClass('active');
        formsTimeOut = setTimeout(function () {
            $('.forms__img2').removeClass('active');
        }, 1000);
    });

    // section pride
    $('.pride__items').each(function () {
        $(this).append($(this).html());
    });

    // catalog cards
    $('.catalog__item-wrap').mousemove(function(e){
        let target = this.getBoundingClientRect(),
            x = ((e.clientX - target.left) / $(this).width() - 0.5) * -10,
            y = ((e.clientY - target.top) / $(this).height() - 0.5) * 10;
        $(this).css('--mouseY', x + 'deg').css('--mouseX', y + 'deg');
    });

});