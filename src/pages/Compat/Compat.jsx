import './Compat.css'
import { Link } from 'react-router-dom';

function Compat() {
  return (
    <div className='compat'>
      <h3>Compatibility Tests</h3>
      <Link to='/AddFriend'><button className='button'>Add Friend</button></Link>    
      <p>You have no friends yet.</p>
    </div>
  )
}

export default Compat;