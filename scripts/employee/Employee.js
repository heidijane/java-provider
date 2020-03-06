/*
    Creates an HTML representation of an employee
*/

export const employeeRepresentation = (employee) => {
    return `
        <div class="employee">
            <h3>${employee.firstName} ${employee.lastName}</h3>
            <p>Job Title: ${employee.jobTitle}</p>
            <p>Hours Scheduled: ${employee.hoursScheduled}</p>
        </div>
    `
}