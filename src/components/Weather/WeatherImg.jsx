import React from 'react'
import './Weather.css'

const WeatherImg = ({ icon, size }) => {
  return (
    <div style={{ fontSize: size }} className='weather__img'>{icon}</div>
  )
}

export default WeatherImg