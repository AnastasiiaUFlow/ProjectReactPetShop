import React from 'react'
import style from './Checkout.module.css'
import {Button} from '@mui/material'
import { Link } from 'react-router-dom'
export default function Checkout() {
  return (
    <div className={style.container}>
      <h1>Amazing Discounts on Pets Products!</h1>
      <Link to='/products/sale'>
      <Button variant="contained">Check out</Button>
      </Link>
    </div>
  )
}
