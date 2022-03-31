import { Link } from 'react-router-dom'
import styles from './FriendCard.module.css'
import { useState, useEffect } from 'react'

function FriendCard({friend, handleDeleteFriend, user}) {


  return (
    <div className={styles.card}>
      <div className="card-body">
        <Link
          to='/showCompat' 
          state={{friend}}
          className={styles.compatLink}
        >
          <h2 className="card-text">{friend.name} (see compatibility)</h2>
          
        </Link>
        <ul className={styles.list}>
          <li><p className="card-text">Birth Year: {friend.birthYear}</p></li>
          <li><p className="card-text">Zodiac Sign: {friend.zodiac}</p></li>
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <Link
          to='/edit'
          state={{friend}}
        >
          <button className={styles.editButton}>
            Edit
          </button>
        </Link>
        <button
          className={styles.deleteButton}
          onClick={()=> handleDeleteFriend(friend._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
  
}

export default FriendCard