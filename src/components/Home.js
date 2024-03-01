import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import img from '../utils/img/profile.png'

const Home = () => {
    let image = 'https://avatars.githubusercontent.com/u/104918582?s=400&u=69829e4089cdc26774e0154b400d60c6871f2a73&v=4'
    return (
        <div className=' flex justify-center items-center  w-screen h-screen p-4 bg-neutral-900' >
            <div className='flex w-[90%]  p-8  h-fit  flex-row-reverse  rounded-2xl text-white'>
                <div className=' border-w h-full  flex justify-center  w-fit rounded-xl mr-2'>
                    <img className='h-[80%] w-[80%] bg-blue-400 rounded-3xl ' src={img} alt="" />
                </div>


                <div className=' ml-2 flex flex-col w-full  justify-center  rounded-xl items-center ' >
                    <div className=' '>
                        <h1 className='text-2xl '>
                            Hi, I'm <br /> <span className='text-6xl font-openSans uppercase font-bold '>Lochan Kumar</span>


                        </h1>
                        

                        <span class="icon-[devicon--react]"></span>
                        <div>
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

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Home
