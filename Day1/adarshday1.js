//Day 1 Print student details from an object
class Student {
  constructor(name, Sem, Enrol) {
    this.name = name;
    this.Sem = Sem;
    this.Enrol = Enrol;
  }

  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Sem: ${this.Sem}`);
    console.log(`Enrol: ${this.Enrol}`);
  }
}

const student1 = new Student("Adarsh", 5, "00000000000");
student1.printDetails();
