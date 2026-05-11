import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../components/slice';
import style from './CardProduct.module.css';

export default function CardProduct({ id, title, image, price, discont_price }) {
  const dispatch = useDispatch();
  
  const discount = discont_price && Math.round(100 - (discont_price / price) * 100);

  const productData = { id, title, image, price, discont_price };

  return (
    <div className={style.productCard}>
      <div className={style.imageWrapper}>
        <Link to={`/products/${id}`}>
          <img src={`http://localhost:3333${image}`} alt={title} className={style.productImg} />
        </Link>
        
        {discount && <div className={style.discountBadge}>-{discount}%</div>}
        
        {/* Кнопка теперь внутри обертки изображения */}
        <button 
          className={style.addToCartBtn} 
          onClick={(e) => {
            e.preventDefault(); // Чтобы клик не переходил по ссылке
            dispatch(addToCart(productData)); // Исправлено: передаем productData
          }}
        >
          Add to cart
        </button>
      </div>

      <Link to={`/products/${id}`} className={style.info}>
        <h3>{title}</h3>
        <div className={style.price}>
          {discont_price ? (
            <>
              <span className={style.newPrice}>${discont_price}</span>
              <span className={style.oldPrice}>${price}</span>
            </>
          ) : (
            <span className={style.currentPrice}>${price}</span>
          )}
        </div>
      </Link>
    </div>
  );
}
