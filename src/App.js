import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar.js';
 import Textform  from './Textform';
import About from './About';
import React,{useState} from 'react';
import Alert from './Alert';

function App() {
  const[mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null)
  const showAlert =(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500)
  }
  const toggleMode = (btnText)=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='#191970';
      document.body.style.color ='white';
      showAlert("Dark mode has been enabled","success");
     document.title = "Sujal Texting- Dark mode";
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor ='white';
      document.body.style.color ='black';
      showAlert("light mode has been enabled", "success");
      document.title = "Sujal Texting- light mode";
    }
  } 
   
      setInterval(()=>{
        document.title = "play with text";
      },2000);
       setInterval(() => {
         document.title = "Try this once ";
       },1500);
  return (
    <>
      <Alert alert={alert} />
      {
        <Navbar
          title="Sk creation"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About Sk creation"
        />
      }
      <div className="container my-1">
        <Textform showAlert={showAlert} heading="enter text to analyse" />

        {/* <Textform summary="enter text to analyse"/> */}
        {/* <About/> */}
      </div>
    </>

  );
}

export default App;
 