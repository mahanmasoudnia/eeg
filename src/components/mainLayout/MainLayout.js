import React from "react";
import { Outlet } from "react-router";
import Sidebar from "./../sidebar/Sidebar";


const MainLayout = ({children}) => {
  return (
    <div id="section" className="d-flex justify-content-md-center h-100 p-4">
      <Sidebar/>
      <div className="main bg-light ">
        <div className="main-field ">
          <div className="main-content mx-3">
           <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
