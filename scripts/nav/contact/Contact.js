/*
    Creates an HTML representation of a contact list item
*/

export const contactRepresentation = (contact) => {
    return `
        <li>${contact.info}</li>
    `
}