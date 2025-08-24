const express = require("express");
const app = express();
const PORT = 3000;
const students = [
  { id: 1, name: "Adarsh", age: 20, grade: "A" },
  { id: 2, name: "Danesh", age: 22, grade: "B" },
  { id: 3, name: "Sakshi", age: 21, grade: "A+" }
];
app.get("/", (req, res) => {
  res.send("Welcome to samadhan 2.0");
});
app.get("/api/students", (req, res) => {
  res.json(students);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
