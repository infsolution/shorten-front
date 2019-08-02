import axios from 'axios'
 export const http = axios.create({
 	baseURL: `http://api.tsht.tk/api`,
 	timeout: 10000,
 })