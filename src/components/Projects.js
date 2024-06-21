import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import { project } from '../utils/Data/ProjectData';
import Curve from "./tools/Curve";
const Projects = () => {


  return (
    <div className=' bg-neutral-200 text-white dark:bg-neutral-800'>
      <Curve />
      <div className=' p-8'>
        <h1 className='text-6xl text-neutral-900 dark:text-neutral-100 '>Projects</h1>
        <div className='  p-8'>
          <div className='w-full   grid grid-cols-2'>
            {
              project.map((item) => (
                <div className='dark:bg-neutral-900 bg-neutral-200 h-fit  border border-zinc-500 dark:border-white m-2 rounded-lg '>
                  <div className=' p-4 hover:scale-105 relative transition duration-500 cursor-pointer  object-cover  rounded-lg' key={item.id}>
                    <img className='rounded-t-lg ' src={item.image} alt="" />
                    <div className='  absolute  flex flex-col h-[50%]  bottom-1 my-4 mx-8 inset-x-0 rounded-lg px-4 bg-slate-900    opacity-0 hover:opacity-100 transition duration-400 cursor-pointer 
                  '>
                      <h1 className='text-xl bold  py-2'>{item.name}</h1>
                      <div className='flex '>
                        <p className=' text-wrap text-xs '>{item.description}</p>
                        <span className="flex items-center flex-col justify-center    ">
                          <button className='bg-blue-500 text-md  mb-2 rounded-lg px-2 ' onClick={() => {
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
