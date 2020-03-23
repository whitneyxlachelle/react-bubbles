import React, { useState } from "react";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Login = (props) => {
  //console.log(props);
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  //save token to localStorage

  const handleSubmit = event => {
    event.preventDefault();
    axiosWithAuth()
      .post('http://localhost:5000/api/login', credentials)
      .then(response => {
        console.log(response.data.payload)
        localStorage.setItem('token', response.data.payload);
        props.history.push('/bubblePage')
      })
  }

  const handleChange = event => {
    event.preventDefault();
    setCredentials({
      ...credentials,
      [event.target.name]: event.target.value,
    })
  }
  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            value={credentials.username}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            value={credentials.password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    </>
  );
};

export default Login;
