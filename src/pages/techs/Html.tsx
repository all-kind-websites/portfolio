import { TbFileCertificate } from 'react-icons/tb'

const Portfolio = () => {

  const tutorials = [
    {
      id: 0,
      school: 'MDM',
      courseName: 'Structuring the web with HTML',
      src: 'https://developer.mozilla.org/en-US/docs/Learn/HTML',
      summary: `HTML is used to specify whether your web content should be recognized as a paragraph, list, heading, link, image, multimedia player, form, or one of many other available elements or even a new element that you define.`
    },
    {
      id: 1,
      school: 'W3schools',
      courseName: 'HTML Tutorial',
      src: 'https://www.w3schools.com/html/default.asp',
      summary: `At W3Schools, I've found complete references about HTML elements, attributes, events, color names, entities, character-sets, URL encoding, language codes, HTTP messages, browser support, and more...`
    },
    {
      id: 2,
      school: 'Mosh',
      courseName: 'The Ultimate HTML/CSS Mastery Series',
      src: 'https://codewithmosh.com/p/the-ultimate-html-css',
      summary: `This was a perfectly-structured course packed with exercises, solutions, and a real project. I have learned and understand the what's, why's and how's of HTML and CSS.`,
      certificate: 'https://html2-f.scribdassets.com/3zlf6y36rk8hs848/images/1-5515c61890.jpg'
    },
  ]

  return (
    <section
      className='flex flex-col justify-center items-center w-full bg-gradient-to-b from-black to-gray-800  h-screen overflow-auto scrollbar-hide pt-96 pb-4 md:pt-10 mx-auto px-16'
    >
      <div className={` mt-56 md:mt-0 py-2 rounded-lg w-40 h-40 shadow-md shadow-orange-800 mb-8`} >
        <img src={require('../../assets/techs/html.png')} alt="html" className=' w-20 mx-auto' />
        <p className='flex justify-center mt-4 text-xl font-bold text-white'>HTML</p>
      </div >

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

    </section>
  )
}

export default Portfolio