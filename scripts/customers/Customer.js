export const Customer = (customerObj, employees) => {
  return `
    <div class="employee">
      <header class="customer__name">
          <h1>${customerObj.name}</h1>
      </header>
      <section class="customer-employees">
          Has worked with the following employees:
          <ul>
            ${employees
              .map((emp) => `<li>${emp.firstName}${emp.lastName}</li>`)
              .join("")}
          </ul>
      </section>
  </div>
      `;
};
