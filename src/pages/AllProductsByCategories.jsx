import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { useParams } from 'react-router-dom';
import CardProduct from '../layouts/CardProduct';

export default function AllProductsByCategories() {
  const { id } = useParams();
  const [products,setProducts] = useState([])
    useEffect(()=>{
    axios.get(`http://localhost:3333/categories/${id}`)
  .then(response=>{
    setProducts(response.data.data);
    console.log(response.data)
  })
  .catch(error=>{
    console.error('error loading', error)
  })
  }, [id])
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
