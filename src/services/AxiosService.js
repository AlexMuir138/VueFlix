import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000,
  headers: { 'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/x-www-form-urlencoded' }
})
