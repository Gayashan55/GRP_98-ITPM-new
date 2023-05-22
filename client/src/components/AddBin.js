import React,{useState} from "react"
import axios from "axios";

export default function AddBin(){

    const[Bin_ID, setBinID] = useState("");
    const[Location, setLocation] = useState("");
    const[Started_date, setStarted_date] = useState("");
    const[Volunteers, setVolunteers] = useState("");
    const[Finished_date, setFinished_date] = useState("");

    function sendData(e){
        e.preventDefault();

        const newBin ={
            Bin_ID,
            Location,
            Started_date,
            Volunteers,
            Finished_date
        }

        axios.post("http://localhost:8070/CollectorBin/add",newBin).then(()=>{
            alert("Bin Added")

            setBinID("");
            setLocation("");
            setStarted_date("");
            setVolunteers("");
            setFinished_date("");

        }).catch((err)=>{
            alert(err)
        })

    }

    return(
        <div className="container">

            <form onSubmit={sendData}>

            <div class="form-group">
            <label for="name">Bin ID</label> <input type="text" class="form-control" id="Bin_Id" placeholder="Enter Bin ID" 
                
                onChange={(e)=>{
                setBinID(e.target.value);
            }} />
            </div>

            <div class="form-group">
            <label for="age">Location</label> <input type="text" class="form-control" id="location" placeholder="Enter Location"
                
                onChange={(e)=>{
                setLocation(e.target.value);
            }}/>
            </div>

            <div class="form-group">
            <label for="name">Started Date</label> <input type="text" class="form-control" id="sDate" placeholder="Enter Started Date" 
            
                onChange={(e)=>{
                setStarted_date(e.target.value);
            }}/>
            </div>

            <div class="form-group">
            <label for="name">Volunteers</label> <input type="text" class="form-control" id="vol" placeholder="Enter Volunteers"
                
                onChange={(e)=>{
                setVolunteers(e.target.value);
            }}/>
            </div>

            <div class="form-group">
            <label for="name">Finished Date</label> <input type="text" class="form-control" id="fDate" placeholder="Enter Finished Date"
                
                onChange={(e)=>{
                setFinished_date(e.target.value);
            }}/>
            </div>

            <button type="submit" class="btn btn-primary">Submit</button> 
            </form> 

        </div>
    )
}