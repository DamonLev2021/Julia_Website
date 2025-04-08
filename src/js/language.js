"use strict";

import { translatePage } from "./locale";

const languageElement = document.querySelector(".nav__lang");
translatePage("en");

let languageTitle;

languageElement.childNodes.forEach((el) => {
    if (el.className == "title_h3") languageTitle = el;
});

languageElement.addEventListener("click", () => {
    if (languageTitle.innerText == "En") {
        languageTitle.innerText = "Ru";
        translatePage("ru");
    } else {
        languageTitle.innerText = "En";
        translatePage("en");
    }
});
