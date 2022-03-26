import './ImageSlider.css'
import React, {useState} from 'react'
import { SliderData } from './SliderData';
import {FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0)
  const length = slides.length

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



  return (
    <section className='slider'>
      <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide} />
      <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return (
          <div className={index === current ? 'slide active' : 'slide'} key={index}>
            {
              index === current && 
              (
                <>
                  <h1>Zodiac: {slide.name}</h1>
                  <img src={ slide.image } alt="zodiac image" className='image' />
                  <p>Defining Traits: {  slide.traits }</p>
                  <p>BFF: { slide.bff }</p>
                  <p>Nemesis:  { slide.nemesis }</p>
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