import React from 'react';

function Contact(){
    return(
        <div>
            <span className="phone">
            <img src='{phone}' alt=""/> <span> 011 2345678 </span>
            </span>
            <span className="clock">
            <img src='{clock}' alt=""/> <span> Open Hours </span> <span className="time"> 8.00 a.m. - 10.00 p.m.</span>
            </span>
            <span className="loc">
            <img src='{location}' alt=""/>  <span> Colombo, Sri Lanka </span>
            </span>
        </div>
    )
}

export default Contact;