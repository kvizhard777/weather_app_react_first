import { useState } from 'react'
import { getWeather } from '../API/getWeather'

const useWeather = () => {
  const [weatherData, setWeatherData] = useState(null)

  const handleSearch = async (city) => {
    const data = await getWeather(city)
    setWeatherData(data)
  }

  return {
    weatherData,
    handleSearch
  }
}

export default useWeather