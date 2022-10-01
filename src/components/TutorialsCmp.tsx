import React, { FC } from 'react'
import { Tutorials } from '../types/types'
import TechLogo from './TechLogo'
import TutorialsList from './TutorialsList'

interface Props {
  tutorials: Tutorials[],
  src: any, name:
  string,
  color: string
  shadow: string
  text: string
}
const TutorialsCmp: FC<Props> = ({ tutorials, src, name, color, shadow, text }) => {
  return (
    <section
      className='flex flex-col justify-center items-center w-full bg-gradient-to-b from-black to-gray-800  h-screen overflow-auto scrollbar-hide pt-96 pb-4 md:pt-10 mx-auto px-16'
    >
      <TechLogo src={src} name={name} color={color} shadow={shadow} />
      <TutorialsList tutorials={tutorials} color={color} text={text} />

    </section>
  )
}

export default TutorialsCmp