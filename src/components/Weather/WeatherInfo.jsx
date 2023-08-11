import React from 'react'
import './Weather.css'

const WeatherInfo = ({ city, temp }) => {
  return (
    <div className='weather__info'>
      <h3 className="weather__text weather__text-city">{city}</h3>
      <h3 className="weather__text">{temp}</h3>
    </div>
  )
}

export default WeatherInfo