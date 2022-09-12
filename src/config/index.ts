const isProduction = process.env.NODE_ENV === 'production'

const apiUrl = isProduction ? 'https://foodly.clecioalmeida.com.br/api' : 'http://localhost:3000/api'

export const config = {
  apiUrl: apiUrl
}
