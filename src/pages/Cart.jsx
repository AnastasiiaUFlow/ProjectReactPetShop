import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { decreaseQty, increaseQty, deleteItem } from '../components/slice';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Настройка react-hook-form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const totalPrice = items.reduce((sum, item) => {
    const price = item.discont_price || item.price;
    return sum + price * item.quantity;
  }, 0);

  // Обработчик отправки формы
  const onSubmit = async (data) => {
    const orderData = {
      user: data,
      products: items,
      total: totalPrice,
    };

    try {
      await axios.post('http://localhost:3333/order/send', orderData);
      setIsModalOpen(true); // Открываем модалку
      reset(); // Очищаем форму
      // Здесь также можно добавить dispatch для очистки корзины в Redux
    } catch (error) {
      console.error('Ошибка при отправке заказа:', error);
      alert('Не удалось отправить заказ');
    }
  };

  return (
    <div className="cart-page">
      <h1>Cart</h1>

      {items.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <div className="cart-container" style={{ display: 'flex', gap: '20px' }}>
          {/* Список товаров */}
          <div className="cart-list" style={{ flex: 2 }}>
            {items.map((item) => {
              const price = item.discont_price || item.price;
              return (
                <div key={item.id} className="cart-item" style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                  <img src={`http://localhost:3333${item.image}`} alt={item.title} width="100" />
                  <h3>{item.title}</h3>
                  <p>${price} x {item.quantity}</p>
                  <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
                  <button onClick={() => dispatch(deleteItem(item.id))}>Remove</button>
                </div>
              );
            })}
          </div>

          {/* Форма оформления заказа */}
          <div className="order-form" style={{ flex: 1, padding: '20px', border: '1px solid #000' }}>
            <h2>Order Details</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <input
                  {...register('name', { required: 'Name is required' })}
                  placeholder="Name"
                />
                {errors.name && <p style={{ color: 'red' }}>{errors.name.message}</p>}
              </div>

              <div>
                <input
                  {...register('phone', { 
                    required: 'Phone is required',
                    pattern: { value: /^[0-9+-]+$/, message: 'Invalid phone number' }
                  })}
                  placeholder="Phone number"
                />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone.message}</p>}
              </div>

              <div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                  })}
                  placeholder="Email"
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
              </div>

              <div className="total">
                <h3>Total: ${totalPrice.toFixed(2)}</h3>
              </div>

              <button type="submit" style={{ width: '100%', padding: '10px', background: 'green', color: '#fff' }}>
                Order
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Модальное окно */}
      {isModalOpen && (
        <div className="modal-overlay" style={modalStyles.overlay}>
          <div className="modal-content" style={modalStyles.content}>
            <h2>Congratulations!</h2>
            <p>Your order has been successfully placed on the website.</p>
            <p>A manager will contact you shortly to confirm your order.</p>
            <button onClick={() => setIsModalOpen(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

// Простейшие стили для модалки
const modalStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  content: {
    background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', maxWidth: '400px'
  }
};
