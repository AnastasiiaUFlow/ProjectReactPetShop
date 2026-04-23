import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ListCategories from '../layouts/ListCategories'
import axios from 'axios'
import FormDiscount from '../layouts/FormDiscount'
export default function Home() {
  const [categories,setCategories] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:3333/categories/all')
  .then(response=>{
    setCategories(response.data);
  })
  .catch(error=>{
    console.error('error loading', error)
  })
  }, [])
  
  return (
    <div style={{ padding: '0 40px' }}>
      <Header />
      <ListCategories  categories={categories}/>
      <FormDiscount />
      <Footer />
    </div>
  )
}
