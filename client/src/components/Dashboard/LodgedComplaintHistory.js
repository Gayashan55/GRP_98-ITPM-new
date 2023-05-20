import React, { Component } from 'react';
import "./Dashboard.css"
import Grid from "@mui/material/Grid";
import RightContent from './RightContent';
import ComplaintHistory from '../Complaint/ComplaintHistory';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <Grid container>
                <Grid item xs={3}>
                <div>
                    <RightContent/>
                </div>
                </Grid>
                <Grid item xs={9} className="maincontent__container">
                    <div>
                        <ComplaintHistory />
                    </div>
                </Grid>
                
                </Grid>
            </div>
         );
    }
}
 
export default Dashboard;