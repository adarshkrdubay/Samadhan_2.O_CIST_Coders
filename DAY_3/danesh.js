function calculateMarks(marks) {
  // Calculate total
  const total = marks.reduce((sum, mark) => sum + mark, 0);

  // average
  const average = total / marks.length;
  
  const percentage = (total / (marks.length * 100)) * 100;

  
  const grade =
    percentage >= 90 ? "A+" :
    percentage >= 80 ? "A" :
    percentage >= 70 ? "B" :
    percentage >= 60 ? "C" :
    percentage >= 50 ? "D" : "F";

  return { total, average, percentage: percentage.toFixed(2), grade };
}


const studentMarks = [85, 92, 78, 88, 95];
const result = calculateMarks(studentMarks);

console.log("Total Marks:", result.total);
console.log("Average Marks:", result.average.toFixed(2));
console.log("Percentage:", result.percentage + "%");
console.log("Grade:", result.grade);
