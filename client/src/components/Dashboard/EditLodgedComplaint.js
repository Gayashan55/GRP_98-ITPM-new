import React, { Component } from 'react';
import "./Dashboard.css"
import Grid from "@mui/material/Grid";
import RightContent from './RightContent';
import EditComplaint from '../Complaint/EditComplaint';

class EditLodgedComplaint extends Component {
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
                        <EditComplaint/>
                    </div>
                </Grid>
                
                </Grid>
            </div>
         );
    }
}
 
export default EditLodgedComplaint;