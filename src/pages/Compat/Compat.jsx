import './Compat.css'
import { Link } from 'react-router-dom';
import FriendCard from '../../components/FriendCard/FriendCard';
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import ListItem from '@mui/material/ListItem'
import List from '@mui/material/List'
import Divider from '@mui/material/Divider'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import PersonIcon from '@mui/icons-material/Person'
import CakeIcon from '@mui/icons-material/Cake'
import PetsIcon from '@mui/icons-material/Pets'
import { Button } from '@mui/material'
import ListItemButton from '@mui/material/ListItemButton';

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

{/* <div className='main'>
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
</div> */}