import { ZodiacData } from './ZodiacData';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'

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
    <div className={styles.container}>
      <h3>{props.user.name}, your zodiac is {props.profile.zodiac}.</h3>
      <div className={styles.card}>
          <ul>
            <li>
              {/* <img src="././designs_rabbit.png" alt="" /> */}
            </li>
            <li>
              Archetype: {zodiacObj.archetype}
            </li>
          </ul>
      </div>
      <div className={styles.card}>
        <ul>
          <li>
            Description: {zodiacObj.desc}
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <ul>  
          <li>{zodiacObj.celeb1}</li>
          <li>{zodiacObj.celeb2}</li>
          <li>{zodiacObj.celeb3}</li>
        </ul>
      </div>
      <div className={styles.card}>
        <ul>  
          <li>
            Most Compatible: {zodiacObj.bff}
          </li>
        </ul>
      </div>
      <div className={styles.card}>
        <ul>  
          <li>
            Worst Enemy: {zodiacObj.nemesis}
          </li>
        </ul>
      </div>
      <button className={styles.button}><Link to="" onClick={props.handleLogout}>Log Out</Link></button>
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