import React, { useEffect, useState } from 'react';
import profile from '../images/profile.jpg'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './RightContent.css'

function RightContent () {
    const [id, setId] = useState('');
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [user, setUser] = useState([]);

    useEffect (() => {
        function getUser(){
            axios.get(`http://localhost:8070/user/${id}`)
            .then((res) => {
                setUser(res.data);
                setUsername(res.data.username);
                setEmail(res.data.email);
                console.log(res.data)
            })
            .catch((error) => {
                console.log(error.message);
            })
        }
        getUser();
    }, [id])

        return ( 
            <div>
                <div className="container">   
                   {user && (
                    <div key={user.id}>
                        <h5>{user.username}</h5>
                        <h5>{user.email}</h5>
                    </div>
                    )}
                    <br/><br/>
                <div className='complaint'>
                    <a href='/dashboard' style={{marginTop:"30px"}}> <h6> Dashboard </h6> </a> <hr/>
                    <a href='/complaints'> <h6> Lodged Complaint </h6> </a> <hr/>
                    <a href='/history'> <h6> Complaint History </h6> </a> <hr/>
                </div>
                    

                <div className='search'>
                    <a href='/search'> <h6> Search </h6> </a> 
                </div>
                <div className='logout'>
                    <a href='/logout'> <h6> Logout </h6> </a> 
                </div> 
                <br/>  
                </div>
            </div>
        );
    
}
 
export default RightContent;