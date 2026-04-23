import axios from 'axios';
import React from 'react'
import { Link } from "react-router-dom";
import style from './ListCategories.module.css'
const ListCategories =({categories}) => {
  
  const firstFour = categories.slice(0, 4);

  return (
    <div>
      <div className='catContainer'>
        <div className='header'>
            <h2>Categories</h2>
            <Link to="/categories" className="allCategories">
          All categories
        </Link>
        </div>

        <div className={style.catGrid}>
{firstFour.map((category) => (
          <Link
            to={`/categories/${category.slug}`}
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
  )
}
export default ListCategories