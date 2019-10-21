import axios from 'axios';

export default axios.create({
  baseURL: 'http://192.168.127.39:3000'
})