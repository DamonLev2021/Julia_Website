"use strict";

import { swiper } from "./slider.js";

const base = import.meta.env.BASE_URL;

const sections = [
    "burger",
    "header",
    "nav",
    "about",
    "portfolio",
    "prices",
    "footer",
];

export async function translatePage(lang) {
    const obj = await loadTranslations(lang);

    sections.forEach((el) => {
        if (el == "header") {
            const title = document.querySelector(`.${el}__items`).childNodes;
            title.forEach((in_el) => {
                if (in_el.className == "title_h1")
                    in_el.innerHTML = obj[el]["title"];
            });
        } else if (el == "nav") {
            const links = document.querySelectorAll(`.${el}__item`);
            for (let i = 0; i < links.length; i++) {
                links[i].innerText = obj[el]["items"][i];
            }
        } else if (el == "burger" || el == "footer") {
            const links = document.querySelectorAll(`.${el}__item`);
            for (let i = 0; i < links.length; i++) {
                links[i].innerText = obj["nav"]["items"][i];
            }
        } else if (el == "about") {
            const title = document.querySelector(`.${el}__title`).childNodes;
            const content = document.querySelector(
                `.${el}__content`,
            ).childNodes;

            title.forEach((text) => {
                if (text.className == "title_h2")
                    text.innerText = obj[el]["title"];
            });

            content.forEach((item) => {
                if (item.className == `${el}__text`)
                    item.innerText = obj[el]["description"];
                else if (item.className == `${el}__photo`)
                    item.src = `${import.meta.env.BASE_URL}${obj[el]["photo"]}`;
            });
        } else if (el == "portfolio") {
            const title = document.querySelector(`.${el}__title`).childNodes;
            title.forEach((text) => {
                if (text.className == "title_h2")
                    text.innerText = obj[el]["title"];
            });
            const slider = document.querySelector(".swiper-wrapper");

            if (slider && slider.children.length > 0) {
                slider.replaceChildren();
            }

            for (let i = 0; i < obj[el]["photos"].length; i++) {
                const slide = document.createElement("div");
                slide.classList.add("swiper-slide");
                const photo = document.createElement("img");
                photo.src = `${import.meta.env.BASE_URL}${
                    obj[el]["photos"][i]
                }`;
                slide.appendChild(photo);
                slider.appendChild(slide);
            }

            swiper.update();
        } else if (el == "prices") {
            const title = document.querySelector(`.${el}__title`).childNodes;
            title.forEach((text) => {
                if (text.className == "title_h2")
                    text.innerText = obj[el]["title"];
            });
        }
    });
}

async function loadTranslations(lang) {
    const response = await fetch(
        `${import.meta.env.BASE_URL}locales/locale-${lang}.json`,
    );
    if (!response.ok) {
        console.error("Ошибка загрузки перевода:", response.statusText);
        return {};
    }
    return await response.json();
}
