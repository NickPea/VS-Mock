import React from "react";
import FileIcon from "../Assets/file.svg";
import SearchIcon from "../Assets/search.svg";
import ToolIcon from "../Assets/tool.svg";
import GithubIcon from "../Assets/github.svg";
import GridIcon from "../Assets/grid.svg";

const LinkStyle = {
  color: "white",
  textDecoration: "none",
  padding: "15px"
};

export default function SideNav() {
  return (
    <div className="d-flex flex-column align-items-center bg-dark vh-100">
      <div className=" side-menu-hover py-2">
        <a href="#" title="Explorer" style={LinkStyle}>
          <img src={FileIcon} alt="view files" />
        </a>
      </div>
      <div className=" side-menu-hover py-2">
        <a href="#" title="Search" style={LinkStyle}>
          <img src={SearchIcon} alt="search files" />
        </a>
      </div>
      <div className="side-menu-hover py-2">
        <a href="#" title="Debug" style={LinkStyle}>
          <img src={ToolIcon} alt="debug and setting" />
        </a>
      </div>
      <div className=" side-menu-hover py-2">
        <a href="#" title="GitHub" style={LinkStyle}>
          <img src={GithubIcon} alt="source control" />
        </a>
      </div>
      <div className=" side-menu-hover py-2">
        <a href="#" title="Extensions" style={LinkStyle}>
          <img src={GridIcon} alt="Extensions" />
        </a>
      </div>
    </div>
  );
}
