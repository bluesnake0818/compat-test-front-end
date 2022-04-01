import styles from './SignupOrLogin.module.css'
import { Link } from 'react-router-dom'

const SignupOrLogin = props => {

  return (
    <main className={styles.container}>
      <h3 className={styles.title}>Sign up to access zodiac analysis & compatibility reports for free!</h3>
      <div className={styles.links}>
        <Link to="/signup"><button className={styles.button}>Signup</button></Link>
        <Link to="/login">
          <p className={styles.instructions}>If you are a returning user, please log in.</p>
        </Link>
      </div>
    </main>
  )
}

export default SignupOrLogin
