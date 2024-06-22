import React, { useState } from 'react'
import { MdLocalPhone, MdEmail } from "react-icons/md";
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

  const [value, setValue] = useState("");

  const sendMessege = () => {
    // alert("button clicked");
  }

  return (
    <>
      {/* <Curve/>  */}
      <div className='flex flex-col justify-center md:flex-row bg-neutral-100 text-neutral-800 dark:bg-neutral-900 overflow-x-hidden pb-12 mt-0 w-screen p-8'>

        <div className='md:w-[50%]  text-neutral-800 dark:text-white flex flex-col'>

          {info.map((item, index) => (
            <div key={index} className='flex p-4 mb-4 mt-0'>
              <div className='bg-neutral-200 border flex justify-center items-center border-neutral-400 dark:border-neutral-100 dark:bg-neutral-500 p-4 rounded-full text-3xl md:text-4xl'>
                {item.icon}
              </div>
              <div className='ml-4'>
                <h1 className='text-xl md:text-2xl'>{item.title}</h1>
                <h3 className='md:text-xl text-base dark:text-gray-300'>{item.desc}</h3>
              </div>
            </div>
          ))}

          {/* <div className='w-full  md:w-fit md:ml-4 md:mt-16  mt-8 rounded-lg dark:bg-neutral-700 bg-neutral-300 flex justify-center items-center'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18999.530312596475!2d88.42263745907721!3d22.446320175813295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0272166e4cb263%3A0x27f12170efd9ddee!2sFuture%20Institute%20of%20Engineering%20and%20Management!5e1!3m2!1sen!2sin!4v1718849162937!5m2!1sen!2sin" width="100%" height="250%" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='md:h-[250%] md:w-[300%] rounded-xl'></iframe>
          </div> */}

        </div>

        <div className='mt-8  md:mr-8    h-fit border text-neutral-900 border-neutral-600 dark:border-neutral-100 bg-neutral-300 dark:bg-neutral-900 rounded-xl'>
          <h1 className='dark:text-neutral-100 text-neutral-800 text-2xl px-8 py-2'>Got Ideas? We've got the skills. Let's team up.</h1>

          <form id="contact-form" className='text-neutral-800 text-md dark:text-neutral-100 p-4'>
            <div className="flex flex-col md:flex-row justify-between p-4">
              <div className="flex flex-col w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
                <label className="mb-2">First name</label>
                <input name="name" id="name" type="text" placeholder="Name *" className="p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg h-10" />
              </div>
              <div className="flex flex-col w-full md:w-1/2 md:ml-2">
                <label className="mb-2">Your Email</label>
                <input className='p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg h-10' placeholder='Email *' value={value} onChange={e => setValue(e.target.value)} />
              </div>
            </div>
            <div className="flex flex-col p-4">
              <label className="mb-2">Subject</label>
              <input name="subject" id="subject" type="text" placeholder="Subject *" className="p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg h-10" />
            </div>
            <div className="flex flex-col p-4">
              <label className="mb-2">Your message</label>
              <textarea name="msg" id="message" placeholder="Message" className="p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg"></textarea>
            </div>
            <div className="flex justify-center p-4">
              <button className="bg-blue-600 text-neutral-100 dark:text-neutral-700 dark:bg-blue-300 p-4 rounded-xl font-medium" type="button" id="send_message" value="" onClick={sendMessege}>Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact;
