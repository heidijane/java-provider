/*
    Create and show the footer on the DOM
*/

import { businessName } from "./BusinessName.js";
import { establishDate } from "./YearEstablished.js";
import { contactList } from "./contact/ContactList.js";

export const createFooter = () => {
    //get the element to insert the business name into
    const contentElement = document.querySelector('.footer')

    //insert the business name into the DOM
    contentElement.innerHTML += `
        ${contactList()}
        ${businessName()}
        ${establishDate()}
        `
        //insert the list of contacts into the DOM

}