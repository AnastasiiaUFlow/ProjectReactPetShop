import React from 'react'
import style from './Checkout.module.css'
import {Button} from '@mui/material'
export default function Checkout() {
  return (
    <div className={style.container}>
      <h1>Amazing Discounts on Pets Products!</h1>
      <Button variant="contained">Check out</Button>
    </div>
  )
}
