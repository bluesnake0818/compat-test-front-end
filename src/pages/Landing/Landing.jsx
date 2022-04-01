import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Zodiac Signs & Compatibility</h2>
      <img src="/12_Earthly_Branches.png" alt="12 Zodiacs" />
      <Link to='/zodiac'><button className={styles.button}>Start</button></Link>
    </main>
  )
}

export default Landing
