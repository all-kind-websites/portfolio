import { BiHome } from 'react-icons/bi';
import { SiAboutdotme } from 'react-icons/si';
import { DiTechcrunch } from 'react-icons/di';
import { AiOutlineContacts } from 'react-icons/ai';
import { CgScreen } from 'react-icons/cg';
import { Link } from 'react-router-dom';

function Sidebar() {
  const links = [
    { id: 0, link: 'home', path: '/', icon: <BiHome /> },
    { id: 1, link: 'about', icon: <SiAboutdotme /> },
    { id: 2, link: 'portfolio', icon: <CgScreen /> },
    { id: 3, link: 'techs', icon: <DiTechcrunch /> },
    { id: 4, link: 'contact', icon: <AiOutlineContacts /> },
  ]
  return (
    <div className='sm:flex md:hidden bottom-[2%] left-0 fixed z-20 ' >
      <div className='flex justify-between items-center 
          w-42 h-42 px-4 ml-[-110px] hover:ml-[-10px] 
          rounded-md hover:rounded-xl duration-300 bg-gradient-to-r from-black pt-3 pr-[-10px] to-cyan-900 cursor-pointer '>

        <ul className='flex flex-col justify-between items-center w-full '  >
          {links.map(({ id, icon, link, path }) =>
            <li key={id} className='flex justify-between w-full capitalize mb-4'  >
              <Link className='flex justify-between w-full text-2xl  text-blue-400  '
                to={path ? path : link}>{link}
                <div className=' text-3xl  ml-2' >
                  {icon}
                </div>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </div>

  )
}

export default Sidebar