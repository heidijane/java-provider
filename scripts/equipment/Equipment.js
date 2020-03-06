/*
    Creates an HTML representation of a piece of equipement
*/

export const equipmentRepresentation = (equipment) => {
    return `
        <div class="equipment">
            <h3>${equipment.model}</h3>
            <p>Serial #: ${equipment.serialNumber}</p>
            <p>Under Warranty: ${equipment.isUnderWarranty}</p>
            <p>Functional: ${equipment.isFunctional}</p>
        </div>
    `
}