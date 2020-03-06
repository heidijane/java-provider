/*
    Inserts the HTML representations of the equipment to the DOM
*/

import { useEquipment } from "./equipmentDataProvider.js"
import { equipmentRepresentation } from "./Equipment.js";

//get the DOM element to put the employees into
const contentElement = document.querySelector('.equipmentList')

export const equipmentList = () => {
    //get the array of employees
    const equipmentArray = useEquipment();

    for (const equipmentObject of equipmentArray) {
        contentElement.innerHTML += equipmentRepresentation(equipmentObject);
    }
}