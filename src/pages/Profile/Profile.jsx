
import { Link } from 'react-router-dom';
import FriendCard from '../../components/FriendCard/FriendCard';

const Profile = (props) => {
  return (
      <div className='main'>
        <h3>{props.user.name}'s Profile</h3>
        <div className='friend-list'>
          {props.friends.length ?
              <ul>
                  {props.friends.map(friend => (
                    <li>
                    <FriendCard
                      key={friend._id} 
                      friend={friend} 
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

export default Profile;