//Day 1 Print student details from an object
class Student {
  constructor(name, Sem, Enrol,course) {
    this.name = name;
    this.Sem = Sem;
    this.Enrol = Enrol;
    this.course= course;
  }

  printDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Sem: ${this.Sem}`);
    console.log(`Enrol: ${this.Enrol}`);
    console.log(`course: ${this.course}`);
  }
}

const student1 = new Student("Sakshi", 5, "****cs******" , "B.Tech");
student1.printDetails();
