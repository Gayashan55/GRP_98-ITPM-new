import React, { Component } from 'react';
import "./MainPage.css";
import Grid from "@mui/material/Grid";

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            postArray:[],
            progressBar: "",
         }
    }

    
    render() { 
        return ( 
            <div>
                <div className="mainpage__container">   
                    <Grid container> 
                    <Grid item xs={3}> 
                    <div className='dashboard-container'>
                    <h5> Total Lodged Complaints </h5>
                    </div>
                    </Grid>
                    <Grid item xs={3}> 
                    <div className='dashboard-container'>
                    <h5> New Lodged Complaints </h5>
                    </div>
                    </Grid>
                    <Grid item xs={3}> 
                    <div className='dashboard-container'>
                    <h5> Completed Lodged Complaints </h5>
                    </div>
                    </Grid>
                    <Grid item xs={3}> 
                    <div className='dashboard-container'>
                    <h5> Deleted Lodged Complaints </h5>
                    </div>
                    </Grid>
                    </Grid>
                </div>
            </div>
         );
    }
}
 
export default MainPage;