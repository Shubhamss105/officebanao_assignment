import React, { useState } from "react";
import "./App.css";
import Other from "./components/Other";
import Overview from "./components/Overview";

const types = ["Overview", "Other"];

function TabGroup() {
  const [active, setActive] = useState(types[0]);

  return (
    <>
      <div className="button-group">
        {types.map((type) => (
          <button
            key={type}
            className={`tab ${active === type ? "active" : ""}`}
            onClick={() => setActive(type)}
          >
            {type}
          </button>
        ))}
      </div>
      <p />
      {active === "Overview" && <Overview />}
      {active === "Other" && <Other />}
    </>
  );
}

export default TabGroup;
