import { FC } from 'react'
import { TbFileCertificate } from 'react-icons/tb'
import { Tutorials } from '../types/types'

interface Props {
  tutorials: Tutorials[],
  color: string
  text: string
}
const TutorialsList: FC<Props> = ({ tutorials, color, text }) => {
  let grid = 'md:grid-cols-3'
  if (tutorials.length % 2 === 0)
    grid = 'md:grid-cols-2'
  return (
    <ul
      className={`grid sm:grid-cols-2 ${grid} gap-8 grid-flow-dense sm:px-0 md:mx-auto ${text}`}
    >
      {
        tutorials.map(({ id, certificate, courseName, school, src, summary }) => (
          <li
            key={id}
            className={`relative shadow-md rounded-lg w-7/8 md:w-30 mx-auto shadow-${color}-800`}
          >

            <div
              className={`flex items-center justify-between border-b-2 border-b-${color}-800 `}
            >
              <h4
                className={`text-xl font-bold mx-auto py-3 m-4 text-${color}-500 cursor-none`}
              >
                {school}
              </h4>
              {
                certificate
                  ?
                  <div className={`absolute top-1 right-1 mr-3 mb-2 duration-200 hover:scale-105 text-${color}-600`} >
                    <a
                      href={certificate}
                      target='_blank'
                      rel="noreferrer"
                    >
                      <TbFileCertificate size={30} className='text-blue-400 ' />
                    </a>
                  </div>
                  : null
              }
            </div>
            <div className='flex flex-col ' >
              <a
                href={src}
                target='_blank'
                rel="noreferrer"
                className={`flex justify-center text-blue-400  font-bold py-2 mx-2 duration-200 hover:scale-105  `}
              >
                {courseName}
              </a>
              <div className='border-b-4  border-gray-700 w-1/2 self-center' />
              <p className={`p-2`} >
                {summary}
              </p>
            </div>


          </li>
        ))
      }
    </ul>
  )
}

export default TutorialsList