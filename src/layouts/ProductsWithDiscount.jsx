import React from 'react'
import { Link } from 'react-router-dom';
import style from './ProductsWithDiscount.module.css'
const ProductsWithDiscount =({product}) =>{
    const discountedProducts = product.filter(
    (product) => product.discont_price !== null
  );
  const randomProducts = [...discountedProducts]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);
  return (
    <div>
      <h2>Discounts</h2>
      <Link to="/products/sale" className="all-discounts-btn">
          All discounts →
        </Link>
        <div className={style.productsGrid} style={{display: 'flex', gap: '32px'}}>
        {randomProducts.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className="product-card"
          >
            <div className="discount-badge">
              -{Math.round(
                100 - (product.discont_price / product.price) * 100
              )}
              %
            </div>

            <img src={`http://localhost:3333${product.image}`} style={{width: '100%', height:'284px'}} alt={product.title} />

            <h3>{product.title}</h3>

            <div className="price">
              <h1 className="new-price">
                ${product.discont_price}
              </h1>
              <p className="old-price" style={{textDecoration: 'line-through'}}>
                ${product.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
export default ProductsWithDiscount