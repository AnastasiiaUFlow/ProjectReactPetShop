import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import CardProduct from '../layouts/CardProduct';

export default function AllProducts() {
  const [products,setProducts] = useState([])
    useEffect(()=>{
    axios.get(`http://localhost:3333/products/all`)
  .then(response=>{
    setProducts(response.data);
  })
  .catch(error=>{
    console.error('error loading', error)
  })
  }, [])
  return (
    
    <div>
      <Header />
      <div className="products-grid">
              {products.map((product) => (
                <CardProduct key={product.id} {...product} />
              ))}
            </div>
      <Footer />
    </div>
  )
}
