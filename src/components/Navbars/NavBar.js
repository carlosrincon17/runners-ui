import React, { useEffect, useState } from "react";
import logo from "assets/img/brand/runners.png"
import { Link } from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  UncontrolledDropdown,
  Media,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

const NavBar = () => {
  
  const [state, setState] = useState({
    collapseClasses: "",
    collapseOpen: false
  });

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);


  const onExiting = () => {
    setState(Object.assign(state, {
      collapseClasses: "collapsing-out"
    }));
  };

  const onExited = () => {
    setState(Object.assign(state, {
      collapseClasses: ""
    }));
  };


  return (
    <header className="header-global">
      <Navbar
        className="navbar-main navbar-transparent navbar-light headroom"
        expand="lg"
        id="navbar-main"
      >
        <Container>
          <NavbarBrand className="mr-lg-5" to="/" tag={Link}>
            <img
              alt="..."
              src={logo}
              className="header-logo"
            />
          </NavbarBrand>
          <button className="navbar-toggler" id="navbar_global">
            <span className="navbar-toggler-icon" />
          </button>
          <UncontrolledCollapse
            toggler="#navbar_global"
            navbar
            className={state.collapseClasses}
            onExiting={onExiting}
            onExited={onExited}
          >
            <div className="navbar-collapse-header">
              <Row>
                <Col className="collapse-brand" xs="6">
                  <Link to="/">
                    <img
                      alt="..."
                      src={logo}
                    />
                  </Link>
                </Col>
                <Col className="collapse-close" xs="6">
                  <button className="navbar-toggler" id="navbar_global">
                    <span />
                    <span />
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <i className="ni ni-ui-04 d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Formato</span>
                </DropdownToggle>
                <DropdownMenu className="dropdown-menu-xl">
                  <div className="dropdown-menu-inner">
                    <Media
                      className="d-flex align-items-center"
                      href="https://demos.creative-tim.com/argon-design-system-react/#/documentation/overview?ref=adsr-navbar"
                      target="_blank"
                    >
                      <div className="icon icon-shape bg-gradient-primary rounded-circle text-white">
                        <i className="ni ni-bullet-list-67" />
                      </div>
                      <Media body className="ml-3">
                        <h6 className="heading text-primary mb-md-1">
                          Reglamento
                            </h6>
                        <p className="description d-none d-md-inline-block mb-0">
                          Acá podras encontrar el reglamento para nuestra carrera.
                            </p>
                      </Media>
                    </Media>
                  </div>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <i className="ni ni-collection d-lg-none mr-1" />
                  <span className="nav-link-inner--text">Examples</span>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/landing-page" tag={Link}>
                    Landing
                      </DropdownItem>
                  <DropdownItem to="/profile-page" tag={Link}>
                    Profile
                      </DropdownItem>
                  <DropdownItem to="/login-page" tag={Link}>
                    Login
                      </DropdownItem>
                  <DropdownItem to="/register-page" tag={Link}>
                    Register
                      </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.facebook.com/creativetim"
                  id="tooltip333589074"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Facebook
                      </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip333589074">
                  Like us on Facebook
                    </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/creativetimofficial"
                  id="tooltip356693867"
                  target="_blank"
                >
                  <i className="fa fa-instagram" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Instagram
                      </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip356693867">
                  Follow us on Instagram
                    </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://twitter.com/creativetim"
                  id="tooltip184698705"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" />
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Twitter
                      </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip184698705">
                  Follow us on Twitter
                    </UncontrolledTooltip>
              </NavItem>
              <NavItem className="d-none d-lg-block ml-lg-4">
                <Button
                  className="btn-icon btn-white"
                  color="default"
                  to="/login-page" 
                  tag={Link}
                >
                  <span className="nav-link-inner--text ml-1">
                    Iniciar Sesión
                  </span>
                </Button>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </header>
  );

}

export default NavBar;
