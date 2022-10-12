import { TutorialsCmp } from '../components'
import { useParams } from 'react-router-dom'
import getTutorialData from '../utils/getTutorialData'

const TechCmp = () => {
  const params = useParams()
  const { id } = params

  const { name, tutorials, src, color, shadow, text } = getTutorialData(id)

  return (
    <TutorialsCmp
      name={name}
      color={color}
      shadow={shadow}
      text={text}
      tutorials={tutorials}
      src={src}
    />
  )
}

export default TechCmp;