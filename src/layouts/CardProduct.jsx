import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function CardProduct({id,title,image,price,discont_price}) {
    const discount =
    discont_price &&
    Math.round(100 - (discont_price / price) * 100);

  return (
    <div className="product-card">
      <Link to={`/products/${id}`}>
        <div className="image-wrapper">
          <img src={`http://localhost:3333${image}`} alt={title} />

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

      {/* 🔥 КНОПКА ПРИ НАВЕДЕНИИ */}
      <button className="add-to-cart">
        Add to cart
      </button>
    </div>
  )
}
