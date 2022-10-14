import React from 'react'
import { motion } from 'framer-motion'
const About = () => {
  return (
    <motion.section className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white '
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ' >
        <div className='pb-8 mt-2' >
          <p className='text-4xl font-bold inline  border-b-4 border-gray-500 ' >About</p>
        </div>
        <div className='w-2/3 mx-auto' >
          <p className=' text-lg mt-1' >
            In 2016 I wanted to become an Android developer, so I learned Java. Then I found out about React Native, so I switched to it. After a couple of years, I made my first app, which I published in both stores.
          </p>
          <br />
          <p className='text-lg mb-1' >
            I'm very excited with the process of development in general. I find it very creative!  I made several tutorial instructed projects and a few personal, which are further to examine. Thank you!
          </p>
        </div>
      </div>
    </motion.section >
  )
}

export default About
