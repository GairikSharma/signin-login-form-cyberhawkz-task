import React, { useState } from 'react'
import '../styles/form.css'

function Form() {
  return (
    <>

      
          <div className="form-container">

            <form className='form-content' >
              <h2 style={{color:"grey"}}>Login</h2>
              <input type="email" placeholder='Enter your Email'
                
              />
              <input type="password" placeholder='Enter your password'
                
              />
              <button className='btn'>Login</button>
            </form>
          </div>
    </>
  )
}

export default Form