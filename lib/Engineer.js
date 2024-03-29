// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
import Employee from "./Employee.js";

// Engineer 'child' class (extends from Employee)
class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }

  getRole() {
    return "Engineer";
  }
  getGithub() {
    return this.github;
  }
}

export default Engineer;
