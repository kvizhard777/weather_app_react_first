import React from 'react'
import cl from './MainButton.module.css'

const MainButton = ({ text, img: ImgComponent, size, onClick }) => {
  return (
    <button className={cl.button} type='button' onClick={onClick}>
      {text}
      <ImgComponent style={{ fontSize: size }} />
    </button>
  )
}

export default MainButton