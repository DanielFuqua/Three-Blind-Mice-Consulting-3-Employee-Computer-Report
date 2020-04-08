import { getComputers } from "./ComputerProvider.js";
import { getEmployees } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./DepartmentProvider.js";

getComputers().then(getDepartments).then(getEmployees).then(EmployeeList);
