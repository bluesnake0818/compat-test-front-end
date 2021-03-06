import { useState } from 'react'
import SignupForm from '../../components/SignupForm/SignupForm'
import styles from './Signup.module.css'

const Signup = props => {
  const [message, setMessage] = useState([''])

  const updateMessage = msg => {
    setMessage(msg)
  }

  return (
    <main className={styles.container}>
      <h3 className={styles.title}>Sign up today!</h3>
      <SignupForm {...props} updateMessage={updateMessage} />
    </main>
  )
}

export default Signup
