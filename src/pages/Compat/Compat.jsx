import styles from './Compat.module.css'
import { Link } from 'react-router-dom';
import FriendCard from '../../components/FriendCard/FriendCard';

const Compat = (props) => {
  return (
    <div className={styles.loading}>
      {!props.friendsLoaded ?
        <>
          <h3>Loading...</h3>
        </>
        :
        <main className={styles.container}>    
        <h2>Compatibility Reports</h2>
        <Link to='/addFriend'>
          <button className={styles.button}>Add Friend</button>
        </Link>    
        
        <div className={styles.friendListTitle}>
          <p className={styles.friendListTitleParagraph}>Friends</p>
        </div>

        {props.friends.length ?
          <ul className={styles.list}>
            {props.friends.map((friend, index) => 
              (friend.owner._id === props.user.profile) &&
                <li key={index} className={styles.listItem}>
                  <h5 className={styles.cardTitle}>{friend.name}</h5>
                  <FriendCard
                    key={friend._id} 
                    friend={friend} 
                    handleDeleteFriend={props.handleDeleteFriend}
                    user={props.user}
                  />
                </li>
              )
            }   
          </ul>
        :
          <p>You have no friends yet.</p> 
        }
      </main>
      }
    </div>
  )
}

export default Compat;