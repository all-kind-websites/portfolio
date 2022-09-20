import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';


const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const links = [
    { id: 0, link: 'home' },
    { id: 1, link: 'about' },
    { id: 2, link: 'portfolio' },
    { id: 3, link: 'Experience' },
    { id: 4, link: 'Contact' },
  ]
  return (
    <div
      className={`
      flex justify-between items-center 
      w-full h-20 px-4 
      fixed 
      text-white 
      bg-black `}>
      <div>
        <h1 className='text-5xl ml-2 font-signature' >Fotios</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link }) =>
          <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-150 duration-200' >{link}</li>
        )}
      </ul>
      <div onClick={() => setNav(prev => !prev)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden  ' >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav
        ?
        <ul className="flex flex-col justify-center w-full items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800  ">
          {links.map(({ id, link }) =>
            <li key={id} className='px-4 capitalize py-6 text-4xl' >{link}</li>
          )}
        </ul>
        :
        null
      }

    </div>
  )
}

export default NavBar
