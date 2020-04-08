import { useEmployees } from "./EmployeeProvider.js";
import { useComputers } from "../ComputerProvider.js";
import { Employee } from "./Employee.js";
import { useDepartments } from "../DepartmentProvider.js";

const contentTarget = document.querySelector(".employees");

export const EmployeeList = () => {
  const employees = useEmployees();
  const computers = useComputers();
  const departments = useDepartments();

  const render = () => {
    contentTarget.innerHTML = employees
      .map((emp) => {
        let empComputer = computers.find((comp) => comp.id === emp.computerId);

        let empDepartment = departments.find(
          (dep) => dep.id === emp.departmentId
        );
        const html = Employee(empComputer, empDepartment, emp);
        return html;
      })
      .join("");
  };

  render();
};
