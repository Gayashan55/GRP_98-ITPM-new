import React, {useState, useEffect} from "react";
import './Complaint.css';
import axios from 'axios';
import { useParams } from "react-router-dom";

export default function AddComplaint() {

    const [complaint, setComplaint] = useState(null);
    const id = useParams();

    useEffect(() => {
        // Fetch complaint data
        axios.get(`http://localhost:8070/complaint/get/${id}`)
        .then((res) => {
            setComplaint(res.data.complaint);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }, [id]);

    return(
        <div class = "table">       
            <h4> View Lodged Complaint </h4> <br/>
            <table>
                <thead >
                {complaint ? (
                <div key = {complaint.id}>
                    <tr>   
                        <th>Complaint Number</th>  
                        <th> {complaint._id} </th>       
                    </tr>
                    <tr>
                        <th>Province</th> 
                        <th> {complaint.province} </th>              
                    </tr>
                    <tr>
                        <th>City</th>  
                        <th> {complaint.city} </th>             
                    </tr>
                    <tr>
                        <th>Area</th> 
                        <th> {complaint.area} </th>              
                    </tr>
                    <tr>
                        <th>Location</th>    
                        <th> {complaint.location} </th>           
                    </tr>
                    <tr>
                        <th>Image</th>  
                        <th> {complaint.imageUrl} </th>             
                    </tr>
                    <tr>
                        <th>Note</th>  
                        <th> {complaint.note} </th>             
                    </tr>
                    </div>
                    ) : (
                        <h5>Loading Complaint...</h5>
                    )}
                </thead>   
            </table>
        </div>   
        
    )

}