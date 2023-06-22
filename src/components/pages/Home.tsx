import { NavLink } from 'react-router-dom';
// import { getProducts } from '../../api/api';
// import { useQuery } from '@tanstack/react-query';
import { useProductsStore } from '../../store/productsStore';
import { useEffect } from 'react';
import { shallow } from 'zustand/shallow';
import Banner from '../organisms/Banner';


function convertirAMoneda(valor:number) {
  var formatter = new Intl.NumberFormat('es-MX', {
    style: 'currency',
    currency: 'MXN',
    minimumFractionDigits: 2
  });
  return formatter.format(valor);
}

const Home = () => {
  // const price = useRef()
  const {getProducts} = useProductsStore()
  const {products} = useProductsStore((state)=>({
    products: state.products
  }), shallow)

  useEffect(()=>{
    getProducts()
  },[])
  // const prod = products.find((item:any)=> "2" === item.id)
  return (
    <section className='Home '>
      <Banner img="/bag.jpg" title="Eye Candy" subTitle='La bolsa que nadie va a dejar de ver'/>
      <article className='Home__products'>
      {
        products && products.map((item: any, index: any) => (

          <NavLink key={item.id} to={`product/${item.id}`}>
            <figure key={index} className='products__item'>
              <img src={`/productos/${item.image}`} alt={item.name} />
              <figcaption className='text-sm'>{item.name}</figcaption>
              <p className='brand'>{item.brand}</p>
              <p className='price'>{convertirAMoneda(item.price)}</p>
            </figure>
          </NavLink>
        ))
      }
      </article>

    </section>
  )
}

export default Home
