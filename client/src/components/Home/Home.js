import React from "react";
import "./Home.css";
import clock from '../images/clock.png';
import location from '../images/location.png';
import phone from '../images/phone.png'
import Grid from "@mui/material/Grid"; 
import Login from '../Login/Login';

function Home(){
    return(
    <div className="home">
      <Grid container>
        <Grid item xs={5}>
          <div style={{marginTop:"50px", marginLeft:"50px" , marginBottom:"50px"}}>
            <img src='https://th.bing.com/th/id/R.f50fe8da9ea9d56cf5bbe82c5ddde2e4?rik=zbrCkhP07QOEnw&riu=http%3a%2f%2ffollowgreenliving.com%2fwp-content%2fuploads%2f2014%2f06%2fsave-earth.jpg&ehk=xczld3D2H7mkk6RfRWBUbZJqbibjjS9UbhYDPcgGB0E%3d&risl=&pid=ImgRaw&r=0' alt='' />
          </div>
        </Grid>
        <Grid item xs={4}>
            <Login/>
        </Grid>
      </Grid>
        <div class="card-footer text-body-secondary">
            
        </div>
    </div>
    )
}

export default Home;