import React from 'react'
import { Element } from 'react-scroll'
import { projects } from '../misc'


const Portfolio = () => {

  return (
    <Element name='Portfolio'
      className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div
        className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
      >
        <div
          className=' pb-8 mt-16'
        >
          <p
            className=' text-4xl font-bold inline border-b-4 border-gray-500 '
          >
            Portfolio
          </p>

          <p
            className=' py-6'
          >
            Check out some of my work
          </p>
        </div>
        <div
          className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'
        >
          {
            projects.map(({ id, src }) => (
              <div
                key={id}
                className=' shadow-md shadow-gray-600 rounded-lg w-7/8'
              >
                <img src={src} alt=""
                  className=' rounded-md duration-200 hover:scale-105'
                />
                <div
                  className='flex items-center justify-center '
                >
                  <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150' >Demo</button>
                  <button className=' w-1/2 px-6 py-3 m-4 duration-200 hover:scale-150' >Code</button>
                </div>
              </div>
            ))
          }
        </div>

      </div>
    </Element>
  )
}

export default Portfolio