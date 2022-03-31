import styles from './PremiumContent.module.css'
import { Link } from 'react-router-dom'

const PremiumContent = props => {

  return (
    <main className={styles.container}>
      <h3 className={styles.title}>Hello, {props.user.name}!</h3>
      <div className={styles.links}>
        <Link to="/compat"><button className='button'>Analyze my zodiac sign</button></Link>
        <Link to="/profile"><button className='button'>Read compatibility reports</button></Link>
      </div>
    </main>
  )
}

export default PremiumContent
