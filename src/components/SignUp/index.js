import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import loginImg from "../../11668754_20945760.jpg";
import './index.css'; 

const SignUp = () => {
  const [formData, setFormData] = useState({
    user_firstname: '',
    user_email: '',
    user_phone: '',
    user_password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      user_lastname: 'Smith', 
      user_city: 'Hyderabad',
      user_zipcode: '500072'
    };

    axios.post('https://syoft.dev/Api/user_registeration/api/user_registeration', payload)
      .then(response => {
        console.log(response.data);
        
        history.replace("/login");
      })
      .catch(error => {
        console.error('There was an error registering the user!', error);
      });
  };
  
  const history = useHistory();

  const navigateLogin=()=>{
      history.push("/login");
  }

  return (
    <div className="main-container">
    <div className="container">
        <img src={loginImg} alt="img" className="img"/>
    <div className="signup-container">  
      <form onSubmit={handleSubmit}>
        <h2>Sign Up</h2>
        <div className="navigation">
            <p>Already have an account?</p>
            <button type="button" onClick={navigateLogin}>sign in</button>
        </div>
        <input type="text" name="user_firstname" placeholder="First Name" value={formData.user_firstname} onChange={handleChange} required />
        <input type="email" name="user_email" placeholder="Email" value={formData.user_email} onChange={handleChange} required />
        <input type="tel" name="user_phone" placeholder="Phone Number" maxLength="10" value={formData.user_phone} onChange={handleChange} required />
        <input type="password" name="user_password" placeholder="Password" value={formData.user_password} onChange={handleChange} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default SignUp;
