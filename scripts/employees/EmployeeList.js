import { useEmployees } from "./EmployeeProvider.js";
import { useComputers } from "../ComputerProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../DepartmentProvider.js";
import { useLocations } from "../LocationsProvider.js";
import { useCustomers } from "../CustomerProvider.js";
import { useEmployeeCustomers } from "../EmployeeCustomerProvider.js";

const contentTarget = document.querySelector(".employees");

export const EmployeeList = () => {
  const employees = useEmployees();
  const computers = useComputers();
  const departments = useDepartments();
  const locations = useLocations();
  const customers = useCustomers();
  const customerRelationships = useEmployeeCustomers();

  const render = () => {
    contentTarget.innerHTML = employees
      .map((emp) => {
        let empComputer = computers.find((comp) => comp.id === emp.computerId);

        let empDepartment = departments.find(
          (dep) => dep.id === emp.departmentId
        );
        let empLocation = locations.find(
          (location) => location.id === emp.locationId
        );

        const relationships = customerRelationships.filter(
          (cr) => cr.employeeId === emp.id
        );

        const assignedCustomers = relationships.map((rel) => {
          return customers.find((customer) => customer.id === rel.customerId);
        });

        const html = Employee(
          empComputer,
          empDepartment,
          empLocation,
          assignedCustomers,
          emp
        );
        return html;
      })
      .join("");
  };

  render();
};
