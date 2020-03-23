import React, { useState } from "react";

const Login = (props) => {
  const [credentials, setCredentials] = useState({});
 

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
       <form>
         <input 
         type="text"
         name="username"
         placeholder="Username"
         onChange={handleChange}
         />
           <input 
         type="password"
         name="password"
         placeholder="Password"
         onChange={handleChange}
         />
         <button>Log in</button>
       </form>
     </div>
    </>
  );
};

export default Login;
