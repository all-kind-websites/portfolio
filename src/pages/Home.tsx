import { MdOutlineKeyboardArrowRight } from 'react-icons/md'
import { Link } from 'react-router-dom';
const heroImg = require('../assets/heroImage.jpeg');

const Home = () => {
  return (
    <section
      className='h-screen w-full bg-gradient-to-b from-black via-sky-800 to-gray-800 '
    >
      <div
        className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'
      >
        <div
          className='flex flex-col justify-center h-full'
        >
          <h2
            className='text-2xl sm:text-xl font-bold text-white mt-14 md:mt-10'
          >
            {` < React (Native) developer />`}
          </h2>
          <p
            className='text-gray-400 pt-4 max-w-md text-lg '
          >
            I learned programming, in order to get a creative, ethical, challenging and versatile job.
          </p>
          <p
            className='text-gray-400 max-w-md text-lg '
          >
            There are more than 6.000 hours of coding and many certificates in my toolkit.
          </p>
          <p
            className='text-gray-400 max-w-md text-lg '
          >
            And I feel pretty confident when incorporating new APIs!
          </p>
          <div>
            <Link
              to='portfolio'
              className='group text-white cursor-pointer w-fit px-6 py-3 my-2 flex items-center bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md '
            >
              Portfolio
              <span className='group-hover:rotate-90 duration-300' >
                <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
              </span>
            </Link>
          </div>
        </div >
        <div className='shadow-lg shadow-cyan-500 rounded-3xl h-48  w-40 mx-auto mb-10' >
          <img
            src={heroImg}
            alt="my profile"
            className='rounded-3xl  '
          />
        </div>
      </div>
    </section>
  )
}

export default Home