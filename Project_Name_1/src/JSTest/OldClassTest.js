function Employee(id) {
    this.id = id;
};

Employee.prototype.showId = function () {
    console.log(`Show the id is ${this.id}`);
};

const emp = new Employee("Vivek");
console.log(emp);
emp.showId();


function Manager(id, name, dept) {
    Employee.call(this,id)
 this.name = name;
 this.dept = dept;
 
}
// Manager.prototype = Object.create(Employee.prototype);
// Manager.prototype.constructor = Manager;

// Manager.prototype.showDetails = function () {
//     console.log("This is a demo");
    
// }

let mang = new Manager(34,"Shyam","Risk");
console.log(mang);
mang.__proto__ = emp;
// mang.showDetails();
mang.showId();