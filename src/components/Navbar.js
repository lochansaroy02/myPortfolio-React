import React, { useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { changeTheme } from '../utils/themeSlice';

const Navbar = () => {
  const info = [
    { id: 1, name: 'Home', icon: 'home', route: '/' },
    { id: 2, name: 'About', icon: 'person', route: '/about' },
    { id: 3, name: 'Projects', icon: 'work', route: '/projects' },
    { id: 4, name: 'Contact', icon: 'mail', route: '/contact' }
  ];

  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();

  const darkModeHandler = () => {
    setDark(!dark);
    document.body.classList.toggle("dark");
    dispatch(changeTheme(dark));
  }

  const check = useSelector((state) => state.theme.themeState);

  return (
    <nav className="fixed md:fixed bottom-0 inset-x-0  z-40 md:inset-y-0 md:inset-x-auto md:h-full md:w-20 md:flex md:flex-col border-t md:border-t-0 md:border-r dark:border-neutral-200 border-neutral-500 text-neutral-900 bg-neutral-400 dark:bg-neutral-800 dark:text-white">
      <div className="md:flex flex   md:flex-col md:justify-between md:items-center md:h-full">
        <div className="">
          {/* <img className="rounded-full hidden" src="https://avatars.githubusercontent.com/u/104918582?s=400&u=69829e4089cdc26774e0154b400d60c6871f2a73&v=4" alt="Profile" /> */}
        </div>

        <ul className="flex justify-around md:flex-col md:items-center   w-full md:w-auto py-2 md:py-12">
          {info.map((item) => (
            <li key={item.id} className="my-2 text-xs md:text-sm  md:my-6 flex flex-col items-center">
              <span className="material-symbols-rounded">{item.icon}</span>
              {item.name}
            </li>
          ))}
        </ul>

        <div className="p-4 flex   w-fit ">
          <button onClick={darkModeHandler}>
            {dark ? <MdOutlineLightMode className="h-8 w-8" /> : <MdDarkMode className="h-8 w-8" />}
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
