import { Link } from 'react-router-dom'
import styles from './FriendCard.module.css'


function FriendCard({friend, handleDeleteFriend, user}) {
  return (
    <div className={styles.card}>
      <div className="card-body">
        <Link
          to='/showCompat' 
          state={{friend}}
          className={styles.compatLink}
        >
          <h2 className="card-text">{friend.name} (see compatibility)</h2>
          
        </Link>
        <ul>
          <li><p className="card-text">Birth Year: {friend.birthYear}</p></li>
          <li><p className="card-text">Zodiac: {friend.zodiac}</p></li>
        </ul>
      </div>
      <div className={styles.cardFooter}>
        <Link
          to='/edit'
          state={{friend}}
        >
          <button className={styles.editButton}>
            Edit
          </button>
        </Link>
        <button
          className={styles.deleteButton}
          onClick={()=> handleDeleteFriend(friend._id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
  
}

export default FriendCard

// return(

// )

{/* <>
<Box
display="flex" 
justifyContent="center" 
alignItems="center"
sx={{ width: "80%" }}
>
  <Paper sx={{ width: '80%' }}>
    <List>
      <ListItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
          <Link
            to='/showCompat' 
            state={{friend}}
          >
            <ListItemText className='friend-name' primary="Name" secondary={friend.name}/>
          </Link>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <CakeIcon />
        </ListItemIcon>
        <ListItemText primary="Birth Year" secondary={friend.birthYear}/>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemIcon>
          <PetsIcon />
        </ListItemIcon>
        <ListItemText primary="Zodiac" secondary={friend.zodiac} />
      </ListItem>
      <Divider />
    </List>
  </Paper>
</Box>
    <div className='button-area'>
      <Link 
        className='edit-link'
        to='/edit'
        state={{friend}}
      >
        <button className='edit-button' >
          Edit
        </button>
      </Link>
        <button className='delete-button' onClick={()=> handleDeleteFriend(friend._id)}>
          Delete
        </button>
    </div>
</> */}