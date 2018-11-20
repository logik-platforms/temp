import React, { Component, Link } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
  import "./navbar.css";
  

  export default  class StickyNavbar extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="#fffffff" light expand="sm">
        <img alt="Quantum Logo" className="navlogo" src={require("../../img/FullSizeRender.png")} align="left" />
          <NavbarBrand href="/"><span className="navtitle">Logik Platforms</span></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#aboutPage"><span className="navlink">About</span></NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span className="navlink">Services</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Custom Software Development
                  </DropdownItem>
                  <DropdownItem>
                    Mobile Application Development
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Web Design/Development
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <span className="navlink">Technologies</span>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Web Development
                  </DropdownItem>
                  <DropdownItem>
                    Secure Data Storage
                  </DropdownItem>
                  <DropdownItem>
                    Custom Software Development
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Mobile Application Development
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink href="#contact"><span className="navlink">Contact</span></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
