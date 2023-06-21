const swiper = new Swiper('.swiper', {
    loop: true,
    loopedSlides: 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },

    spaceBetween: 10,
    slidesPerView: 1.5,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 1,  //브라우저가 768보다 클 때
        },
    },


    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});