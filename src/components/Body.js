import React from 'react'
import About from './About';
import Home from './Home';
import Projects from './Projects';
import Contact from './Contact';
import { useSelector, useDispatch } from 'react-redux'
import { changeTheme } from '../utils/themeSlice';


const Body = () => {

    return (


        <div className='md:ml-20'>
            <Home/> 
            <About/> 
            <Projects/> 
            <Contact/> 
            
        </div>
    )
}

export default Body
