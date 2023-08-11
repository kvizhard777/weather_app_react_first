import React from 'react'
import './Weather.css'
import WeatherImg from './WeatherImg'

import { WiDaySunny, WiCloudy, WiRain, WiSnow, WiHumidity, WiFog, WiSandstorm } from "react-icons/wi"

import WeatherInfo from './WeatherInfo'
import useWeather from '../../hooks/useWeather'
import Search from '../Search/Search'
import WeatherMore from './WeatherMore'

const Weather = () => {
  const {weatherData, handleSearch} = useWeather()

  let icon = null

  switch (weatherData?.weather[0].main) {
    case 'Clear':
      icon = <WiDaySunny />
      break
    case 'Clouds':
      icon = <WiCloudy />
      break
    case 'Rain':
      icon = <WiRain />
      break
    case 'Snow':
      icon = <WiSnow />
      break
    case 'Haze':
      icon = <WiFog />
      break
    case 'Fog':
      icon = <WiFog />
      break
    default:
      icon = null
  }

  return (
    <div className='inner'>
      <Search onSearch={handleSearch} />

      {weatherData &&
        <div className="weather">

          <div className="weather__top">
            <WeatherImg
              icon={icon}
              size='200px' 
            />

            <WeatherInfo
              city={weatherData?.name || ''}
              temp={`${weatherData?.main.temp.toFixed(1) || '-'} °C`}
            />
          </div>

          <div className="weather__bottom">
            <WeatherMore
              icon={<WiHumidity />}
              size='64px'
              text="Humidity"
              data={`${weatherData?.main.humidity} %`}
            />

            <WeatherMore
              icon={<WiSandstorm />}
              size='64px'
              text="Wind"
              data={`${weatherData?.wind.speed} m/s`}
            />
          </div>

        </div>
      }

    </div>
  )
}

export default Weather