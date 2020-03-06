import { useEmployee } from "./employeeDataProvider.js"
import { employeeRepresentation } from "./Employee.js";

/*
    Shows all employees on the DOM
*/

//get the DOM element to put the employees into
const contentElement = document.querySelector('.employeeList')

export const employeeList = () => {
    //get the array of employees
    const employeeArray = useEmployee();

    for (const employeeObject of employeeArray) {
        contentElement.innerHTML += employeeRepresentation(employeeObject);
    }
}