function totalMarks(marks) {
  let total = 0;
  for (let i = 0; i < marks.length; i++) {
    total += marks[i];
  }

  let average = total / marks.length;
  let percentage = (total / (marks.length * 100)) * 100;
  let grade = "";
  if (percentage >= 90) grade = "A+";
  else if (percentage >= 80) grade = "A";
  else if (percentage >= 70) grade = "B";
  else if (percentage >= 60) grade = "C";
  else if (percentage >= 50) grade = "D";
  else grade = "F";

  return {
    total,
    average,
    percentage: percentage.toFixed(2),
    grade
  };
}

const studentMarks = [85, 92, 78, 88, 95];
const result = totalMarks(studentMarks);
console.log("Total Marks:", result.total);
console.log("Average Marks:", result.average);
console.log("Percentage:", result.percentage + "%");
console.log("Grade:", result.grade);
