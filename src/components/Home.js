import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Home(props) {
    const [name,setName]=useState('');
    const [enroll,setEnroll]=useState('');
    const [mobile,setMobile]=useState('');
    const [email,setEmail]=useState('');
    const [cgpa,setCgpa]=useState('');
    const [elective1,setElective1]=useState('elective 1');
    const [elective2,setElective2]=useState('elective 2');
    const [elective3,setElective3]=useState('elective 3');
    const {loggedin,setLogginin}=props;

    async function handleSubmit(e) {
        e.preventDefault();
        const obj={
            name:name,
            enroll:enroll,
            mobile:mobile,
            email:email,
            cgpa:cgpa,
            elective1:elective1,
            elective2:elective2,
            elective3:elective3
        }
        console.log(obj);
        const response=await axios.post('http://localhost:4000/data',obj);
        if(response.data==='Already Filled')
        {
            alert('Already filled the form');
            return;
        }
        console.log(response);
    }
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
    {!loggedin && (
        <form onSubmit={handleSubmit}>
        <input type="text" value={name} placeholder="Name" onChange={(e)=>{setName(e.target.value)}}/><br/>
                <input type="text" value={enroll} placeholder="Enroll id" onChange={(e)=>{setEnroll(e.target.value)}}/><br/>
                <input type="text" value={mobile} placeholder="Mobile Number" onChange={(e)=>{setMobile(e.target.value)}}/><br/>
                <input type="email" value={email} placeholder="Email" onChange={(e)=>{setEmail(e.target.value)}}/><br/>
                <input type="text" value={cgpa} placeholder="CGPA" onChange={(e)=>{setCgpa(e.target.value)}}/><br/>
                <label value={elective1} >Choose you first option:
                <select onChange={(e)=>{setElective1(e.target.value)}}>
                    <option value="elective 1">elective 1</option>
                    <option value="elective 2">elective 2</option>
                    <option value="elective 3">elective 3</option>
                </select>
            </label>
            <label value={elective2} >Choose your second option:
            <select onChange={(e)=>{setElective2(e.target.value)}}>
                <option>elective 2</option>
                <option>elective 1</option>
                <option>elective 3</option>
                </select>
            </label>
            <label value={elective3} >Choose your third option:
                <select onChange={(e)=>{setElective3(e.target.value)}}>
                    <option >elective 3</option>
                    <option >elective 1</option>
                    <option >elective 2</option>
                </select>
            </label>
                <button>Submit</button>
        </form>
    )}
    {loggedin && (
      <h2>Admin Cannot Submit the form</h2>
    )}
    </>
  )
}
