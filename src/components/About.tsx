import React from 'react'
import { Element } from 'react-scroll'

const About = () => {
  return (
    <Element name='About' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ' >
        <div className='pb-8 mt-28' >
          <p className='text-4xl font-bold inline  border-b-4 border-gray-500' >About</p>
        </div>
        <p className=' text-lg mt-1' >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatum assumenda, cupiditate tempore a alias dicta officia odit corrupti harum blanditiis totam ratione asperiores nam dolorem quia, reiciendis accusamus obcaecati, consequuntur fugit! Molestiae odio ut, atque minus aliquid dolorem possimus in soluta, delectus voluptates omnis ab deserunt maiores ad perferendis!
        </p>
        <br />
        <p className='text-lg mb-10' >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa voluptatum assumenda, cupiditate tempore a alias dicta officia odit corrupti harum blanditiis totam ratione asperiores nam dolorem quia, reiciendis accusamus obcaecati, consequuntur fugit! Molestiae odio ut, atque minus aliquid dolorem possimus in soluta, delectus voluptates omnis ab deserunt maiores ad perferendis!
        </p>
      </div>
    </Element>
  )
}

export default About
