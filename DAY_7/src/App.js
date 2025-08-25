import React from "react";
import ProfileCard from "./components/ProfileCard";
import CounterPreview from "./components/CounterPreview"; 
function App() {
  return (
    <div>
      {/* <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <ProfileCard
          name="Adarsh Kumar"
          role="Software Engineer"
          avatar="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD..."
          bio="IDK What is it"
        />
      </div> */}

      <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
        <CounterPreview />
      </div>
    </div>
  );
}

export default App;
