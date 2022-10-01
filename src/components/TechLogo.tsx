import { FC } from "react"
interface Props {
  src: any,
  name: string,
  color: string
  shadow: string
}
const TechLogo: FC<Props> = ({ src, name, color, shadow }) => {
  return (
    <div className={`mt-56 md:mt-0 py-2 rounded-lg w-40 h-40 shadow-md mb-8 ${shadow}`} >
      <img src={src} alt="html" className=' w-20 mx-auto' />
      <p className='flex justify-center mt-4 text-xl font-bold text-white'>{name}</p>
    </div >
  )
}

export default TechLogo