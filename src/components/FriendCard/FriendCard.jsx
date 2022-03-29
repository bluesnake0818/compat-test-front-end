import { Link } from 'react-router-dom'
import './FriendCard.css'
import ShowCompat from '../../pages/ShowCompat/ShowCompat'
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


function FriendCard({friend, handleDeleteFriend, user}) {
  return ( 
    <Box
    display="flex" 
    justifyContent="center" 
    alignItems="center"
    sx={{ width: "100%" }}
    >
      <Paper sx={{ width: '100%' }}>
        <List>
          <ListItem>
            <ListItemIcon>
              <PersonIcon />
            </ListItemIcon>
              <Link
                to='/showCompat' 
                state={{friend}}
              >
                <ListItemText primary={friend.name} secondary="Name"/>
              </Link>
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <CakeIcon />
            </ListItemIcon>
            <ListItemText primary={friend.birthYear} secondary="Birth Year" />
          </ListItem>
          <Divider />
          <ListItem>
            <ListItemIcon>
              <PetsIcon />
            </ListItemIcon>
            <ListItemText primary={friend.zodiac} secondary="Zodiac" />
          </ListItem>
        </List>
      </Paper>
    </Box>
  );

}

export default FriendCard

// return(
//   <div className="card">
//     <div className="card-body">
//       <Link
//         to='/showCompat' 
//         state={{friend}}
//       >
//         <h2 className="card-text">{friend.name} {friend.birthYear} {friend.zodiac}</h2>
//       </Link>
//     </div>
//     <div className="card-footer">
//       <Link
//         to='/edit'
//         state={{friend}}
//       >
//         <button className='btn btn-sm btn-warning'>
//           Edit
//         </button>
//       </Link>
//       <button
//         className="btn btn-sm btn-danger m-left"
//         onClick={()=> handleDeleteFriend(friend._id)}
//       >
//         Delete
//       </button>
//     </div>
//   </div>
// )

