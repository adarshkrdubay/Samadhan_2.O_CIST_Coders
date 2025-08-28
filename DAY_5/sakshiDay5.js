const http = require("http");

const students = [
  { id: 1, name: "sakshi", age: 20, grade: "A" },
  { id: 2, name: "danesh", age: 22, grade: "B" },
  { id: 3, name: "adarsh", age: 21, grade: "A+" }
];

const server = http.createServer((req, res) => {
  if (req.url === "/api/students" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(students));
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(3000, () => console.log("Server running on port 3000"));
