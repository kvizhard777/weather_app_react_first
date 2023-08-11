import React from 'react'

const WeatherMore = ({ text, data, icon, size }) => {
  return (
    <div className='weather__more'>
      <div style={{ fontSize: size }} className="weather__more-img">{icon}</div>

      <div className="weather__more-wrapper">
        <h3 className="weather__more-text">{text}</h3>
        <h3 className="weather__more-data">{data}</h3>
      </div>
    </div>
  )
}

export default WeatherMore