class Student {
  constructor(name, marks) {
    this.name = name;
    this.marks = marks;
  }

  calculateTotal() {
    return this.marks.reduce((sum, mark) => sum + mark, 0);
  }

  calculateAverage() {
    return this.calculateTotal() / this.marks.length;
  }

  calculatePercentage() {
    return (this.calculateTotal() / (this.marks.length * 100)) * 100;
  }

  getGrade() {
    const percentage = this.calculatePercentage();
    if (percentage >= 90) return "A+";
    else if (percentage >= 80) return "A";
    else if (percentage >= 70) return "B";
    else if (percentage >= 60) return "C";
    else if (percentage >= 50) return "D";
    else return "F";
  }

  showResult() {
    console.log(`Student Name: ${this.name}`);
    console.log(`Total Marks: ${this.calculateTotal()}`);
    console.log(`Average Marks: ${this.calculateAverage().toFixed(2)}`);
    console.log(`Percentage: ${this.calculatePercentage().toFixed(2)}%`);
    console.log(`Grade: ${this.getGrade()}`);
  }
}

// Example usage
const student1 = new Student("sakshi", [85, 92, 78, 88, 95]);
student1.showResult();
