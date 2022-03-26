import './SignupOrLogin.css'
import { Link } from 'react-router-dom'

const SignupOrLogin = props => {

  return (
    <main className='container'>
      <h3>Sign up to access zodiac analysis & compatibility reports for free!</h3>
      <div className='links'>
        <Link to="/signup"><button className='button'>Signup</button></Link>
        <Link to="/login"><button className='button'>Login</button></Link>
      </div>
      <p>If you are a returning use, please log in.</p>
    </main>
  )
}

export default SignupOrLogin
