"use strict";

import { translatePage } from "./locale";

const languageElement = document.querySelector(".nav__lang");

let languageTitle;
languageElement.childNodes.forEach((el) => {
    if (el.className == "title_h3") languageTitle = el;
});

async function init() {
    await translatePage("en"); // начальный перевод
}

init();

languageElement.addEventListener("click", async () => {
    if (languageTitle.innerText == "En") {
        languageTitle.innerText = "UA";
        await translatePage("ua");
    } else {
        languageTitle.innerText = "En";
        await translatePage("en");
    }
});
