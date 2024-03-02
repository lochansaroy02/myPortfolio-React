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

  let social = [
    {
      name: "LinkedIn",
      icon: <span class="icon-[fa6-brands--square-github]"></span>,
      link: 'https://www.linkedin.com/in/lochankumar47/'

    }

  ]
  return (
    <div className=' w-screen h-fit   items-center  '>
      <svg _ngcontent-itj-c18="" aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><pattern _ngcontent-itj-c18="" id="a" width="91" height="8" patternUnits="userSpaceOnUse"><g _ngcontent-itj-c18="" clip-path="url(#clip0_2426_11367)"><path _ngcontent-itj-c18="" d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" stroke-linecap="square"></path></g></pattern><rect _ngcontent-itj-c18="" width="100%" height="100%" fill="url(#a)" opacity="0.3"></rect></svg>
      <div className='  rounded-lg  mt-8 text-neutral-100 h-screen   p-8 flex border-gray'>
        <div className='w-1/2  '>

          <div className=' ml-4 p-4'>
            <h1 className=' font-poppins text-6xl'>

              About
            </h1>

            <p className='text-wrap  w-3/4 mt-8'>
              lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className=' mt-4 w-3/4 flex bg-neutral-800 ml-6 border border-white rounded-2xl p-4 justify-around '>
            {
              skills.map((skill) => {
                return (
                  <h1 className='text-4xl '>

                    {skill.icon}
                  </h1>
                )
              })
            }


          </div>



        </div>
        <div className=' bg-neutral-800 rounded-2xl border h-fit border-white w-[40%] p-4'>
          <h1 className='text-6xl'>
            Skills
          </h1>
          <ul className=' grid grid-cols-4   gap-3 py-8  '>
            {skills.map((skill) => {
              return (
                <div className='bg-neutral-700 text-white   rounded-lg py-4'>
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
