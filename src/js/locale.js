"use strict";

import en from "../locales/locale-en.json";
import ru from "../locales/locale-ru.json";

import { swiper } from "./slider.js";

const translatation = { en, ru };

const sections = [
    "burger",
    "header",
    "nav",
    "about",
    "portfolio",
    "prices",
    "footer",
];

export function translatePage(lang) {
    const obj = translatation[lang];
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
                    item.src = obj[el]["photo"];
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
                photo.src = `/src/img/slide/${obj[el]["photos"][i]}`;
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
