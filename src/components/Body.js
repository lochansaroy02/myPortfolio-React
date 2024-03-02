import React from 'react'
import Navbar from './Navbar';
import About from './About';
import Home from './Home';
import Projects from './Projects';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Contact from './Contact';

const Body = () => {

    const routedData = createBrowserRouter([
        {
            path: "/",
            element: <Home />,
            children: [
                {
                    path: '/about',
                    element: <About />
                },
                {
                    path: '/projects',
                    element: <Projects/> 

                },
                {
                    path: '/contact',
                    element: <Contact/> 

                }

            ]
        }
    ])
    return (


        <div className='ml-20'>
            <Home/> 
            <About/> 
            <Projects/> 
            <Contact/> 
            
        </div>
    )
}

export default Body
