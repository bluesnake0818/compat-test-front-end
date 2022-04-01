import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Zodiac Sign & Compatibility Test</h1>
      {/* <h3 className={styles.subTitle}>What's my relationship style and how compatible am I with my friends?</h3> */}
      <img src="/12_Earthly_Branches.png" alt="12 Zodiacs" />
      <Link to='/zodiac'><button className={styles.button}>Start</button></Link>
    </main>
  )
}

export default Landing
