import React from "react";
import "./Home.css";
import logo from '../images/logo.png';
import Grid from "@mui/material/Grid"; 
import Search from './Search';
import collection from '../images/recycling.png';
import sort from '../images/recycle.png';
import recycle from '../images/recycle-symbol.png';
import { useNavigate } from "react-router-dom";

function Home(){

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };
    return(
    <div className="home">
      <div style={{marginLeft:"200px", marginTop:"10px"}}>
        <span > 
          <h5> <span> <i class="fa fa-clock-o" style={{fontSize:'30px'}}> </i> </span> &nbsp; &nbsp; Opening Hours  </h5> 
          <h6 style={{marginLeft:"50px"}}> 9.00 a.m. to 10.00 p.m.</h6>
        </span> 

      </div >
      <div style={{marginTop:"-70px"}}>   
        <Search/>
      </div>
      <Grid container>
        <Grid item xs={5}>
     
        <div style={{marginTop:"100px", marginLeft:"275px" , marginBottom:"30px"}}>
          <h1 style={{color:'#04a96d', fontFamily:'courier', fontWeight:'bold'}}> ZERO WASTE </h1>
        </div>

        <div style={{marginLeft:"150px" , marginBottom:"50px", textAlign:'center'}}>
          <h6>
          Zero Waste is an industry leader in U.S. recycling and non-hazardous solid waste disposal.
          Through our collection companies, transfer stations, recycling centers and landfills, 
          we focus on providing effective and reliable environmental services and solutions to make proper 
          recycling and waste disposal effortless for our 14 million customers.
          We are committed to the preservation of a Blue Planet®... a cleaner, safer and healthier world where 
          people thrive – not just for today, but for generations to come. Republic Services is experienced 
          in meeting sustainability requirements and committed to providing environmentally responsible solutions 
          to meet current and future market recycling and solid waste needs.
          </h6>
        </div>

      
        <Grid container>
          <Grid item xs={4}>
          
          <div className="recycle-box">
            <img src={collection} alt="" className="recycle" style={{marginLeft:"60px", marginTop:"20px", marginBottom:"5px"}}/> 
            <h6 style={{marginLeft:"40px"}}>Waste Collection </h6>           
          </div>

          </Grid>

          <Grid item xs={4}>
          <div className="recycle-box">
            <img src={sort} alt="" className="recycle" style={{marginLeft:"60px", marginTop:"20px", marginBottom:"5px"}}/>   
            <h6 style={{marginLeft:"50px"}}>Waste Sorting </h6>        
          </div>

          </Grid>

          <Grid item xs={4}>
          <div className="recycle-box">
            <img src={recycle} alt="" className="recycle" style={{marginLeft:"60px", marginTop:"20px", marginBottom:"5px"}}/>  
            <h6 style={{marginLeft:"65px"}}> Recycling </h6>           
          </div>

          </Grid>
          
        </Grid>
        
        </Grid>
        <Grid item xs={7}>
        <div style={{marginTop:"100px", marginLeft:"300px" , marginBottom:"50px"}}>
          <img src='https://th.bing.com/th/id/OIP.JuGKv5bFDL_S3c2W2ipbrAHaE7?pid=ImgDet&rs=1' alt='' />
          
        </div>
        <div style={{marginTop:"100px", marginLeft:"300px" , marginBottom:"50px"}}> 
        <button class="btn btn-success" style={{width:'50%', height:'70px', fontSize:'28px', fontWeight:'500'}} onClick={handleLogin}>
          GET STARTED &nbsp; &nbsp; <i class="fa fa-arrow-right" style={{fontSize:'30px'}}></i> </button>
        </div>
        </Grid>
      </Grid>

    </div>
    )
}

export default Home;