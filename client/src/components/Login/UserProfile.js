import React, {useState} from "react";
import './Complaint.css';
import { useNavigate, useParams, Link  } from 'react-router-dom';
import axios from 'axios';

export default function AddComplaint() {
    const [province, setProvince] = useState('');
    const [city, setCity] = useState('');
    const [area, setArea] = useState('');
    const [location, setLocation] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [note, setNote] = useState('');
    const navigate = useNavigate();
    const id = useParams();

    const handleSubmit = async (e) => {
        e.preventDefault()
        const complaint = {
            province : province,
            city : city,
            area : area,
            location : location,
            imageUrl : imageUrl,
            note : note
        }
    
        await axios.put(`http://localhost:8070/complaint/update/${id}`, complaint)
          .then((res) => {
            alert('Complaint Updated!');
            navigate("/history");
          })
          .catch((error) => {
            console.log(error)
          })
    }
    return(
        <div class = "form">
        <form onSubmit={handleSubmit}>
            <h4> Edit Lodged Complaint </h4> <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Province</label>
                <select class="form-control" value={province} onChange={(event) => {
                setProvince(event.target.value);
                }} placeholder='Select the Province' >
                    <option disabled>Select the Province</option>
                    <option>Central Province </option>
                    <option>Eastern Province </option>
                    <option>Northern Province </option>
                    <option>Southern Province </option>
                    <option>Western Province </option>
                    <option>North Western Province </option>
                    <option>North Central Province </option>
                    <option>Uva Province  </option>
                    <option>Sabaragamuwa Province </option>
                </select>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">City</label>
                <input type="text" class="form-control" value={city} onChange={(event) => {
                setCity(event.target.value);
                }} id="exampleInputPassword1" placeholder="City" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Area</label>
                <input type="text" class="form-control" value={area} onChange={(event) => {
                setArea(event.target.value);
                }} id="exampleInputPassword1" placeholder="Area" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Location</label>
                <input type="text" class="form-control" value={location} onChange={(event) => {
                setLocation(event.target.value);
                }} id="exampleInputPassword1" placeholder="Location" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Image</label>
                <input type="text" value={imageUrl} onChange={(event) => {
                setImageUrl(event.target.value);
                }}class="form-control" id="exampleInputPassword1" />
            </div>
            
            <div class="form-group">
                <label for="exampleInputPassword1">Note (if any)</label>
                <textarea class="form-control" value={note} onChange={(event) => {
                setNote(event.target.value);
                }}id="exampleInputPassword1" />
            </div>

            <Link class="btn btn-primary" to = {`/edit/`} style={{ margin: '10px', marginLeft :'270px'}}> 
                <i className="fa fa-pencil"></i>&nbsp; Edit
            </Link> 
                        
            <button class="btn btn-danger"  style={{ float: 'right', margin: '10px' }}>
                <i className="fa fa-trash"></i>&nbsp; Delete
            </button>
        </form>
        </div>
    )

}