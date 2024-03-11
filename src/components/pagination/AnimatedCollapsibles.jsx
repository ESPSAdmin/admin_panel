import React, { useState } from "react";

const Collapsible = ({ title, children }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleCollapsible = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="py-1">
      <button
        className={`btn py-3 rounded-none collapsible ${isActive ? "active" : ""}`}
        onClick={toggleCollapsible}
      >
        {title}
      </button>
      <div className="content" style={{ maxHeight: isActive ? "100%" : "0" }}>
        {children}
      </div>
    </div>
  );
};

const AnimatedCollapsibles = () => {
  return (
    <div className="col py-4">
      <h1 className="h5">Filter Products</h1>
      <Collapsible title="Price">
        <div className="flex items-center gap-3 py-2">
          <input type="checkbox" /> <p>0₹ to 500₹</p>
        </div>
        
      </Collapsible>
      <Collapsible title="Ratings">
        <div className="flex items-center gap-3 py-2">
          <input type="checkbox" /> <p>0₹ to 500₹</p>
        </div>
        
      </Collapsible>
    </div>
  );
};

export default AnimatedCollapsibles;
