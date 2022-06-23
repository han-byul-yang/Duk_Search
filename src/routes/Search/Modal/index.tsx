import { Dispatch, SetStateAction } from 'react'

import { XIcon } from 'assets/svgs'

import styles from './modal.module.scss'

interface IModalProps {
  clickedImges?: string[]
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ clickedImges, setOpenModal }: IModalProps) => {
  const handleCloseModalClick = () => {
    setOpenModal(false)
  }

  return (
    <div className={styles.background}>
      <button type='button' onClick={handleCloseModalClick}>
        <XIcon className={styles.xIcon} />
      </button>
      <div className={styles.container}>
        {clickedImges?.map((img, i) => {
          const imgKey = `img-${i}`
          return <img key={imgKey} src={img} alt='모달이미지' />
        })}
      </div>
    </div>
  )
}

export default Modal
