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

  return (
    <main className={styles.container}>
      <h3>{friend.owner.name} & {friend.name}'s Compat</h3>
      <div className={styles.card}>
        <div className="card-body">
          <ul className={styles.list}>
            <li>{friend.owner.name}'s zodiac is {yourZod}.</li>
            <li><img src='/designs_rabbit.png' alt="zodiac image" className={styles.image} /></li>
            <li>{friend.name}'s zodiac is {theirZod}.</li>
            <li><img src='/designs_rooster.png' alt="zodiac image" className={styles.image} /></li>
            <li>{compats[yourZod][theirZod]}</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default ShowCompat;


