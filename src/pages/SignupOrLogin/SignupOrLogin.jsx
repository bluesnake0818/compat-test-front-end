import { useState } from 'react'
import './SignupOrLogin.css'
import { Link } from 'react-router-dom'

const SignupOrLogin = props => {

  return (
    <main className='container'>
      <h3>Sign up to access zodiac analysis & compatibility reports for free!</h3>
      <Link to="/signup"><button className='button'>Signup</button></Link>
      <Link to="/login"><button className='button'>Login</button></Link>
      <p></p>
    </main>
  )
}

export default SignupOrLogin
