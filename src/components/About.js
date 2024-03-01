import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa";
const Person = () => {

  let skills = [
    {
      name: 'HTML',
      icon: <i class="devicon-html5-plain-wordmark colored"></i>
    
    },
    {
      name: 'CSS',
      icon: <i class="devicon-css3-plain-wordmark colored"></i>
    
    },
    {
      name: 'JavaScript',
      icon: <i class="devicon-javascript-plain colored"></i>

    },
    {
      name: 'React',
      icon: 
      <i class="devicon-react-original colored"></i>
    
    },

   
    {
      name: 'Java',
      icon: 
      <i class="devicon-java-plain colored"></i>
    
    },
    {
      name: 'Git',
      icon: 
      
      <i class="devicon-git-plain colored"></i>
          
    
    },








  ];
  return (
    <div className=' w-screen border-white border  items-center  '>
      <div className='  rounded-lg bg-neutral-900 items-center text-neutral-100 h-[90%] p-8 flex border-gray'>
        <div className='w-1/2  '>
       
          <h1 className=' font-poppins text-6xl'>

            About
          </h1>

          <p className='text-wrap  w-3/4 mt-8'>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='  '>
          <h1 className='text-6xl'>
            Skills
          </h1>
          <ul className=' grid grid-cols-3  gap-3 py-6  '>
            {skills.map((skill) => {
              return (
                <div   className='bg-neutral-700 text-white   rounded-lg py-4'>
                  <li className='mx-2 text-md flex flex-col-reverse items-center'>
                  <h1 className='text-xl '>

                  {skill.name}
                  </h1>
                   <h1 className='text-6xl mb-2'>
                    
                      {skill.icon}
                   </h1>
                  </li>
                </div>
              )
            })}


          </ul>
        </div>
      </div>
    </div>
  )
}

export default Person
