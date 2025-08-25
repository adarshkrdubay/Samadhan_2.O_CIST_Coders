const marks = [45, 67, 89, 23, 90, 76];

// Bubble Sort
for (let i = 0; i < marks.length - 1; i++) {
    for (let j = 0; j < marks.length - i - 1; j++) {
        if (marks[j] > marks[j + 1]) {
            // Swap
            let temp = marks[j];
            marks[j] = marks[j + 1];
            marks[j + 1] = temp;
        }
    }
}

const highest = marks[marks.length - 1]; // Last element after sorting
console.log("Highest marks:", highest);
