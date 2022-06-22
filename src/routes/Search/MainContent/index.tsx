import { useParams } from 'react-router-dom'

const MainContent = () => {
  const params = useParams()

  return <div>{params?.category}</div>
}

export default MainContent
