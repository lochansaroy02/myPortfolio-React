import React, { useState } from 'react'
// import { Link } from "react-router-dom";
import { project } from '../utils/Data/ProjectData';
const Projects = () => {


  return (
    <div className='  text-white'>
     <svg _ngcontent-itj-c18="" aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><pattern _ngcontent-itj-c18="" id="a" width="91" height="8" patternUnits="userSpaceOnUse"><g _ngcontent-itj-c18="" clip-path="url(#clip0_2426_11367)"><path _ngcontent-itj-c18="" d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" stroke-linecap="square"></path></g></pattern><rect _ngcontent-itj-c18="" width="100%" height="100%" fill="url(#a)" opacity="0.3"></rect></svg>
      <div className=' p-8'>
        <h1 className='text-4xl font-bold uppercase '>Projects</h1>
        <div className='  p-8'>
          <div className='w-full   grid grid-cols-3'>
            {
              project.map((item) => (
                <div className='bg-neutral-900 h-fit  border border-white m-2 rounded-lg '>
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
