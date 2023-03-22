import React from "react";

function header(){
    return(
        <ul class="nav nav-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Volunteers</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Reports</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">About</a>
            </li>
            <li class="nav-item">
                <a class="nav-link disabled">Contact Us</a>
            </li>
        </ul>
    )
}

export default header;