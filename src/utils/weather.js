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
  const missingTime = Math.abs(date - new Date())
  const missingDays = Math.ceil(missingTime / (1000 * 60 * 60 * 24));
  const tempForTargetDate = monthData?.list[missingDays - 1]?.temp.record_max / 30
  return tempForTargetDate
}

export const getWeatherByDate = async (date, city) => {
  const monthData = await getMonthWeather(city)
  const tempForTargetDate = filterWeatherByDate(monthData, date)
  return tempForTargetDate
}
