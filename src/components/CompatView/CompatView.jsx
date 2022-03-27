import './CompatView.css'
import React, {useState} from 'react'

const CompatView = (props) => {
  // const [current, setCurrent] = useState('rat')

  return(
    <>
      {props.CompatData.rat.rat}
    </>
  )
}

export default CompatView;