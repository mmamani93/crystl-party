const LOWER_LIMIT = 20
const HIGHER_LIMIT = 24

const COLD_MULTIPLIER = 1
const COOL_MULTIPLIER = 2
const WARM_MULTIPLIER = 3

export const calculateBeersForWeather = (temperature, participants) => {
  if (temperature < LOWER_LIMIT) return participants * COLD_MULTIPLIER
  if (temperature > HIGHER_LIMIT) return participants * WARM_MULTIPLIER
  return participants * COOL_MULTIPLIER
}
