import React, {useState, useEffect} from "react";
import './Complaint.css';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

export default function AddComplaint() {
    const { id } = useParams(); // Retrieve complaint ID from URL
    const [formData, setFormData] = useState({
        province: '',
        city: '',
        area: '',
        location: '',
        imageUrl: '',
        note: ''
    });

    const navigate = useNavigate();

    useEffect(() => {
        // Fetch complaint data
        axios.get(`http://localhost:8070/complaint/get/${id}`)
        .then((res) => {
            const { province, city, area, location, imageUrl, note } = res.data.complaint;
            setFormData({ province, city, area, location, imageUrl, note });
        })
        .catch((error) => {
            console.log(error.message);
        });
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
          ...prevState,
          [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    
        axios.put(`http://localhost:8070/complaint/update/${id}`, formData)
          .then((res) => {
            console.log(res.data);
            alert('Complaint Updated!');
            navigate(`/history`);
          })
          .catch((error) => {
            console.log(error.message);
            // Handle error
          });
    };

    const handleCancel = () => {
        navigate('/history');
    };

    return(
        <div class = "form">
        <form onSubmit={handleSubmit}>
            <h4> Edit Lodged Complaint </h4> <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Province</label>
                <select class="form-control"
                name="province"
                value={formData.province}
                onChange={handleChange} placeholder='Select the Province' >
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
                <input type="text" class="form-control" 
                    name="city"
                    value={formData.city}
                    onChange={handleChange} id="exampleInputPassword1" placeholder="City" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Area</label>
                <input type="text" class="form-control" name="area"
                    value={formData.area}
                    onChange={handleChange} id="exampleInputPassword1" placeholder="Area" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Location</label>
                <input type="text" class="form-control" name="location"
                value={formData.location}
                onChange={handleChange} id="exampleInputPassword1" placeholder="Location" />
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Image</label>
                <input type="text" value={formData.imageUrl}
                onChange={handleChange} class="form-control" id="exampleInputPassword1" />
            </div>
            
            <div class="form-group">
                <label for="exampleInputPassword1">Note (if any)</label>
                <textarea class="form-control" 
                value={formData.note}
                onChange={handleChange} id="exampleInputPassword1" />
            </div>

            <button type="submit" class="btn btn-success" style={{margin:"10px"}}>Save</button>
            <button type="button" class="btn btn-danger" style={{margin:"10px", float:"right"}} onClick={handleCancel}>Cancel</button>
        </form>
        </div>
    )

}