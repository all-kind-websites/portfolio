import React from 'react'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Element, Link } from 'react-scroll';
const heroImg = require('../assets/heroImage.jpeg');

const Home = () => {
  return (
    <Element name='Home' className='h-screen w-full bg-gradient-to-b from-black via-sky-800 to-gray-800 ' >
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
        <div className='flex flex-col justify-center h-full' >
          <h2 className='text-4xl sm:text-2xl font-bold text-white' >I am a React (Native) developer</h2>
          <p className='text-gray-500 py-4 max-w-md '>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur accusantium nam veritatis tempore fugit dolorum ab, excepturi neque molestiae reprehenderit? Ducimus obcaecati ab quaerat accusamus officia quisquam qui suscipit explicabo.
          </p>
          <div>
            <Link to='Portfolio' smooth duration={500} className='group text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md '>
              Portfolio
              <span className='group-hover:rotate-90 duration-300' >
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div>
        <div><img src={heroImg} alt="my profile" className='rounded-2xl mx-auto w-2/3' /></div>
      </div>
    </Element>
  )
}

export default Home