import React, { useEffect, useState } from 'react'
import Header from '../layouts/Header';
import Footer from '../layouts/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';
import style from '../layouts/ListCategories.module.css'
export default function AllCategories() {
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
    <div>
      <Header />
 <div>
      <div className='catContainer'>
        <div className='header'>
            <h2>Categories</h2>
            <Link to="/categories" className="allCategories">
          All categories
        </Link>
        </div>

        <div className={style.catGrid}>
{categories.map((category) => (
          <Link
            to={`/categories/${category.id}`}
            key={category.id}
            className="category-card"
          >
            <div className={style.imageWrap}>
              <img src={`http://localhost:3333${category.image}`} alt={category.name} />
            </div>

            <h3>{category.title}</h3>
          </Link>
        ))}
        </div>
      </div>
    </div>
      <Footer />
    </div>
  )
}
