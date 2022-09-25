import { projects } from '../misc'


const Portfolio = () => {

  return (
    <section
      className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'
    >
      <div
        className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
      >
        <div
          className=' pb-8 mt-16'
        >
          <p
            className=' text-4xl font-bold inline border-b-4 border-gray-500 '
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
          className=' grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 md:w-2/3 md:mx-auto lg:w-full'
        >
          {
            projects.map(({ id, src, type, videoLink, original, projectLink, style }) => (
              <div
                key={id}
                className=' relative shadow-md shadow-gray-600 rounded-lg w-7/8 lg:w-60 md:w-48'
              >
                <img src={src} alt=""
                  className=' rounded-md duration-200 hover:scale-105'
                />
                <div
                  className='flex items-center justify-between '
                >
                  <a
                    href={videoLink}
                    target='_blank'
                    rel="noreferrer"
                    className='  mx-auto py-3 m-4 duration-200 hover:scale-150'
                  >
                    Video
                  </a>
                  <a
                    href={projectLink}
                    target='_blank'
                    rel="noreferrer"
                    className=' mx-auto py-3 m-4 duration-200 hover:scale-150'
                  >
                    {type}
                  </a>
                </div>
                {original
                  ?
                  <div
                    className={`text-xs font-bold rounded-lg p-2 absolute top-0 right-0 px-3  duration-200 hover:scale-105 pointer-events-auto ${style}`}
                  >
                    R
                  </div>
                  : null
                }
              </div>
            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Portfolio