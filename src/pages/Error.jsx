import React from 'react'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import ErrorImage from '../images/jpg/404.jpg'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'
import style from './Error.module.css'
export default function Error() {
   const navigate = useNavigate();

  const handleClick = () => {
    navigate('/'); // Переход на /target-path
  };
  return (
    <div style={{ padding: '0 40px' }}>
      <Header />
      <div className={style.container}>
        <img src={ErrorImage} alt="error" />
        <div className={style.container}>
          <h1>Page Not Found</h1>
          <p>We’re sorry, the page you requested could not be found.
Please go back to the homepage.</p>
          <Button variant="contained" sx={{
    backgroundColor: '#0D50FF', // Свой цвет фона
    padding: '12px 50px',       // Свои отступы (padding)
    '&:hover': {
      backgroundColor: '#0d3db6', // Цвет при наведении
    },
  }} onClick={handleClick}>Go home</Button>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

