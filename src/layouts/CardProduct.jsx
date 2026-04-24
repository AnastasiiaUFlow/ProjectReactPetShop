import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../components/slice';

export default function CardProduct({id,title,image,price,discont_price}) {
  const dispatch = useDispatch()
    const discount =
    discont_price &&
    Math.round(100 - (discont_price / price) * 100);

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="image-wrapper">
          <img src={`http://localhost:3333${image}`} alt={title} width={'316px'}/>

          {discount && (
            <div className="discount-badge">
              -{discount}%
            </div>
          )}
        </div>

        <h3>{title}</h3>

        <div className="price">
          {discont_price ? (
            <>
              <span className="new-price">
                ${discont_price}
              </span>
              <span className="old-price">
                ${price}
              </span>
            </>
          ) : (
            <span>${price}</span>
          )}
        </div>
      </Link>


      <button onClick={() => dispatch(addToCart(product))}>
        Add to cart
      </button>
    </div>
  )
}
