$(document).ready(function () {

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
        }, 1000);
    });

    // section pride
    $('.pride__items').each(function () {
        $(this).append($(this).html());
    });

});