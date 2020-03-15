import React from "react";

const LinkStyle = {
  color: "white",
  textDecoration: "none"
};

const ProgramIconStyle = {
  color: "lightblue",
  textDecoration: "none"
};

export default function TopNav() {
  return (
    <>
      <div className="d-flex bg-dark shadow">
        <div className="px-3  py-1">
          <a href="#" style={ProgramIconStyle}>
            VS-Mock
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            File
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            Edit
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            Selection
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            View
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            Go
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            Run
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            Terminal
          </a>
        </div>
        <div
          className="
         px-3 py-1 top-menu-hover">
          <a href="#" style={LinkStyle}>
            Help
          </a>
        </div>
      </div>
    </>
  );
}
