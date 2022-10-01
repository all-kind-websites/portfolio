import { Link } from 'react-router-dom'
import { techs } from '../misc'

const Techs = () => {

  return (
    <section
      className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen overflow-hidden'
    >
      <div
        className=' max-w-screen-lg mx-auto p-14 flex flex-col justify-center w-full text-white'
      >
        <div className='mt-16' >
          <p
            className=' text-4xl font-bold border-b-4 border-gray-500'
          >
            Techs
          </p>
        </div>
        <div
          className='w-full grid grid-cols-3 gap-y-4 text-center py-8 content-center'
        >
          {
            techs.map(({ id, link, src, style, title }) => (
              <>
                {
                  link
                    ?
                    <Link to={link} key={id} className={` place-self-center shadow-md hover:scale-105 duration-200 py-2 rounded-lg w-20 h-20 cursor-pointer ${style}`} >
                      <img src={src} alt="" className=' w-10 mx-auto' />
                      <p className=' mt-2 text-sm ' >{title}</p>
                    </Link >
                    :
                    <div className={` place-self-center shadow-md py-2 rounded-lg w-20 h-20  ${style}`} >
                      <img src={src} alt="" className=' w-10 mx-auto' />
                      <p className=' mt-2 text-sm '>{title}</p>
                    </div>
                }
              </>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Techs