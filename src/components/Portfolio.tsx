import React from 'react'
import { Element } from 'react-scroll'
const arrayDestruct = require('../assets/portfolio/arrayDestruct.jpg')
const installNode = require('../assets/portfolio/installNode.jpg')
const navbar = require('../assets/portfolio/navbar.jpg')
const reactParallax = require('../assets/portfolio/reactParallax.jpg')
const reactWeather = require('../assets/portfolio/reactWeather.jpg')
const usestate = require('../assets/portfolio/usestate.jpg')

const Portfolio = () => {

  const portfolios = [
    {
      id: 0,
      src: arrayDestruct,

    },
    {
      id: 1,
      src: reactParallax,

    },
    {
      id: 2,
      src: navbar,

    },
    {
      id: 3,
      src: usestate,

    },
    {
      id: 4,
      src: installNode,

    },
    {
      id: 5,
      src: reactWeather,

    },
  ]

  return (
    <Element name='Portfolio'
      className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div
        className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
      >
        <div
          className=' pb-8'
        >
          <p
            className=' text-4xl font-bold inline border-b-4 border-gray-500'
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
            portfolios.map(({ id, src }) => (
              <div
                key={id}
                className=' shadow-md shadow-gray-600 rounded-lg'
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