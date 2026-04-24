import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ListCategories from '../layouts/ListCategories'
import axios from 'axios'
import FormDiscount from '../layouts/FormDiscount'
import ProductsWithDiscount from '../layouts/ProductsWithDiscount'
import Checkout from '../layouts/Checkout'
export default function Home() {
  const [categories,setCategories] = useState([])
  const [products,setProducts] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3333/categories/all')
  .then(response=>{
    setCategories(response.data);
  })
  .catch(error=>{
    console.error('error loading', error)
  })
  axios.get('http://localhost:3333/products/all')
  .then(response=>{
    setProducts(response.data);
  })
  .catch(error=>{
    console.error('error loading', error)
  })
  }, [])
  
  return (
    <div style={{ padding: '0 40px' }}>
      <Header />
      <Checkout />
      <ListCategories  categories={categories}/>
      <FormDiscount />
      <ProductsWithDiscount product={products}/>
      <Footer />
    </div>
  )
}
