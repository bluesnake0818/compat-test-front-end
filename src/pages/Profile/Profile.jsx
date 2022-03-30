import { ProfileData } from './ProfileData';
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = (props) => {
  // const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState({
    name: ''
    }
  )

  // const [zodiac, setZodiac] = useState({
  //   id: ''
  //   }
  // )

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles =>
      setProfile(profiles.find(profile => profile.id === props.user.profile.id))
    )
    
  }, [])

  // useEffect(() => {
  //   ProfileData.find(zodiac => zodiac.id === profile.zodiac)
  //   .then(zodiac => setZodiac(zodiac))
  // }, [])

  // useEffect(()=> {
  //   profiles.find(profile => profile.id === props.user.profile.id)
  //   .then(profile => setProfile(profile))
  // }, [])

  // useEffect(()=> {
  //   setProfile(profiles.find(profile => profile.id === props.user.profile.id))
  // }, [])

  // const userProfile = profiles.find(profile => profile.id === props.user.profile.id)
  // console.log(userProfile.name)

  // console.log(zodiac)

  return (
    <div className='main'>
      <h3>{props.user.name}, your zodiac {profile.zodiac}.</h3>
      <div className="card">
          <ul>
            <li>
              {/* <img src="././designs_rabbit.png" alt="" /> */}
            </li>
            <li>
              Archetype: {ProfileData[3].archetype}
            </li>
          </ul>
      </div>
      <div className="card">
        <ul>
          <li>
            Description: {ProfileData[3].desc}
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>  
          <li>{ProfileData[3].celeb1.name}</li>
          <li>{ProfileData[3].celeb2.name}</li>
          <li>{ProfileData[3].celeb3.name}</li>
        </ul>
      </div>
      <div className="card">
        <ul>  
          <li>
            Most Compatible: {ProfileData[3].bff}
          </li>
        </ul>
      </div>
      <div className="card">
        <ul>  
          <li>
            Worst Enemy: {ProfileData[3].nemesis}
          </li>
        </ul>
      </div>
    </div>
  )
}




export default Profile;

// {ProfileData.find(zodiac => zodiac.id === profile.id 
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