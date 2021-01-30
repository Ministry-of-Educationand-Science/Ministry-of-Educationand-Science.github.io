$(document).ready(function(){
    $('.clients__slider').slick({
        autoplaySpeed: 2000,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/clientsSlider/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/clientsSlider/next.png" alt="next"></button>',
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    arrows: false,
                    centerMode: true
                }
            }
        ]
    });

    $('.reviews__slider').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="../img/clientsSlider/prev.png" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../img/clientsSlider/next.png" alt="next"></button>',
        responsive: [
            {
                breakpoint: 770,
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});


const hamburgerMenu = document.querySelector('.hamburger'),
      menu = document.querySelector('.header__menu');

hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('hamburger_active');
    menu.classList.toggle('header__menu_active');
    document.body.classList.toggle('lock');
});