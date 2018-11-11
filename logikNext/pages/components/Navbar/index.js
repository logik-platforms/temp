import React from 'react'
import "./navbar.css"

import { Nav, Navbar, NavItem } from "react-bootstrap"

const NavBar = () => {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <a href="/">
                        <img id="navLogo" src={require("../../img/FullSizeRender.png")} />
                        Logik Platforms
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav pullRight>
                    <NavItem eventKey={1} href="./views/About">
                        About Us
                </NavItem>
                    <NavItem eventKey={2} href="./views/Services">
                        Services
                </NavItem>
                    <NavItem eventKey={3} href="./views/Technologies">
                        Technologies
                </NavItem>
                    <NavItem eventKey={4} href="./views/Contact">
                        Contact Us
                </NavItem>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavBar;