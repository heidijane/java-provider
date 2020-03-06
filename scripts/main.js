import { employeeList } from "./employee/EmployeeList.js";
import { equipmentList } from "./equipment/EquipmentList.js";
import { productList } from "./product/ProductList.js";
import { createHeader } from "./nav/Header.js";

createHeader();
equipmentList();
employeeList();
productList();