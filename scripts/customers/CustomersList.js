import { useCustomers } from "./CustomerProvider.js";
import { useEmployees } from "../employees/EmployeeProvider.js";
import { useEmployeeCustomers } from "../EmployeeCustomerProvider.js";
import { Customer } from "./Customer.js";

const contentTarget = document.querySelector(".customers");

export const CustomersList = () => {
  const customers = useCustomers();
  const employees = useEmployees();
  const employeeRelationships = useEmployeeCustomers();

  const render = () => {
    contentTarget.innerHTML = customers
      .map((customer) => {
        const relationship = employeeRelationships.filter(
          (er) => er.customerId === customer.id
        );

        const relatedEmployees = relationship.map((rel) => {
          return employees.find((emp) => emp.id === rel.employeeId);
        });

        const html = Customer(customer, relatedEmployees);
        return html;
      })
      .join("");
  };

  render();
};
