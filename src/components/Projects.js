import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import { project } from '../utils/Data/ProjectData';
const Projects = () => {


  return (
    <div className='ml-16 bg-neutral-800 text-white'>
      <div className=' p-8'>
        <h1 className='text-4xl font-bold uppercase '>Projects</h1>
        <div className='  p-8'>
          <div className='w-full grid grid-cols-3'>
            {
              project.map((item) => (
                <div className='bg-neutral-900 m-2 rounded-lg '>
                  <div className=' pb-4 object-cover  rounded-lg' key={item.id}>
                    <img className='rounded-t-lg ' src={item.image} alt="" />
                  </div>
                  <div className='p-4'>
                    <h1 className='text-2xl bold  py-2'>{item.name}</h1>
                    <p className=' text-wrap'>{item.description}</p>
                    <span className="flex items-center justify-center ">
                      <button className='bg-blue-500 m-4  rounded-lg p-2 ' onClick={() => {
                        window.open(item.link, "_blank");
                      }} > Link</button>
                      <button className='bg-blue-500 m-4  rounded-lg p-2 ' onClick={
                        () => {

                          window.open(item.live, "_blank");
                        }
                      }>Live</button>
                    </span>
                  </div>
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
