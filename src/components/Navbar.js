import React from 'react'
import { MdOutlineLightMode,MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../utils/themeSlice';





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

  const [dark, setDark] = React.useState(false);
const dispatch = useDispatch();

    const darkModeHandler = () => {
        setDark(!dark);
        document.body.classList.toggle("dark");
        dispatch(changeTheme(dark))
    }

    const check = useSelector((state) => state.theme.themeState)


  return (
    <nav className="fixed left-0 top-0 h-full  border-r dark:border-neutral-200 border-neutral-500 text-neutral-900 bg-neutral-400   flex-col w-20 dark:bg-neutral-800 dark:text-white">
      <div className='  h-full flex  flex-col items-center justify-around'>





        <div className=' h-14  p-2  w-full'>
          <img className='rounded-full' src="https://avatars.githubusercontent.com/u/104918582?s=400&u=69829e4089cdc26774e0154b400d60c6871f2a73&v=4" alt="" />
        </div>
        <div>

        </div>
        <div className=' h-fit justify-between  ' >

          <ul className='flex  flex-col font-openSans     text-xs py-12'>
            {info.map((item) =>
              <li key={item.id} className='my-6 flex flex-col items-center '> <span className=" material-symbols-rounded">
                {/* <Link to={item.route}>
            {item.icon}
              </Link> */}

                {item.icon}
              </span> {item.name} </li>)}
          </ul>
        </div>




        <div className=' p-4 flex items-center justify-center'>
          {/* <button className=' flex items-center justify-center'><span className="material-symbols-rounded">
            dark_mode
          </span></button> */}
          <button onClick={()=> darkModeHandler()}>
      {
          
          dark && <MdOutlineLightMode  className='h-8 w-8'/>// render sunny when dark is true
      }
      {
          !dark && <MdDarkMode className=' h-8 w-8 '/> // render moon when dark is false
      }
 </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar
