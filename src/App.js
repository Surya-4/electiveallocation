import './App.css';
import About from './components/About';
import Admin from './components/Admin';
import Contact from './components/Contact';
import Home from './components/Home';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import { useState } from 'react';
import Allocation from './components/Allocation';

function App() {
  const [loggedin,setLogginin]=useState(false);
  const [isallocated, setIsallocated] = useState(false);
  const [data, setData] = useState([]);

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={
        <Home loggedin={loggedin} setLogginin={setLogginin}/>
      }></Route>
      <Route path='/about' element={
        <About loggedin={loggedin} setLogginin={setLogginin}/>
      }></Route>
      <Route path='/contactus' element={
        <Contact loggedin={loggedin} setLogginin={setLogginin}/>
      }></Route>
      <Route path='/login' element={
        <Admin loggedin={loggedin} setLogginin={setLogginin} isallocated={isallocated} setIsallocated={setIsallocated} data={data} setData={setData}/>
      }></Route>
      <Route path='/allocation' element={
        <Allocation loggedin={loggedin} setLogginin={setLogginin} isallocated={isallocated} setIsallocated={setIsallocated} data={data} setData={setData}/>
      }></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
