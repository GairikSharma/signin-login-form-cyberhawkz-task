import React, { useState } from 'react';
import './App.css';
import Form from './components/form';
import SignUp from './components/signup';

function App() {
  const [loginoption, setLoginoption] = useState(false)
  const login_option = () => {
    setLoginoption(true)
    setSignupoption(true)
    console.log('Working');
  }

  const [signupoption, setSignupoption] = useState(false)
  const signin_option = () => {
    setSignupoption(false)
    setLoginoption(false)
    console.log('Working');
  }
  return (
    <div className="App">
      {
        !signupoption ? (
          <div className='login-option' onClick={login_option}>Already have an account <button>Login</button></div>
        ) : (
          <div className='login-option' onClick={signin_option}>Don't have an account <button>Sign up</button></div>
        )
      }
      <div className="body-container">
      {
        loginoption ? <Form /> : <SignUp />
      }
      </div>
    </div>
  );
}

export default App;
