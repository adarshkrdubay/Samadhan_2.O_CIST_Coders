import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://demofornow.pythonanywhere.com/students")
      .then((res) => res.json())
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching students:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <h2>Loading...</h2>;

  return (
    <div style={{ padding: "20px", fontFamily: "Arial", backgroundColor: "#f5f6fa", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>👨‍🎓 Student Profiles</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
        {students.map((student) => (
          <div
            key={student.id}
            style={{
              backgroundColor: "#fff",
              borderRadius: "10px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              padding: "20px",
              width: "250px",
              textAlign: "center",
              transition: "transform 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <div
              style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                backgroundColor: "#74b9ff",
                margin: "0 auto 15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#fff",
                fontSize: "24px",
                fontWeight: "bold",
              }}
            >
              {student.name.charAt(0)}
            </div>
            <h2 style={{ margin: "10px 0", fontSize: "20px", color: "#2d3436" }}>{student.name}</h2>
            <p style={{ margin: "5px 0", fontSize: "16px", color: "#636e72" }}>{student.course}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
