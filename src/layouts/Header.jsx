import React from 'react'
import { NavLink } from 'react-router-dom'
import logoDog from '../images/icons/logo dog (2).svg'
import basketEmpty from '../images/icons/basket=empty (2).svg'
import style from './Header.style.module.css'
export default function Header() {
  return (
    <div className={style.container}>
      <NavLink to="/"><img src={logoDog} /></NavLink>
      <div className={style.pageLink}>
        <NavLink to="/" style={({isActive})=>({
            color: isActive ? 'black' : 'blue',
        })}>Main Page</NavLink>
        <NavLink to="/categories">Categories</NavLink>
        <NavLink to="/products/all">All products</NavLink>
        <NavLink to="/products/sale">All sales</NavLink>
      </div>
      <NavLink to="/cart"><img src={basketEmpty}/></NavLink>
    </div>
  )
}
