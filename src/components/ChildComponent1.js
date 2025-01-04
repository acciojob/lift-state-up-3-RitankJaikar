import React from "react";

function ChildComponent1({ updateOption }) {
  return (
    <div style={{ margin: "10px" }}>
      <button onClick={() => updateOption("Option 1")}>
        Select Option 1
      </button>
    </div>
  );
}

export default ChildComponent1;
