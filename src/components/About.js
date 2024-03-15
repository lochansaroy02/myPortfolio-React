import React from 'react'
import { SocialIcon } from 'react-social-icons'

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
    <div className=' w-screen h-fit   items-center  '>
      <svg _ngcontent-itj-c18="" aria-hidden="true" width="100%" height="8" fill="none" xmlns="http://www.w3.org/2000/svg"><pattern _ngcontent-itj-c18="" id="a" width="91" height="8" patternUnits="userSpaceOnUse"><g _ngcontent-itj-c18="" clip-path="url(#clip0_2426_11367)"><path _ngcontent-itj-c18="" d="M114 4c-5.067 4.667-10.133 4.667-15.2 0S88.667-.667 83.6 4 73.467 8.667 68.4 4 58.267-.667 53.2 4 43.067 8.667 38 4 27.867-.667 22.8 4 12.667 8.667 7.6 4-2.533-.667-7.6 4s-10.133 4.667-15.2 0S-32.933-.667-38 4s-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0-10.133-4.667-15.2 0-10.133 4.667-15.2 0" stroke="#E1E3E1" stroke-linecap="square"></path></g></pattern><rect _ngcontent-itj-c18="" width="100%" height="100%" fill="url(#a)" opacity="0.3"></rect></svg>
      <div className='  rounded-lg  mt-8 text-neutral-100 h-screen   p-8 flex border-gray'>
        <div className='w-1/2   h-2/3 py-4 flex  flex-col justify-between  '>

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
              social.map((item) => {
                return (
                  <div className=' '>

                  <SocialIcon url={item.iconLink} />
                  <h1 className='text-sm mt-2'>
                    {item.name}
                  </h1>
                  </div>
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
