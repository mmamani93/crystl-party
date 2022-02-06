import { alias } from 'react-app-rewire-alias'

module.exports = function override (config) {
  alias({
    '@assets': 'src/assets',
    '@components': 'src/components',
    '@constants': 'src/constants',
    '@reducers': 'src/reducers',
    '@screens': 'src/screens',
    '@utils': 'src/utils'
  })(config)

  return config
}
