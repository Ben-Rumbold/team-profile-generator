// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
// const Employee = require("./Employee");
import Employee from "./Employee.js";

// Intern 'child' class (extends from Employee)
class Intern extends Employee {
  constructor(name, id, email, school) {
    super(name, id, email);
    this.school = school;
  }

  getRole() {
    return "Intern";
  }
  getSchool() {
    return this.school;
  }
}

// module.exports = Intern;
export default Intern;
