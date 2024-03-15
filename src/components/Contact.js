import React, { useState } from 'react'
import { FaJava } from "react-icons/fa";

const Contact = () => {

  let info = [
    {
      icon: <FaJava />,
      title: 'chat to us',
      desc: 'info@domainname.com'
    },
    {
      icon: <FaJava />,
      title: 'chat to us',
      desc: 'info@domainname.com'
    },
    {
      icon: <FaJava />,
      title: 'chat to us',
      desc: 'info@domainname.com'
    },
  
  ]

  const [value, setvalue] = useState("");

  return (
    <div className=' flex bg-neutral-800 h-screen overflow-x-hidden  w-screen p-8 '>


      <div className='w-[50%] bg-neutrared-800 text-white'>

        {info.map((item, index) => (
          <div key={index} className='flex p-4  mt-0'>
            <div className='bg-blue-400 p-4  rounded-full text-4xl '>
              {item.icon}
            </div>
            <div className=' ml-4'>
              <h1 className='text-2xl '>{item.title}</h1>
              <h3 className='text-xl text-gray-300'>{item.desc}</h3>
            </div>
          </div>
        ))}

      </div>





      <div className=' w-[40%] p-8 border ml-8 border-white bg-neutral-900  rounded-xl'>
        <h1 className='text-white text-4xl  p-8  pt-0'> Got Ideas? We've got the skills. Let's team up.</h1>






        <form id="contact-form" className='text-white  '>


          <div className="flex justify-between p-4 ">
            <div className="flex flex-col w-1/2 mr-2  ">
              <label className="mb-2">First name</label>
              <input name="name" id="name" type="text" placeholder="Name *" className="  p-2  bg-neutral-900 border  border-gray-400  rounded-lg h-10" value="" />
            </div>

            <div className="flex flex-col w-1/2 ml-2">
              <label className="mb-2">Your Email</label>
              <input className='  p-2  bg-neutral-900 border border-gray-400 rounded-lg h-10' placeholder='email * ' value={value} onChange={e => setvalue(e.target.value)} />
            </div>
          </div>


          <div className="flex flex-col p-4 ">

            <label className="mb-2">Subject</label>
            <input name="subject" id="subject" type="text" placeholder="Subject *" className=" p-2  bg-neutral-900 border border-gray-400 rounded-lg h-10" value="" />

          </div>
          <div className="flex flex-col p-4">

            <label className="mb-2">Your message</label>
            <textarea name="msg" id="message" placeholder="Message" className=" p-2   bg-neutral-900 border border-gray-400 rounded-lg "></textarea>

          </div>
          <div className=" flex justify-center p-4 ">

            <button className=" bg-blue-300 p-4 rounded-lg " type="submit" id="send_message" value="">Send Message</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
