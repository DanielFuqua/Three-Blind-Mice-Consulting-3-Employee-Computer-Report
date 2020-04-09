import { getComputers } from "./ComputerProvider.js";
import { getEmployees } from "./employees/EmployeeProvider.js";
import { EmployeeList } from "./employees/EmployeeList.js";
import { getDepartments } from "./DepartmentProvider.js";
import { getLocations } from "./LocationsProvider.js";
import { getCustomers } from "./customers/CustomerProvider.js";
import { getEmployeeCustomers } from "./EmployeeCustomerProvider.js";
import { CustomersList } from "./customers/CustomersList.js";

getComputers()
  .then(getDepartments)
  .then(getLocations)
  .then(getCustomers)
  .then(getEmployeeCustomers)
  .then(getEmployees)
  .then(EmployeeList);

getCustomers()
  .then(getEmployees)
  .then(getEmployeeCustomers)
  .then(CustomersList);
