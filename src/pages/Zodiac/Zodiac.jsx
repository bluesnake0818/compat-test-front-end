import styles from './Zodiac.module.css'
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import { Link } from 'react-router-dom';

function Zodiac() {
  return (
    <div className={styles.container}>
      <ImageSlider slides={SliderData} />
      <Link to='/PremiumContent'><button className={styles.button}>Learn More</button></Link>    
    </div>
  )
}

export default Zodiac;