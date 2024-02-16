import React from 'react'
import { FaHtml5 } from "react-icons/fa";
import { FaAnkh } from "react-icons/fa6";
import { FaCss3 } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaBomb } from "react-icons/fa6";
const Person = () => {

  let skills = [
    {name: 'HTML',
      icon: <FaHtml5/>},
    {name: 'CSS',
      icon: <FaCss3 />},
    {name: 'JavaScript',
      icon:<RiJavascriptFill />},
    {name: 'React',
      icon: <FaReact />},
   
    {name: 'React',
      icon: <FaReact />},
   

   
   
   
  
   

  ];
  return (
    <div className='  ml-16 flex h-screen  items-center  '>
      <div className=' mx-16 bg-blue-300 h-fit p-8 flex border-gray'>
        <div className='w-1/2'>
          <h1 className='text-6xl'>
          
            About
          </h1>

          <p className=''>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='w-1/2 '>
          <h1 className='text-6xl'>
            Skills
          </h1>


          <ul className=' grid grid-cols-3  gap-3  bg-gray-600 p-6  '>
            {skills.map((skill) => {

              return (
                <div className='bg-red-500 ml-4  p-4'>

                
              <li className='mx-2 text-2xl flex flex-col-reverse items-center'>{skill.name}
             <div className='bg-green-400 p-2'>
              {skill.icon}
             </div>
              
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
