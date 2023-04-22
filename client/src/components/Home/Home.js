import React from "react";
import "./Home.css";
import clock from '../images/clock.png';
import location from '../images/location.png';
import phone from '../images/phone.png'

function Home(){

    return(
    <div>
        <span className="phone">
          <img src={phone} alt=""/> <span> 011 2345678 </span>
        </span>
        <span className="clock">
          <img src={clock} alt=""/> <span> Open Hours </span> <span className="time"> 8.00 a.m. - 10.00 p.m.</span>
        </span>
        <span className="loc">
          <img src={location} alt=""/>  <span> Colombo, Sri Lanka </span>
        </span>

        <div></div>
        
        <div class="card-footer text-body-secondary">
            <h6> Follow Us </h6>
            <a href="#" class="fa fa-facebook"></a>    
            <a href="#" class="fa fa-instagram"></a>
            <a href="#" class="fa fa-twitter"></a>
        </div>
    </div>
    )
}

export default Home;