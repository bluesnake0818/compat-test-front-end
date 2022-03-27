import { Link } from 'react-router-dom'
import './FriendCard.css'

function FriendCard({friend, user}) {
  return(
    <div className="card">
      <div className="card-body">
        <h2 className="card-text">{friend.name}</h2>
      </div>
    </div>
  )
}

export default FriendCard