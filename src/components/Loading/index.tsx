import styles from './loading.module.scss'

const Loading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.component}>
        <div className={styles.ring} />
        <span className={styles.loading}>loading...</span>
      </div>
    </div>
  )
}

export default Loading
