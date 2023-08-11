const apiKey = 'b7a1fe20fd6bec1aa911a8fee98ee68f'
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric`

export const getWeather = (city) => {
  async function getWeatherData() {
    const response = await fetch(`${apiUrl}&q=${city}`)
    const data = await response.json()
    return data
  }

  return getWeatherData();
}