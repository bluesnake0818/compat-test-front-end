import styles from './PremiumContent.module.css'
import { Link } from 'react-router-dom'

const PremiumContent = props => {
  const yourZod = props.profile.zodiac
  const yourZodImg = `/designs_${yourZod}.png`

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Hello, {props.user.name}!</h1>
      <h3 className={styles.title}>Choose your service.</h3>
        <Link className={styles.link} to="/profile"><button className={styles.button}>Analyze my zodiac sign</button></Link>
        {/* <div className={styles.zodAnalysisChoice}> */}
        <img className={styles.image} src={yourZodImg} alt="zodiac sign" />
        {/* </div> */}
        <Link className={styles.link} to="/compat"><button className={styles.button}>Read compatibility reports</button></Link>
        <div className={styles.compatChoice}>
          <img className={styles.image} src={yourZodImg} alt="zodiac sign" /> 
          <p className={styles.paragraph}>vs</p> 
          <img className={styles.image} src='12_Earthly_Branches.png' alt="12 Zodiacs" />
        </div>
    </main>
  )
}

export default PremiumContent
