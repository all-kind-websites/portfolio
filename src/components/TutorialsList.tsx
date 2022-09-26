import { TbFileCertificate } from 'react-icons/tb'
import { Tutorials } from '../types/types'

function TutorialsList({ tutorials }: { tutorials: Tutorials[] }) {
  return (
    <ul
      className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 grid-flow-dense sm:px-0 md:mx-auto'
    >
      {
        tutorials.map(({ id, certificate, courseName, school, src, summary }) => (
          <li
            key={id}
            className='relative shadow-md shadow-orange-800 rounded-lg w-7/8 md:w-30 mx-auto'
          >

            <div
              className='flex items-center justify-between text-blue-400 cursor-pointer border-b-2 border-b-orange-800 '
            >
              <h4
                className=' text-xl font-bold mx-auto py-3 m-4 duration-200 hover:scale-150 text-orange-400'
              >
                {school}
              </h4>
              {
                certificate
                  ?
                  <div className='absolute top-1 right-1 mr-3 mb-2 duration-200 hover:scale-105 text-blue-400' >
                    <a
                      href={certificate}
                      target='_blank'
                      rel="noreferrer"
                    >
                      <TbFileCertificate size={30} />
                    </a>
                  </div>
                  : null
              }
            </div>
            <a
              href={src}
              target='_blank'
              rel="noreferrer"
              className='flex justify-center font-bold text-blue-400 py-2 mx-2 duration-200 hover:scale-105 '
            >
              {courseName}
            </a>
            <p className="p-2 text-orange-200" >
              {summary}
            </p>


          </li>
        ))
      }
    </ul>
  )
}

export default TutorialsList