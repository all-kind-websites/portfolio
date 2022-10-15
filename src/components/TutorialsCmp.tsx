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
      className={`flex flex-col justify-around items-center w-full ${tutorials.length > 3 ? '' : 'h-screen'}  bg-gradient-to-b from-black to-gray-800 overflow-auto scrollbar-hide pt-96 pb-4 md:pt-10 mx-auto px-16`}
    >
      <div className={`${tutorials.length > 3 ? ' mt-10 ' : ''}`} >
        <TechLogo src={src} name={name} shadow={shadow} />
      </div>
      <TutorialsList tutorials={tutorials} color={color} text={text} />

    </section>
  )
}

export default TutorialsCmp