import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import './ShowCompat.css'
import CompatView from '../../components/CompatView/CompatView';
import { CompatData } from '../../components/CompatView/CompatData';

function ShowCompat({ user}) { 
  const location = useLocation()
  // const [formData, setFormData] = useState(location.state.friend)
  const friend = location.state.friend
  return (
    <div className='showCompat'>
      {/* <CompatView CompatData = {CompatData} /> */}
      {user.name}
      {friend.name}
    </div>
  )
}

export default ShowCompat;