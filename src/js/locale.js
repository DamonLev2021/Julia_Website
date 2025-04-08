"use strict";

import en from "../locales/locale-en.json";
import ru from "../locales/locale-ru.json";

const translatation = { en, ru };

const sections = ["burger", "header", "nav"];

export function translatePage(lang) {
    const obj = translatation[lang];
    console.log(lang);
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
        } else if (el == "burger") {
            const links = document.querySelectorAll(`.burger__item`);
            for (let i = 0; i < links.length; i++) {
                links[i].innerText = obj["nav"]["items"][i];
            }
        }
    });
}
