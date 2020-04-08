export const Employee = (
  computerObj,
  departmentObj,
  locationObj,
  employeeObj
) => {
  return `
  <div class="employee">
    <header class="employee__name">
        <h1>${employeeObj.firstName} ${employeeObj.lastName}</h1>
    </header>
    <section class="employee__computer">
        Currently using a ${computerObj.year} ${computerObj.model}
     </section>
    <section class="employee__department">
       Works in the ${departmentObj.name} department
     </section>
    <section class="employee__location">
       Works at the ${locationObj.city} office
    </section>
</div>
    `;
};
