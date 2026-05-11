import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import axios from 'axios';
import { decreaseQty, increaseQty, deleteItem } from '../components/slice';

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.items);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const onSubmit = async (data) => {
    const orderData = {
      user: data,
      products: items,
      total: totalPrice,
    };

    try {
      await axios.post('http://localhost:3333/order/send', orderData);
      setIsModalOpen(true);
      reset();
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

         <div className="order-form" style={{
    flex: 1,
    padding: '30px',
    backgroundColor: '#F1F3F4', // Светло-серый фон карточки
    borderRadius: '12px',
    height: 'fit-content'
}}>
    <h2 style={{ fontSize: '24px', marginBottom: '20px', fontWeight: '700' }}>Order Details</h2>
    
    <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        {/* Поле Имя */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Name"
                style={{
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #DDDDDD',
                    fontSize: '16px',
                    outline: 'none'
                }}
            />
            {errors.name && <p style={{ color: '#FF3535', fontSize: '12px', margin: '4px 0 0' }}>{errors.name.message}</p>}
        </div>

        {/* Поле Телефон */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                {...register('phone', { 
                    required: 'Phone is required',
                    pattern: { value: /^[0-9+-]+$/, message: 'Invalid phone number' }
                })}
                placeholder="Phone number"
                style={{
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #DDDDDD',
                    fontSize: '16px',
                    outline: 'none'
                }}
            />
            {errors.phone && <p style={{ color: '#FF3535', fontSize: '12px', margin: '4px 0 0' }}>{errors.phone.message}</p>}
        </div>

        {/* Поле Email */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
            <input
                {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' }
                })}
                placeholder="Email"
                style={{
                    padding: '16px',
                    borderRadius: '8px',
                    border: '1px solid #DDDDDD',
                    fontSize: '16px',
                    outline: 'none'
                }}
            />
            {errors.email && <p style={{ color: '#FF3535', fontSize: '12px', margin: '4px 0 0' }}>{errors.email.message}</p>}
        </div>

        {/* Секция Итого */}
        <div style={{ marginTop: '20px' }}>
            <p style={{ margin: 0, color: '#8B8B8B', fontSize: '16px' }}>Total</p>
            <h3 style={{ margin: '5px 0', fontSize: '40px', fontWeight: '700' }}>
                ${totalPrice.toFixed(2)}
            </h3>
        </div>

        {/* Кнопка */}
        <button type="submit" style={{
            width: '100%',
            padding: '18px',
            backgroundColor: '#0D50FF', // Яркий синий
            color: '#FFFFFF',
            border: 'none',
            borderRadius: '8px',
            fontSize: '18px',
            fontWeight: '600',
            cursor: 'pointer',
            marginTop: '10px'
        }}>
            Order
        </button>
    </form>
</div>

        </div>
      )}

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

const modalStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  content: {
    background: 'white', padding: '40px', borderRadius: '12px', textAlign: 'center', maxWidth: '400px'
  }
};
