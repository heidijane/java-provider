/*
    Shows the header on the DOM
*/

import { businessName } from "./BusinessName.js";

const contentElement = document.querySelector('.header');

export const createHeader = () => {
    contentElement.innerHTML += businessName();
}