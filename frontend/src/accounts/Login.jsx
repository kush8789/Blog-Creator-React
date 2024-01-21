import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AccountAPI from './authapi';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit =async (event) => {
    event.preventDefault();
    const user = {
      username: username,
      password: password
  };
    const response=await AccountAPI.login(user);
    console.log(response);
    // Add your logic to handle form submission (e.g., send data to the server)

    // Clear the form fields
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container d-flex flex-column justify-content-center my-4 flex-wrap">
      <h3 className="text-center my-2">Login to BLOG CREATER</h3>
      <div className="row center">
        <div className="col-md-6 offset-md-3">
     
          <form onSubmit={handleSubmit}>
            {/* Add your logic to handle form submission */}
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                placeholder="Enter Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary my-2">
              Login
            </button>
            <p>
              Need an account? <Link to="/accounts/Signup">Signup Here</Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
