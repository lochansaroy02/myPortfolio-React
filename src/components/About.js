import React from 'react'
import { SocialIcon } from 'react-social-icons'
import Curve from './tools/Curve'

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
      name: "Twitter",
      iconLink: "https://twitter.com",
      link: 'https://www.linkedin.com/in/lochankumar47/'

    },
    {
      name: "Github",
      iconLink: "https://github.com",
      link: 'https://www.linkedin.com/in/lochankumar47/'

    },
    {
      name: "LinkedIn",
      iconLink: "https://linkedin.com",
      link: 'https://www.linkedin.com/in/lochankumar47/'

    },
    {
      name: "Leetcode",
      iconLink: "https://leetcode.com",
      link: 'https://www.linkedin.com/in/lochankumar47/'

    },
    {
      name: "Facebook",
      iconLink: "https://facebook.com",
      link: 'https://www.linkedin.com/in/lochankumar47/'

    },


  ]
  return (
<>

    <div className=' w-screen   items-center  '>
    
    
    
      <div className='  dark:text-neutral-100 dark:bg-neutral-800 bg-neutral-200  pb-12   md:p-8 md:flex border-gray'>
        <div className='md:w-1/2   md:h-2/3 py-4 flex  flex-col justify-between  '>

          <div className=' ml-4 p-4'>
            <h1 className=' font-poppins text-4xl md:text-6xl'>

              About
            </h1>

            <p className='text-wrap md:text-xl mr-8  text-justify mt-8'>
            Blending creativity with technical expertise in HTML, CSS, JavaScript, React, and Node.js. I develop robust, scalable web applications that captivate users. Your project deserves the best <br/> – let’s work together!
            </p>
          </div>

          <div className=' mt-4 md:w-3/4 m-8 flex dark:bg-neutral-800 bg-zinc-300  ml-6 border border-neutral-800 dark:border-white rounded-2xl p-4 justify-around '>
            {
              social.map((item) => {
                return (
                  <div className=' '>

                  <SocialIcon url={item.iconLink} />
                  <h1 className='md:text-sm  text-xs  mt-2'>
                    {item.name}
                  </h1>
                  </div>
                )
              })
            }


          </div>



        </div>
        <div className=' dark:bg-neutral-800 bg-zinc-300      rounded-2xl border m-8  border-neutral-700 dark:border-white md:w-[40%] p-4'>
          <h1 className='text-4xl md:text-6xl'>
            Skills
          </h1>
          <ul className=' grid grid-cols-3   gap-3 py-8  '>
            {skills.map((skill) => {
              return (
                <div className='dark:bg-neutral-700 bg-zinc-200 border-neutral-600 dark:text-white   rounded-xl py-4'>
                  <li className='mx-2 text-md flex flex-col-reverse items-center'>
                    <h1 className='md:text-xl '>

                      {skill.name}
                    </h1>
                    <h1 className='md:text-6xl text-4xl  mb-2'>

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
   </>
  )
}

export default Person
