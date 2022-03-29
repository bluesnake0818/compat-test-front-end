import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import './ShowCompat.css'
import CompatView from '../../components/CompatView/CompatView';
import { CompatData } from '../../components/CompatView/CompatData';
import * as profileService from '../../services/profileService'
import reactDom from "react-dom";
import React from "react";

function ShowCompat({ user }) { 
  const location = useLocation()
  // const [profile, setProfile] = useState({
  //   email: '',
  //   name: '',
  //   birthYear: '',
  //   zodiac: '',
  // })


  // useEffect(()=> {
  //   profileService.getProfile(user.profile)

  //   .then(profile => {
  //     setProfile(profile)
  //   })
  // },[profile])


  const friend = location.state.friend
  
  return (
    <div className='showCompat'>
      {/* <CompatView CompatData = {CompatData} /> */}
      {user.name}
      {friend.zodiac}
      {/* {profile.name} */}
      {friend.owner.zodiac}
    </div>
  )
}

export default ShowCompat;


