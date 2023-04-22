import React, {useState} from "react";
import './Complaint.css';

export default function AddComplaint() {

    return(
        <div class = "form">
        <form>
            <h3> Lodged Complaint </h3> <br/>
            <div class="form-group">
                <label for="exampleInputEmail1">Province</label>
                <select class="form-control">
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
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="City"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Area</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Area"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Location</label>
                <input type="text" class="form-control" id="exampleInputPassword1" placeholder="Location"/>
            </div>

            <div class="form-group">
                <label for="exampleInputPassword1">Image</label>
                <input type="file" class="form-control" id="exampleInputPassword1"/>
            </div>
            
            <div class="form-group">
                <label for="exampleInputPassword1">Note (if any)</label>
                <textarea class="form-control" id="exampleInputPassword1"/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
        </div>
    )

}