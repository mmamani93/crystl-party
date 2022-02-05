import axios from 'axios'

const WEATHER_API_URL = 'https://community-open-weather-map.p.rapidapi.com'
const WEATHER_API_HEADERS = {
  'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
  'x-rapidapi-key': '8363443d1bmsh80bcb05e6a52f40p173c15jsn96cd3a171411'
}

const getMonthWeather = async city => {
  var options = {
    method: 'GET',
    url: `${WEATHER_API_URL}/climate/month`,
    params: {q: city},
    headers: WEATHER_API_HEADERS
  };

  const { data } = await axios.request(options).catch(error => console.error(error))
  return data
}

const filterWeatherByDate = (monthData, date) => {
  // TODO
  const a = ''
  return a
}

export const getWeatherByDate = async (date, city) => {
  const monthData = await getMonthWeather(city)
  const dateWeather = filterWeatherByDate(monthData, date)
  return dateWeather
}
