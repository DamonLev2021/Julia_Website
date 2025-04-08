import Swiper from "swiper";
import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";

Swiper.use([Autoplay, EffectCoverflow]);

export const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
    },
    // loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rrotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
    },
    breakpoints: {
        // когда ширина экрана >= 320px
        320: {
            slidesPerView: 1, // Показывать 1 слайд
        },
        // когда ширина экрана >= 480px
        480: {
            slidesPerView: 2, // Показывать 2 слайда
        },
        // когда ширина экрана >= 768px
        768: {
            slidesPerView: 3, // Показывать 3 слайда
        },
    },
});
