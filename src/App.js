// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#08063c';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>

      <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert="This is alert."/>
      <div className='container my-4'>
        <TextForm heading='Enter the text to be analyzed' mode={mode}/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
