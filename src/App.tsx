import { useEffect, useState, } from 'react'
import './App.css'
import { getProducts } from './api/api';
import { useQuery } from '@tanstack/react-query';

function App() {
  const [count, setCount] = useState(0)
  const [products, setProducts] = useState()
  const {isLoading, data, isError, error} = useQuery({
    queryKey: ['products'],
    queryFn : getProducts
  })
  useEffect (()=>{
    setProducts(data)
  },[]);
  if (isLoading) return <div className="loading">Loading...</div>


  return (
    <>
      <h1>Productos</h1>
      {
        data && data.map((item: any, index: any) => (
          <figure key={index}>
            <img src={item.image} alt={item.name} />
            <figcaption>{item.name}</figcaption>
          </figure>
        ))
      }
    </>
  )
}

export default App
