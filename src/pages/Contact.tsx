import { motion } from 'framer-motion'

const Contact = () => {
  return (
    <motion.section
      className=' w-full h-screen bg-gradient-to-b from-black to-gray-500 py-8 text-white'
      initial={{ scaleY: 0, opacity: 0 }}
      animate={{ scaleY: 1, opacity: 1 }}
      exit={{ scaleY: 0, opacity: 0 }}
      transition={{ duration: .5 }}
    >
      <div
        className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'
      >
        <div
          className='pb-8 mt-16'
        >
          <p className=' text-4xl font-bold inline border-b-4 border-gray-500' >Contact</p>
          <p className=' py-6' >Sumbit form to get in touch</p>
        </div>

        <div
          className=' flex justify-center items-center'
        >
          <form
            action="https://getform.io/f/ee3cc0fe-31cf-4e60-bd34-ead4f891facf"
            method='POST'
            className=' flex flex-col w-3/4 md:w-1/2 '
          >
            <input type="text" name='' placeholder='name'
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <input type="email" name='' placeholder='email'
              className='p-2 my-4 bg-transparent border-2 rounded-md text-white focus:outline-none'
            />
            <textarea name="message" rows={10}
              className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
              placeholder='message'
            >
            </textarea>
            <button
              className=' text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 mt-8 mb-2 mx-auto flex items-center rounded-md hover:scale-105 duration-300'

            >
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  )
}

export default Contact