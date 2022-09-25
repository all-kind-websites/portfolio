import { techs } from '../misc'

const Experience = () => {

  return (
    <section
      className=' bg-gradient-to-b from-gray-800 to-black w-full h-screen'
    >
      <div
        className=' max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full text-white'
      >
        <div className='mt-16' >
          <p
            className=' text-4xl font-bold border-b-4 border-gray-500'
          >
            Experience
          </p>
        </div>
        <div
          className=' w-full grid grid-cols-3 sm:grid-cols-4 gap-6 text-center py-8 px-12 sm:px-0'
        >
          {
            techs.map(({ id, src, style, title }) => (
              <div key={id} className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg w-20 h-20 cursor-pointer ${style}`} >
                <img src={src} alt="" className=' w-10 mx-auto' />
                <p className=' mt-2 text-sm ' >{title}</p>
              </div>
            ))
          }

        </div>
      </div>
    </section>
  )
}

export default Experience