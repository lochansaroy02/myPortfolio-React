import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Children } from 'react';

function App() {

  return (
    <>
     
      <Navbar />
      <About/>
    
    </>



  );
}

export default App;
