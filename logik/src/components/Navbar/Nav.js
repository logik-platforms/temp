import React from "react";
import {link } from "react-router-dom";
import "./Nav.css";

const Navbar = () => {
    return (
<ul className="nav nav-tabs">
<li className= "nav-item">
<Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
Home
</Link>
</li>

</ul>
    );
}


export default Nav;