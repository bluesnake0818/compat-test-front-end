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
  const [compats, setCompats] = useState(CompatData)

  const friend = location.state.friend
  const yourZod = friend.owner.zodiac
  const theirZod = friend.zodiac
  const compatObj = compats.find(compat => compat.id === yourZod)
  const compatArr = compatObj.compats
  const compatFriend = compatArr.find(compatFr => compatFr.id === theirZod)

  return (
    <div className='showCompat'>
      {/* <CompatView CompatData = {CompatData} /> */}
      <div>
        {friend.name}'s zodiac is {theirZod}.  
      </div>
      <div>
        {friend.owner.name}'s zodiac is {yourZod}.
      </div>
      <div> 
        {compatFriend.compats}
      </div>
    </div>
  )
}

export default ShowCompat;


// <div>
{/* {compats.`${yourZod}`.`${theirZod}`} */}
{/* {compats.yourZod.theirZod} */}
{/* </div> */}




{/* {compats.map(compat => 
  <p key={compat.id}>You are a {yourZod}. Your compatibility with a {theirZod} is: {compat.id}</p>
)} */}