import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { searchKeyAtom } from 'store/atoms'

const MainContent = () => {
  const searchKey = useRecoilValue(searchKeyAtom)
  const params = useParams()

  return (
    <div>
      {searchKey ? (
        <div>
          {params?.category} 카테고리에서 찾은 {searchKey}
        </div>
      ) : (
        <div>검색어를 입력해주세요</div>
      )}
    </div>
  )
}

export default MainContent

// 동영상도 볼 수 있게 해야함
// 날짜 24시간 이내면 몇 분 전~ 식으로 표시해주고 그렇지 않으면 그냥 날짜 표시
// 사진 누르면 크게 띄워주기, 여러 개면 옆으로 넘기는 기능 추가
