import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import { project } from '../utils/Data/ProjectData';
import Curve from "./tools/Curve";
const Projects = () => {


  return (
    <div className=' w-screen bg-neutral-200 text-white dark:bg-neutral-800'>
      <Curve />
      <div className=' p-8  '>
        <h1 className='md:text-6xl text-4xl  text-neutral-900 dark:text-neutral-100 '>Projects</h1>
        <div className='  p-8'>
          <div className='w-full   grid-cols-1 grid md:grid-cols-3'>
            {
              project.map((item) => (
                <div className='dark:bg-neutral-900 bg-neutral-200 h-fit  border border-zinc-500 dark:border-white md:m-2 my-2   rounded-lg '>
                  <div className=' p-4 hover:scale-105 relative transition duration-500 cursor-pointer  object-cover  rounded-lg' key={item.id}>
                    <img className='rounded-t-lg ' src={item.image} alt="" />
                    <div className='  md:absolute  flex flex-col  bottom-1 my-4 md:mx-8 inset-x-0 rounded-lg px-4 md:bg-neutral-400   dark:bg-neutral-800 md:opacity-0 md:hover:opacity-100 transition duration-400 cursor-pointer 
                  '>
                   
                      <div className=' flex flex-col  pb-4 md:pb-0 '>
                      <h1 className='text-xl font-medium dark:text-neutral-100 text-neutral-900 bold  py-2'>{item.name}</h1>
                        <p className=' text-wrap text-neutral-800   text-justify dark:text-neutral-100 text-sm '>{item.description}</p>
                        <span className="flex md: justify-center    mt-4 md:pb-4    ">
                          <button className='bg-blue-500 text-md   rounded-lg px-2 ' onClick={() => {
                            window.open(item.link, "_blank");
                          }} > Link</button>
                          <button className='bg-blue-500 mx-4 text-md rounded-lg px-2 ' onClick={
                            () => {

                              window.open(item.live, "_blank");
                            }
                          }>Live</button>
                        </span>
                      </div>
                    </div>
                  </div>
                  {/* opacity-0 hover:opacity-100 transition duration-700 cursor-pointer  hover:-translate-y-16 */}



                </div>

              ))
            }




          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects
