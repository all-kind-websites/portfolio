import React from 'react'
import { useSocialLinks } from '../hooks';

const SocialLinks = () => {

  const links = useSocialLinks()

  return (
    <div className='lg:flex flex-col bottom-[5%] right-0 fixed ' >
      <ul>
        {
          links.map(({ id, child, href, style, download }) => (
            <li key={id} className={`
            flex justify-between items-center 
            w-32 h-12 px-4 mr-[-78px] hover:ml-[-70px] 
            rounded-md hover:rounded-xl duration-300 bg-cyan-700 mb-1  
            ${style}`}  >
              <a
                href={href}
                className='flex justify-between items-center w-full text-white '
                download={download}
                target='_blank' rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default SocialLinks