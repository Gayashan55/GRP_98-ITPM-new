import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Grid from "@mui/material/Grid"; 
import './Volunteers.css';
import { green } from '@mui/material/colors';

function Volunteers() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [province, setProvince] = useState('');
  const [city, setCity] = useState('');
  const [availability, setAvailability] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault()
    const volunteer = {
        name: name,
        phone: phone,
        province: province,
        city: city,
        availability:availability
    }

    await axios.post(`http://localhost:8070/volunteer/add`, volunteer)
      .then((res) => {
        alert('Success');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  
  return (
    <div className='volunteer'>
    <Grid container>
    <Grid item xs={5}>
      <h3>Take Action</h3>
      <h1> JOIN A CLEANUP </h1>
      <h2> Join the World's largest Environmental movement!</h2>
    </Grid>
    <Grid item xs={7}>
    <div class='volunteer-form' 
    style={{marginTop:"70px" , marginBottom:"50px", width:'57%', marginLeft:'200px'}}>
      <form onSubmit={handleSubmit} >
        <br />
        <h4 style={{marginLeft:"20px"}}>Sign Up as a Volunteer</h4> <br />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(event) => {
              setName(event.target.value);
            }}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Mobile Number
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(event) => {
              setPhone(event.target.value);
            }}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required/>
        </div>
        <div class="form-group">
                <label for="exampleInputEmail1">Province</label>
                <select class="form-control" value={province} onChange={(event) => {
                setProvince(event.target.value);
                }} placeholder='Select the Province' required>
                    <option >Select the Province</option>
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
                }} id="exampleInputPassword1" placeholder="City" required/>
        </div>
        <div class="form-group">
                <label for="exampleInputPassword1">Availability</label>
                <select class="form-control" value={availability} onChange={(event) => {
                setAvailability(event.target.value);
                }}  required> 
                    <option >None</option>
                    <option>Full Time</option>
                    <option>Half Time</option>
                </select>
                
        </div>
        <button type="submit" className="btn btn-primary" style={{marginTop:'10px'}}>
          Sign Up
        </button>
      </form>
    </div>
    </Grid>
    </Grid>
    </div>
  );
}

export default Volunteers;
