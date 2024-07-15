import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import loginImg from "../../11668754_20945760.jpg";
import './index.css'; 

const Login = () => {
  const [formData, setFormData] = useState({
    user_email: '',
    user_password: ''
  });
  const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('https://syoft.dev/Api/userlogin/api/userlogin', formData)
      .then(response => {
        localStorage.setItem('user', JSON.stringify(response.data.user_data[0]));
        history.push('/dashboard');
      })
      .catch(error => {
        console.error('There was an error logging in!', error);
      });
  };

  return (
    <div className="main-container">
        <div className="container">
            <img src={loginImg} alt="img" className="img"/>
        <div className="login-container">
        <form onSubmit={handleSubmit}>
            <h2>Log In</h2>
            <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
            <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
            <button type="submit">Log In</button>
        </form>
        </div>
        </div>
    </div>
  );
};

export default Login;
