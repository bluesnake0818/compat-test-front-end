import './Zodiac.css'
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import { SliderData } from "../../components/ImageSlider/SliderData";
import { NavLink } from "react-router-dom";

function Zodiac() {
  return (
    <div className='zodiac'>
      <ImageSlider slides={SliderData} />
      <NavLink to='/login_or_signup'><button className='button'>More...</button></NavLink>    
    </div>
  )
}

export default Zodiac;