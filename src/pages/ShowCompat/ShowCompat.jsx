import { useState, useRef, useEffect } from "react"
import { Link, useLocation } from 'react-router-dom'
import styles from './ShowCompat.module.css'
import { CompatData } from './CompatData';
import reactDom from "react-dom";
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
            <li>{friend.name}'s zodiac is {theirZod}.  </li>
            <li>{compats[yourZod][theirZod]}</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

export default ShowCompat;


