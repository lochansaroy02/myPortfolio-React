import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {


  let info = [
    {
      id: 1,
      name: 'Home',
      icon: 'home',
      route: '/'
    },
    {
      id: 2,
      name: 'About',
      icon: 'person',
      route: '/about'
    },
    {
      id: 3,
      name: 'Projects',
      icon: 'work',
      route: '/projects'
    },
    {
      id: 4,
      name: 'Contact',
      icon: 'mail',
      route: '/contact'
    }
  ]
  return (
    <nav className="fixed left-0 top-0 h-full  flex justify-between flex-col w-16 bg-gray-800 text-white">
      <div className=' '>







        <div className=' h-14  p-2  w-full'>
          <img className='rounded-full' src="https://avatars.githubusercontent.com/u/104918582?s=400&u=69829e4089cdc26774e0154b400d60c6871f2a73&v=4" alt="" />
        </div>

        <div className='flex justify-center items-center mt-8'  >
          <button>
            <span class="material-symbols-rounded">
              menu
            </span>
          </button>
        </div>

        <div className=' h-fit justify-center' >

          <ul className='  jusify-center py-16'>
            {info.map((item) =>
              <li key={item.id} className='my-6 flex flex-col items-center '> <span class=" material-symbols-rounded">
                {item.icon}
                {/* <Link to={item.route}>
            {item.icon}
              </Link> */}

              </span> {item.name} </li>)}
          </ul>
        </div>




        <div className=' p-4 flex items-center justify-center'>
          <button className=' flex items-center justify-center'><span class="material-symbols-rounded">
            dark_mode
          </span></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
