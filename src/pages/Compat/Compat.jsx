import './Compat.css'
import { Link } from 'react-router-dom';
import FriendCard from '../../components/FriendCard/FriendCard';

const Compat = (props) => {
  return (
      <div className='main'>
        <h3>{props.user.name}'s compatibility test zone</h3>
        <Link to='/AddFriend'>
          <button className='button'>Add Friend</button>
        </Link>    
        <div className='friend-list'>
          {props.friends.length ?
              <ul>
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
      </div>
  )
}

export default Compat;