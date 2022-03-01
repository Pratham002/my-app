import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React from 'react'
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [darkMode, setDarkMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if(darkMode === "light") {
      setDarkMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "TextUtils - Dark Mode";
    }
    else {
      setDarkMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "TextUtils - Light Mode";
    }
  }

  return (
    <>
      <Router>
      <Navbar title="TextUtils" mode={darkMode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
      <Routes>
          <Route path="/about" element={<About mode={darkMode} />}>
          </Route>
          <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to Analyse" mode={darkMode} />}>
          </Route>
      </Routes>
      </div>
      </Router>
    </>
  );
}

export default App;