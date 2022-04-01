import { Link } from 'react-router-dom'
import styles from './FriendCard.module.css'

function FriendCard({friend, handleDeleteFriend, user}) {
  const friendZod = friend.zodiac
  const friendZodImg = `/designs_${friendZod}.png`

  return (
    <Link className={styles.linkToShowCompat} state={{friend}} to="/showCompat">
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