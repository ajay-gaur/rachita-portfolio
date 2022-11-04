import React, { useState } from 'react';
import logo from '../images/logo.png'
import toggleicon from '../images/menu-icon.png'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function Navbarr(props) {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="me-auto">
          <img src={logo} />
        </NavbarBrand>
        <img src={toggleicon} onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/about">About Rachita</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/aboutgpt">
                About Girl Power Talk
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Navbarr;