import React, { useState } from "react";
import ChildComponent1 from "./ChildComponent1";
import ChildComponent2 from "./ChildComponent2";

function App() {
  const [selectedOption, setSelectedOption] = useState("");

  const updateSelectedOption = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="parent" style={{ textAlign: "center", padding: "20px" }}>
      <h1>Parent Component</h1>
      <p>Selected Option: {selectedOption || "None"}</p>
      <ChildComponent1 updateOption={updateSelectedOption} />
      <ChildComponent2 updateOption={updateSelectedOption} />
    </div>
  );
}

export default App;
