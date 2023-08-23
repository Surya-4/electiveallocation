import React from 'react'
import { Link } from 'react-router-dom';
export default function Allocation(props) {
    const {loggedin,setLogginin,isallocated,setIsallocated,data,setData}=props;
  return (
    <>
    {!isallocated &&(
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
        <h2>List has not yet Prepared</h2>
        </>
    )}
    {isallocated && (
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
        <div className="table">
          <table>
            <tr>
              <th>Name</th>
              <th>Enroll Id</th>
              <th>Elective</th>
            </tr>
            {data.map((item)=>{
              return(
                <tr>
                  <td>{item.name}</td>
                  <td>{item.enroll}</td>
                  <td>{item.elective}</td>
                </tr>
              )
            })}
          </table>
        </div>
        </>
    )}
    </>
  )
}
