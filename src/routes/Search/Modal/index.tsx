import { Dispatch, SetStateAction } from 'react'
import Slider from 'react-slick'

import { XIcon } from 'assets/svgs'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import styles from './modal.module.scss'

interface IModalProps {
  clickedImges?: string[]
  setOpenModal: Dispatch<SetStateAction<boolean>>
}

const Modal = ({ clickedImges, setOpenModal }: IModalProps) => {
  const handleCloseModalClick = () => {
    setOpenModal(false)
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className={styles.background}>
      <button type='button' onClick={handleCloseModalClick}>
        <XIcon className={styles.xIcon} />
      </button>
      <div className={styles.modalContainer}>
        <Slider {...settings}>
          {clickedImges?.map((img, i) => {
            const imgKey = `img-${i}`
            return <img key={imgKey} className={styles.modalImg} src={img} alt='모달이미지' />
          })}
        </Slider>
      </div>
    </div>
  )
}

export default Modal
