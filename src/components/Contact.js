import React, { useState } from 'react';
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const notify = () => toast.success("Message sent!");

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
  ];

  const handleClick = async (e) => {
    e.preventDefault();
    if (name === "" || email === "" || subject === "" || message === "") {
      toast.error("Please fill all the fields");
    } else {
      const data = await fetch('http://localhost:1234', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message
        }),
      });

      toast.success("Message sent!");
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    }
  };

  return (
    <>
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
        </div>

        <div className='mt-8  md:mr-20   h-fit border text-neutral-900 border-neutral-600 dark:border-neutral-100 bg-neutral-300 dark:bg-neutral-900 rounded-xl'>
          <h1 className='dark:text-neutral-100 text-neutral-800 text-2xl px-8 py-2'>Got Ideas? We've got the skills. Let's team up.</h1>

          <form id="contact-form" className='text-neutral-800 text-md dark:text-neutral-100 p-4'>
            <div className="flex flex-col md:flex-row justify-between p-4">
              <div className="flex flex-col w-full md:w-1/2 md:mr-2 mb-4 md:mb-0">
                <label className="mb-2">Name</label>
                <input
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Name *"
                  className="p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg h-10"
                />
              </div>
              <div className="flex flex-col w-full md:w-1/2 md:ml-2">
                <label className="mb-2">Your Email</label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  className='p-2 dark:bg-neutral-900 border text-white border-neutral-600 dark:border-neutral-400 rounded-lg h-10'
                  placeholder='Email *'
                />
              </div>
            </div>
            <div className="flex flex-col p-4">
              <label className="mb-2">Subject</label>
              <input
                onChange={(e) => setSubject(e.target.value)}
                value={subject}
                name="subject"
                id="subject"
                type="text"
                placeholder="Subject *"
                className="p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg h-10"
              />
            </div>
            <div className="flex flex-col p-4">
              <label className="mb-2">Your message</label>
              <textarea
                onChange={(e) => setMessage(e.target.value)}
                value={message}
                name="msg"
                id="message"
                placeholder="Message"
                className="p-2 dark:bg-neutral-900 border border-neutral-600 dark:border-neutral-400 rounded-lg"
              ></textarea>
            </div>
            <div className="flex justify-center p-4">
              <button
                className="bg-blue-600 text-neutral-100 dark:text-neutral-700 dark:bg-blue-300 p-4 rounded-xl font-medium"
                type="button"
                id="send_message"
                value=""
                onClick={handleClick}
              >
                Send Message
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
