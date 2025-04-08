"use strict";

const burger = document.querySelector(".burger");
const burgerItems = document.querySelectorAll(".burger__item");
const burgerToggle = document.querySelector(".nav__burger");
const burgerClose = document.querySelector(".burger__close");

// открыть
burgerToggle.addEventListener("click", () => {
    burger.classList.add("active");
    document.body.style.overflow = "hidden"; // блокировка скролла
});

// закрыть по крестику
burgerClose.addEventListener("click", () => {
    burger.classList.remove("active");
    document.body.style.overflow = "";
});

// закрыть по клику на пункт меню
burgerItems.forEach((item) =>
    item.addEventListener("click", () => {
        burger.classList.remove("active");
        document.body.style.overflow = "";
    }),
);
