import { ZodiacData } from './ZodiacData';
import { useState, useEffect } from 'react'

const Profile = (props) => {

  const [zodiacs, setZodiacs] = useState(ZodiacData)
  const [zodiacObj, setZodiacObj] = useState(
   {} 
  )
  



  
  
  useEffect(() => {
    if (props.profile.zodiac)
      {setZodiacObj(zodiacs.find(zodiacObj => zodiacObj.id === props.profile.zodiac))}
    },[props.profile.zodiac])

  const yourZod = props.profile.zodiac

  


  return (
    <div className='main'>
      <h3>{props.user.name}, your zodiac {props.profile.zodiac}.</h3>
      <div className="card">
          <ul>
            <li>
              {/* <img src="././designs_rabbit.png" alt="" /> */}
            </li>
            <li>
              Archetype: {zodiacObj.archetype}
            </li>
          </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            Description: {zodiacObj.desc}
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>  
          <li>{zodiacObj.celeb1}</li>
          <li>{zodiacObj.celeb2}</li>
          <li>{zodiacObj.celeb3}</li>
        </ul>
      </div>
      <div className="card">
        <ul>  
          <li>
            Most Compatible: {zodiacObj.bff}
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>  
          <li>
            Worst Enemy: {zodiacObj.nemesis}
          </li>
        </ul>
      </div>
    </div>
  )
}




export default Profile;

// {ZodiacData.find(zodiac => zodiac.id === profile.id 
//   .then (return (
//     <img src={ zodiac.image } alt="zodiac image" className='image' />
//     {<div className='zodiac-desc'>
//       <p>Zodiac: {zodiac.name}</p>
//       <p>Defining Traits: { zodiac.traits } </p> 
//       <p className='bff'>BFF: { zodiac.bff } </p> 
//       <p className='nemesis'>Nemesis: { zodiac.nemesis } </p> 
//     </div>}
//   ))
  

//     ) 
//   }