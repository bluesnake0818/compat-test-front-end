import './CompatView.css'
import React, {useState} from 'react'

const CompatView = (props) => {
  const [compats, setCompats] = useState(props.CompatData)

  return(
    <>
      {compats.map(compat => 
        <p key={compat.id}>{compat.zod_name}</p>
      )}
    </>
  )
}

export default CompatView;