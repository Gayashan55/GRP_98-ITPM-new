import React, {useEffect, useState} from "react";
import './Complaint.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function AddComplaint() {

    const [complaints, setComplaints] = useState([]);

    useEffect(()=>{
        function getComplaints(){
    
        axios.get(`http://localhost:8070/complaint/`)
          .then((res) => {
            console.log('success');
            setComplaints(res.data);
          })
          .catch((error) => {
            console.log(error.message)
        })
    }
        getComplaints();
    },[]);

    const handleDelete = (id) => {
        try {
            axios.delete(`http://localhost:8070/complaint/delete/${id}`);   
            alert("Complaint Deleted!"); 
            window.location.reload();        
            
        } catch (error) {
          alert(error);
        }
        
    }

    const handleGet = (id) => {
        try {
            axios.get(`http://localhost:8070/complaint/get/${id}`);          
            
        } catch (error) {
          alert(error);
        }
        
    }
    
    

    return(
        <div class = "table">       
            <h4> Lodged Complaint History </h4> <br/>
            <table>
                <thead>
                    <tr>
                    <th>ComplaintNo</th>
                    <th>Province</th>
                    <th>City</th>
                    <th>Area</th>
                    <th style={{paddingLeft:"70px"}}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {complaints.map(complaint => (
                    <tr key={complaint.id}>
                    <td> {complaint._id} </td>
                    <td > {complaint.province} </td>
                    <td > {complaint.city} </td>
                    <td > {complaint.area}</td>
                    <td colSpan={3} class="column-container">
                        <Link to = {`/edit/${complaint._id}`}class="btn btn-success"> <i className="fa fa-pencil"></i> </Link>
                        <Link onClick={() => handleDelete(complaint._id)} class="btn btn-danger"> <i className="fa fa-trash"></i> </Link>
                    </td>
                    </tr>
                    ))}                    
                </tbody>
            </table>
        </div>   
        
    )

}