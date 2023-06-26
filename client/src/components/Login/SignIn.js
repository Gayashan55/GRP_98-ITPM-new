import React, { useState } from "react";
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SignIn() {
  const [mobileno, setMobileno] = useState('');
  const [email, setEmail] = useState('');
  const id = useParams();

  const navigate = useNavigate();

  function handleMobilenoChange(event) {
    setMobileno(event.target.value);
  }

  function handleEmailChange(event) {
    setEmail(event.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const user = {
      email: email,
      mobileno: mobileno
    }

    await axios.get(`http://localhost:8070/user/`, user)
      .then((res) => {
        console.log('success');
        alert('Logged in');
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <br/>
        <h4>Login</h4> <br/>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Mobile Number</label>
          <input
            type="text"
            value={mobileno}
            onChange={(e) => handleMobilenoChange(e)}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          required/>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            className="form-control"
            id="exampleInputPassword1"
          required />
        </div>
        <Link to={`/dashboard`} className="btn btn-primary" > Sign In</Link>
      </form>
    </div>
  );
}

export default SignIn;