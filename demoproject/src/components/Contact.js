import React, { useEffect, useState } from 'react'

const Contact = () => {

  const[state, setState]= useState([])

   useEffect(()=>{
      fetch("https://reqres.in/api/users?page=2")
      .then(res => res.json())
      .then((result) => {
        console.log(result)
    
      })})
  return (
    <div>
      <h1>Hello Contact</h1>
      <ul>
    </ul>
    </div>
  )
}

export default Contact
