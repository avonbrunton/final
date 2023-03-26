import React from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button,
} from "reactstrap";

import { connect } from "react-redux";
//import { load_user, logout } from "../../../redux/action/auth";

//import dashboardRoutes from "../../../routes/general";

var IMGDIR = process.env.REACT_APP_IMGDIR;
class AdminHeader extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      userddOpen: false,
      searchOpen: false,
      messagesddOpen: false,
      notificationsddOpen: false,
      color: "primary",
      profilename: "Eric Nelson",
      profileimg: IMGDIR + "/images/profile/profile.jpg",
    };
    this.toggle = this.toggle.bind(this);
    this.userddToggle = this.userddToggle.bind(this);
    this.messagesddToggle = this.messagesddToggle.bind(this);
    this.notificationsddToggle = this.notificationsddToggle.bind(this);
    this.searchToggle = this.searchToggle.bind(this);
  }
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "primary",
      });
    } else {
      this.setState({
        color: "white",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  userddToggle(e) {
    this.setState({
      userddOpen: !this.state.userddOpen,
    });
  }
  searchToggle() {
    //this.refs.searchbarToggle.classList.toggle('toggled');
    this.setState({
      searchOpen: !this.state.searchOpen,
    });
    //this.refs.searchbarToggle.classList.toggle('opened');
  }
  messagesddToggle(e) {
    this.setState({
      messagesddOpen: !this.state.messagesddOpen,
    });
  }
  notificationsddToggle(e) {
    this.setState({
      notificationsddOpen: !this.state.notificationsddOpen,
    });
  }
  getBrand() {
    var name;
    // dashboardRoutes.map((prop, key) => {
    //   if (prop.collapse) {
    //     prop.views.map((prop, key) => {
    //       if (prop.path === this.props.location.pathname) {
    //         name = prop.name;
    //       }
    //       return null;
    //     });
    //   } else {
    //     name = prop.name;
    //   }
    //   return null;
    // });
    return name;
  }
  openSidebar() {
    document.documentElement.classList.toggle("nav-toggle");
    this.refs.sidebarToggle.classList.toggle("toggled");

    // close chat bar if open on smaller screens
    if (window.innerWidth < 993) {
      document.documentElement.classList.remove("nav-toggle-chat");
    }
  }
  openChat() {
    document.documentElement.classList.toggle("nav-toggle-chat");
    // close menu bar if open on smaller screens
    if (window.innerWidth < 993) {
      document.documentElement.classList.remove("nav-toggle");
      this.refs.sidebarToggle.classList.remove("toggled");
    }
  }
  toggle_grid() {
    document.documentElement.classList.toggle("toggle-grid");
  }

  openStyle() {
    document.documentElement.classList.toggle("nav-toggle-style");
  }
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "primary",
      });
    } else {
      this.setState({
        color: "primary",
      });
    }
  }

  componentDidMount() {}

  render() {
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar expand="lg" className={"navbar-absolute fixed-top "}>
        <Container fluid>
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref="sidebarToggle"
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
                <i className="i-menu"></i>
              </button>
            </div>
          </div>

          <Collapse isOpen={this.state.isOpen} navbar className="navbar-right">
            <Nav navbar>
              <Dropdown
                nav
                isOpen={this.state.userddOpen}
                toggle={(e) => this.userddToggle(e)}
                className="userdd"
              >
                <DropdownToggle caret nav>
                  <span>
                    {this.props.user ? this.props.user.first_name : "Loading.."}
                  </span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    tag="a"
                    className=""
                    onClick={() => {
                      this.props.logout();
                      localStorage.removeItem("token");
                      window.location.pathname = "/";
                    }}
                    href="#!"
                  >
                    <i className="i-lock"></i> Logout
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Nav>
            <div
              className="screensize"
              onClick={() => this.toggle_grid()}
            ></div>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default AdminHeader;
