// import { getProducts } from './api';
import axios from 'axios';


// const api = axios.create({
//   baseURL: '/db.json',
// })

// export const getProducts = async ()=>{
//   const res = await api.get('/products')
//   console.log(res.data)
//   return res.data
// }

export const getProducts = async ()=>{
  const res = await axios.get('/db.json')
  // console.log(res.data)
  return res.data
}
