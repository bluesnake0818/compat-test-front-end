import './Compat.css'
import { Link } from 'react-router-dom';
import FriendCard from '../../components/FriendCard/FriendCard';

const Compat = (props) => {
  return (
      <div className='main'>
        <h3>Compatibility Tests</h3>
        <Link to='/AddFriend'>
          <button className='button'>Add Friend</button>
        </Link>    
        // friends.length and do ternary
        // <p>You have no friends yet.</p> 
        {props.friends.map(friend => (
          <FriendCard
            key={friend._id} 
            friend={friend} 
            handleDeleteFriend={props.handleDeleteFriend}
            user={props.user}
          />
        ))}
      </div>
  )
}

export default Compat;