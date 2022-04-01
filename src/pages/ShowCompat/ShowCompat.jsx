import { useState } from "react"
import { Link, useLocation } from 'react-router-dom'
import styles from './ShowCompat.module.css'
import { CompatData } from './CompatData';
import React from "react";


function ShowCompat({ user }) { 
  const location = useLocation()
  const [compats, setCompats] = useState(CompatData)

  const friend = location.state.friend
  const yourZod = friend.owner.zodiac
  const theirZod = friend.zodiac
  const yourZodImg = `/designs_${yourZod}.png`
  const theirZodImg = `/designs_${theirZod}.png`

  return (
    <main className={styles.container}>
      <h2 className={styles.title}>Compatibility Analysis</h2>
      <div className={styles.card}>
        <ul className={styles.list}>
          <li className={styles.listItemImg}>
            <img className={styles.image} src={yourZodImg} alt="zodiac image" />
            <img className={styles.image} src={theirZodImg} alt="zodiac image"  /> 
          </li>
          <li className={styles.listItemCompatText}>
            {compats[yourZod][theirZod]}
          </li>
        </ul>
      </div>
    </main>
  )
}

export default ShowCompat;


