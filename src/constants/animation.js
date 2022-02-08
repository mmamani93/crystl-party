const MEDIUM_SPEED = 750
const VERY_LOW_SPEED = 2000

export const OPACITY_SHOW = {
  from: { opacity: 0 },
  to: { opacity: 1 },
  config: { duration: VERY_LOW_SPEED }
}

export const LEFT_TO_RIGHT = {
  from: { transform: 'translate(-1000px, 0)' },
  to: { transform: 'translate(0, 0)' },
  config: { duration: MEDIUM_SPEED }
}

export const RIGHT_TO_LEFT = {
  from: { transform: 'translate(1000px, 0)' },
  to: { transform: 'translate(0, 0)' },
  config: { duration: MEDIUM_SPEED }
}

export const TOP_TO_BOTTOM = {
  from: { transform: 'translate(0, -1000px)' },
  to: { transform: 'translate(0, 0)' },
  config: { duration: MEDIUM_SPEED }
}
