import React from 'react'
import style from './Footer.module.css'
import { Link } from 'react-router-dom'
import instagramm from '../images/icons/ic-instagram.svg'
import whatsapp from '../images/icons/ic-whatsapp.svg'
export default function Footer() {
  return (
    <div className={style.container}>
        <h1>Contact</h1>
        <div className={style.groupSquare}>
          <div className={style.square}>
        <p>Phone</p>
        <h1>+49 30 915-88492</h1>
      </div>  
      <div className={style.square}>
        <p>Socials</p>
        <div className={style.socials}>
        <a href=''><img src={instagramm}/></a>
        <a href=''><img src={whatsapp}/></a>
        </div>
        
      </div>
      <div className={style.square}>
        <p>Address</p>
        <h1>Wallstraẞe 9-13, 10179 Berlin, Deutschland</h1>
      </div>
      <div className={style.square}>
        <p>Working Hours</p>
        <h1>24 hours a day</h1>
      </div>
        </div>
      <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.7213305066284!2d13.35370488960895!3d52.50228380000632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sru!2sde!4v1776884108139!5m2!1sru!2sde"
        width="100%"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="IT Career Hub Map"
      ></iframe>
    </div>
    </div>
  )
}
