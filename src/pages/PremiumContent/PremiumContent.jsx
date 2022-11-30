import styles from './PremiumContent.module.css'
import { Link } from 'react-router-dom'

const PremiumContent = props => {
  const yourZod = props.profile.zodiac
  const yourZodImg = `/designs_${yourZod}.png`

  return (
    <main className={styles.container}>
      <h3 className={styles.title}>Main Services</h3>
      <div className={styles.mainServices}>
        <Link className={styles.linkToProfile} to="/profile">
          <h5 className={styles.cardTitle}>Personalized zodiac analysis</h5>
          <div className={styles.card}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Strengths & Weaknesses
              </li>
              <li className={styles.listItem}>
                Celebs with same zodiac sign
              </li>
              <li className={styles.listItem}>
                Zodiac signs to stay close with
              </li>
              <li className={styles.listItem}>
                Zodiac signs to avoid
              </li>
              <li className={styles.listImgItem}>
                <img className={styles.imgInCard} src={yourZodImg} alt="" />
              </li>
            </ul>
          </div>
        </Link>
        <Link className={styles.linkToCompat} to="/compat">
          <h5 className={styles.cardTitle}>In depth compatibility analysis</h5>
          <div className={styles.card}>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Where you click
              </li>
              <li className={styles.listItem}>
                Where you clash
              </li>
              <li className={styles.listItem}>
                How to Mitigate problems
              </li>
              <li className={styles.listImgItem}>
                <img className={styles.imgInCard} src='12_Earthly_Branches.png' alt="" />
              </li>
            </ul>
          </div>
        </Link>
      </div>

      <h3 className={styles.title}>Affiliate Services</h3>
      <div className={styles.affiliateServices}>
        <a className={styles.linkAffiliate} href="https://chinese-zodiac-slot-machine.surge.sh/" target="_blank">
          <img className={styles.thumbnail} src="/Slot Machine.png" alt="" />
          <p className={styles.paragraph}>Chinese zodiac slot machine game</p>
        </a>
        <a className={styles.linkAffiliate} href="https://zodiac-counterparts.herokuapp.com/" target="_blank">
          <img className={styles.thumbnail} src="/Zodiac Counter Part.png" alt="" />
          <p className={styles.paragraph}>Western vs. Eastern zodiac signs</p>
        </a>
        <a className={styles.linkAffiliate} href="https://hangfive.page.link/rW95" target="_blank">
          <img className={styles.thumbnail} src="/App.png" alt="" />
          <p className={styles.paragraph}>Zodiac-based social discovery app</p>
        </a>
      </div>
    </main>
  )
}

export default PremiumContent
