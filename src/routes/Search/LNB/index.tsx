import { Link } from 'react-router-dom'

const categoryList = ['전체', '뉴스', '연예', '음악', '음식', '게임', '뷰티', '스포츠', '키즈']

const LNB = () => {
  return (
    <nav>
      <ul>
        {categoryList.map((category) => (
          <Link key={category} to={`${category}`}>
            <li>{category}</li>
          </Link>
        ))}
      </ul>
    </nav>
  )
}

export default LNB
