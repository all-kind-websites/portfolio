import { Link } from 'react-router-dom'

const NavBar = () => {
  const links = [
    { id: 0, name: 'home', path: '/' },
    { id: 1, name: 'about' },
    { id: 2, name: 'projects' },
    { id: 3, name: 'techs' },
    { id: 4, name: 'contact' },
  ]
  return (
    <div
      className={`
      flex justify-between items-center 
      w-full h-16 px-4 
      fixed 
      text-white 
      bg-gradient-to-r from-black via-black to-cyan-900 z-10`}>
      <div>
        <Link to='/' >
          <h1 className='text-5xl ml-2 font-signature' >Fotios</h1>
        </Link>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, name, path }) =>
          <li key={id} className='px-4 cursor-pointer  font-medium text-blue-400  hover:scale-150 duration-200 capitalize' >
            <Link to={path ? path : name} >{name}</Link></li>
        )}
      </ul>
    </div>
  )
}

export default NavBar


/* 

*/