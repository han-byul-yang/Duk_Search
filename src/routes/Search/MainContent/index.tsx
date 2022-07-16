import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useRecoilValue } from 'recoil'
import { useQuery } from 'react-query'

import { getTwitterData } from 'services/getData'
import { searchKeyAtom } from 'store/atoms'
import { ITwitterData } from 'types/types'
import ModalPortal from '../Modal/ModalPortal'
import Modal from '../Modal'
import Skeleton from '../Skeleton'
import Loading from 'components/Loading'

import styles from './mainContent.module.scss'

interface ICategory {
  category?: string
}

const MainContent = ({ category }: ICategory) => {
  const [twitterDataList, setTwitterDataList] = useState<ITwitterData[]>([])
  const [clickedImges, setClickedImges] = useState<string[]>()
  const [openModal, setOpenModal] = useState(false)
  const [infiniteLoading, setInfiniteLoading] = useState(false)
  const [showTarget, setShowTarget] = useState(false)
  const [dumyData, setDumyData] = useState<ITwitterData[]>([]) // 데이터 받으면 지워줄 것

  const searchKey = useRecoilValue(searchKeyAtom)

  const params = useParams()
  const target = useRef<HTMLDivElement>(null)

  const { isFetching } = useQuery('twitterData', getTwitterData, {
    onSuccess: (res) => {
      setTwitterDataList(res.data)
      setDumyData(res.data) // 데이터 받으면 지워질 것(임시)
      setShowTarget(true)
    },
  })

  const testFetch = useCallback(async () => {
    const tempDumyData = [...dumyData]

    setInfiniteLoading(true)
    // eslint-disable-next-line no-new, no-promise-executor-return
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setTwitterDataList((prevData) => [...prevData, ...tempDumyData])
  }, [dumyData])

  const handleIntersect = useCallback(
    async ([entry]: any, observer: any) => {
      if (entry.isIntersecting) {
        observer.unobserve(entry.target)
        await testFetch()
        setInfiniteLoading(false)
        observer.observe(target.current)
      }
    },
    [testFetch]
  )

  useEffect(() => {
    let observer: IntersectionObserver

    if (target.current) {
      observer = new IntersectionObserver(handleIntersect, {
        threshold: 1,
      })
      observer.observe(target.current)
    }
    return () => observer && observer.disconnect()
  }, [handleIntersect, target])

  if (isFetching) {
    return <Skeleton />
  }

  const handleImgesClick = (img: string[]) => {
    setClickedImges(img)
    setOpenModal(true)
  }

  return (
    <>
      <main className={styles.mainContents}>
        {/* eslint-disable-next-line no-nested-ternary */}
        {category ? (
          <>
            {twitterDataList?.map((data, index) => {
              const { id, nickName, date, img, text } = data
              const dataKey = `data-${index}`
              return (
                <div key={dataKey} className={styles.container}>
                  <div className={styles.nickName}>{nickName}</div>
                  <div className={styles.date}>{date}</div>
                  <div className={styles.text}>{text}</div>
                  {img.length !== 0 && (
                    <button className={styles.imgContainer} type='button' onClick={() => handleImgesClick(img)}>
                      {img.map((imgUrl, i) => {
                        const imgKey = `imgUrl-${i}`
                        return <img key={imgKey} className={styles.img} src={`${imgUrl}`} alt='게시글 이미지' />
                      })}
                    </button>
                  )}
                </div>
              )
            })}
            {showTarget && <div ref={target} />}
            {infiniteLoading && <Loading />}
          </>
        ) : searchKey ? (
          <div className={styles.searchResult}>
            {params?.category} 카테고리에서 찾은 {searchKey}
          </div>
        ) : (
          <div className={styles.noSearchKeyMsg}>검색어를 입력하세요</div>
        )}
      </main>
      {openModal && (
        <ModalPortal>
          <Modal clickedImges={clickedImges} setOpenModal={setOpenModal} />
        </ModalPortal>
      )}
    </>
  )
}

export default MainContent

// 동영상도 볼 수 있게 해야함
// 날짜 24시간 이내면 몇 분 전~ 식으로 표시해주고 그렇지 않으면 그냥 날짜 표시
// 퍼지 문자열 검색 구현
