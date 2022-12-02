$(document).ready(function () {

    const rem = function (rem) {
        if ($(window).width() > 768) {
            return 0.005208335 * $(window).width() * rem;
        } else {
            // где 414 это ширина моб версии макета
            return (100/375) * (0.1 * $(window).width()) * rem;
        }
    }

    // Parallax
    // $('.block').parallax({
    //     imageSrc: './img/block-parallax.webp',
    //     speed: 0.85,
    // });

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