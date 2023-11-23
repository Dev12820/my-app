import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import About from './Components/About';

import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
 
function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showalert=(message,type)=>
  {
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);
     },2000)
  }
  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode Enabled","success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode Enabled","success");
    }
  }
  return (
    <>
  <BrowserRouter>
  <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
    <Route path="/about" element={<About />} />
          <Route path="/" element={<TextForm heading="Enter the text to analyze below" showalert={showalert}/>} />
        </Routes>
    </div>
  </BrowserRouter>
    
    </> 
  );
}

export default App;
