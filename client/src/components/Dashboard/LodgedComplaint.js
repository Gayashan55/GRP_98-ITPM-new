import React, { Component } from 'react';
import "./Dashboard.css"
import Grid from "@mui/material/Grid";
import RightContent from './RightContent';
import AddComplaint from '../Complaint/AddComplaint';

class LodgedComplaints extends Component {
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
                        <AddComplaint/>
                    </div>
                </Grid>
                
                </Grid>
            </div>
         );
    }
}
 
export default LodgedComplaints;