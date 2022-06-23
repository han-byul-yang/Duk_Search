import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getTwitterData } from 'services/getData'
import twitterData from '../../../data/twitterDatas.json'
import { searchKeyAtom } from 'store/atoms'
import { ITwitterData } from 'types/types'

import styles from './mainContent.module.scss'

interface ICategory {
  category?: string
}

const MainContent = ({ category }: ICategory) => {
  const [twitterDataList, setTwitterDataList] = useState<ITwitterData[]>()
  const searchKey = useRecoilValue(searchKeyAtom)
  const params = useParams()

  // const { isLoading } = useQuery('twitterData', getTwitterData, {
  //   onSuccess: (res) => {
  //     setTwitterDataList(res.data)
  //   },
  // })

  // if (isLoading) {
  //   return <div className='isLoading'>로딩 중...</div>
  // }

  return (
    <div>
      {/* eslint-disable-next-line no-nested-ternary */}
      {category ? (
        twitterData.map((data) => {
          const { id, nickName, date, img, text } = data
          const dataKey = `data-${id}`
          return (
            <div key={dataKey} className={styles.container}>
              <div className={styles.nickName}>{nickName}</div>
              <div className={styles.date}>{date}</div>
              <div className={styles.text}>{text}</div>
              {img.length !== 0 && (
                <div className={styles.imgContainer}>
                  {img.map((imgUrl, i) => {
                    const imgKey = `imgUrl-${i}`
                    return <img key={imgKey} className={styles.img} src={`${imgUrl}`} alt='게시글 이미지' />
                  })}
                </div>
              )}
            </div>
          )
        })
      ) : searchKey ? (
        <div>
          {params?.category} 카테고리에서 찾은 {searchKey}
        </div>
      ) : (
        <div>검색어를 입력하세요</div>
      )}
    </div>
  )
}

export default MainContent

// 동영상도 볼 수 있게 해야함
// 날짜 24시간 이내면 몇 분 전~ 식으로 표시해주고 그렇지 않으면 그냥 날짜 표시
// 사진 누르면 크게 띄워주기, 여러 개면 옆으로 넘기는 기능 추가
