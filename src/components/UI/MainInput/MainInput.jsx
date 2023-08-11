import React from 'react'
import cl from './MainInput.module.css'

const MainInput = ({ placeholder, type, value, onChange }) => {
  return (
    <input type={type} className={cl.input} placeholder={placeholder} value={value} onChange={onChange} />
  )
}

export default MainInput