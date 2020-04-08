import { getComputers } from "./ComputerProvider.js";
import { getEmployees } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./DepartmentProvider.js";
import { getLocations } from "./LocationsProvider.js";

getComputers()
  .then(getDepartments)
  .then(getLocations)
  .then(getEmployees)
  .then(EmployeeList);
