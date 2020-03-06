import { useContactInfo } from "./contactDataProvider.js";
import { contactRepresentation } from "./Contact.js";

/*
    Shows all contacts on the DOM
*/

export const contactList = () => {
    //get the array of contact
    const contactArray = useContactInfo();

    //create a blank string to store the loop of the contacts in HTML
    let contactHTML = '<ul>';

    //loop through the contacts and add each one to the contactHTML string
    for (const contactObject of contactArray) {
        contactHTML += contactRepresentation(contactObject);
    }

    contactHTML += '</ul>';

    return contactHTML;
}