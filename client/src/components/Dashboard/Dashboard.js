import React from "react";
import './Complaint.css';

function Dashboard() {

    return(
    <div>
    <div class="sidebar">
      <ul class="nav-links">
        <li>
          <a href="AdminDashboard.jsp">
            <i class="fa fa-home"></i>
            <span class="links_name">Dashboard</span>
          </a>
        </li>
        <hr/>
        <li>
			<a href="AddComplaint.js"> <i class="fa fa-user"> &nbsp; </i> &nbsp; <span class="links_name"> Lodged Complaint </span> </a>  
        </li>
        <hr/>
        <li>
          <a href="#"> <i class="fa fa-users"> &nbsp; </i> &nbsp; <span class="links_name"> Complaint History </span> </a> 
        </li>
        <hr/>
        <br/>
        <li>
          <a href='#'> <i class="fa fa-search"> &nbsp; </i> &nbsp;<span class="links_name"> Search </span> </a>
        </li>
        <li>
          <a href='#'> <i class="fa fa-star"> &nbsp; </i> &nbsp; <span class="links_name"> Rate Us </span> </a>
        </li>
        <br/>
        <li>
          <a href="#"> <i class="fa fa-power-off"> &nbsp; </i> &nbsp; <span class="links_name"> Log Out </span> </a> 
        </li>
      </ul>
    </div>
    <section class="home-section">
    <nav>
      <div class="sidebar-button">
        <span class="dashboard">Dashboard</span>
      </div>
    </nav>
	
    <div class="home-content"> 
    <div class="overview-boxes">
    </div>
    </div>
    </section>
    </div>
    )
}

export default Dashboard;