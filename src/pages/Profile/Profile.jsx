import { ZodiacData } from './ZodiacData';
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import styles from './Profile.module.css'
import StarIcon from '@mui/icons-material/Star';

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
  const yourZodImg = `/designs_${yourZod}.png`
  const bff = zodiacObj.bff
  const nemesis = zodiacObj.nemesis
  const yourBffImg = `/designs_${bff}.png`
  const yourNemesisImg = `/designs_${nemesis}.png`

  return (
    <div className={styles.container}>
      <h3>{zodiacObj.name} - {zodiacObj.archetype}</h3>
      <img src={yourZodImg} alt="" className={styles.image}/>

      <h5>Description</h5>
      <div className={styles.card}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            {zodiacObj.desc}
          </li>
        </ul>
      </div>

      <h5>Celebs in {yourZod}</h5>
      <div className={styles.card}>
        <ul className={styles.list}>  
          <li className={styles.listItem}><StarIcon /> {zodiacObj.celeb1}</li>
          <li className={styles.listItem}><StarIcon /> {zodiacObj.celeb2}</li>
          <li className={styles.listItem}><StarIcon /> {zodiacObj.celeb3}</li>
        </ul>
      </div>

      <h5>Your best friend</h5>
      <div className={styles.card}>
        <ul className={styles.list}>  
          <li className={styles.listItem}>
            <p>Most Compatible: {zodiacObj.bff}</p>
            <img className={styles.image} src={yourBffImg} alt="" />
          </li>
        </ul>
      </div>

      <h5>Your worst enemy</h5>
      <div className={styles.card}>
        <ul className={styles.list}>  
          <li className={styles.listItem}>
            <p>Worst Enemy: {zodiacObj.nemesis}</p>
            <img className={styles.image} src={yourNemesisImg} alt="" />
          </li>
        </ul>
      </div>
      <Link to="" onClick={props.handleLogout}>
          <button className={styles.button}>Log Out</button>
      </Link>
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