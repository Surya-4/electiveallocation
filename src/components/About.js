import React from 'react'
import { Link } from 'react-router-dom';

export default function About(props) {
  const {loggedin,setLogginin}=props;
  return (
    <>
    <div className="header">
        <Link to ="/"><strong>Elective Seletion</strong></Link>
        <div className="navbar">
            {!loggedin && (<Link to ="/login">Admin Login</Link>)}
            {loggedin && <strong><Link to='/login' style={{color:'red'}}>Surya</Link></strong>}
            <Link to ="/about">About Us</Link>
            <Link to ="/contactus">Contact Us</Link>
            <Link to='/allocation'>ElectiveList</Link>
            {loggedin && <Link to='/' onClick={()=>{setLogginin(false)}}>Logout</Link>}
        </div>
    </div>
    <div class="about">
        <h2>
            This website is Elective Selection system.
        </h2>
        <p>Here you have to fill your details and your project preferences.</p>
        <p>We will assign you the project based on your CGPA.</p>
        <p><strong>Choose Wisely!!!</strong></p>
    </div>
    </>
  )
}
