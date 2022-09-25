import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { FcHome, FcAbout, FcMultipleDevices, FcCommandLine, FcBusinessContact } from 'react-icons/fc';

import { Link } from 'react-router-dom'

const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const links = [
    { id: 0, link: 'home', icon: <FcHome /> },
    { id: 1, link: 'about', icon: <FcAbout /> },
    { id: 2, link: 'portfolio', icon: <FcMultipleDevices /> },
    { id: 3, link: 'experience', icon: <FcCommandLine /> },
    { id: 4, link: 'contact', icon: <FcBusinessContact /> },
  ]
  return (
    <div
      className={`
      flex justify-between items-center 
      w-full h-16 px-4 
      fixed 
      text-white 
      bg-black z-10`}>
      <div>
        <h1 className='text-5xl ml-2 font-signature' >Fotios</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) =>
          <li key={id} className='px-4 cursor-pointer  font-medium text-gray-500 hover:scale-150 duration-200 capitalize' >
            <Link to={link} >{link}</Link></li>
        )}
      </ul>
      <div onClick={() => setNav(prev => !prev)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden  ' >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>


      <ul className={` ${nav
        ?
        'flex flex-col justify-start items-start absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800 capitalize w-50 transition duration-500 '
        :
        'hidden w-0 transition duration-500 '} `}>
        {links.map(({ id, icon, link }) =>
          <li key={id} className='flex px-4 py-6 cursor-pointer text-4xl' >
            {icon}
            <Link className='ml-2 text-2xl' onClick={() => setNav(prev => !prev)} to={link}>{link}</Link>
          </li>
        )}
      </ul>


    </div>
  )
}

export default NavBar
