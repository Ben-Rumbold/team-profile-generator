// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
import Employee from "./Employee.js";

// Manager 'child' class (extends from Employee)
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    super(name, id, email);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }
  getOfficeNumber() {
    return this.officeNumber;
  }
}

export default Manager;
