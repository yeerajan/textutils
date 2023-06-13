// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>

      <Navbar title="TextUtils" aboutText="About" />
      {/* <Navbar/> */}
      <div className='container my-4'>
        <TextForm heading='Enter the text to be analyzed'/>
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;
