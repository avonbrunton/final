import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Nav } from "reactstrap";

const Sidebar = () => {
  return (
    <div className="sidebar menubar" data-color="black">
      <div className="logo">
        <a href="/" className="logo-full">
          <img
            alt="react-logo"
            style={{
              width: "80%",
              marginLeft: "10%",
              marginBottom: 50,
              display: "inline-block",
            }}
          />
        </a>
      </div>

      <div className="sidebar-wrapper">
        <div className="profile-info row">
          <div className="profile-image col-4">
            <a href="#!">
              <img alt="" className="img-fluid avatar-image" />
            </a>
          </div>
          <div className="profile-details col-8">
            <h3>
              <a href="#!"></a>
              <span className="profile-status online"></span>
            </h3>
            <p className="profile-title">admin</p>
          </div>
        </div>

        <Nav className="navigation">
          <li className={"nav-parent "}>
            <Link
              to={"/dashboard/"}
              className="nav-link"
              activeClassName="active"
            >
              <i className={"i-home"}></i>
              <p>Home</p>
              <span className="badge">Blue</span>
            </Link>
          </li>
          <li className={"nav-parent "}>
            <Link
              to={"/dashboard/corporate"}
              className="nav-link"
              activeClassName="active"
            >
              <i className={"i-briefcase"}></i>
              <p>Corporates</p>
              <span className="badge">Blue</span>
            </Link>
          </li>
          <li className={"nav-parent "}>
            <Link
              to={"/dashboard/doctor"}
              className="nav-link"
              activeClassName="active"
            >
              <i className={"i-user-following"}></i>
              <p>Doctor</p>
              <span className="badge">Blue</span>
            </Link>
          </li>

          <li className={"nav-parent "}>
            <NavLink
              to={"/dashboard/patient"}
              className="nav-link"
              activeClassName="active"
            >
              <i className={"i-user"}></i>
              <p>Patient</p>
              <span className="badge">Blue</span>
            </NavLink>
          </li>

          <li className={"nav-parent "}>
            <NavLink
              to={"/dashboard/earning/doctor"}
              className="nav-link"
              activeClassName="active"
            >
              <i className={"i-wallet"}></i>
              <p>Earnings</p>
              <span className="badge">Blue</span>
            </NavLink>
          </li>

          <li className={"nav-parent "}>
            <NavLink
              to={"/dashboard/appointment"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="i-calendar"></i>
              <p>Appointment</p>
              <span className="badge">Blue</span>
            </NavLink>
          </li>
          <li className={"nav-parent "}>
            <NavLink
              to={"/dashboard/notification"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="i-bell"></i>
              <p>Push Notification</p>
              <span className="badge">Blue</span>
            </NavLink>
          </li>
          <li className={"nav-parent "}>
            <NavLink
              to={"/dashboard/offer"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="i-tag"></i>
              <p>Offers</p>
              <span className="badge">Blue</span>
            </NavLink>
          </li>
          <li className={"nav-parent "}>
            <NavLink
              to={"/dashboard/inbox"}
              className="nav-link"
              activeClassName="active"
            >
              <i className="i-envelope"></i>
              <p>Chat</p>
              <span className="badge">Blue</span>
            </NavLink>
          </li>
        </Nav>
      </div>
    </div>
  );
};

export default Sidebar;
