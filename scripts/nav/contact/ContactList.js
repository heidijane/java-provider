import { useContactInfo } from "./contactDataProvider.js";
import { contactRepresentation } from "./Contact.js";

/*
    Shows all contacts on the DOM
*/

//get the DOM element to put the contacts into
const contentElement = document.querySelector('.footer__contacts ul')

export const contactList = () => {
    //get the array of contact
    const contactArray = useContactInfo();

    for (const contactObject of contactArray) {
        contentElement.innerHTML += contactRepresentation(contactObject);
    }
}