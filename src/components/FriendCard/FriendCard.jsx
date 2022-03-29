import { Link } from 'react-router-dom'
import './FriendCard.css'



function FriendCard({friend, handleDeleteFriend, user}) {
  return(
    <div className="card">
      <div className="card-body">
        <Link
          to='/showCompat'
          state={{friend}}
        >
          <h2 className="card-text">{friend.name} {friend.birthYear} {friend.zodiac}</h2>
        </Link>
      </div>
      <div className="card-footer">
        <Link
          to='/edit'
          state={{friend}}
        >
          <button className='btn btn-sm btn-warning'>
            Edit
          </button>
        </Link>
        <button
          className="btn btn-sm btn-danger m-left"
          onClick={()=> handleDeleteFriend(friend._id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default FriendCard