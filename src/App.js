import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import Body from './components/Body';
import { RouterProvider } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';



function App() {


  return (
    <>

      <Navbar />
      <Body />
    </>
  );
}

export default App;
