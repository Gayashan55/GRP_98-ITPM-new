import React,{useState, useEffect} from "react";
import axios from "axios";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';


function ViewBin(){

    const onDelete = (id) =>{

        confirmAlert({
            title: 'Confirm to Delete',
            message: 'Are you sure you want to delete this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => axios.delete(`http://localhost:8070/CollectorBin/delete/${id}`).then((res) =>{
                    
                  })
              },
              {
                label: 'No',
               
              }
            ]
          });
      
        
      }

    //view all bins//
    const [bin, setBins] = useState([]);
    useEffect(()=>{
        function getBins(){
            axios.get("http://localhost:8070/CollectorBin/")
            .then((res)=>{

                console.log("your data has been received")
                console.log(res.data)

                setBins(res.data);
            }).catch((err)=>{
                alert(err.message);
            })
        }
        getBins();
    },[bin])

   
    return(
        <><br /><br /><br /><h3> All Bins </h3><table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
                <tr>

                    <th>Bin_ID</th>
                    <th>Location</th>
                    <th>Started_date</th>
                    <th>Volunteers</th>
                    <th>Finished_date</th>
                </tr>
            </thead>
            <tbody>
                {bin.map((bin) => (
                    <tr>
                        <td>{bin.Bin_ID}</td>
                        <td>{bin.Location}</td>
                        <td>{bin.Started_date}</td>
                        <td>{bin.Volunteers}</td>
                        <td>{bin.Finished_date}</td>

                        <td> <a href={``}><button type="" className="btn btn-primary">UPDATE</button> </a> </td>
                        <td><a className="btn btn-danger" href="#" onClick={() => onDelete(bin._id)}> <i className="far fa-trash-alt"></i>Delete</a></td>
                    </tr>

                ))}
            </tbody>
        </table></>

    )
}

export default ViewBin;