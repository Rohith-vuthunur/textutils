// import { useEffect } from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About.js';
import Navbar from "./components/Navbar.js"
import Textform from './components/Textform.js';
// import Alert from './components/Alert.js';
import {BrowserRouter as Router,
    Route,
    //  Link,
     Routes
    }
from "react-router-dom";
// useState  
function App() {
  const [modes,setmode] = useState("light")
  
  const togglemode = ()=>{
    if (modes==="dark"){
    setmode("light");
    document.body.style.backgroundColor="white";
    document.title="Textutil - Light Mode";
    
    }

    else{
      setmode("dark");
      document.body.style.backgroundColor="black";
      document.title="Textutil - Dark Mode";

    }
  }
  // useEffect(() => {
  //   document.body.style.backgroundColor = modes === 'dark' ? 'light' : 'dark';
  // }, [modes]);
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={modes} togglemode={togglemode}></Navbar>
    {/* <Alert alert="success" mode={modes}></Alert> */}
    {/* <Textform mode={modes}></Textform>   */}
    {/* <Navbar title="Hello world"></Navbar>
    <About></About> */}
    
    <Routes>
      <Route exact path="/" element={<Textform mode={modes}/>}>
          
      </Route>
  
      <Route exact path="/about" element={<About mode={modes}/>}>

      </Route>
      {/* <Route path="/" element={<Home/>}></Route> */}
    </Routes>
    </Router>
    </>
  );
  
}

export default App;
