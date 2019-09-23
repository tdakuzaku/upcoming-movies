import axios from 'axios'

// const SERVER_URL = 'http://localhost:8080'
const SERVER_URL = 'https://still-coast-13920.herokuapp.com'

export default axios.create({
  baseURL: SERVER_URL,
  withCredentials: false,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Accept': 'application/json, text/plain, */*',
    'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, OPTIONS',
    'Access-Control-Allow-Credentials': true
  }
})
