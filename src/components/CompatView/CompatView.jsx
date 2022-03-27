import './CompatView.css'
import React, {useState} from 'react'

const CompatView = (props) => {
  const [compats, setCompats] = useState(props.CompatData)

  return(
    <>
      {compats.rat.map(compat => 
          <p>{compat.tiger}</p>
      )}
    </>
  )
}

export default CompatView;