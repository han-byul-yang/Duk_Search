import styles from './skeleton.module.scss'

const Skeleton = () => {
  const skeletonList = Array.from(Array(10).keys()) // 나중에 페이지 수를 props로 넘겨받아 10대신 page * 10 식으로 바꿔서 작성

  return (
    <>
      {skeletonList.map((ele, i) => {
        const skeletonKey = `skeleton-${i}`
        return (
          <div key={skeletonKey} className={styles.wrapper}>
            <div className={styles.nickName} />
            <div className={styles.date} />
            <div className={styles.text} />
            <div className={styles.img} />
          </div>
        )
      })}
    </>
  )
}

export default Skeleton
