import React from "react";

function ChildComponent2({ updateOption }) {
  return (
    <div style={{ margin: "10px" }}>
      <button onClick={() => updateOption("Option 2")}>
        Select Option 2
      </button>
    </div>
  );
}

export default ChildComponent2;
