import React from "react";

const RedLine = () => {
  const hour = new Date().getHours();
  const minute = new Date().getMinutes();
  const height = hour * 59 + minute;
  const style = { top: height + "px" };
  return <div className="red-line" style={style}></div>;
};
export default RedLine;
