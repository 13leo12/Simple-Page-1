const swiper = new Swiper('.swiper', {
    // Optional parameters
    //loop: true,
    slidesPerView: 3,
    autoHeight: true,
    slidesPerGroup: 3,
    //centeredSlides: true,
    //centeredSlidesBounds: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        425: {
            slidesPerView: 1,
            slidesPerGroup: 1
        },
        992: {
            slidesPerView: 2,
            slidesPerGroup: 2
        },
        1200: {
            slidesPerView: 3,
            slidesPerGroup: 3
        },
    },
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    });