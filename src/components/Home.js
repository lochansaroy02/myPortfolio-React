import React from 'react'

const Home = () => {
    return (
        <div className=' flex items ml-16 w-full h-full p-4' >
            <div className='flex items ml-24 w-full h-full  p-4 my-20'>
                <div className='bg-blue-800  p-2 rounded-full'>
                    <img className='rounded-full ' src="https://avatars.githubusercontent.com/u/104918582?s=400&u=69829e4089cdc26774e0154b400d60c6871f2a73&v=4" alt="" />

                </div>
                <div className=' ml-16 w-full flex items-center' >
                    <h1 className='text-2xl '>
                    Hi, I'm <br /> <span className='text-6xl uppercase font-bold from-neutral-400'>Lochan Kumar</span> <br />  web developer </h1>
                </div>
            </div>


        </div>
    )
}

export default Home
