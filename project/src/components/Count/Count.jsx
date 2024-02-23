import React, { useState, useEffect } from "react";
import "./Count.css";
import { FaUsers } from "react-icons/fa";

export default function Count() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (count < 417) {
        setCount(count + 1);
      }
    }, 2);

    return () => clearInterval(interval);
  }, [count]);

  return (
    <section className="count">
      <div className="count-members">
        <FaUsers />
        {count} <br />
        Members
      </div>
    </section>
  );
}
