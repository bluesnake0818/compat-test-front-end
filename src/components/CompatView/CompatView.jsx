import styles from './CompatView.module.css'
import React, {useState} from 'react'

const CompatView = (props) => {
  const [compats, setCompats] = useState(props.CompatData)

  return(
    <main className={styles.container}>
      {compats.map(compat => 
        <p key={compat.id}>You are a {compat.zod_name}. Your compatibility with a rat is: {compat.rat}</p>
      )}
    </main>
  )
}

export default CompatView;