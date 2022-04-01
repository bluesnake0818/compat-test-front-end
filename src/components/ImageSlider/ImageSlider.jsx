import styles from './ImageSlider.module.css'
import React, {useState} from 'react'
import { SliderData } from './SliderData';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom';

const ImageSlider = () => {
  const [current, setCurrent] = useState(0)
  const length = SliderData.length

  const nextSlide = () => {
    setCurrent(current === length - 1 ?  0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current -1)
  }
  
  //checking if the array is not empty --> not needed since I'm starting with a filled array.
  // if(!Array.isArray(slides) || slides.length <= 0) {
  //   return null;
  // }


// revive the opacity for active slides (transition)
  return (
      <section className={styles.slider}>
        <FaArrowAltCircleLeft className={styles.leftArrow} onClick={prevSlide} />
        <FaArrowAltCircleRight className={styles.rightArrow} onClick={nextSlide} />
        {SliderData.map((slide, index) => {
          return (
            <div className={index === current ? 'slide active' : 'slide'} key={index}>
              {
                index === current && 
                (
                  <>
                    <img src={ slide.image } alt="zodiac image" className={styles.image} />
                    <div className={styles.desc}>
                      <p>Zodiac: {slide.name}</p>
                      <p>Defining Traits: { slide.traits } </p> 
                      <p className={styles.bff}>BFF: { slide.bff } </p> 
                      <p className={styles.nemesis}>Nemesis: { slide.nemesis } </p> 
                      <Link to='/PremiumContent'><button className={styles.button}>Learn More</button></Link>    
                    </div>
                  </>
                )
              }
            </div>
          ) 
        })}  
      </section>
  )
}

export default ImageSlider;