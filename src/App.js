
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from './component/About';
import Alert from './component/Alert';
import NoteState from './component/context/notes/NoteState';
import Footer from './component/Footer';
import { Home } from './component/Home';
import Login from './component/Login';
import Navbar from './component/Navbar';
import Signup from './component/Signup';




function App() {
  const [alert, setAlert] = useState(null);
  // const context = useContext(noteContext);
  // const { setDeleteConfirm } = context;
  const [mode, setMode] = useState('light');

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = (cls) => {
    // removeBodyClasses();

    // document.body.classList.add('bg-'+ cls )
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = ' #696867 ';
      // showAlert("Dark Mode has been enable", "success");
      // document.title = "TextUtils - Dark Mode";
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      // showAlert("Light Mode has been enable", "success")
      // document.title = "TextUtils - Light Mode";
    }
  }



  return (
    <>
      <NoteState>
        <Router>
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Alert alert={alert} />
          
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home mode={mode} showAlert={showAlert} />}></Route>
              <Route exact path="/about" element={<About mode={mode} />}></Route>
              <Route exact path="/login" element={<Login mode={mode} showAlert={showAlert} />}></Route>
              <Route exact path="/signup" element={<Signup mode={mode} showAlert={showAlert} />}></Route>
            </Routes>
          </div>
          <Footer mode={mode}/>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
