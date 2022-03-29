import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import './ShowCompat.css'
import CompatView from '../../components/CompatView/CompatView';
import { CompatData } from '../../components/CompatView/CompatData';
import reactDom from "react-dom";
import React from "react";


function ShowCompat({ user }) { 
  const location = useLocation()
  const [compats, setCompats] = useState(CompatData)

  const friend = location.state.friend
  const yourZod = friend.owner.zodiac
  const theirZod = friend.zodiac

  return (
    <div className='showCompat'>

      <div>
        {friend.owner.name}'s zodiac is {yourZod}.
      </div>
      <div>
        {friend.name}'s zodiac is {theirZod}.  
      </div>
      <div> 
        {compats[yourZod][theirZod]}
      </div>
    </div>
  )
}

export default ShowCompat;


