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
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    dots: true,
                    arrows: false,
                }

            },
            {
                breakpoint: 768,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }
        ]
    });

});
