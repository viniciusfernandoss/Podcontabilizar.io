//Convidados mobile
const swiper = new Swiper('.slider-wrapper', {
    loop: true,
    grabCursor: true,
    spaceBetween: 30,
  
    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true
    },
  
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        0: {
            slidesPerView: 1
        },
        992: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});

// const swiperOne = new Swiper('.swiper-ultimos-episodios-mobile', {
//     breakpoints: {
//              0: {
//                  slidesPerView: 1
//              },
//              992: {
//                  slidesPerView: 2
//              },
//              1024: {
//                  slidesPerView: 3
//              }
//     },
//     spaceBetween: 30, // Espaço entre os slides
//     loop: true,
//     pagination: {
//       el: '.swiper-ultimos-episodios-mobile .swiper-pagination',
//       clickable: true,
//     },
// });