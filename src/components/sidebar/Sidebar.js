import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Sidebar = () => {
// const [isActive, setIsActive] = useState(false)
// const {Pathname}=useLocation()

// const active=()=>{
// setIsActive(!isActive)
// }

// useEffect(() => {
//   setIsActive(true)
// }, [Pathname])


  return (
    <aside className="sidebar bg-light">
      <div className="sidebar-field">
        <div className="logo-container m-2">
          <img className="logo" src="../../../img/logo.png"></img>
        </div>
        <div className="sidebar-content">
          <nav className="nav">
            <ul className="nav-tabs">
              <NavLink className="nav-link" to={"/dashboard/"}>
                <li  >
                  <i className="fa fa-home"></i> HOME
                </li>
              </NavLink>
              <NavLink className={`nav-link `} to={"/dashboard/patient-info"}>
                <li >
                  <i className="fa fa-info-circle"></i> Patient Information
                </li>
              </NavLink>
              <NavLink  className="nav-link" to={"/dashboard/patient-register"}>
                <li>
                  <i class="fa fa-address-card" aria-hidden="true"></i> Patient
                  Register
                </li>
              </NavLink>
              <NavLink  className="nav-link" to={"/dashboard/logout"}>
                <li>
                  <i className="fa fa-sign-out"></i> Logout
                </li>
              </NavLink>
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
