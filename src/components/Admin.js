import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
export default function Admin(props) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const { loggedin, setLogginin,isallocated,setIsallocated,data,setData } = props;
  const [allocate, setAllocte] = useState(false);
  
  useEffect(() => {
    console.log(data);
  }, [data]);
  async function handleAllocate(e) {
    e.preventDefault();
    setAllocte(true);
    const response=await axios.post("http://localhost:4000/allocate", { allocate });
    setIsallocated(true);
    setData(response.data);
      console.log(response);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/admin",
        { name, password },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setLogginin(true);
      }
    } catch (error) {
      alert("Incorrect Credentials");
    }
  }
  return (
    <>
      {!loggedin && (
        <>
          <div className="header">
            <Link to="/">
              <strong>Elective Seletion</strong>
            </Link>
            <div className="navbar">
              <Link to="/login">Admin Login</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contactus">Contact Us</Link>
              <Link to='/allocation'>ElectiveList</Link>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                placeholder="userName"
              />
              <input
                type="text"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                placeholder="password"
              />
              <button>Submit</button>
            </form>
          </div>
        </>
      )}
      {loggedin && (
        <>
          <div className="header">
            <Link to="/">
              <strong>Elective Seletion</strong>
            </Link>
            <h2>Admin Dashboard</h2>
            <div className="navbar">
              <strong>
                <Link to="/login" style={{ color: "red" }}>
                  Surya
                </Link>
              </strong>
              <Link to="/about">About Us</Link>
              <Link to="/contactus">Contact Us</Link>
              <Link to='/allocation'>ElectiveList</Link>
              <Link
                to="/login"
                onClick={() => {
                  setLogginin(false);
                }}
              >
                Logout
              </Link>
            </div>
          </div>
          <h2>Click the Below button to allocate Subjects to Students</h2>
          <button onClick={handleAllocate} style={{ marginLeft: "50%" }}>
            Allocate
          </button>
        </>
      )}
    </>
  );
}
