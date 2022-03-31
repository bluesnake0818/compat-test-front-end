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
        <Link to='/addFriend'>
          <button className={styles.button}>Add Friend</button>
        </Link>    
        {props.friends.length ?
            <ul className={styles.list}>
                {props.friends.map((friend, index) => 
                  <li key={index} className={styles.listItem}>
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
    //   }
    // </>
  )
}

export default Compat;