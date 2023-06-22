import { useProductsStore } from '../../store/productsStore';
import { useEffect, useRef, useState } from 'react';
import { shallow } from 'zustand/shallow';
import { useParams } from "react-router-dom"
import parse from 'html-react-parser';
import convertirAMoneda from '../../utils/Format';


const Product = () => {
  const { id } = useParams()
  const imgMain = useRef(null)
  const imgContainer = useRef(null)
  const {products} = useProductsStore((state)=>({
    products: state.products
  }), shallow)

  useEffect(()=>{
    // getProducts()
  },[])
  const prod = products.find((item:any)=>id === item.id)

  const changeImage = (e:any) => {
    const img = e.target.src
    //@ts-ignore
    imgMain.current.src = img
  }
  const zoomImage = (e:any) => {
    console.log('entra')
    const src = e.target.src
  }
  const zoomNormal = (e:any) => {
    console.log('sale')
  }

  return (
    <section className="Product">
      {prod ? (
        <article className="Product_content">
            <div className="Product__images">
              <div ref={imgContainer} className="image-main">
                <img ref={imgMain} onMouseEnter={zoomImage} onMouseLeave={zoomNormal} src={`/productos/${prod.image}`} alt={prod.name} />
                <ul className="gallery">
                  {
                    prod.gallery.map((img:any,i:number)=>(
                      <li key={i}><img onClick={changeImage} src={`/productos/${img.img}`} alt="Gallery" /></li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="Product__data">
              <h1 className='Product__title'>{prod.name}</h1>
              <p className='Product__brand'>{prod.brand}</p>
              <p className='Product__price'>{convertirAMoneda(prod.price)}</p>
              <div className="buttons">
                <button>Agregar al carrito</button>
                <button>Comprar Ahora</button>

              </div>
              <div className="description">
                {
                  parse(prod.description)
                }
              </div>
            </div>
          </article>
      ) : null}

    </section>
  )
}

export default Product
