var $simpleCarousel = document.querySelector(".glider");

new Glider($simpleCarousel, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    itemWidth: 200,
    exactWidth: true,
    dots: ".dots",
    arrows: {
        prev: ".glider-prev",
        next: ".glider-next",
    },
    responsive: [
        {
            breakpoint: 500,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
            }
        },
        {
            breakpoint: 800,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 1000,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
            }
        }
    ]
});