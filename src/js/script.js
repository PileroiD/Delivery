$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: false,
        centerMode: true,
        slidesToShow: 3,
        dots: false,
        variableWidth: true,
        speed: 1000,
        initialSlide: 1,
        adaptiveHeight: true,
        prevArrow:
            `<button type="button" class="slick-prev">
                <img src="icons/left_arrow.png" alt="prev">
            </button>`,
        nextArrow:
            `<button type="button" class="slick-next">
            <img src="icons/right_arrow.png" alt="prev">
            </button>`,
        responsive: [{
            breakpoint: 1439,
            settings: {
                slidesToShow: 1,
            }
        }],
    });

    $('.carousel__inner_2').slick({
        prevArrow:
            `<button type="button" class="slick-prev">
                <img src="icons/left_arrow.png" alt="prev">
            </button>`,
        nextArrow:
            `<button type="button" class="slick-next">
            <img src="icons/right_arrow.png" alt="prev">
            </button>`,
        slidesToShow: 1,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: false,
                arrows: false,
                infinite: false,
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });

    const overlay = document.querySelector('.overlay');
    const btn = document.querySelector('.button.button_promo_2');
    const closeBtn = document.querySelector('.modal__close');

    btn.addEventListener('click', openModal);
    overlay.addEventListener('click', closeModal);
    closeBtn.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.code == 'Escape' && overlay.style.display == 'block') {
            closeModal();
        }
    });

    function closeModal() {
        $('.overlay, #consultation, #thanks').fadeOut();
    }

    function openModal() {
        $('.overlay, #consultation').fadeIn();
    }


    // menu
    const menu = document.querySelector('.promo__header__links'),
          menuItem = menu.querySelectorAll('.link'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('promo__header__links_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('promo__header__links_active');
        })
    });

    // scheme
    const parentExtra = document.querySelector('.scheme__wrap_three'),
          childExtra = parentExtra.querySelectorAll('.scheme-item'),
          parent = document.querySelector('.scheme__wrap');

    if (window.screen.width <= 993 ) {
        parentExtra.remove();
        childExtra.forEach(item => {
            parent.append(item);
        });
    }

});
