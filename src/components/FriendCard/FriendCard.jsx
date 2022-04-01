import { Link } from 'react-router-dom'
import styles from './FriendCard.module.css'
import { useState, useEffect } from 'react'

function FriendCard({friend, handleDeleteFriend, user}) {
  const friendZod = friend.zodiac
  const friendZodImg = `/designs_${friendZod}.png`

  return (
    <Link className={styles.linkToProfile} to="/profile">
      <div className={styles.card}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            Birth Year: {friend.birthYear}
          </li>
          <li className={styles.listItem}>
            Zodiac Sign: {friendZod}
          </li>
          <li className={styles.listFooterItem}>
            <Link
              className={styles.linkForButton}
              to='/edit'
              state={{friend}}
            >
              <button className={styles.editButton}>
                Edit
              </button>
            </Link>
            <Link
              className={styles.linkForButton}
              to=''
            >
              <button
                className={styles.deleteButton}
                onClick={()=> handleDeleteFriend(friend._id)}
              >
              Delete
              </button>
            </Link>
            <img className={styles.imgInCard} src={friendZodImg} alt="" />
          </li>
        </ul>
      </div>
    </Link>
    );
    
  }
  
  export default FriendCard
  // <div className={styles.card}>
  //   <div className="card-body">
  //     <Link
  //       to='/showCompat' 
  //       state={{friend}}
  //       className={styles.compatLink}
  //     >
  //       <h2 className="card-text">{friend.name} (see compatibility)</h2>
        
  //     </Link>
  //     <ul className={styles.list}>
  //       <li><p className="card-text">Birth Year: {friend.birthYear}</p></li>
  //       <li><p className="card-text">Zodiac Sign: {friend.zodiac}</p></li>
  //     </ul>
  //   </div>
  //   <div className={styles.cardFooter}>
  //     <Link
  //       to='/edit'
  //       state={{friend}}
  //     >
  //       <button className={styles.editButton}>
  //         Edit
  //       </button>
  //     </Link>
  //     <button
  //       className={styles.deleteButton}
  //       onClick={()=> handleDeleteFriend(friend._id)}
  //     >
  //       Delete
  //     </button>
  //   </div>
  // </div>