import React from "react";
import logo from "../images/logo.png";
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div className="navbar__barContent">
             <div id="mySidenav" class="sidenav">
                    <a href="/" id="home">Home</a>
                    <a href="/volunteers" id="volunteers">Volunteers</a>
                    <a href="/reports" id="reports">Reports</a>
                    <a href="/about" id="about">About</a>
                    <a href="/contact" id="contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;