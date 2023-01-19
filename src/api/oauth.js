import axios from 'axios'

const clientId = '5cd08420fa5c4ea0a45afa4db923328d'
const clientSecret = 'sNkl0XHNjsHjSS361JLflYfKCWf0fHjk'

const region = 'eu'
const API_URL = `https://${region}.battle.net/oauth/token`

function getToken () {
  const body = new FormData()
  body.append('grant_type', 'client_credentials')
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    auth: {
      username: clientId,
      password: clientSecret
    }
  }
  return axios.post(API_URL, body, config)
}

export {
  getToken
}
