import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function SignUp() {
  const [username, setUsername] = useState('');
  const [mobileno, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      mobileno: mobileno,
      email: email,
      username: username
    }

    await axios.post(`http://localhost:8070/user/add`, user)
      .then((res) => {
        alert('Success');
        navigate('/login');
      })
      .catch((error) => {
        console.log(error.message)
      })
  }


  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br />
        <h4>Sign Up</h4> <br />
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Mobile Number
          </label>
          <input
            type="text"
            value={mobileno}
            onChange={(event) => {
              setMobile(event.target.value);
            }}
            className="form-control"
            id="name"
            aria-describedby="emailHelp"
            required/>
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
            required/>
        </div>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
            className="form-control"
            id="username"
            required/>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default SignUp;
