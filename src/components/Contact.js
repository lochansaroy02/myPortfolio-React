import React, { useState } from 'react'
import { MdLocalPhone,MdEmail } from "react-icons/md";
import Curve from './tools/Curve';

const Contact = () => {

  let info = [
    {
      icon: <MdLocalPhone />,
      title: 'Contact me',
      desc: '+917017308109'
    },
    {
      icon: <MdEmail />,
      title: 'Email me ',
      desc: 'lochansaroy47@gmail.com'
    }

  ]

  const [value, setvalue] = useState("");

  return (
<>


      <Curve/>
    <div className=' flex bg-neutral-900  overflow-x-hidden  mb-12  w-screen p-8 '>

      <div className='w-[50%] bg-neutrared-800 text-white flex flex-col '>

        {info.map((item, index) => (
          <div key={index} className='flex p-4 mb-4  mt-0'>
            <div className='bg-neutral-400 p-4  rounded-full text-4xl '>
              {item.icon}
            </div>
            <div className=' ml-4'>
              <h1 className='text-2xl '>{item.title}</h1>
              <h3 className='text-xl text-gray-300'>{item.desc}</h3>
            </div>
          </div>
        ))}

        <div className=' w-fit p-4 ml-4 mt-16 rounded-lg bg-neutral-300 flex justify-center align-center '>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18999.530312596475!2d88.42263745907721!3d22.446320175813295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e1!3m2!1sen!2sin!4v1718849162937!5m2!1sen!2sin" width="350" height="200" style={{ border: 1 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>

      </div>







      <div className=' w-[40%] h-fit  border  border-white bg-neutral-900   rounded-xl'>
        <h1 className='text-white text-2xl  px-8 py-2'> Got Ideas? We've got the skills. Let's team up.</h1>






        <form id="contact-form" className='text-white p-4  '>


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
    </>
  )
}

export default Contact
