import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from '../utils/img/profile.png'



const Home = () => {

    const handleCLick = () => {
        
    const pdfPath = `${process.env.PUBLIC_URL}/sample.pdf`;
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'sample.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    }

    


    let image = 'https://avatars.githubusercontent.com/u/104918582?s=400&u=69829e4089cdc26774e0154b400d60c6871f2a73&v=4'
    return (
        <div className=' flex justify-center items-center  w-screen h-screen p-4 mb-0  bg-neutral-300 dark:bg-neutral-900' >
            <div className='flex w-[90%]  p-8  h-fit  flex-row-reverse  rounded-2xl text-white'>
                <div className=' border-w h-full   flex justify-center  w-fit rounded-xl mr-2'>
                    <img className='h-[80%] w-[80%]  bg-blue-600 dark:bg-blue-400 rounded-3xl ' src={img} alt="" />
                </div>


                <div className=' ml-2 flex flex-col w-full  justify-center  rounded-xl items-center ' >
                    <div className=' '>
                        <h1 className='text-2xl dark:text-white text-neutral-800 '>
                            Hi, I'm <br /> <span className='text-6xl font-openSans uppercase font-bold '>Lochan Kumar</span>


                        </h1>


                        <span class="icon-[devicon--react]"></span>
                        <div className='text-neutral-800 dark:text-neutral-200'>
                            <TypeAnimation
                                sequence={[
                                    "I'm a Developer",
                                    1000,
                                    "I'm a Coder",
                                    1000,
                                    "I'm a Designer",
                                    1000,
                                ]}
                                speed={50}
                                repeat={Infinity}
                                style={{ fontSize: '2em' }}
                            />
                        </div>

                        <div className='mt-16'>

                        <button className=' bg-blue-600  px-4 py-2 rounded-lg' onClick={handleCLick} > Hire me!  </button>
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default Home
