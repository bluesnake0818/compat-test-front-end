import styles from './Compat.module.css'
import { Link } from 'react-router-dom';
import FriendCard from '../../components/FriendCard/FriendCard';

const Compat = (props) => {
  return (
    // <>
    //   { props.friends.name ?
    //     <>
    //       <p>Loading...</p>
    //     </>
    //               :
      <main className={styles.container}>    
          <h3>{props.user.name}'s compatibility test zone</h3>
          <Link to='/AddFriend'>
            <button className={styles.button}>Add Friend</button>
          </Link>    
          <div className={styles.friendList}>
            {props.friends.length ?
                <ul className={styles.friendList}>
                    {props.friends.map(friend => (
                      <li>
                      <FriendCard
                        key={friend._id} 
                        friend={friend} 
                        handleDeleteFriend={props.handleDeleteFriend}
                        user={props.user}
                      />
                      </li>
                    ))}   
                </ul>
            :
            <p>You have no friends yet.</p> 
          }
          </div>
      </main>
    //   }
    // </>
  )
}

export default Compat;