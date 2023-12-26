import React from "react";
import "./count.css";

const BadgeCount = ({ number = 0, style }) => {
  return <div className="badge_count">{number}</div>;
};

export default BadgeCount;
