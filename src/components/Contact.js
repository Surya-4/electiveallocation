import React from 'react'
import { Link } from 'react-router-dom';

export default function Contact(props) {
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
    <div class="contact">
        <h2>For any queries, Please contact us though below.</h2>
    </div>
    </>
  )
}
