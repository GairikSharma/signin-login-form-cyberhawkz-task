import React, { useState } from 'react'
import "../styles/signup.css"
import Form from './form'

function SignUp() {
  return (
    <>
     
          <div className="sign-up-form">
            <form className="signup-content" >
              <h2 style={{color:"grey"}}>Sign up</h2>
              <input type="text" placeholder='Firstname'
                
              />
              <input type="text" placeholder='Lastname'
                
              />
              <input type="email" placeholder='Email'
                
              />
              <input type="password" placeholder='Password'
                
              />
              <button className='sign-up-btn' >Sign Up</button>
              
            </form>
          </div>

      

    </>
  )
}

export default SignUp