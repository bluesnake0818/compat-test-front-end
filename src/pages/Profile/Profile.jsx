import { ProfileData } from './ProfileData';
import { useState, useEffect } from 'react'
import * as profileService from '../../services/profileService'

const Profile = (props) => {
  // const [profiles, setProfiles] = useState([])
  const [profile, setProfile] = useState({
    name: ''
    }
  )

  useEffect(()=> {
    profileService.getAllProfiles()
    .then(profiles =>
      setProfile(profiles.find(profile => profile.id === props.user.profile.id))
      // .then(profile => setProfile(profile))
    )
  }, [])

  // useEffect(()=> {
  //   profiles.find(profile => profile.id === props.user.profile.id)
  //   .then(profile => setProfile(profile))
  // }, [])

  // useEffect(()=> {
  //   setProfile(profiles.find(profile => profile.id === props.user.profile.id))
  // }, [])

  // const userProfile = profiles.find(profile => profile.id === props.user.profile.id)
  // console.log(userProfile.name)

  // console.log(profiles)

  return (
    <div className='main'>
      <h3>{props.user.name}'s Profile</h3>
        <ul>
          <li>
            {profile.zodiac}
          </li>
          <li>
            {ProfileData[0].id}
          </li>
        </ul>

    </div>
  )
}

export default Profile;