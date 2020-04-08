export const Employee = (computerObj, departmentObj, employeeObj) => {
  return `
        <section class="employee">
            <header>
                <h2>${employeeObj.firstName} ${employeeObj.lastName}</h2>
            </header>
            <div>
                <p>Age: ${employeeObj.age}</p>
                <p>Department: ${departmentObj.name}</p>
                <p>Assigned Computer: ${computerObj.model}(${computerObj.year})</p>
            </div>
        </section>
    `;
};
