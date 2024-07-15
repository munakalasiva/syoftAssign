import React from 'react';
import './index.css'; 

import profile from "../../2151037420.jpg";

import { FcGraduationCap } from "react-icons/fc";
import { GoChecklist } from "react-icons/go";
import { FaPen } from "react-icons/fa";
import { IoPricetags } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { FiHelpCircle } from "react-icons/fi";

const Dashboard = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    

    <div className="dashboard-container">
        <div className="user-card">
            <img src={profile} alt="User Avatar" className="user-avatar" />
            <h2>Welcome, {user.user_firstname} {user.user_lastname}!</h2>
            <div className="user-info">
                <p><strong>Email:</strong> {user.user_email}</p>
                <p><strong>Phone:</strong> {user.user_phone}</p>
                <p><strong>City:</strong> {user.user_city}</p>
                <p><strong>Zip Code:</strong> {user.user_zipcode}</p>
            </div>
        </div>

    <div className="cards">
        <div className="card">
            <FcGraduationCap className="icon"/> 
            <p>LEARN</p>     
        </div>
        <div className="card">
             <GoChecklist className="icon"/>
            <p>INTERESTS</p>     
        </div>
        <div className="card">
             <FaPen className="icon" /> 
            <p>CONTRIBUTE</p>     
        </div>
        <div className="card">
            <IoPricetags  className="icon"/>
            <p>PRACTICE</p>     
        </div>
        <div className="card">
            <FiHelpCircle  className="icon"/> 
            <p>HELP</p>     
        </div>
        <div className="card">
            <IoSettings  className="icon"/> 
            <p>SETTINGS</p>     
        </div>

        <div>
             
        </div>

    </div>    

    </div>
  );
};

export default Dashboard;
