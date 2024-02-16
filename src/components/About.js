import React from 'react'

const Person = () => {
  return (
    <div className='  ml-16 flex h-screen  items-center  '>
      <div className=' mx-16 bg-blue-300 w-1/2 h-fit p-8 flex border-gray'>
        <div>
          <h1 className='text-6xl'>
            About
          </h1>
          <p className=''>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className='w-1/2 '>
          <h1 className='text-6xl'>
            Skills
          </h1>
          <ul className=' flex '>
            <li className='text-2xl'>Html</li>
            <li className='text-2xl'>Html</li>
            <li className='text-2xl'>Html</li>
            <li className='text-2xl'>Html</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Person
