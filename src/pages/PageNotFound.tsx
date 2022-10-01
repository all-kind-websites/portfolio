import React from 'react'
import BackgroundImage from "react-background-image";
const img = require('../assets/general/404.png')

const PageNotFound = () => {
  return (
    <BackgroundImage placeholder='' src={img} className='w-full h-screen bg-gradient-to-b from-gray-800 to-black' />
  )
}

export default PageNotFound
