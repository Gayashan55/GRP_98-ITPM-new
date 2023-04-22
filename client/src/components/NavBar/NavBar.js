import React from "react";
import logo from "../images/logo.png";
import './NavBar.css';

function NavBar(){
    return(
        <nav>
            <div className="navbar__barContent">
                <img src = {logo} className = "navbar_logo" alt = ""/>
            </div>
            <div>
                <div id="mySidenav" class="sidenav">
                    <a href="Dashborad" id="home">Home</a>
                    <a href="#" id="volunteers">Volunteers</a>
                    <a href="#" id="reports">Reports</a>
                    <a href="#" id="about">About</a>
                    <a href="#" id="contact">Contact</a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;