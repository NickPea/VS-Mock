import React from "react";

export default function Terminal() {
  return (
    <div
      style={{
        backgroundColor: "rgb(25,25,25)",
        borderTop: "1px solid rgba(248, 248, 255, 0.5)",
        height: "40vh"
      }}>
      {/* title */}
      <small
        style={{
          color: "white",
          fontWeight: "lighter",
          paddingLeft: "20px"
        }}>
        Terminal
      </small>
      {/* editor content */}
    </div>
  );
}
