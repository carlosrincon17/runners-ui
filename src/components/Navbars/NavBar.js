import React, {useEffect, useState} from "react";
import logo from "assets/img/brand/runners.png"
import {Link} from "react-router-dom";
import Headroom from "headroom.js";
import {
  Button,
  UncontrolledCollapse,
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
import LocalStorageUtil from "../../util/localstorage.util";

const NavBar = () => {

  const [state, setState] = useState({
    collapseClasses: "",
    collapseOpen: false
  });

  useEffect(() => {
    let headroom = new Headroom(document.getElementById("navbar-main"));
    headroom.init();
  }, []);

  const isUserLoggedIn = () => {
    const token = LocalStorageUtil.getItem(LocalStorageUtil.TOKEN_KEY);
    return !(token === undefined || token === '' || token === null);
  }

  const onLogoutClick = () => {
    LocalStorageUtil.removeItem(LocalStorageUtil.TOKEN_KEY);
    LocalStorageUtil.removeItem(LocalStorageUtil.ACCESS_TIME);
    window.location.reload(false);
  }

  const getLoginButton = () => {
    if (!isUserLoggedIn()) {
      return (
        <NavItem className="d-none d-lg-block ml-lg-4">
          <Button
            className="btn-icon btn-white"
            color="default"
            to="/login"
            tag={Link}
          >
                  <span className="nav-link-inner--text ml-1">
                    Ingresar
                  </span>
          </Button>
        </NavItem>
      )
    }
    return (
      <NavItem className="d-none d-lg-block ml-lg-4">
        <Button
          className="btn-icon btn-white"
          color="default"
          onClick={onLogoutClick}
          tag={Link}
        >
                  <span className="nav-link-inner--text ml-1">
                    Salir
                  </span>
        </Button>
      </NavItem>
    )
  }

  const getProfileLink = () => {
    if (isUserLoggedIn()) {
      return (
        <UncontrolledDropdown nav>
          <DropdownToggle nav to="/profile-page" tag={Link}>
            <i className="ni ni-collection d-lg-none mr-1"/>
            <span className="nav-link-inner--text">Mi Perfil</span>
          </DropdownToggle>
        </UncontrolledDropdown>
      );
    }
    return null;
  }
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
            <span className="navbar-toggler-icon"/>
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
                    <span/>
                    <span/>
                  </button>
                </Col>
              </Row>
            </div>
            <Nav className="navbar-nav-hover align-items-lg-center" navbar>
              <UncontrolledDropdown nav>
                <DropdownToggle nav>
                  <Media
                    className="d-flex text-primary-runners align-items-center"
                    href=""
                    to="/reglamento"
                    tag={Link}
                  >
                    <span className="nav-link-inner--text">Reglamento</span>
                  </Media>
                </DropdownToggle>
              </UncontrolledDropdown>
              {getProfileLink()}
            </Nav>
            <Nav className="align-items-lg-center ml-lg-auto" navbar>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://web.facebook.com/Runners-C%C3%BAcuta-282001516038466"
                  id="tooltip333589074"
                  target="_blank"
                >
                  <i className="fa fa-facebook-square"/>
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Facebook
                      </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip333589074">
                  Síguenos en Facebook
                </UncontrolledTooltip>
              </NavItem>
              <NavItem>
                <NavLink
                  className="nav-link-icon"
                  href="https://www.instagram.com/runnerscucuta/"
                  id="tooltip356693867"
                  target="_blank"
                >
                  <i className="fa fa-instagram"/>
                  <span className="nav-link-inner--text d-lg-none ml-2">
                    Instagram
                      </span>
                </NavLink>
                <UncontrolledTooltip delay={0} target="tooltip356693867">
                  Síguenos en Instagram
                </UncontrolledTooltip>
              </NavItem>
              {getLoginButton()}
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </header>
  );

}

export default NavBar;
