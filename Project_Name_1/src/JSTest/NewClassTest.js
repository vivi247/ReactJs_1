
class Employee {

    constructor (id) {
        this.id = id;
    }

    showDetails() {
        console.log(`SHowing the ID ${this.id}`);
        
    }
}
const emp = new Employee(24);
console.log(emp);
emp.showDetails();
console.log(new Employee("Vivek"));

class Manager extends Employee{

    constructor (id, name, dept) {
        super(id)
        this.name = name;
        this.dept = dept;
    }

    callDetails() {
        console.log(`Showing the details from Manager`);
        
    }
}

const sara = new Manager(34,"Sara", "Risk");
console.log(sara);
sara.callDetails();
sara.showDetails();