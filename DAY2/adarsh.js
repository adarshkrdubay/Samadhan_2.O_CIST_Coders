function Sort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

const marks = [45, 78, 89, 32, 99, 67];
const sortedMarks = Sort(marks);
const highest = sortedMarks[sortedMarks.length - 1]; 
console.log("Highest Marks:", highest);
