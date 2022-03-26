import styles from './Landing.module.css'
import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <main className={styles.container}>
      <h1>hangfive compatibility test</h1>
      <h1>What's my relationship style and how compatible am I with my friends?</h1>
      <img src="/12_Earthly_Branches.png" alt="12 Zodiacs" />
      <Link to='/zodiac'><button className='btn'>Start</button></Link>
    </main>
  )
}

export default Landing
