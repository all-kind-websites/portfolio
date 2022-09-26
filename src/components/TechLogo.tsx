function TechLogo({ src, name }: { src: any, name: string }) {
  return (
    <div className={` mt-56 md:mt-0 py-2 rounded-lg w-40 h-40 shadow-md shadow-orange-800 mb-8`} >
      <img src={src} alt="html" className=' w-20 mx-auto' />
      <p className='flex justify-center mt-4 text-xl font-bold text-white'>{name}</p>
    </div >
  )
}

export default TechLogo