import './Zodiac.css'
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import { Link } from 'react-router-dom';

function Zodiac() {
  return (
    <div className='zodiac'>
      <ImageSlider slides={SliderData} />
      <Link to='/SignupOrLogin'><button className='button'>Learn More</button></Link>    
    </div>
  )
}

export default Zodiac;