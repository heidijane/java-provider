/*
    Create and show the footer on the DOM
*/

import { businessName } from "./BusinessName.js";
import { establishDate } from "./YearEstablished.js";
import { contactList } from "./contact/ContactList.js";

export const createFooter = () => {
    //get the element to insert the business name into
    const businessNameElement = document.querySelector('.footer__businessName')

    //insert the business name into the DOM
    businessNameElement.innerHTML += businessName()

    //get the element to insert the establish date into
    const establishDateElement = document.querySelector('.footer__establishDate')

    //insert the establish date into the DOM
    establishDateElement.innerHTML += establishDate();

    //insert the list of contacts into the DOM
    contactList();
}