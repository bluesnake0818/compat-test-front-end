import styles from './Zodiac.module.css'
import ImageSlider from "../../components/ImageSlider/ImageSlider";


function Zodiac() {
  return (
    <div className={styles.container}>
      <ImageSlider />
    </div>
  )
}

export default Zodiac;