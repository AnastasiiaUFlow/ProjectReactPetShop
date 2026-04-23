import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function ProductPage() {
    const { id } = useParams();
  const [products,setProducts] = useState([])
    useEffect(()=>{
    axios.get(`http://localhost:3333/products/${id}`)
  .then(response=>{
    setProducts(response.data);
    console.log(response.data)
  })
  .catch(error=>{
    console.error('error loading', error)
  })
  }, [id])
  return (
    <div>
      <Header />
        <div className="catGrid">
{products.map((product) => (
          <div>
             <div className="imageWrap">
              <img src={`http://localhost:3333${product.image}`} alt={product.title} />
            </div>

            <h3>{product.title}</h3>
            <p>{product.description}</p>
            <h1>{product.discont_price}</h1>
            <h3 style={{textDecoration: 'line-through'}}>{product.price}</h3>
          </div>
        ))}
        </div>
      <Footer />
    </div>
  )
}
