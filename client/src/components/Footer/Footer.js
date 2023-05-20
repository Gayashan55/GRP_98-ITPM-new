import React from "react";
import logo from "../images/logo.png";
import './Footer.css';

function Footer(){
    return(
        <footer>
            <div class="card-footer text-body-secondary">
                <div>
                    <img src={logo} alt='' className="logo-img" />
                </div>        
            </div>
        </footer>
    )
}

export default Footer;