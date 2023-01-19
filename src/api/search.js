import axios from 'axios'
import store from '../store/index'
import { locales } from '../utils/regions'

const protocol = 'https://'
const host = '.api.blizzard.com/'

function getApiAccount ({ region, account }) {
  const resource = `d3/profile/${account}/`
  // API URL completa
  const API_URL = `${protocol}${region}${host}${resource}`
  // Locale
  const locale = locales[region]

  // Parámetros:
  // - Token de acceso (recuperado desde Vuex)
  // - Locale
  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  // Retornamos el resultado de hacer la llamada a la API, es decir, una promesa
  // que controlaremos (éxito / error) desde el componente
  return axios.get(API_URL, { params })
}

function getApiHero ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return axios.get(API_URL, { params })
}
function getApiDetailedHeroItems ({ region, account, heroId }) {
  const resource = `d3/profile/${account}/hero/${heroId}/items`
  const API_URL = `${protocol}${region}${host}${resource}`
  const locale = locales[region]

  const params = {
    access_token: store.state.oauth.accessToken,
    locale
  }

  return axios.get(API_URL, { params })
}

export { getApiAccount, getApiHero, getApiDetailedHeroItems }
