import React from "react";
import TopNav from "./Components/TopNav";
import SideNav from "./Components/SideNav";
import Explorer from "./Components/Explorer";
import Editor from "./Components/Editor";
import Terminal from "./Components/Terminal";

export default function Template() {
  return (
    <>
      <div className="container-fluid" style={{ padding: "0" }}>
        <div className="row">
          <div id="top navigation" className="col">
            <TopNav />
          </div>
        </div>
        <div className="row no-gutters">
          <div id="side navigation" className="col-auto">
            <SideNav />
          </div>
          <div id="explorer" className="col-3">
            <Explorer />
          </div>
          <div id="editor" className="col">
            <div className="row">
              <div className="col">
                <Editor />
              </div>
            </div>
            <div className="row">
              <div className="col">
                <Terminal />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
