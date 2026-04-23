import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function FormDiscount() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3333/sale/send', {
            name: name,
            phone: phone,
            email: email
        })
      .then(response=>{
        alert('successful get a discount')
        setName("");
        setPhone("");
        setEmail("");

      })
      .catch(error=>{
        console.error('error get a discoynt', error)
      })
      }
  
        
  return (
    <div>
        <h1>5% off on the first order</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='Phone number' value={phone}  onChange={(e)=>setPhone(e.target.value)}/>
        <input type="text" placeholder='Email' value={email}  onChange={(e)=>setEmail(e.target.value)}/>
        <button type='submit'>Get a discount</button>
      </form>
    </div>
  )
}
