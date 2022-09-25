import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState<boolean>(false);

  const links = [
    { id: 0, link: 'Home' },
    { id: 1, link: 'About' },
    { id: 2, link: 'Portfolio' },
    { id: 3, link: 'Experience' },
    { id: 4, link: 'Contact' },
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
          <li key={id} className='px-4 cursor-pointer  font-medium text-gray-500 hover:scale-150 duration-200' >
            <Link to={link} smooth duration={500} >{link}</Link></li>
        )}
      </ul>
      <div onClick={() => setNav(prev => !prev)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden  ' >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav
        ?
        <ul className="flex flex-col justify-center w-full items-center absolute top-0 left-0 h-screen bg-gradient-to-b from-black to-gray-800  ">
          {links.map(({ id, link }) =>
            <li key={id} className='px-4 py-6 cursor-pointer text-4xl' >
              <Link onClick={() => setNav(prev => !prev)} to={link} smooth duration={500}  >{link}</Link>
            </li>
          )}
        </ul>
        :
        null
      }

    </div>
  )
}

export default NavBar
