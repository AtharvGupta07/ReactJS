// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes
// } from "react-router-dom";



function App() {
  const[mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type)=>{
        setAlert({
          msg: message,
          type: type
        })

        setTimeout(() => {
          setAlert(null);
        }, 3000);
    }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#012a3aff';
      showAlert("Dark Mode has been enabled","dark");
      document.title = "EasyText - Dark Mode";
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = '#ffffffff';
      showAlert("Light Mode has been enabled","light");
      document.title = "EasyText - Light Mode";

    }
  }

  return (
    <>
    {/* <Navbar title="Atharv-bar" about = "myAboutsection"/> */}

    {/* <Router> */}
        <Navbar title='EasyText' about = "Aboutsection" mode={mode} toggleMode ={toggleMode}/>
        <Alert alert={alert}/>
        <div className="container">
            {/* <Routes> */}
              {/* <Route exact path="/about" element={<About />} /> */}
              {/* <Route exact path="/home" element={<Textform showAlert={showAlert} mode={mode} />} /> */}
              <Textform showAlert={showAlert} mode={mode} />
            {/* </Routes> */}
        </div>
    {/* </Router> */}

    </>
  );
}

export default App;

